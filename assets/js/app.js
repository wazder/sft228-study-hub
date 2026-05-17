/* ============================================================
   SFT228 Study Hub — single-page app.
   Hash router, lesson renderer, quiz engine (practice + exam),
   glossary search, progress tracking (localStorage), theme.
   Runs fully offline from file:// — no fetch, no build step.
   ============================================================ */
(function () {
  "use strict";

  const C = window.SFT_CONTENT;
  const QA = window.SFT_QA;
  const app = document.getElementById("app");

  /* ---------- storage helpers ---------- */
  const LS = {
    get(k, d) { try { return JSON.parse(localStorage.getItem("sft228_" + k)) ?? d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem("sft228_" + k, JSON.stringify(v)); } catch (e) {} }
  };
  const progress = {
    done: LS.get("done", {}),          // { w1:true }
    scores: LS.get("scores", {}),      // { practice-w1: {best,total} }
    save() { LS.set("done", this.done); LS.set("scores", this.scores); }
  };

  /* ---------- utils ---------- */
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const $$ = sel => Array.prototype.slice.call(document.querySelectorAll(sel));
  function toast(msg) {
    const t = document.getElementById("toast");
    t.textContent = msg; t.classList.add("show");
    clearTimeout(t._t); t._t = setTimeout(() => t.classList.remove("show"), 2600);
  }
  function ytLink(query) {
    return "https://www.youtube.com/results?search_query=" + encodeURIComponent("SFT228 " + query).replace(/SFT228%20/, "");
  }
  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

  /* ---------- inline SVG icon set (no emoji) ---------- */
  const SVG = {
    book:  '<path d="M4 5a2 2 0 0 1 2-2h9v16H6a2 2 0 0 0-2 2zM15 3h3a1 1 0 0 1 1 1v15a2 2 0 0 0-2-2h-2z"/>',
    video: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M10 9l5 3-5 3z" fill="currentColor" stroke="none"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    pencil:'<path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
    doc:   '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/>',
    grid:  '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    play:  '<path d="M8 5v14l11-7z" fill="currentColor" stroke="none"/>',
    sun:   '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon:  '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
    search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    compass:'<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z" fill="currentColor" stroke="none"/>',
    folder:'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>'
  };
  function icon(name, size) {
    return '<svg viewBox="0 0 24 24" width="' + (size || 22) + '" height="' + (size || 22) +
      '" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      (SVG[name] || "") + '</svg>';
  }

  /* ---------- theme ---------- */
  (function initTheme() {
    const saved = LS.get("theme", null);
    if (saved) document.documentElement.setAttribute("data-theme", saved);
    const btn = document.getElementById("themeBtn");
    const sync = () => btn.innerHTML = icon(document.documentElement.getAttribute("data-theme") === "dark" ? "sun" : "moon", 18);
    sync();
    btn.addEventListener("click", () => {
      const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      LS.set("theme", next); sync();
    });
  })();

  /* ---------- mobile nav ---------- */
  document.getElementById("navToggle").addEventListener("click", function () {
    const open = document.getElementById("navLinks").classList.toggle("open");
    this.setAttribute("aria-expanded", open ? "true" : "false");
    this.classList.toggle("is-open", open);
  });

  /* ---------- progress stats ---------- */
  function doneCount() { return C.weeks.filter(w => progress.done[w.id]).length; }
  function totalMCQ() { return QA.mcq.length; }

  /* ===================================================================
     PAGE RENDERERS
     =================================================================== */

  function pageHome() {
    const dc = doneCount();
    const pct = Math.round((dc / C.weeks.length) * 100);
    const feats = [
      ["book", "14-Week Curriculum", "Every topic from the official slides rewritten as clear, exam-ready notes with diagrams, the Walden case &amp; key terms.", "#/curriculum"],
      ["video", "Video Lessons", "Curated video explanations for each week — UML, use cases, patterns, architecture and more.", "#/videos"],
      ["check", "Test Bank", `${totalMCQ()} multiple-choice questions with explanations. Filter by week or run a random set.`, "#/practice"],
      ["pencil", "Open-Ended", `${QA.open.length} written questions with full model answers — exactly the style of the make-up exam.`, "#/open-ended"],
      ["doc", "Mock Exams", "A timed-style mock midterm and a comprehensive mock final with auto-scoring &amp; review.", "#/exams"],
      ["grid", "Glossary &amp; Cheat Sheet", "Searchable glossary of every definition plus a one-page final cheat sheet.", "#/glossary"]
    ];
    return `
    <section class="hero"><div class="wrap">
      <span class="eyebrow">SFT228 · ${esc(C.course.title)}</span>
      <h1>Everything you need to ace the make-up midterm &amp; final.</h1>
      <p class="lead">A complete, self-contained study hub built from the official lecture slides
      (${esc("Ashrafi & Ashrafi, Gomaa, Kendall, GoF")}). Notes, videos, hundreds of questions and
      full mock exams — start from zero and finish exam-ready.</p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="#/curriculum">Start studying →</a>
        <a class="btn btn-ghost" href="#/exams">Try a mock exam</a>
      </div>
      <div class="stat-row">
        <div class="stat"><div class="n">14</div><div class="l">Weeks of notes</div></div>
        <div class="stat"><div class="n">${totalMCQ()}</div><div class="l">Test questions</div></div>
        <div class="stat"><div class="n">${QA.open.length}</div><div class="l">Open-ended + answers</div></div>
        <div class="stat"><div class="n">2</div><div class="l">Full mock exams</div></div>
      </div>
    </div></section>

    <section class="section"><div class="wrap">
      <div class="card" style="display:flex;align-items:center;gap:26px;flex-wrap:wrap">
        <div style="flex:1;min-width:240px">
          <div class="kicker">Your progress</div>
          <h3 style="margin:6px 0">${dc} / ${C.weeks.length} weeks completed</h3>
          <p class="muted" style="margin:0">Mark a week complete after you finish its notes &amp; quiz. Progress is saved in this browser.</p>
        </div>
        <div class="score-ring" style="--pct:${pct}%"><span class="val">${pct}%</span></div>
      </div>
    </div></section>

    <section class="section" style="padding-top:0"><div class="wrap">
      <div class="section-head">
        <span class="eyebrow">What's inside</span>
        <h2>Six ways to learn the same material</h2>
        <p>Read it, watch it, test it, write it. Use whichever sticks — the content is identical underneath.</p>
      </div>
      <div class="grid grid-3">
        ${feats.map(f => `<a class="card link-card" href="${f[3]}">
          <div class="feature-ico">${icon(f[0], 24)}</div>
          <h3>${f[1]}</h3><p class="muted">${f[2]}</p></a>`).join("")}
      </div>
    </div></section>

    <section class="section" style="padding-top:0"><div class="wrap">
      <div class="section-head"><span class="eyebrow">Curriculum</span><h2>The 14-week roadmap</h2>
      <p>Click any week to open full notes, videos and a quick quiz.</p></div>
      ${weekGrid()}
    </div></section>`;
  }

  function weekGrid() {
    return `<div class="week-grid">${C.weeks.map(w => `
      <a class="week-card" href="#/week/${w.id}">
        <div class="week-num">${w.num}</div>
        <div style="flex:1">
          <div class="meta">${esc(w.chapter)}</div>
          <h3>${progress.done[w.id] ? '<span class="done-dot" title="completed"></span>' : ""}${esc(w.title)}</h3>
          <p>${esc(w.summary).slice(0, 120)}…</p>
        </div>
        <div class="chev">›</div>
      </a>`).join("")}</div>`;
  }

  function pageCurriculum() {
    return `<section class="section"><div class="wrap">
      <div class="crumbs"><a href="#/">Home</a> › Curriculum</div>
      <div class="section-head"><span class="eyebrow">SFT228</span>
      <h2>Full 14-week curriculum</h2>
      <p>${esc(C.course.title)} — ${esc(C.course.school)}. Grading: ${esc(C.course.grading)}.</p></div>
      ${weekGrid()}
      <div class="card" style="margin-top:30px">
        <div class="kicker">Reference books</div>
        <ul style="margin:10px 0 0 20px;color:var(--ink-2)">
          ${C.course.books.map(b => `<li>${esc(b)}</li>`).join("")}
        </ul>
      </div>
    </div></section>`;
  }

  function pageWeek(id) {
    const i = C.weeks.findIndex(w => w.id === id);
    if (i < 0) return notFound();
    const w = C.weeks[i];
    const prev = C.weeks[i - 1], next = C.weeks[i + 1];
    const wq = QA.mcq.filter(q => q.w === w.num);

    const toc = w.sections.map(s => `<a href="#${s.id}" data-toc="${s.id}">${esc(s.h)}</a>`).join("") +
      `<a href="#wk-terms" data-toc="wk-terms">Key terms</a>
       <a href="#wk-videos" data-toc="wk-videos">Video lessons</a>
       <a href="#wk-quiz" data-toc="wk-quiz">Quick quiz</a>`;

    const body = w.sections.map(s =>
      `<h2 id="${s.id}">${esc(s.h)}</h2>${s.b}`).join("");

    const terms = `<h2 id="wk-terms">Key terms</h2>
      <div class="grid grid-2" style="margin-top:14px">
      ${w.terms.map(t => `<div class="def-box" style="margin:0">
        <span class="term">${esc(t[0])}</span><br/><span style="color:var(--ink-2)">${esc(t[1])}</span></div>`).join("")}
      </div>`;

    const tips = `<div class="callout exam"><div class="ttl">Exam focus for Week ${w.num}</div>
      <ul>${w.tips.map(t => `<li>${t}</li>`).join("")}</ul></div>`;

    const vids = `<h2 id="wk-videos">Video lessons</h2>
      <div class="video-grid" style="margin-top:14px">
      ${w.videos.map(v => `<a class="video-card" href="${ytLink(v[2])}" target="_blank" rel="noopener">
        <div class="video-thumb"><span class="src">YouTube</span><div class="play">${icon("play", 22)}</div></div>
        <div class="vbody"><h4>${esc(v[0])}</h4><p>${esc(v[1])}</p></div></a>`).join("")}
      </div>
      <p class="muted" style="font-size:.85rem;margin-top:10px">Links open a curated YouTube search in a new tab so they never break.</p>`;

    const quiz = `<h2 id="wk-quiz">Quick quiz — Week ${w.num}</h2>
      <p>${wq.length} questions on this week's material.</p>
      <div id="weekQuizMount">
        <button class="btn btn-primary" id="startWeekQuiz">Start the Week ${w.num} quiz →</button>
      </div>`;

    setTimeout(() => {
      const mk = document.getElementById("markBtn");
      if (mk) {
        mk.addEventListener("click", () => {
          progress.done[w.id] = !progress.done[w.id]; progress.save();
          toast(progress.done[w.id] ? `Week ${w.num} marked complete` : `Week ${w.num} unmarked`);
          render();
        });
      }
      const sb = document.getElementById("startWeekQuiz");
      if (sb) sb.addEventListener("click", () =>
        runQuiz(document.getElementById("weekQuizMount"), wq, { mode: "practice", key: "week-" + w.id, label: "Week " + w.num + " quiz" }));
      bindTOC();
    }, 0);

    return `<section class="section"><div class="wrap">
      <div class="crumbs"><a href="#/">Home</a> › <a href="#/curriculum">Curriculum</a> › Week ${w.num}</div>
      <div class="lesson-head">
        <span class="eyebrow">Week ${w.num} · ${esc(w.chapter)}</span>
        <h1>${esc(w.title)}</h1>
        <p class="lead muted">${esc(w.summary)}</p>
        <div style="margin-top:16px">${w.tags.map(t => `<span class="tag">${esc(t)}</span>`).join("")}
        <button class="btn ${progress.done[w.id] ? "btn-ghost" : "btn-primary"} btn-sm" id="markBtn" style="margin-left:8px">
          ${progress.done[w.id] ? "Completed — tap to undo" : "Mark week complete"}</button></div>
      </div>
      <div class="lesson">
        <aside class="toc"><div class="toc-title">On this page</div>${toc}</aside>
        <div class="prose">
          ${body}
          ${tips}
          ${terms}
          ${vids}
          ${quiz}
          <div class="pager">
            ${prev ? `<a href="#/week/${prev.id}"><div class="dir">← Previous</div><div class="ttl">${esc(prev.title)}</div></a>` : `<span style="flex:1"></span>`}
            ${next ? `<a class="next" href="#/week/${next.id}"><div class="dir">Next →</div><div class="ttl">${esc(next.title)}</div></a>` : `<a class="next" href="#/exams"><div class="dir">Next →</div><div class="ttl">Try the mock exams</div></a>`}
          </div>
        </div>
      </div>
    </div></section>`;
  }

  function pageVideos() {
    return `<section class="section"><div class="wrap">
      <div class="crumbs"><a href="#/">Home</a> › Videos</div>
      <div class="section-head"><span class="eyebrow">Watch &amp; learn</span>
      <h2>Video lessons by week</h2>
      <p>Curated explanations for every topic. Each card opens a focused YouTube search in a new tab.</p></div>
      ${C.weeks.map(w => `
        <h3 style="margin:30px 0 14px">Week ${w.num} — ${esc(w.title)}</h3>
        <div class="video-grid">
        ${w.videos.map(v => `<a class="video-card" href="${ytLink(v[2])}" target="_blank" rel="noopener">
          <div class="video-thumb"><span class="src">YouTube</span><div class="play">${icon("play", 22)}</div></div>
          <div class="vbody"><h4>${esc(v[0])}</h4><p>${esc(v[1])}</p></div></a>`).join("")}
        </div>`).join("")}
    </div></section>`;
  }

  function pagePractice() {
    setTimeout(() => {
      const mount = document.getElementById("practiceMount");
      let week = "all";
      const draw = () => {
        const pool = week === "all" ? QA.mcq : QA.mcq.filter(q => q.w === +week);
        mount.innerHTML = `<button class="btn btn-primary" id="goP">Start ${pool.length} questions →</button>`;
        document.getElementById("goP").addEventListener("click", () =>
          runQuiz(mount, shuffle(pool), { mode: "practice", key: "practice-" + week, label: "Test bank (" + (week === "all" ? "all weeks" : "week " + week) + ")" }));
      };
      $$("#weekChips .chip").forEach(ch => ch.addEventListener("click", () => {
        $$("#weekChips .chip").forEach(c => c.classList.remove("active"));
        ch.classList.add("active"); week = ch.dataset.w; draw();
      }));
      draw();
    }, 0);
    const chips = `<div class="filter-row" id="weekChips">
      <button class="chip active" data-w="all">All weeks</button>
      ${C.weeks.map(w => `<button class="chip" data-w="${w.num}">W${w.num}</button>`).join("")}
    </div>`;
    return `<section class="section"><div class="wrap">
      <div class="crumbs"><a href="#/">Home</a> › Test Bank</div>
      <div class="section-head"><span class="eyebrow">Multiple choice</span>
      <h2>Test question bank</h2>
      <p>${totalMCQ()} questions with explanations. Immediate feedback after each answer. Pick a week or test everything.</p></div>
      ${chips}
      <div id="practiceMount" class="quiz-shell"></div>
    </div></section>`;
  }

  function pageOpen() {
    setTimeout(() => {
      let week = "all";
      const list = document.getElementById("openList");
      const draw = () => {
        const pool = week === "all" ? QA.open : QA.open.filter(q => q.w === +week);
        list.innerHTML = pool.map((q, idx) => `
          <div class="acc-item">
            <button class="acc-q"><span class="qnum">Q${idx + 1}</span>
              <span>${esc(q.q)} <span class="badge b-accent" style="margin-left:8px">W${q.w}</span></span>
              <span class="caret">▾</span></button>
            <div class="acc-a"><div class="acc-a-inner"><b style="color:var(--accent-ink)">Model answer</b>${q.a}</div></div>
          </div>`).join("");
        $$("#openList .acc-q").forEach(b => b.addEventListener("click", () =>
          b.parentElement.classList.toggle("open")));
      };
      $$("#openChips .chip").forEach(ch => ch.addEventListener("click", () => {
        $$("#openChips .chip").forEach(c => c.classList.remove("active"));
        ch.classList.add("active"); week = ch.dataset.w; draw();
      }));
      draw();
    }, 0);
    return `<section class="section"><div class="wrap">
      <div class="crumbs"><a href="#/">Home</a> › Open-Ended</div>
      <div class="section-head"><span class="eyebrow">Written answers</span>
      <h2>Open-ended questions &amp; model answers</h2>
      <p>Try to answer first, then expand the model answer. This is the exact style of the make-up exam's written part.</p></div>
      <div class="filter-row" id="openChips">
        <button class="chip active" data-w="all">All weeks</button>
        ${C.weeks.map(w => `<button class="chip" data-w="${w.num}">W${w.num}</button>`).join("")}
      </div>
      <div id="openList"></div>
    </div></section>`;
  }

  function pageExams() {
    return `<section class="section"><div class="wrap">
      <div class="crumbs"><a href="#/">Home</a> › Mock Exams</div>
      <div class="section-head"><span class="eyebrow">Exam simulation</span>
      <h2>Mock midterm &amp; final</h2>
      <p>Auto-scored multiple-choice plus written questions you self-check against model answers.</p></div>
      <div class="grid grid-2">
        <div class="card link-card" onclick="location.hash='#/exam/midterm'">
          <span class="badge b-teal">Midterm</span>
          <h3 style="margin-top:10px">${esc(QA.exams.midterm.title)}</h3>
          <p class="muted">${esc(QA.exams.midterm.scope)}</p>
          <p class="muted" style="font-size:.88rem">${QA.exams.midterm.mcq.length} MCQ · ${QA.exams.midterm.open.length} written · ~${QA.exams.midterm.duration} min</p>
          <a class="btn btn-primary btn-sm" href="#/exam/midterm" style="margin-top:10px">Start midterm →</a>
        </div>
        <div class="card link-card" onclick="location.hash='#/exam/final'">
          <span class="badge b-amber">Final</span>
          <h3 style="margin-top:10px">${esc(QA.exams.final.title)}</h3>
          <p class="muted">${esc(QA.exams.final.scope)}</p>
          <p class="muted" style="font-size:.88rem">${QA.exams.final.mcq.length} MCQ · ${QA.exams.final.open.length} written · ~${QA.exams.final.duration} min</p>
          <a class="btn btn-primary btn-sm" href="#/exam/final" style="margin-top:10px">Start final →</a>
        </div>
      </div>
      <div class="callout tip" style="margin-top:24px"><div class="ttl">How scoring works</div>
      <p>The multiple-choice part is graded automatically. The written part shows model answers at the end so you can mark yourself honestly — that mirrors how the real make-up exam mixes test &amp; open-ended questions.</p></div>
    </div></section>`;
  }

  function pageExam(which) {
    const ex = QA.exams[which];
    if (!ex) return notFound();
    setTimeout(() => {
      runQuiz(document.getElementById("examMount"), ex.mcq, {
        mode: "exam", key: "exam-" + which, label: ex.title, openSet: ex.open
      });
    }, 0);
    return `<section class="section"><div class="wrap">
      <div class="crumbs"><a href="#/">Home</a> › <a href="#/exams">Mock Exams</a> › ${esc(ex.title)}</div>
      <div class="section-head"><span class="eyebrow">${esc(ex.scope)}</span>
      <h2>${esc(ex.title)}</h2>
      <p>${ex.mcq.length} multiple-choice (auto-scored) + ${ex.open.length} written (self-checked). No feedback until you submit.</p></div>
      <div id="examMount" class="quiz-shell"></div>
    </div></section>`;
  }

  function pageGlossary() {
    const terms = [];
    C.weeks.forEach(w => w.terms.forEach(t => terms.push({ t: t[0], d: t[1], w: w.num })));
    terms.sort((a, b) => a.t.localeCompare(b.t));
    setTimeout(() => {
      const inp = document.getElementById("gsearch");
      const listEl = document.getElementById("glist");
      const draw = (q) => {
        q = (q || "").toLowerCase();
        const f = terms.filter(x => !q || x.t.toLowerCase().includes(q) || x.d.toLowerCase().includes(q));
        listEl.innerHTML = f.length ? f.map(x => `
          <div class="gloss-item"><div class="term">${esc(x.t)}<span class="wk">Week ${x.w}</span></div>
          <div class="def">${esc(x.d)}</div></div>`).join("")
          : `<div class="empty"><div class="ico">${icon("search", 44)}</div>No term matches “${esc(q)}”.</div>`;
      };
      inp.addEventListener("input", () => draw(inp.value));
      draw("");
    }, 0);
    return `<section class="section"><div class="wrap">
      <div class="crumbs"><a href="#/">Home</a> › Glossary</div>
      <div class="section-head"><span class="eyebrow">${terms.length} terms</span>
      <h2>Glossary</h2><p>Every definition from all 14 weeks, alphabetised and searchable.</p></div>
      <input class="glossary-search" id="gsearch" placeholder="Search a term or definition…" />
      <div id="glist"></div>
    </div></section>`;
  }

  function pageCheat() {
    const blocks = [
      ["Analysis vs Design", "Analysis = understand the <b>problem space</b>. Design = build in the <b>solution space</b> (what → how)."],
      ["9 Quality attributes", "Correctness · Reliability · Availability · Security · Robustness · Efficiency · Flexibility · Maintainability · Testability."],
      ["Waterfall limits", "Inflexibility · over-documentation · detachment from technology / marketplace / profession."],
      ["CMM levels", "Initial → Repeatable → Defined → Managed → Optimizing."],
      ["XP practice groups", "Planning (user stories, release plan, pair programming) · Designing (CRC, spike, refactor) · Coding · Testing."],
      ["OO core", "Identity (unique+unchanging) · State · Encapsulation · Information hiding · Inheritance · Polymorphism."],
      ["UML 3/4/3", "Views: Owner/Architect/Builder · Properties: Visualization/Specification/Construction/Documentation · Modeling: Behavioral/Structural/Dynamic."],
      ["Use case = 4", "Goal · Stakeholders · System · Scenario. Diagram: stick=actor, rectangle=boundary, ellipse=UC, line=association."],
      ["Include vs Extend", "Include = mandatory reuse of an independent UC. Extend = optional/conditional add to a base UC."],
      ["Noun→Class / Verb→Method", "From use-case text: nouns → candidate classes; verbs → methods."],
      ["Visibility", "+ public · − private · # protected · ~ package."],
      ["Multiplicity", "1 · 0..1 · 1..* · 0..* · ranges (20..40) · non-continuous (2,4,6,8)."],
      ["4 dynamic diagrams", "Sequence (time) · Collaboration (organization) · Statechart (state) · Activity (flow)."],
      ["Web model", "Stateless — recreate state on every request. Constructor = minimum data to start existing."],
      ["HCI", "Fit = Human+Computer+Task. TAM = perceived usefulness + perceived ease of use."],
      ["ORM", "Class→table · object→row · attribute→column · identity→PK · association→FK."],
      ["DFD", "External entity · Process · Data store · Data flow. Level 0 = context diagram."],
      ["Pattern = 4", "Name · Problem · Solution · Consequences. Purpose: Creational/Structural/Behavioral × Class/Object."],
      ["Key patterns", "Observer (1→many notify) · Strategy (swap algorithms) · Adapter (convert interface) · Facade (simple front) · Composite (tree) · Command (request as object)."],
      ["Component", "Reusable+replaceable unit; app-independent services; provided vs required interface."],
      ["Architecture patterns", "Layered (P/B/A/Data) · Client-Server · Event-Driven · Microkernel · Microservices · Pipe-Filter · Broker · P2P."],
      ["Arch vs Design pattern", "Arch = whole system (broad). Design = within components (narrow)."],
      ["Client-Server / SOA / µservices", "3-tier ≈ layered · SOA = contracts + ESB · microservices = fine-grained, independently deployable SOA."]
    ];
    return `<section class="section"><div class="wrap">
      <div class="crumbs"><a href="#/">Home</a> › Cheat Sheet</div>
      <div class="section-head"><span class="eyebrow">Night-before revision</span>
      <h2>One-page exam cheat sheet</h2><p>The highest-yield facts, condensed. If you only have an hour, read this.</p></div>
      <div class="grid grid-2">
        ${blocks.map(b => `<div class="card"><div class="kicker">${b[0]}</div>
          <p style="margin:8px 0 0;color:var(--ink-2)">${b[1]}</p></div>`).join("")}
      </div>
      <div class="callout exam" style="margin-top:26px"><div class="ttl">Most likely exam questions</div>
      <ul>
        <li>Define &amp; contrast: aggregation vs composition · abstraction vs encapsulation · include vs extend · operation vs method.</li>
        <li>List: 9 quality attributes · 5 CMM levels · 4 use-case components · 5 “use cases are NOT”.</li>
        <li>Draw/explain: a use-case diagram · a small class diagram with multiplicities · a sequence diagram from a scenario · a level-0 DFD.</li>
        <li>Compare: Waterfall vs prototyping · client-server vs SOA vs microservices · architecture vs design pattern.</li>
        <li>Apply: extract classes/methods from a use-case paragraph (noun/verb analysis).</li>
      </ul></div>
    </div></section>`;
  }

  function notFound() {
    return `<section class="section"><div class="wrap"><div class="empty">
      <div class="ico">${icon("compass", 44)}</div><h2>Page not found</h2>
      <p>That route doesn't exist. <a href="#/">Go back home →</a></p></div></div></section>`;
  }

  /* ===================================================================
     QUIZ ENGINE  (modes: 'practice' = instant feedback, 'exam' = submit)
     =================================================================== */
  function runQuiz(mount, questions, opts) {
    opts = opts || {};
    const mode = opts.mode || "practice";
    const qs = questions.slice();
    if (!qs.length) { mount.innerHTML = `<div class="empty"><div class="ico">${icon("folder", 44)}</div>No questions here yet.</div>`; return; }
    let idx = 0;
    const answers = new Array(qs.length).fill(null);

    function render() {
      const q = qs[idx];
      const pct = Math.round((idx) / qs.length * 100);
      const answered = answers[idx] !== null;
      const reveal = mode === "practice" && answered;
      mount.innerHTML = `
        <div class="quiz-bar">
          <strong>${esc(opts.label || "Quiz")}</strong>
          <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
          <span class="muted" style="font-size:.88rem;white-space:nowrap">Q ${idx + 1} / ${qs.length}</span>
        </div>
        <div class="quiz-card">
          <div class="q-meta">
            <span class="badge b-accent">Week ${q.w}</span>
            ${mode === "exam" ? `<span class="muted" style="font-size:.85rem">No feedback until submit</span>` : ""}
          </div>
          <div class="q-text">${esc(q.q)}</div>
          <div id="opts">
            ${q.o.map((opt, k) => {
              let cls = "opt";
              if (answers[idx] === k) cls += " sel";
              if (reveal) {
                if (k === q.a) cls += " correct";
                else if (answers[idx] === k) cls += " wrong";
                cls += " disabled";
              }
              return `<div class="${cls}" data-k="${k}">
                <span class="key">${String.fromCharCode(65 + k)}</span><span>${esc(opt)}</span></div>`;
            }).join("")}
          </div>
          ${reveal ? `<div class="explain ${answers[idx] === q.a ? "ex-ok" : "ex-no"}"><b>${answers[idx] === q.a ? "Correct." : "Incorrect."}</b> ${esc(q.e)}</div>` : ""}
          <div class="quiz-nav">
            <button class="btn btn-ghost btn-sm" id="prevB" ${idx === 0 ? "disabled style='opacity:.4'" : ""}>← Previous</button>
            ${idx < qs.length - 1
              ? `<button class="btn btn-primary btn-sm" id="nextB">Next →</button>`
              : `<button class="btn btn-primary btn-sm" id="submitB">${mode === "exam" ? "Submit exam" : "See results"}</button>`}
          </div>
        </div>`;
      $$("#opts .opt").forEach(el => el.addEventListener("click", () => {
        if (mode === "practice" && answers[idx] !== null) return; // lock after answer in practice
        answers[idx] = +el.dataset.k;
        render(); // re-render: practice reveals the answer, exam just highlights the choice
      }));
      const pv = document.getElementById("prevB"); if (pv) pv.addEventListener("click", () => { if (idx > 0) { idx--; render(); } });
      const nx = document.getElementById("nextB"); if (nx) nx.addEventListener("click", () => { idx++; render(); });
      const sb = document.getElementById("submitB"); if (sb) sb.addEventListener("click", finish);
      mount.scrollIntoView({ block: "nearest" });
    }

    function finish() {
      let correct = 0;
      qs.forEach((q, i) => { if (answers[i] === q.a) correct++; });
      const pct = Math.round(correct / qs.length * 100);
      // store best score
      if (opts.key) {
        const prev = progress.scores[opts.key];
        if (!prev || pct > prev.pct) progress.scores[opts.key] = { pct, correct, total: qs.length, at: Date.now() };
        progress.save();
      }
      const verdict = pct >= 85 ? ["Excellent — exam ready!", "b-green"]
        : pct >= 70 ? ["Good — a quick review and you're set.", "b-teal"]
        : pct >= 50 ? ["Getting there — revisit the weak weeks.", "b-amber"]
        : ["Re-read the notes, then retry.", "b-red"];

      const review = qs.map((q, i) => {
        const ok = answers[i] === q.a;
        const yourTxt = answers[i] === null ? "<i>blank</i>" : esc(q.o[answers[i]]);
        return `<div class="review-item">
          <div class="ri-q">${i + 1}. ${esc(q.q)} <span class="badge b-accent">W${q.w}</span></div>
          <div class="ri-line">Your answer: <span class="${ok ? "ok" : "no"}">${yourTxt}</span></div>
          ${ok ? "" : `<div class="ri-line">Correct: <span class="ok">${esc(q.o[q.a])}</span></div>`}
          <div class="ri-line muted" style="margin-top:6px">${esc(q.e)}</div>
        </div>`;
      }).join("");

      const openHTML = (opts.openSet && opts.openSet.length) ? `
        <h3 style="margin:38px 0 8px">Written part — self-check</h3>
        <p class="muted">Write your answer, then expand the model answer and mark yourself.</p>
        ${opts.openSet.map((q, i) => `
          <div class="acc-item">
            <button class="acc-q"><span class="qnum">W${i + 1}</span>
              <span>${esc(q.q)} <span class="badge b-accent" style="margin-left:8px">W${q.w}</span></span>
              <span class="caret">▾</span></button>
            <div class="acc-a"><div class="acc-a-inner"><b style="color:var(--accent-ink)">Model answer</b>${q.a}</div></div>
          </div>`).join("")}` : "";

      mount.innerHTML = `
        <div class="quiz-card center">
          <div class="score-ring" style="--pct:${pct}%"><span class="val">${pct}%</span></div>
          <h2>${correct} / ${qs.length} correct</h2>
          <p><span class="badge ${verdict[1]}" style="font-size:.85rem">${verdict[0]}</span></p>
          <div class="result-grid">
            <div class="b"><div class="n ok">${correct}</div><div class="l">Correct</div></div>
            <div class="b"><div class="n no">${qs.length - correct}</div><div class="l">Wrong / blank</div></div>
            <div class="b"><div class="n">${pct}%</div><div class="l">Score</div></div>
          </div>
          <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
            <button class="btn btn-primary btn-sm" id="retryB">Retry</button>
            <a class="btn btn-ghost btn-sm" href="#/curriculum">Back to curriculum</a>
          </div>
        </div>
        <h3 style="margin:38px 0 14px">Question review</h3>
        ${review}
        ${openHTML}`;
      document.getElementById("retryB").addEventListener("click", () =>
        runQuiz(mount, opts.shuffleOnRetry === false ? questions : shuffle(questions), opts));
      $$(".acc-q").forEach(b => b.addEventListener("click", () => b.parentElement.classList.toggle("open")));
      mount.scrollIntoView({ behavior: "smooth", block: "start" });
      if (opts.key) toast("Best score saved: " + pct + "%");
    }

    render();
  }

  /* ===================================================================
     TOC scroll-spy + hash jump
     =================================================================== */
  function bindTOC() {
    const links = $$(".toc a[data-toc]");
    if (!links.length) return;
    const map = {};
    links.forEach(l => { const el = document.getElementById(l.dataset.toc); if (el) map[l.dataset.toc] = { l, el }; });
    function spy() {
      let cur = null;
      Object.values(map).forEach(o => {
        const top = o.el.getBoundingClientRect().top;
        if (top < 140) cur = o;
      });
      links.forEach(l => l.classList.remove("active"));
      if (cur) cur.l.classList.add("active");
    }
    window.addEventListener("scroll", spy, { passive: true });
    spy();
  }

  /* ===================================================================
     ROUTER
     =================================================================== */
  function route() {
    const hash = location.hash;
    // In-page anchors (TOC, skip-link) — every real route starts with "#/".
    if (hash && hash !== "#" && !hash.startsWith("#/")) {
      const el = document.getElementById(hash.slice(1));
      if (el) { el.scrollIntoView({ behavior: "smooth", block: "start" }); return; }
    }
    const raw = hash.replace(/^#/, "") || "/";
    const parts = raw.split("/").filter(Boolean); // ["week","w1"]
    let html;
    const r = parts[0] || "";
    if (r === "" ) html = pageHome();
    else if (r === "curriculum") html = pageCurriculum();
    else if (r === "week") html = pageWeek(parts[1]);
    else if (r === "videos") html = pageVideos();
    else if (r === "practice") html = pagePractice();
    else if (r === "open-ended") html = pageOpen();
    else if (r === "exams") html = pageExams();
    else if (r === "exam") html = pageExam(parts[1]);
    else if (r === "glossary") html = pageGlossary();
    else if (r === "cheatsheet") html = pageCheat();
    else html = notFound();

    app.innerHTML = html;
    window.scrollTo(0, 0);

    // active nav state
    const navMap = { "": "#/", curriculum: "#/curriculum", week: "#/curriculum", videos: "#/videos",
      practice: "#/practice", "open-ended": "#/open-ended", exams: "#/exams", exam: "#/exams",
      glossary: "#/glossary", cheatsheet: "#/cheatsheet" };
    $$("#navLinks a").forEach(a => {
      a.classList.toggle("active", a.getAttribute("href") === (navMap[r] || "#/"));
    });
    document.getElementById("navLinks").classList.remove("open");
    const nt = document.getElementById("navToggle");
    if (nt) { nt.classList.remove("is-open"); nt.setAttribute("aria-expanded", "false"); }
  }
  const render = route;

  window.addEventListener("hashchange", route);
  if (!C || !QA) {
    app.innerHTML = `<section class="section"><div class="wrap"><div class="empty">
      <div class="ico">${icon("folder", 44)}</div><h2>Content failed to load</h2>
      <p>Make sure content.js and questions.js are in <code>assets/js/</code> next to this file.</p></div></div></section>`;
  } else {
    route();
  }
})();
