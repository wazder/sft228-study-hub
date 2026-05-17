/* ============================================================
   SFT228 — Course content for all 14 weeks.
   Source: official lecture slides (Ashrafi & Ashrafi,
   Object-Oriented Systems Analysis & Design, Pearson 2009),
   Gomaa Software Modeling & Design, Kendall HCI, GoF patterns,
   plus the supplementary handouts (DFD, Domain Analysis,
   Software Architecture Patterns, Use-Case → Class extraction).
   ============================================================ */
window.SFT_CONTENT = {
  course: {
    code: "SFT228",
    title: "Software Design & Analysis",
    school: "İstanbul Ticaret University · Faculty of Engineering",
    books: [
      "Ashrafi & Ashrafi — Object-Oriented Systems Analysis and Design (Pearson, 2009)",
      "Hassan Gomaa — Software Modeling and Design: UML, Use Cases, Patterns & Software Architectures (Cambridge, 2011)",
      "Gamma, Helm, Johnson, Vlissides — Design Patterns: Elements of Reusable OO Software (GoF, 1995)",
      "Kendall & Kendall — Systems Analysis and Design, 8e (HCI chapter)"
    ],
    grading: "Midterm 30% · Project 20% · Final 50%"
  },

  weeks: [
    /* ========================== WEEK 1 ========================== */
    {
      id: "w1", num: 1,
      title: "Information Systems & Information Management",
      chapter: "Ashrafi Ch. 1",
      summary: "What an information system is, data vs. information, systems vs. networks, IT vs. IS, the information system as a commercial product, quality attributes, and the problem space vs. solution space.",
      tags: ["Information System", "Quality", "Problem Space", "IT vs IS"],
      sections: [
        { id:"w1-1", h:"Information vs. Data", b:`
<p><strong>Information systems are systems that process data into information.</strong> Developing them involves highly abstract concepts that have very concrete outcomes.</p>
<div class="def-box"><span class="term">Data</span> — raw, unprocessed facts (titles, numbers, images, sounds). <br/><span class="term">Information</span> — data that has been processed so it has <em>meaning and purpose</em> for a receiver.</div>
<p>Examples used in the slides: a <em>Television Report</em> is moving images, dialog and music (data) that become a news story (information); a <em>Patient Profile</em> is weight, height, cholesterol, age and symptoms (data) that support a diagnosis (information). The key exam idea: the same data becomes different information depending on its <strong>purpose</strong>.</p>
<table><thead><tr><th>Data</th><th>Information</th></tr></thead><tbody>
<tr><td>Titles, words, paragraphs, pictures</td><td>Newspaper report</td></tr>
<tr><td>A set of musical notes on a bugle</td><td>Wake-up call</td></tr>
<tr><td>Weight, height, cholesterol, symptoms</td><td>Patient profile / diagnosis</td></tr>
</tbody></table>` },
        { id:"w1-2", h:"Systems & Networks", b:`
<div class="def-box"><span class="term">System</span> — a set of <em>interrelated</em> elements organized into an identifiable whole.<br/>
<span class="term">Network</span> — a cooperating set of <em>relatively independent</em> elements.</div>
<p><strong>The critical distinction:</strong> elements <em>within a system</em> cannot function the same way if taken out of the system (e.g. the circulatory system of the body). Elements <em>within a network</em> are more or less able to function independently (e.g. workstations on the Internet).</p>
<p>Examples of systems and their elements: the Respiratory System (organs such as lungs), a Railroad System (locomotives, wagons, tunnels, engineers), a Computer (microprocessor, circuitry, keyboard, OS, storage), a Filing System (receipts, folders, cabinets).</p>` },
        { id:"w1-3", h:"Information Technology vs. Information Systems", b:`
<p><strong>Information technology (IT)</strong> is the know-how, methods, tools and material used to <em>support</em> information systems. It is built from:</p>
<ul>
<li><strong>Communication system</strong> — transmits data to the IS and carries information to its users.</li>
<li><strong>Data management system</strong> — rules, procedures, material and tools that store, organize, protect and retrieve data.</li>
<li><strong>Control system</strong> — directs and facilitates interactions between the building blocks of IT and provides IS with IT services.</li>
</ul>
<blockquote>The task of <strong>information technology</strong> is to support <strong>information systems</strong>. The task of <strong>information systems</strong> is to support <strong>human enterprises</strong>.</blockquote>
<p><strong>Information automation</strong> = the application of information logic to data by a device that executes a program. An <strong>application</strong> is a set of programs that performs a specific task; applications must be viewed and developed as integral parts of an information system.</p>` },
        { id:"w1-4", h:"The Information System as a Commercial Product", b:`
<p>All software — regardless of purpose — is being transformed into a market product. To succeed, software must be <strong>conceived, designed and marketed as a product</strong>.</p>
<p>All commercial products share <strong>three basic traits</strong>:</p>
<ol>
<li>They must satisfy certain <strong>requirements</strong> or take advantage of opportunities.</li>
<li>They are human artifacts and therefore must be <strong>built</strong>.</li>
<li>Their development must follow a <strong>methodology</strong> that lowers costs, raises quality and makes success more likely.</li>
</ol>
<h4>Types of software / systems</h4>
<ul>
<li><strong>System software</strong> — operating systems, utilities, basic IT components.</li>
<li><strong>Software components</strong> — reusable parts assembled into complete systems.</li>
<li><strong>Software contractors</strong> — build custom software for specialized needs.</li>
<li><strong>Infrastructural IS</strong> — support the basic functions of an enterprise.</li>
<li><strong>Transaction Processing Systems (TPS)</strong> — record/process routine activities.</li>
<li><strong>B2B</strong> — businesses transact/exchange information online.</li>
<li><strong>B2C</strong> — consumers buy products/services directly from businesses online.</li>
<li><strong>Business Intelligence (BI)</strong> — analyze operational/market data, model, forecast, test decisions.</li>
<li><strong>AI &amp; Robotics</strong> — perform tasks requiring human intelligence, solve problems with non-mathematical algorithms.</li>
</ul>` },
        { id:"w1-5", h:"The Enterprise of Software Development", b:`
<p>Software development must follow the discipline of <strong>product development</strong>: modeling, prototyping, testing, reproduction, installation and support.</p>
<ul>
<li><strong>Requirements</strong> identify the specific objectives the product must help users achieve. <em>Requirements are NOT product specifications.</em></li>
<li><strong>Methodology</strong> — a set of practices, procedures, rules and techniques the development must follow.</li>
<li><strong>Project management</strong> — planning, monitoring and controlling the development process and its resources. A project has a goal and a lifecycle; <em>developing</em> an IS is a project, <em>maintaining</em> it is not.</li>
<li><strong>Quality control</strong> must be built into the production process — it cannot be inspected in afterwards.</li>
</ul>` },
        { id:"w1-6", h:"Quality Attributes of an Information System", b:`
<p>A frequently-tested list. Memorise the nine attributes and a one-line meaning:</p>
<table><thead><tr><th>Attribute</th><th>Meaning</th></tr></thead><tbody>
<tr><td>Correctness</td><td>Meets user needs &amp; requirements correctly.</td></tr>
<tr><td>Reliability</td><td>Output is predictable within an acceptable range.</td></tr>
<tr><td>Availability</td><td>Available to users when they need it.</td></tr>
<tr><td>Security</td><td>Secure against unauthorized access.</td></tr>
<tr><td>Robustness</td><td>Resists mishandling and negligent operation.</td></tr>
<tr><td>Efficiency</td><td>Maximum speed with minimum resources.</td></tr>
<tr><td>Flexibility</td><td>Accommodates changes in environment &amp; business needs.</td></tr>
<tr><td>Maintainability</td><td>The easier to repair, the higher the marks.</td></tr>
<tr><td>Testability</td><td>If the logic cannot be tested thoroughly, the information is not reliable.</td></tr>
</tbody></table>` },
        { id:"w1-7", h:"Problem Space vs. Solution Space", b:`
<div class="def-box"><span class="term">Problem space</span> — the environment in which the product must operate.<br/>
<span class="term">Solution space</span> — issues related to the product itself.</div>
<blockquote>Understanding the <strong>problem space</strong> is the job of <strong>analysis</strong>; in the <strong>solution space</strong> we <strong>design</strong> the product.</blockquote>
<p>This single sentence frames the entire course: the first half (analysis) is about <em>understanding the problem</em>; the second half (design) is about <em>building the solution</em>. Constructing software from objects is presented as the best answer to the challenge of complexity — leading into the object-oriented concept.</p>` }
      ],
      terms: [
        ["Information System","A system that processes data into information."],
        ["Data vs Information","Raw facts vs. processed, purposeful facts."],
        ["System","Interrelated elements forming an identifiable whole."],
        ["Network","Cooperating set of relatively independent elements."],
        ["Information Technology","Know-how, methods, tools that support information systems."],
        ["Problem Space","Environment in which the product must operate (analysis)."],
        ["Solution Space","Issues related to the product itself (design)."]
      ],
      tips: [
        "Be ready to classify items as <b>data</b> or <b>information</b> and to explain why the difference depends on <i>purpose</i>.",
        "Memorise the <b>9 quality attributes</b> with one-line definitions — a classic short-answer question.",
        "Know the <b>3 traits of a commercial product</b> and the analysis↔problem-space / design↔solution-space mapping."
      ],
      videos: [
        ["Information Systems Explained","Intro to what an IS is and its components","information system explained components"],
        ["Data vs Information","The difference with examples","difference between data and information"],
        ["Software Quality Attributes","Non-functional / quality attributes overview","software quality attributes explained"]
      ]
    },

    /* ========================== WEEK 2 ========================== */
    {
      id: "w2", num: 2,
      title: "Methodology & the Software Development Life Cycle",
      chapter: "Ashrafi Ch. 3",
      summary: "Method vs. methodology, what guides our actions, software development activities, the ad-hoc approach, SDLC, Waterfall, Prototyping, Spiral, RAD, Agile/XP, CMM, and project-management concepts.",
      tags: ["Methodology","Waterfall","Agile/XP","Spiral","RAD","CMM"],
      sections: [
        { id:"w2-1", h:"What is a Methodology?", b:`
<div class="def-box"><span class="term">Methodology</span> — (1) a set of methods, rules, practices, procedures, techniques and tools used to achieve a goal; or (2) the theoretical understanding of the principles that determine how those methods are used.</div>
<blockquote>While <strong>“method”</strong> defines a <strong>tactic</strong>, <strong>“methodology”</strong> defines the <strong>strategy</strong>. A tactic often makes sense only in the context of a strategy.</blockquote>
<h4>What guides our actions?</h4>
<p>From least to most systematic: <strong>Cookbook</strong> (ordered steps) → <strong>Observation</strong> → <strong>Anecdotes</strong> → <strong>Trial &amp; Error</strong> → <strong>Experience</strong> → <strong>Patterns</strong> (collective experience) → <strong>Methodology</strong> (the most abstract and systematic). Methodology evolves from the others but cannot be reduced to any of them.</p>
<p><strong>Complexity</strong> is the primary source behind the emergence or change of a methodology — when understanding the problem or building the solution goes beyond small groups and improvisation.</p>` },
        { id:"w2-2", h:"Software Development Activities", b:`
<p>Methodologies cover these activities selectively and from different viewpoints:</p>
<ul>
<li><strong>Requirements gathering</strong> — determine what the product must address.</li>
<li><strong>Feasibility study</strong> — technically/economically/legally/organizationally possible?</li>
<li><strong>Domain analysis</strong> — meaning of requirements within context; related concepts.</li>
<li><strong>Analysis</strong> — build a conceptual model of the solution.</li>
<li><strong>Design</strong> — transform “what” into “how” (logical, physical, architectural design).</li>
<li><strong>Implementation</strong> — turn blueprints into an actual product (programming + more).</li>
<li><strong>Testing &amp; quality control</strong> — verify the product meets specifications.</li>
<li><strong>Deployment &amp; training</strong> — install, train, manuals, packaging.</li>
<li><strong>Maintenance</strong> — solve problems after deployment or environment changes.</li>
</ul>` },
        { id:"w2-3", h:"Lifecycle Models", b:`
<h4>Ad-hoc approach</h4>
<p>Development without an overall theoretical framework. Relies on participants' ingenuity, ability to coordinate, and “luck”. A <strong>high-risk</strong> approach.</p>
<h4>SDLC &amp; the Waterfall Model</h4>
<p>SDLC views development primarily as a <strong>project-management</strong> process; each phase is a milestone, each result a deliverable. The <strong>Waterfall</strong> model specifies <em>sequential phases</em>: each step cannot begin until the previous one is completed and documented. It is <strong>document-driven</strong> and conceives design as <em>processes and data, not objects</em>.</p>
<div class="callout warn"><div class="ttl">Limits of Waterfall</div><ul>
<li><strong>Inflexibility</strong> — cannot easily “swim upstream”.</li>
<li><strong>Over-reliance on documentation.</strong></li>
<li><strong>Detachment from technology</strong> — one size cannot fit all.</li>
<li><strong>Detachment from the marketplace</strong> — too slow.</li>
<li><strong>Detachment from the profession</strong> — programming ≠ assembly-line work.</li>
</ul></div>
<h4>Prototyping</h4>
<p>Creation of a working model of the essential features for testing/verifying requirements. Two types: <strong>incremental/evolutionary</strong> (the prototype is refined into the final product) and <strong>throwaway</strong> (discarded once specifications are confirmed). Problems: <em>unbalanced architecture</em>, <em>illusion of completeness</em>, <em>diminishing changeability</em>, and too little documentation/modeling.</p>
<h4>Spiral, RAD, Agile/XP, CMM</h4>
<ul>
<li><strong>Spiral</strong> — a <em>risk-oriented</em> model that breaks the project into mini-projects.</li>
<li><strong>RAD</strong> — techniques for faster development; uses <strong>JAD</strong> workshops &amp; CASE tools; phases: Requirements Planning → Design → Implementation → Enhancements/Maintenance (software is never “done” until retired).</li>
<li><strong>Agile</strong> — adaptive rather than predictive. <strong>XP</strong> groups practices into <em>Planning</em> (user stories, release plan, pair programming), <em>Designing</em> (CRC cards, spike solutions, refactoring), <em>Coding</em> (collective ownership, continuous integration, no overtime), <em>Testing</em> (unit, acceptance, integration).</li>
<li><strong>CMM</strong> — rates the maturity of an organization's process. Levels: <strong>Initial → Repeatable → Defined → Managed → Optimizing</strong>.</li>
</ul>` },
        { id:"w2-4", h:"Object-Oriented Development & Modeling", b:`
<p><strong>Modeling</strong> is the systematic representation of the relevant features of a product/system from particular perspectives. Software modeling is shaped by four interweaved factors: how the real world is seen, how software is defined, the process of development, and the modeling language.</p>
<p>A full <strong>object-oriented development</strong> requires three things: an OO technology, an OO analysis &amp; design, and a project plan adapted to an OO approach. OO software development is <strong>iterative</strong>.</p>` },
        { id:"w2-5", h:"Project Management Concepts", b:`
<div class="def-box"><span class="term">Project</span> — a collection of related tasks completed in a particular order, within a timeframe, to achieve a specific goal.</div>
<p>Key concepts: <strong>Goal</strong> (must be verifiable), <strong>Scope</strong> (boundaries of the goal), <strong>Timeframe</strong> (finite life), <strong>Lifecycle</strong> (phases from inception to completion). Projects run as <strong>tasks on activity threads/paths</strong>; <strong>milestones</strong> are significant events and <strong>deliverables</strong> are verifiable results of tasks. <strong>Feasibility studies</strong> check whether expectations are realistic; <strong>risk management</strong> guards against the unexpected.</p>
<blockquote>Project plan is <strong>sequential</strong> in concept; software development is <strong>iterative</strong> in practice.</blockquote>` }
      ],
      terms: [
        ["Method vs Methodology","Tactic vs. strategy."],
        ["Waterfall","Sequential, document-driven, inflexible lifecycle."],
        ["Prototyping","Working model to verify requirements (incremental / throwaway)."],
        ["Spiral Model","Risk-oriented model split into mini-projects."],
        ["RAD","Rapid development using JAD workshops and CASE tools."],
        ["XP","Agile method: planning, designing, coding, testing practices."],
        ["CMM","Initial → Repeatable → Defined → Managed → Optimizing."],
        ["Milestone / Deliverable","Significant event / verifiable result of a task."]
      ],
      tips: [
        "Be able to <b>list the limits of Waterfall</b> and the <b>5 CMM levels in order</b>.",
        "Compare <b>incremental vs throwaway</b> prototyping and name the 3 prototyping problems.",
        "Know the <b>XP four practice groups</b> and the difference between method and methodology.",
        "“Project plan is sequential; development is iterative” — a likely discussion question."
      ],
      videos: [
        ["SDLC Models Compared","Waterfall, Spiral, Agile, RAD overview","SDLC models waterfall spiral agile explained"],
        ["Agile vs Waterfall","When to use each","agile vs waterfall difference"],
        ["Extreme Programming (XP)","XP practices walkthrough","extreme programming XP practices explained"],
        ["CMM / CMMI Levels","The 5 maturity levels","capability maturity model levels explained"]
      ]
    },

    /* ========================== WEEK 3 ========================== */
    {
      id: "w3", num: 3,
      title: "Object Orientation & Domain Analysis",
      chapter: "Ashrafi Ch. 2 & 4",
      summary: "Core OO concepts (object, identity, attributes, operations, state, class, abstraction, encapsulation, inheritance, polymorphism, UML), then domain analysis: problem/solution space, domain dictionary, business rules, and the Walden Hospital case.",
      tags: ["OOP","UML","Domain Analysis","Domain Dictionary","Business Rules"],
      sections: [
        { id:"w3-1", h:"What is an Object?", b:`
<p>An <strong>object</strong> is something perceived as an entity and referred to by name; perceptible by the senses or intelligible to the mind.</p>
<div class="def-box"><span class="term">Identity</span> — what distinguishes an object from all others. It is <strong>unique</strong> (cannot be faked) and <strong>unchanging</strong> (our perception of it does not change even if the object changes).</div>
<ul>
<li><strong>Attributes</strong> — features/properties/qualities, usually paired with values.</li>
<li><strong>Operations</strong> — what an object does or can do (the verb when the object is the subject: <em>dog barks</em>).</li>
<li><strong>State</strong> — the condition of an object at a stage in its lifetime = the combination of its attributes and their current values. State changes; an object can have several simultaneous states and secondary states.</li>
</ul>` },
        { id:"w3-2", h:"Classes & Classification", b:`
<div class="def-box"><span class="term">Class</span> — a set of objects that share the same attributes and operations.</div>
<ul>
<li><strong>Abstraction</strong> — identifying the characteristics that distinguish an entity from other kinds.</li>
<li><strong>Generalization</strong> — concluding that characteristics of one entity apply to a broader range.</li>
<li><strong>Instance</strong> — a concrete manifestation of a class (John Doe is an instance of Human).</li>
<li><strong>Superclass / Subclass</strong> — generalize → superclass; specialize → subclass; the relationship is a <em>class hierarchy</em>.</li>
<li><strong>Business classes</strong> have a real-world counterpart (discovered in <em>analysis</em>); <strong>utility classes</strong> do not (defined in <em>design</em>).</li>
<li><strong>Abstract</strong> classes cannot be instantiated; <strong>concrete</strong> classes can.</li>
</ul>` },
        { id:"w3-3", h:"Encapsulation, Inheritance & Polymorphism", b:`
<ul>
<li><strong>Encapsulation</strong> — packaging data and processes within one single unit.</li>
<li><strong>Information hiding</strong> — concealing and protecting what goes on inside an object (the ATM example: you are not burdened with how it works, cannot do disallowed operations, cannot change how it operates).</li>
<li><strong>Interface</strong> — the operations available to the public.</li>
<li><strong>Aggregation</strong> — relationship of an object to its component objects. <strong>Composition</strong> — a strong aggregation where the life of components relies on the life of the whole.</li>
<li><strong>Inheritance</strong> — a subclass incorporates the behavior of a superclass.</li>
<li><strong>Polymorphism</strong> — objects of different classes perform the same operation differently.</li>
</ul>` },
        { id:"w3-4", h:"UML — The Unified Modeling Language", b:`
<p>UML is a <strong>language</strong> for object-oriented analysis, design and deployment — <em>not a product, process, or methodology</em>. It provides the primitives for building conceptual (analysis) and concrete (design) models.</p>
<table><thead><tr><th>3 Views</th><th>4 Properties</th><th>3 Modeling types</th></tr></thead><tbody>
<tr><td>Owner's (conceptual)</td><td>Visualization</td><td>Behavioral (interaction with outside world)</td></tr>
<tr><td>Architect's (logical)</td><td>Specification</td><td>Structural (components &amp; relationships)</td></tr>
<tr><td>Builder's (physical)</td><td>Construction</td><td>Dynamic (how components interact over time)</td></tr>
<tr><td></td><td>Documentation</td><td></td></tr>
</tbody></table>` },
        { id:"w3-5", h:"Domain Analysis", b:`
<div class="def-box"><span class="term">Domain analysis</span> — analyzing the <em>context</em> of requirements. It (1) defines the context in which the IS will operate and (2) discovers/defines concepts the product must incorporate.</div>
<p>Problem solving has a <strong>trio</strong>: the problem, the solution as <em>method/process</em>, and the solution as <em>answer</em>. These reside in the <strong>problem space</strong> and <strong>solution space</strong> — changing one ripples across both.</p>
<p><strong>Requirements</strong> specify desired features; <strong>product specifications</strong> define the product that realizes them. A <strong>business domain</strong> is an area of related activities with shared rules &amp; concepts; the <strong>domain scope</strong> separates inside from outside.</p>
<h4>Domain Dictionary</h4>
<p>Organizes and brands domain concepts — the link between stakeholders (who verify) and analysts (who build the model). Most promising concepts: <strong>subjects</strong> &amp; <strong>objects</strong> (nouns → candidate OO objects) and <strong>verbs</strong> (processes, which may hide nouns: “ordering a book” hides the object <em>Order</em>). Template fields: <strong>Name, Type, Description, Source, Notes</strong>; types include Process, Function, Role, Object/Entity, Business Rule, Formula, Identifier.</p>` },
        { id:"w3-6", h:"Business Rules & the Walden Case", b:`
<div class="def-box"><span class="term">Business rules</span> — detailed policies, laws, procedures, guidelines and standards under which an enterprise operates.</div>
<p>Rules must be organized, maintained and verified for the life of the <em>business</em>, not just one application. Requirements specify features of the product; business rules apply <em>beyond</em> any single solution.</p>
<p><strong>Walden Medical Center</strong> (the running case): the chosen domain is <em>Patient Management</em> — Referral → Appointment → Registration → Medical Service → Hospitalization → Cost &amp; Record Keeping → Discharge → Patient Billing. Example business rules: “A patient under 18 must be accompanied by a related adult”; “If the patient bill is not paid within 30 days, it is overdue.”</p>
<div class="callout tip"><div class="ttl">Supplementary handout — Domain Analysis document</div>
<p>A domain-analysis document is structured into: <strong>A.</strong> Introduction · <strong>B.</strong> Glossary · <strong>C.</strong> General knowledge · <strong>D.</strong> Customers &amp; users · <strong>E.</strong> Environment · <strong>F.</strong> Tasks/procedures currently performed · <strong>G.</strong> Competing software · <strong>H.</strong> Similarities across domains. Benefits: faster development, better system, anticipation of extensions.</p></div>` }
      ],
      terms: [
        ["Object Identity","Unique &amp; unchanging — distinguishes an object from all others."],
        ["State","Combination of an object's attributes and their current values."],
        ["Abstraction","Identifying distinguishing characteristics of an entity."],
        ["Encapsulation","Packaging data + processes into one unit."],
        ["Information Hiding","Concealing internal workings from the outside."],
        ["Aggregation vs Composition","Whole–part vs. strong whole–part (shared lifetime)."],
        ["Polymorphism","Same operation, different methods across classes."],
        ["Domain Dictionary","Organized catalog of domain concepts (Name/Type/Desc/Source/Notes)."],
        ["Business Rule","Policy/law/standard under which an enterprise operates."]
      ],
      tips: [
        "Define and <b>contrast aggregation vs composition</b> and <b>abstraction vs encapsulation</b> — recurring exam items.",
        "Know UML's <b>3 views, 4 properties, 3 modeling types</b>.",
        "Be able to turn a short paragraph into <b>domain-dictionary nouns/verbs</b> and write 2–3 business rules for Walden.",
        "Remember: requirements ≠ product specifications; business rules outlive any single application."
      ],
      videos: [
        ["OOP Concepts in 10 min","Class, object, encapsulation, inheritance, polymorphism","object oriented programming concepts explained"],
        ["UML Overview","What UML is and its diagram families","UML diagrams overview tutorial"],
        ["Domain Analysis","Domain analysis & domain modeling","domain analysis software engineering"],
        ["Aggregation vs Composition","UML association/aggregation/composition","aggregation vs composition UML explained"]
      ]
    },

    /* ========================== WEEK 4 ========================== */
    {
      id: "w4", num: 4,
      title: "Behavioral Modeling I — Use Cases: The Basics",
      chapter: "Ashrafi Ch. 5",
      summary: "Use-case modeling, its four components, actors & system boundary, scenarios (normal/alternate/sub/exception), use-case diagram elements, the context diagram, and what use-case modeling is NOT.",
      tags: ["Use Case","Actor","Scenario","Context Diagram"],
      sections: [
        { id:"w4-1", h:"Use-Case Modeling", b:`
<p>Use cases model the <strong>behavior of a system</strong>. A use case is:</p>
<ul>
<li>a <strong>unit of system behavior</strong>;</li>
<li>a <strong>contract</strong> that formalizes the interaction between stakeholders and the system;</li>
<li>a description of the interaction of an actor with a system to accomplish a <strong>goal of value to the actor</strong>;</li>
<li><strong>technology-independent</strong> — it says <em>what</em>, not <em>how</em>.</li>
</ul>` },
        { id:"w4-2", h:"The Four Components of a Use Case", b:`
<table><thead><tr><th>Component</th><th>Meaning</th></tr></thead><tbody>
<tr><td><strong>Goal</strong></td><td>The use case is successful only if its stated goal is completely achieved. The use case's <em>name</em> is its goal — active, concise, decisive.</td></tr>
<tr><td><strong>Stakeholders</strong></td><td>Entities whose interests are affected by the success/failure of the use case. A use case must enforce the interests of <em>all</em> stakeholders.</td></tr>
<tr><td><strong>System</strong></td><td>Defines the boundaries of the use case (real system vs. information system).</td></tr>
<tr><td><strong>Scenario</strong></td><td>An ordered sequence of interactions between actor(s) and the system to accomplish the goal.</td></tr>
</tbody></table>
<div class="def-box"><span class="term">Actor</span> — an entity <em>outside</em> the system that interacts with it to achieve a goal; a role any user given the part can play. The <strong>primary actor</strong>'s goal is the use-case name; <strong>supporting (secondary) actors</strong> assist the primary actor.</div>` },
        { id:"w4-3", h:"System Boundary — Real vs. Information System", b:`
<p>A use case cannot leave a system but can reach across its boundaries. Two kinds of system, shown by the “Purchase Groceries” example:</p>
<ul>
<li><strong>Real system</strong> — the “bricks-and-mortar” grocery store: customer enters, fills a cart, the cashier calculates the total, the customer pays, the cashier bags &amp; gives a receipt.</li>
<li><strong>Information system</strong> — the Point-of-Sale (POS): the cashier scans each item, the system computes the total, the card is swiped, a receipt is printed.</li>
</ul>` },
        { id:"w4-4", h:"Scenario Flows", b:`
<p>A scenario consists of:</p>
<ul>
<li><strong>Normal flow</strong> — the best-case scenario.</li>
<li><strong>Alternate flow</strong> — remedies / valid variations.</li>
<li><strong>Sub-flows</strong> — details of steps in the normal flow.</li>
<li><strong>Exceptions</strong> — signify failure.</li>
</ul>
<div class="diagram">Conduct ATM Transaction — Normal Flow
1. Customer inserts the bank card
2. Customer enters password
3. System verifies password
4. System presents a list of transaction types
5. Customer selects a type of transaction</div>` },
        { id:"w4-5", h:"Use-Case Diagram Elements", b:`
<table><thead><tr><th>Symbol</th><th>Meaning</th></tr></thead><tbody>
<tr><td>Stick figure</td><td>An <strong>actor</strong>.</td></tr>
<tr><td>Rectangle</td><td>The <strong>system boundary / scope</strong>. Anything outside it is an actor.</td></tr>
<tr><td>Ellipse (oval)</td><td>A <strong>use case</strong>, residing inside the boundary.</td></tr>
<tr><td>Simple line</td><td><strong>Association</strong> — communication between actor &amp; use case.</td></tr>
</tbody></table>
<p>More than one actor can be associated with a use case, and one actor with more than one use case.</p>` },
        { id:"w4-6", h:"From Domain Concepts to Use Cases · Context Diagram", b:`
<p>Use-case components are produced by analyzing and expanding domain-analysis concepts. <strong>Identify prominent actors</strong> from domain concepts classified as “role”; <strong>identify major use cases</strong> by analyzing business processes (take apart / join).</p>
<p>Walden major use cases: <em>100 Refer Patient · 120 Make Appointment · 140 Register Patient · 160 Track Medical Service · 180 Manage Patient Billing</em>.</p>
<div class="def-box"><span class="term">Context diagram</span> — represents the interaction of outside entities with a system <em>as a whole</em>. Three elements: a system/subsystem, outside entities, and the interactions between them.</div>
<div class="callout warn"><div class="ttl">What use-case modeling is NOT</div><ul>
<li>Limited to a system's <strong>external</strong> behavior — not the inside.</li>
<li>Not effective for <strong>non-functional</strong> requirements.</li>
<li>Not the same as <strong>functional decomposition</strong>.</li>
<li>Not inherently object-oriented.</li>
<li>Describes <em>what</em> a system accomplishes, not <em>how</em>.</li>
</ul></div>` }
      ],
      terms: [
        ["Use Case","A unit of system behavior; a contract; an actor reaching a goal."],
        ["Actor","Entity outside the system that interacts to achieve a goal (a role)."],
        ["Primary vs Supporting Actor","Drives the goal vs. assists the primary actor."],
        ["Scenario","Ordered actor↔system interactions: normal/alternate/sub/exception."],
        ["System Boundary","Rectangle; separates use cases from actors."],
        ["Context Diagram","System as a whole + outside entities + their interactions."]
      ],
      tips: [
        "List the <b>4 components of a use case</b> and the <b>4 use-case diagram symbols</b>.",
        "Be able to write a <b>normal flow</b> (and one alternate/exception) for ATM, restaurant, or Walden 'Register Patient'.",
        "Know the <b>5 'what use-case modeling is NOT'</b> points — a favorite short-answer.",
        "Distinguish <b>context diagram</b> vs use-case diagram."
      ],
      videos: [
        ["Use Case Diagram Tutorial","Actors, system boundary, associations","use case diagram tutorial"],
        ["Writing Use Case Scenarios","Normal / alternate / exception flows","how to write a use case scenario"],
        ["Actors & System Boundary","Primary vs secondary actors","use case actors primary secondary explained"]
      ]
    },

    /* ========================== WEEK 5 ========================== */
    {
      id: "w5", num: 5,
      title: "Behavioral Modeling II — Developing Use Cases",
      chapter: "Ashrafi Ch. 6",
      summary: "The use-case template, normal/sub/alternate flows, the actor dictionary, include vs. extend, use-case generalization, dividing/joining/refactoring, activity diagrams, and the uses of use cases (incl. noun→class extraction).",
      tags: ["Use Case Template","Include","Extend","Activity Diagram"],
      sections: [
        { id:"w5-1", h:"The Use-Case Template", b:`
<p>The template structures use cases with well-defined, ordered fields:</p>
<table><thead><tr><th>Field</th><th>Meaning</th></tr></thead><tbody>
<tr><td>Name</td><td>Embodies the goal of the use case.</td></tr>
<tr><td>ID</td><td>Unique numeric identifier.</td></tr>
<tr><td>Scope</td><td>System/subsystem the use case belongs to.</td></tr>
<tr><td>Priority</td><td>Order of design and implementation.</td></tr>
<tr><td>Summary</td><td>Long name + short scenario.</td></tr>
<tr><td>Primary / Supporting actor</td><td>Drives the goal / assists.</td></tr>
<tr><td>Stakeholder</td><td>Anyone with an interest in the outcome.</td></tr>
<tr><td>Pre / Post-condition</td><td>System state before / after the use case.</td></tr>
<tr><td>Trigger</td><td>The event that starts the use case.</td></tr>
<tr><td>Flow</td><td>Ordered activities toward the goal.</td></tr>
<tr><td>Open issues / Audit / Custom</td><td>Unresolved questions / evolution tracking / case-specific attributes.</td></tr>
</tbody></table>` },
        { id:"w5-2", h:"Flows in Detail", b:`
<ul>
<li><strong>Normal flow</strong> — best case (e.g. <em>1. Customer inserts the bank card …</em>).</li>
<li><strong>Sub-flows</strong> — details of normal-flow steps (1.1, 1.2 …).</li>
<li><strong>Alternate flow / exceptions</strong> — alternates identify <em>remedies</em>; exceptions signify <em>failure</em> (e.g. <em>3.a Patient is new — direct to registration</em>).</li>
<li><strong>Non-behavioral requirements</strong> are specified in the template only when they apply to a specific use case.</li>
</ul>` },
        { id:"w5-3", h:"Include vs. Extend (very common exam topic)", b:`
<div class="def-box"><span class="term">Include</span> — one use case <em>uses</em> the functionality of another, independent use case (mandatory, always happens). Example: <em>Receive Patient</em> includes <em>140 Register Patient</em> when the patient is new.<br/><br/>
<span class="term">Extend</span> — a use case is created to <em>extend</em> the functionality of a base use case (optional/conditional). Example: <em>Register Patient</em> is extended by <em>142 Verify Credit Card</em> when the patient pays by credit card.</div>
<p>In a use-case diagram, the dependency type is shown by the <strong>direction of the arrow</strong>. <strong>Use-case generalization</strong> applies when use cases achieve the <em>same goal by different means</em>.</p>
<p>The <strong>actor dictionary</strong> lists each actor, its description, whether it is abstract, and the use cases it participates in. Actors can be <strong>generalized</strong> (e.g. <em>Hospital Clerk</em> generalizes <em>Reception Clerk</em> + <em>Registration Clerk</em>).</p>` },
        { id:"w5-4", h:"Separating & Joining Use Cases", b:`
<ul>
<li><strong>Delineate</strong> — one use case = one primary actor, one useful goal, one system.</li>
<li><strong>Divide</strong> — <em>vertical</em> division if too many parallel steps; <em>horizontal</em> if the flow is too complex or lacks unity.</li>
<li><strong>Combine</strong> — merge related use cases.</li>
<li><strong>Refactoring</strong> — abstract and reorganize common behavior into new use cases.</li>
</ul>
<p>The <strong>activity diagram</strong> depicts the flow from activity to activity — a visual, dynamic view used to clarify the logical flow of a use case.</p>` },
        { id:"w5-5", h:"Uses of Use Cases", b:`
<p>Use cases are a framework for many activities: <strong>requirements gathering</strong>, <strong>requirements traceability</strong>, <strong>business-rule gathering</strong>, capturing <strong>system behavior</strong>, <strong>object derivation</strong>, <strong>incremental development</strong>, basis for the <strong>user interface</strong>, <strong>test-case definition</strong>, <strong>user documentation</strong>, and <strong>business-process modeling</strong>.</p>
<div class="callout tip"><div class="ttl">Supplementary handout — Use Case → Classes/Objects</div>
<p>From a use-case description: <strong>nouns</strong> are candidate classes/objects, <strong>verbs</strong> are candidate methods/operations. Filter nouns to keep tangible things, roles and in-scope concepts; drop attributes (e.g. <em>amount</em>) and the whole-“system”. Example (vending machine): nouns → <code>Machine, Customer, Product, Payment</code>; verbs → <code>display(), insert(), validate(), select(), dispense(), reset()</code>. Objects are specific instances (<code>coke : Product</code>).</p></div>` }
      ],
      terms: [
        ["Use-Case Template","Structured fields: name, ID, scope, priority, actors, conditions, flows…"],
        ["Include","Mandatory reuse of an independent use case."],
        ["Extend","Optional/conditional addition to a base use case."],
        ["Use-Case Generalization","Same goal achieved by different means."],
        ["Actor Dictionary","List of actors, descriptions, abstract flag, use cases."],
        ["Refactoring (UC)","Reorganize common behavior into new use cases."],
        ["Noun→Class / Verb→Method","Heuristic for extracting classes from use-case text."]
      ],
      tips: [
        "<b>Include vs Extend</b> is almost guaranteed — give a one-line definition + Walden example + arrow direction.",
        "Be able to fill a <b>use-case template</b> for a given scenario (Login App User is a worked example in the slides).",
        "Vertical vs horizontal <b>division</b>; what refactoring means for use cases.",
        "Practice <b>noun→class / verb→method</b> extraction on a short paragraph."
      ],
      videos: [
        ["Include vs Extend","The classic UML relationship confusion solved","include vs extend use case diagram"],
        ["Use Case Specification Template","Filling a full use-case template","use case specification template tutorial"],
        ["Activity Diagram Tutorial","Modeling flow of activities","UML activity diagram tutorial"],
        ["Finding Classes from Use Cases","Noun/verb analysis","identify classes from use case noun verb analysis"]
      ]
    },

    /* ========================== WEEK 6 ========================== */
    {
      id: "w6", num: 6,
      title: "Structural Modeling",
      chapter: "Ashrafi Ch. 7",
      summary: "Classes as building blocks, objects as black boxes, class anatomy & visibility, finding class candidates & responsibilities (CRC), collaboration, relationships (association/aggregation/composition), class diagrams, multiplicity and constraints.",
      tags: ["Class Diagram","Visibility","Multiplicity","CRC","Association"],
      sections: [
        { id:"w6-1", h:"Structure Supports Behavior", b:`
<p>An information system must have a structure that supports its behavior. The structure cannot be monolithic — a flexible, reliable structure needs <strong>building blocks</strong>. Common traits of structural modeling: the view may be <strong>conceptual / logical / physical</strong>; the scope can be any selected range; a building block may be <strong>fine or coarse</strong>.</p>
<p>In the virtual world a <strong>class</strong> is both an <em>abstraction of objects</em> and a <em>template for creating objects</em>. Objects are treated as <strong>black boxes</strong> — inner workings hidden, accessed only via the public interface.</p>` },
        { id:"w6-2", h:"Anatomy of a Class & Visibility", b:`
<p>A class has a <strong>Name</strong>, <strong>Attributes</strong> and <strong>Operations</strong>. Each member has a <strong>visibility</strong>:</p>
<table><thead><tr><th>Symbol</th><th>Visibility</th><th>Description</th></tr></thead><tbody>
<tr><td><code>+</code></td><td>Public</td><td>Visible to all entities.</td></tr>
<tr><td><code>-</code></td><td>Private</td><td>Cannot be directly accessed by outside entities.</td></tr>
<tr><td><code>#</code></td><td>Protected</td><td>Available only to the object or its descendants.</td></tr>
<tr><td><code>~</code></td><td>Package (Friend)</td><td>Only other objects in the package/component can use it.</td></tr>
</tbody></table>
<div class="diagram">┌─────────────────────────┐
│         Patient         │   ← Name
├─────────────────────────┤
│ - ssn : String          │   ← Attributes (visibility + name : type)
│ - name : String         │
├─────────────────────────┤
│ + getAppointments()     │   ← Operations
│ + getPatientBilling()   │
└─────────────────────────┘</div>` },
        { id:"w6-3", h:"Finding Classes & Responsibilities", b:`
<p><strong>Finding class candidates</strong> starts from domain concepts and use cases. A class's <strong>responsibilities</strong> are what it must <em>know</em> and <em>do</em>. To fully define a class is to define its responsibilities in detail.</p>
<p>Example — the <strong>Patient</strong> class knows: personal data, contact data, appointments, insurance data, financial data, referral source, medical history, next of kin; and issues the hospital card.</p>
<p><strong>Delegating responsibilities</strong> &amp; <strong>collaboration</strong>: a class collaborates with others to fulfil an operation. e.g. <code>getAppointments → Appointment</code>, <code>getNextOfKin → NextOfKin</code>. (This is the CRC idea: <em>Class–Responsibility–Collaboration</em>.)</p>` },
        { id:"w6-4", h:"Relationships, Multiplicity & Constraints", b:`
<p>Three relationships: <strong>Association</strong> (a structural link), <strong>Aggregation</strong> (whole–part) and <strong>Composition</strong> (strong whole–part, shared lifetime).</p>
<div class="def-box"><span class="term">Class diagram</span> — shows a set of classes and their interrelationships. <span class="term">Multiplicity</span> — how many instances participate in an association.</div>
<table><thead><tr><th>Multiplicity</th><th>Meaning</th><th>Example</th></tr></thead><tbody>
<tr><td>1</td><td>Exactly one</td><td>A patient has exactly one nationality.</td></tr>
<tr><td>0..1</td><td>Zero or one</td><td>A patient may have no insurance plan or one.</td></tr>
<tr><td>1..*</td><td>One or more</td><td>A patient must have ≥1 appointment.</td></tr>
<tr><td>0..*</td><td>Zero or more</td><td>A patient may have no billing activity or many.</td></tr>
<tr><td>20..40</td><td>A range</td><td>A part-timer works 20–40 hours/week.</td></tr>
<tr><td>2,4,6,8</td><td>Non-continuous range</td><td>Tables seat 2, 4, 6 or 8 people.</td></tr>
</tbody></table>
<p>In structural modeling, <strong>constraints</strong> are rules that apply to associations.</p>` }
      ],
      terms: [
        ["Class (structural)","An abstraction of objects and a template to create them."],
        ["Visibility","+ public, - private, # protected, ~ package."],
        ["Responsibility","What a class must know and do."],
        ["CRC","Class–Responsibility–Collaboration."],
        ["Association / Aggregation / Composition","Link / whole-part / strong whole-part."],
        ["Multiplicity","1, 0..1, 1..*, 0..*, ranges…"],
        ["Constraint","A rule that applies to an association."]
      ],
      tips: [
        "Memorise the <b>4 visibility symbols</b> and the <b>multiplicity table</b> with examples.",
        "Be able to draw a small <b>class diagram</b> (Patient/Appointment/Billing) with relationships &amp; multiplicities.",
        "Explain <b>responsibilities &amp; collaboration</b> (CRC) and the association/aggregation/composition difference."
      ],
      videos: [
        ["UML Class Diagram Tutorial","Classes, attributes, operations, relationships","UML class diagram tutorial"],
        ["Multiplicity in UML","0..1, 1..*, 0..* explained","UML multiplicity cardinality explained"],
        ["CRC Cards","Class-Responsibility-Collaboration technique","CRC cards tutorial OOAD"]
      ]
    },

    /* ========================== WEEK 7 ========================== */
    {
      id: "w7", num: 7,
      title: "Dynamic Modeling",
      chapter: "Ashrafi Ch. 9",
      summary: "Structure in motion: messages, accessor operations, parameters & return values, methods vs. operations, events, and the four dynamic diagrams (sequence, collaboration/communication, statechart, activity).",
      tags: ["Sequence Diagram","Statechart","Messages","Events","Collaboration"],
      sections: [
        { id:"w7-1", h:"Dynamic Modeling = Structure in Motion", b:`
<p>Dynamic modeling represents how the building blocks of the IS interact with each other and the outside world to satisfy behavioral requirements. In a virtual system the <strong>only</strong> way objects interact is by <strong>sending and receiving messages</strong>. Interactions happen <em>in time</em>, so a dynamic model must show who interacts with whom, how, and <strong>in what order</strong>.</p>` },
        { id:"w7-2", h:"Messages, Operations & Methods", b:`
<div class="def-box"><span class="term">Message</span> — an instruction/information sent to an object expecting it to perform an action.<br/><span class="term">Method</span> — how an operation is actually implemented (one operation → possibly many methods = polymorphism).</div>
<ul>
<li><strong>Accessor operations</strong> — <code>get</code> returns an attribute's value; <code>set</code> changes it.</li>
<li><strong>Parameters/arguments</strong> — data supplied to perform an operation, e.g. <code>orderDrink(drink, quantity)</code>.</li>
<li><strong>Return value</strong> — the reply a message may invoke after an operation completes.</li>
<li>Syntax: <code>[Visibility] [Return Type] Name(Param1, …, Paramn)</code> e.g. <code>public Currency payBill(amount, paymentType)</code>.</li>
<li><strong>Events</strong> — actions by one object that interrupt the condition of one or more other objects.</li>
</ul>` },
        { id:"w7-3", h:"The Four Dynamic Diagrams", b:`
<table><thead><tr><th>Diagram</th><th>Emphasis</th></tr></thead><tbody>
<tr><td><strong>Sequence</strong></td><td>The <em>order of interactions in time</em>.</td></tr>
<tr><td><strong>Collaboration / Communication</strong></td><td>How objects are <em>organized</em> and what messages they exchange.</td></tr>
<tr><td><strong>Statechart</strong></td><td>The results of interactions on the <em>state</em> of one class of objects.</td></tr>
<tr><td><strong>Activity</strong></td><td>The <em>logical flow</em> of activities.</td></tr>
</tbody></table>` },
        { id:"w7-4", h:"Sequence Diagram", b:`
<p>Represents interaction between objects (or actors and objects) <strong>ordered in time</strong>: objects across the top exchange messages horizontally; the <strong>timeline</strong> (dotted vertical line) represents time downward; a hollow box = the <strong>object lifetime/activation</strong>. Elements: actor instance, class instance (<code>name:Class</code>), timeline, instantiation, destruction, message &amp; timeline forking (alternates), message to self &amp; looping.</p>
<div class="diagram">aCustomer:Customer        :POS         :Payment
     │ scanItem() ───────────►│
     │                        │ getTotal() ─────►│
     │◄── total ──────────────│◄── amount ───────│
     │ pay(card) ────────────►│
</div>
<p><strong>Tip from the slides:</strong> draw a sequence diagram for <em>every</em> use case; map use-case scenario text to messages; include alternates and loops.</p>` },
        { id:"w7-5", h:"Statechart & Activity Diagrams", b:`
<p>A <strong>statechart</strong> represents milestones in the lifetime of an object when its state changes. Elements: <strong>Initial state</strong> → <strong>State</strong> → <strong>Transition &amp; Event</strong> → <strong>Final state</strong>. It is the <em>only</em> dynamic model that can illustrate the milestones in the lifetime of one class of objects in its entirety.</p>
<p>An <strong>activity diagram</strong> models the logical flow of activities between the system and the outside world or among internal components — the logical flow in almost pure form. The <strong>collaboration diagram</strong> is best derived from a sequence diagram (collaboration = communication).</p>` }
      ],
      terms: [
        ["Message","Instruction/info sent to an object expecting an action."],
        ["Operation vs Method","What an object can do vs. how it's implemented."],
        ["Accessor (get/set)","Returns / changes an attribute value."],
        ["Event","An action that interrupts the condition of other objects."],
        ["Sequence Diagram","Interactions ordered in time (lifelines, activations)."],
        ["Statechart","States &amp; transitions over an object's lifetime."],
        ["Collaboration Diagram","Organization of objects + messages (communication)."]
      ],
      tips: [
        "Match each <b>dynamic diagram</b> to its emphasis (time vs organization vs state vs flow).",
        "Draw a small <b>sequence diagram</b> from a given use-case scenario (Make Appointment / Have Dinner).",
        "Know <b>statechart elements</b> and operation-vs-method (polymorphism)."
      ],
      videos: [
        ["UML Sequence Diagram","Lifelines, activations, messages, loops","UML sequence diagram tutorial"],
        ["UML State Machine Diagram","States, transitions, events","UML state machine statechart tutorial"],
        ["Sequence vs Communication Diagram","Two views of the same interaction","sequence vs communication diagram UML"]
      ]
    },

    /* ========================== WEEK 8 ========================== */
    {
      id: "w8", num: 8,
      title: "The Design Challenge & Application Design I — Flow & Control",
      chapter: "Ashrafi Ch. 10 & 11",
      summary: "Moving from analysis to design, logical vs. physical design, design objects, UML extension mechanisms (stereotypes, notes, packages), then application flow & control: flow/control/lifecycle objects, datasets, concrete classes, constructors, overloading, and the stateless web control model.",
      tags: ["Design","Stereotype","Package","Control Object","Constructor"],
      sections: [
        { id:"w8-1", h:"From Analysis to Design", b:`
<p>Design is the path from concept to product — moving from <strong>what</strong> to <strong>how</strong>. <strong>Logical design</strong> takes existing technological paradigms into account while steering clear of specific technologies; <strong>physical design</strong> commits to concrete technology. A design usually works only within <em>one technological paradigm</em>.</p>
<blockquote>Without a sound <strong>domain analysis</strong>, even an ingenious design is likely to fail.</blockquote>
<p>Key design concepts introduced: <strong>design objects</strong> (not part of the problem domain but needed for the solution), <strong>pattern</strong> (core of a solution to a recurring problem), <strong>component</strong> (reusable, replaceable software unit), <strong>reuse</strong>, <strong>architecture</strong> (arrangement of parts &amp; interrelationships), <strong>layer</strong> (components with similar services / high mutual dependency).</p>` },
        { id:"w8-2", h:"UML Extension Mechanisms", b:`
<ul>
<li><strong>Stereotyping</strong> — specialization/generalization of <em>modeling elements</em> (e.g. «control», «boundary», «entity»), not of what they represent.</li>
<li><strong>Notes</strong> — specify requirements, observations, reviews, explanations.</li>
<li><strong>Package</strong> — a general-purpose mechanism for grouping related items in a hierarchy.</li>
<li><strong>Namespace</strong> — a hierarchical naming scheme; each name is unique within the sphere above it.</li>
<li><strong>Visibility &amp; importing</strong> — elements inside a package can be public, private or protected, controlling what other packages can access.</li>
</ul>` },
        { id:"w8-3", h:"Application Flow & Control", b:`
<p>Applications are solutions to information needs — they let users maintain and make sense of a set of <strong>entity objects</strong>. Most application components have <em>no</em> counterpart in the problem domain; design defines these building blocks, their interactions, and their relationship to entity classes. An application is both a <em>structure</em> of objects and the <em>collaboration</em> among them.</p>
<ul>
<li><strong>Flow objects</strong> — guide the application toward its goal.</li>
<li><strong>Control objects</strong> — manage the flow/control of the application («control» stereotype).</li>
<li><strong>Lifecycle object</strong> — creates, organizes, tracks and destroys other objects (often instances of an entity class).</li>
<li><strong>Dataset</strong> — a general-purpose <em>utility</em> object that carries data between objects within an application.</li>
</ul>` },
        { id:"w8-4", h:"Defining Concrete Classes", b:`
<p>Concrete classes must be defined precisely enough for implementation. <strong>Methods</strong> are derived from messages by progressive refinement into logical then physical models.</p>
<ul>
<li><strong>Construction &amp; destruction</strong> — objects are instantiated explicitly; <strong>constructor</strong> methods give an object the minimum data it needs to start existing.</li>
<li><strong>Overloading</strong> — same method name, different parameter lists.</li>
<li><strong>Web control model</strong> — web connections are <strong>stateless</strong>; the application must <em>recreate the state</em> every time it receives a message from the web.</li>
</ul>` }
      ],
      terms: [
        ["Logical vs Physical Design","Paradigm-aware but technology-neutral vs. concrete technology."],
        ["Design Object","Not in problem domain but needed to build the solution."],
        ["Stereotype","Specialization of a modeling element («control»…)."],
        ["Package / Namespace","Hierarchical grouping / unique naming scheme."],
        ["Control Object","Manages application flow."],
        ["Lifecycle Object","Creates/organizes/tracks/destroys other objects."],
        ["Dataset","Utility object carrying data between objects."],
        ["Stateless Web Model","State must be recreated on every web request."]
      ],
      tips: [
        "Explain <b>logical vs physical design</b> and why domain analysis matters to design.",
        "List the <b>UML extension mechanisms</b> (stereotype, note, package, namespace).",
        "Define <b>flow / control / lifecycle</b> objects and the <b>stateless web model</b>; constructor &amp; overloading."
      ],
      videos: [
        ["Analysis vs Design","Moving from what to how","software analysis vs design difference"],
        ["UML Stereotypes & Packages","Extension mechanisms","UML stereotypes packages explained"],
        ["Boundary-Control-Entity","The BCE / control-object pattern","boundary control entity pattern explained"]
      ]
    },

    /* ========================== WEEK 9 ========================== */
    {
      id: "w9", num: 9,
      title: "Application Design II — The User Interface & HCI",
      chapter: "Ashrafi Ch. 12 + Kendall HCI",
      summary: "The UI as a boundary layer, its responsibilities, the evolution of UIs, the building blocks of the visual interface, patterns/consistency/aesthetics, UI modeling, plus HCI: Fit, TAM, usability heuristics, types of interfaces, dialog design and feedback.",
      tags: ["User Interface","HCI","TAM","Usability","Dialog Design"],
      sections: [
        { id:"w9-1", h:"The User Interface Layer", b:`
<div class="def-box"><span class="term">User interface</span> — the area of interaction between an application and its human users; where the problem domain and the solution domain meet.</div>
<p>Responsibilities: <strong>accept &amp; edit user input</strong>, <strong>produce human-intelligible output</strong>, and <strong>guide users to accomplish tasks</strong> — translating real-world messages into virtual ones and back. The UI is a layer of <strong>boundary objects</strong>; visible ones are <strong>visual controls</strong>. Evolution: command-line → real-time interaction → GUI (real-world metaphors: desktop, menus, icons, buttons).</p>` },
        { id:"w9-2", h:"Building Blocks of the Visual Interface", b:`
<p>The UI is a language: <strong>symbols + syntax</strong>; sender and receiver must agree on both. Building blocks:</p>
<ul>
<li><strong>Metaphors</strong> — dominate the UI vocabulary; <strong>Roles</strong> — one metaphor can signify many; <strong>Containers</strong> — organize/present controls.</li>
<li><strong>Displayers</strong> (textual/pictorial info) · <strong>Editors</strong> (accept input) · <strong>Selectors</strong> (choose options) · <strong>Executors</strong> (run commands) · <strong>Navigators</strong> (move among containers).</li>
<li><strong>Object signifiers</strong> · <strong>Manipulators</strong> (control appearance) · <strong>Pointers</strong> (position/type of action) · <strong>Decorators</strong> (aesthetics) · <strong>Multifunctional</strong> (one control, many roles) · <strong>I/O devices</strong>.</li>
</ul>
<p>UI design must map <strong>messages, parameters and return values</strong> into UI metaphors. <strong>Patterns</strong>, <strong>consistency</strong> (the user can predict what actions produce what results) and a <strong>functional aesthetic</strong> are essential. Modeling: class diagrams, <strong>navigation</strong> diagrams, <strong>storyboarding</strong>, <strong>simulation &amp; prototyping</strong>.</p>` },
        { id:"w9-3", h:"HCI — Fit, TAM & Usability", b:`
<div class="def-box"><span class="term">Fit</span> — the match among the <strong>Human, Computer and Task</strong> affects performance and well-being.</div>
<p><strong>TAM</strong> (Technology Acceptance Model) organizes thinking about whether users will accept technology; it examines <strong>perceived usefulness</strong> and <strong>perceived ease of use</strong>, plus attitudes (satisfaction, anxiety, enjoyment, playfulness). <strong>Usability</strong> = standards + heuristics (visibility of system status, match with the real world, user control &amp; freedom, consistency &amp; standards, error prevention, recognition rather than recall, flexibility, aesthetic/minimalist design, help &amp; documentation).</p>
<p>Design for <strong>cognitive styles</strong> (tables/graphs/text), <strong>physical considerations</strong> (vision, hearing, touch) and <strong>accessibility</strong> (Braille keyboards, screen readers, captions, speech input).</p>` },
        { id:"w9-4", h:"Interfaces, Dialog Design & Feedback", b:`
<p><strong>Types of interfaces:</strong> natural-language, question-and-answer, menus, form-fill, command-language, GUIs, web interfaces.</p>
<p><strong>Dialog design guidelines:</strong> meaningful communication, minimal user action, standard operation &amp; consistency.</p>
<p><strong>Types of feedback:</strong> acknowledging acceptance of input; recognizing correct form; notifying incorrect form; explaining a delay; acknowledging completion; notifying non-completion; offering more detailed feedback. <strong>Help options:</strong> F1 key, pull-down menu, context-sensitive help, icon hover, wizards, online help, software forums. The UI has two parts: <strong>presentation language</strong> (computer→human) and <strong>action language</strong> (human→computer).</p>` }
      ],
      terms: [
        ["User Interface","Boundary layer where problem &amp; solution domains meet."],
        ["Visual Control","A UI object visible to the user."],
        ["Metaphor","Real-world concept used in the UI vocabulary."],
        ["Fit (HCI)","Match among human, computer and task."],
        ["TAM","Perceived usefulness + perceived ease of use."],
        ["Usability Heuristics","Nielsen-style rules for evaluating an interface."],
        ["Presentation vs Action Language","Computer→human vs human→computer parts of the UI."]
      ],
      tips: [
        "List the <b>UI responsibilities</b> and several <b>visual-control categories</b> (displayers/editors/selectors/executors/navigators).",
        "Explain <b>Fit</b> and <b>TAM</b> (the two perceived factors).",
        "Name <b>types of interfaces</b>, <b>dialog-design guidelines</b> and <b>feedback types</b>."
      ],
      videos: [
        ["HCI Fundamentals","Human-computer interaction basics","human computer interaction fundamentals"],
        ["Nielsen's 10 Usability Heuristics","Each heuristic with examples","nielsen 10 usability heuristics explained"],
        ["Technology Acceptance Model","TAM explained simply","technology acceptance model TAM explained"],
        ["UI Design Principles","Consistency, feedback, metaphors","user interface design principles"]
      ]
    },

    /* ========================== WEEK 10 ========================== */
    {
      id: "w10", num: 10,
      title: "Application Design III — Database, Persistence & Data Flow",
      chapter: "Ashrafi Ch. 13 + DFD handout",
      summary: "Mapping the object space to the data space, persistence, relational vs. object databases, object–relational mapping, plus the Data Flow Diagram handout (symbols, levels, rules).",
      tags: ["Persistence","ORM","Database","DFD","Context Diagram"],
      sections: [
        { id:"w10-1", h:"Persistence — Object Space ↔ Data Space", b:`
<p>Most objects live only while the application runs; <strong>persistent</strong> objects must outlive a single execution by being stored. Persistence design <em>maps the “object space” to the “data space.”</em></p>
<p>The <strong>data management system</strong> (from Week 1) stores, organizes, protects and retrieves data. Common storage technologies:</p>
<ul>
<li><strong>Relational databases</strong> — tables, rows, columns, primary/foreign keys, SQL. Dominant for enterprise data.</li>
<li><strong>Object databases</strong> — store objects directly; less impedance mismatch but less common.</li>
<li><strong>Files / NoSQL</strong> — documents, key-value, etc.</li>
</ul>` },
        { id:"w10-2", h:"Object–Relational Mapping (ORM)", b:`
<p>The <strong>impedance mismatch</strong>: objects use identity, inheritance, references &amp; collections; relational tables use values, keys &amp; joins. Mapping rules of thumb:</p>
<table><thead><tr><th>Object concept</th><th>Relational mapping</th></tr></thead><tbody>
<tr><td>Class</td><td>Table</td></tr>
<tr><td>Object / instance</td><td>Row</td></tr>
<tr><td>Attribute</td><td>Column</td></tr>
<tr><td>Object identity</td><td>Primary key</td></tr>
<tr><td>Association / reference</td><td>Foreign key (or a join/link table for *..*)</td></tr>
<tr><td>Inheritance</td><td>One table per hierarchy / per class / per concrete class</td></tr>
</tbody></table>
<p>A <strong>persistence layer</strong> isolates the rest of the application from how data is stored, so business logic does not depend on the database technology — consistent with the <em>layered architecture</em> idea (Week 13).</p>` },
        { id:"w10-3", h:"Data Flow Diagrams (supplementary handout)", b:`
<div class="def-box"><span class="term">DFD</span> — maps the flow of information for a process/system using defined symbols and short labels (data inputs, outputs, storage and routes).</div>
<p>Popularized in the late 1970s by Yourdon &amp; Constantine (from the data-flow graphs of Martin &amp; Estrin); refined by DeMarco, Gane &amp; Sarson. Three notations: <strong>Yourdon–Coad</strong>, <strong>Yourdon–DeMarco</strong> (circles for processes) and <strong>Gane–Sarson</strong> (rounded rectangles).</p>
<h4>Four components</h4>
<ol>
<li><strong>External entity</strong> — outside system that sends/receives data (a.k.a. terminator/source/sink); drawn at the edges.</li>
<li><strong>Process</strong> — changes data and produces output (label: “Submit payment”).</li>
<li><strong>Data store</strong> — files/repositories holding data (“Orders”).</li>
<li><strong>Data flow</strong> — the route data takes, shown by labeled arrows (“Billing details”).</li>
</ol>
<h4>Rules</h4>
<ul>
<li>Each process has ≥1 input and ≥1 output.</li>
<li>Each data store has ≥1 flow in and ≥1 flow out.</li>
<li>Stored data must go through a process.</li>
<li>All processes lead to another process or a data store.</li>
</ul>
<h4>Levels</h4>
<p><strong>Level 0 = Context Diagram</strong> (whole system as one process + external entities) → <strong>Level 1</strong> (main sub-processes) → <strong>Level 2</strong> (deeper detail). Beyond Level 3 is uncommon. Sufficiently detailed DFDs lead to <strong>pseudocode</strong>. Compared to UML: a DFD shows how data flows; UML (class/structure diagrams) gives the OO detail for actually building the system.</p>` }
      ],
      terms: [
        ["Persistence","Storing objects so they outlive a single execution."],
        ["Impedance Mismatch","Mismatch between OO model and relational tables."],
        ["ORM","Class→table, object→row, attribute→column, association→FK."],
        ["Persistence Layer","Isolates business logic from storage technology."],
        ["DFD","Diagram of data flow: external entity, process, data store, data flow."],
        ["Context Diagram (DFD)","Level-0 DFD: whole system + external entities."]
      ],
      tips: [
        "Explain <b>object→relational mapping</b> (class/object/attribute/identity/association).",
        "Know the <b>4 DFD components</b>, the <b>4 DFD rules</b>, and the <b>levels (0/1/2)</b>.",
        "Compare a <b>DFD</b> with a <b>UML</b> model; name the three DFD notations."
      ],
      videos: [
        ["Data Flow Diagram Tutorial","Symbols, levels, rules","data flow diagram DFD tutorial"],
        ["Context Diagram (Level 0)","Building the level-0 DFD","context diagram level 0 DFD example"],
        ["Object Relational Mapping","ORM &amp; impedance mismatch","object relational mapping ORM explained"]
      ]
    },

    /* ========================== WEEK 11 ========================== */
    {
      id: "w11", num: 11,
      title: "Basics of Design Patterns (GoF)",
      chapter: "Gamma et al. (Gang of Four)",
      summary: "What a design pattern is, architecture vs. design patterns, the 4 essential elements, the creational/structural/behavioral × class/object classification, and the key patterns: Composite, Adapter, Facade, Proxy, Observer, Strategy, Command, State, Visitor.",
      tags: ["Design Patterns","GoF","Observer","Strategy","Adapter","Composite"],
      sections: [
        { id:"w11-1", h:"What is a Design Pattern?", b:`
<blockquote>“Each pattern describes a problem which occurs over and over again in our environment, and then describes the core of the solution to that problem, in such a way that you can use this solution a million times over, without ever doing it the same way twice.” — Christopher Alexander, 1977</blockquote>
<p>In software engineering, design patterns are described in terms of <strong>objects and interfaces</strong>, not walls and doors — the manner in which interacting objects collaborate to accomplish a task. They support <strong>OO reuse at a high level of abstraction</strong> and provide a framework that guides and constrains implementation.</p>
<p>Key books: <em>Design Patterns: Elements of Reusable OO Software</em> (GoF — Gamma, Helm, Johnson, Vlissides, 1995); Fowler's <em>Analysis Patterns</em> (1997); Alpert/Brown/Woolf <em>Smalltalk Companion</em> (1998).</p>` },
        { id:"w11-2", h:"4 Essential Elements & Classification", b:`
<p>Every pattern has <strong>4 essential elements</strong>: <strong>Pattern name</strong>, <strong>Problem</strong>, <strong>Solution</strong>, <strong>Consequences</strong>.</p>
<p>The GoF catalog is organized by <strong>Purpose</strong> × <strong>Scope</strong>:</p>
<table><thead><tr><th>Purpose →<br/>Scope ↓</th><th>Creational</th><th>Structural</th><th>Behavioral</th></tr></thead><tbody>
<tr><td><strong>Class</strong></td><td>Factory Method</td><td>Adapter (class)</td><td>Interpreter, Template Method</td></tr>
<tr><td><strong>Object</strong></td><td>Abstract Factory, Builder, Prototype, Singleton</td><td>Adapter (object), Bridge, Composite, Decorator, Facade, Flyweight, Proxy</td><td>Chain of Responsibility, Command, Iterator, Mediator, Memento, Observer, State, Strategy, Visitor</td></tr>
</tbody></table>` },
        { id:"w11-3", h:"Structural Patterns", b:`
<ul>
<li><strong>Composite</strong> — compose objects into <em>tree structures</em> for part-whole hierarchies; clients treat individual objects and compositions <em>uniformly</em>. (Component / Leaf / Composite.)</li>
<li><strong>Adapter</strong> — convert the interface of one class into another interface clients expect; lets incompatible classes work together. The Adapter calls Adaptee operations.</li>
<li><strong>Facade</strong> — provide a simple interface to a complex subsystem; decouples subsystem details from clients; gives a layered approach. The Facade knows which classes handle each request; subsystem classes have no knowledge of the facade.</li>
<li><strong>Proxy</strong> — provide a surrogate/placeholder to control access. Subject defines the common interface; Proxy maintains a reference to RealSubject and may add marshaling, caching or access validation.</li>
</ul>` },
        { id:"w11-4", h:"Behavioral Patterns", b:`
<ul>
<li><strong>Observer</strong> — one-to-many dependency: when the Subject changes state, all dependent Observers are notified and updated automatically. Use when changing one object requires changing an unknown number of others.</li>
<li><strong>Strategy</strong> — define a family of algorithms, encapsulate each, make them interchangeable (e.g. a <code>SortStrategy</code> with QuickSort/MergeSort/InsertionSort set at runtime).</li>
<li><strong>Command</strong> — encapsulate a request as an object; lets you parameterize, queue/log requests and support undo. Roles: Command, ConcreteCommand, Client, Invoker, Receiver.</li>
<li><strong>State</strong> — an object alters its behavior when its internal state changes (replaces large multipart conditionals). Context delegates to the current ConcreteState.</li>
<li><strong>Visitor</strong> — represent an operation to be performed on the elements of an object structure; define a new operation without changing the element classes.</li>
</ul>
<div class="callout tip"><div class="ttl">Architecture vs Design pattern</div>
<p><strong>Architecture pattern</strong> = high-level structure of the <em>entire system</em> (Layered, Microservices, Client-Server). <strong>Design pattern</strong> = low-level solution for a recurring problem <em>within components</em> (Singleton, Factory, Strategy, Observer). Scope: broad vs narrow.</p></div>` }
      ],
      terms: [
        ["Design Pattern","Reusable core solution to a recurring design problem."],
        ["4 Elements","Name, Problem, Solution, Consequences."],
        ["Creational/Structural/Behavioral","Object creation / composition / interaction."],
        ["Composite","Tree of part-whole; uniform treatment."],
        ["Adapter","Convert one interface into another."],
        ["Facade","Simple interface to a complex subsystem."],
        ["Observer","One-to-many auto-notification on state change."],
        ["Strategy","Interchangeable encapsulated algorithms."],
        ["Command","Request encapsulated as an object (queue/undo)."]
      ],
      tips: [
        "Memorise the <b>4 essential elements</b> and the <b>Purpose×Scope</b> table.",
        "For each key pattern give a <b>one-line intent + when to use it</b> (Observer, Strategy, Adapter, Facade, Composite, Proxy, Command, State, Visitor).",
        "Be ready to <b>distinguish architecture vs design patterns</b>."
      ],
      videos: [
        ["Design Patterns Overview","Creational/Structural/Behavioral map","design patterns overview gang of four"],
        ["Observer Pattern","Intent + example","observer design pattern explained"],
        ["Strategy Pattern","Interchangeable algorithms","strategy design pattern explained"],
        ["Adapter / Facade / Composite","Structural patterns","adapter facade composite design pattern"]
      ]
    },

    /* ========================== WEEK 12 ========================== */
    {
      id: "w12", num: 12,
      title: "Components & Reuse",
      chapter: "Ashrafi Ch. 15",
      summary: "Components as reusable replaceable units, provided/required interfaces & ports, component vs. class, deployment, COTS & frameworks, and the benefits and risks of software reuse.",
      tags: ["Component","Reuse","Interface","COTS","Framework"],
      sections: [
        { id:"w12-1", h:"What is a Component?", b:`
<div class="def-box"><span class="term">Component</span> — a reusable and replaceable software unit that provides services <em>independent of particular applications</em>.<br/><span class="term">Reuse</span> — technologies and concepts that allow software units to be used by more than one application or information system.</div>
<p>A component is larger-grained than a class: it is a <em>black box</em> defined by its <strong>interfaces</strong>, not its implementation, and can be deployed and replaced independently. (Recall Week 6: the <code>#</code> <strong>protected</strong> visibility is discussed in the Components &amp; Reuse chapter.)</p>` },
        { id:"w12-2", h:"Provided & Required Interfaces, Ports", b:`
<ul>
<li><strong>Provided interface</strong> — services the component offers to others (lollipop notation ⎯○).</li>
<li><strong>Required interface</strong> — services the component needs from others (socket notation ⎯C).</li>
<li><strong>Port</strong> — a named interaction point that groups provided/required interfaces.</li>
</ul>
<p>Components connect via <strong>matching interfaces</strong> (the required interface of one plugs into the provided interface of another) — this enables <strong>replaceability</strong>: any component offering the same provided interface can be substituted.</p>
<div class="diagram">  ┌───────────────┐            ┌───────────────┐
○─┤  Billing      ├──C    ○────┤  PaymentGW    │
  │  «component»  │   │   │    │  «component»  │
  └───────────────┘   └───┘    └───────────────┘
  provided       required  →  provided</div>` },
        { id:"w12-3", h:"Component vs. Class · Deployment", b:`
<table><thead><tr><th></th><th>Class</th><th>Component</th></tr></thead><tbody>
<tr><td>Granularity</td><td>Fine</td><td>Coarse</td></tr>
<tr><td>Defined by</td><td>Attributes &amp; operations</td><td>Provided/required interfaces</td></tr>
<tr><td>Deployment</td><td>Compiled into a program</td><td>Independently deployable &amp; replaceable</td></tr>
<tr><td>Reuse level</td><td>Source/library</td><td>Binary/service</td></tr>
</tbody></table>
<p>A <strong>deployment diagram</strong> shows artifacts/components on physical <strong>nodes</strong>. <strong>COTS</strong> (Commercial Off-The-Shelf) components and <strong>frameworks</strong> (reusable semi-finished architectures with “hot spots” you extend) are major reuse mechanisms; <strong>design patterns</strong> are reuse at the design level.</p>` },
        { id:"w12-4", h:"Benefits & Risks of Reuse", b:`
<table><thead><tr><th>Benefits</th><th>Risks / costs</th></tr></thead><tbody>
<tr><td>Faster development &amp; time-to-market</td><td>Component may not exactly fit requirements</td></tr>
<tr><td>Higher reliability (proven units)</td><td>Maintenance depends on the supplier (COTS)</td></tr>
<tr><td>Lower cost &amp; effort</td><td>Integration / interface-mismatch overhead</td></tr>
<tr><td>Consistency &amp; standardization</td><td>Up-front investment to build reusable assets</td></tr>
<tr><td>Lets teams focus on domain logic</td><td>“Illusion of completeness”, version/lock-in issues</td></tr>
</tbody></table>` }
      ],
      terms: [
        ["Component","Reusable, replaceable unit providing app-independent services."],
        ["Reuse","Using software units across multiple applications."],
        ["Provided Interface","Services a component offers."],
        ["Required Interface","Services a component needs."],
        ["Port","Named interaction point grouping interfaces."],
        ["COTS","Commercial Off-The-Shelf component."],
        ["Framework","Reusable semi-finished architecture with extension points."]
      ],
      tips: [
        "Define <b>component &amp; reuse</b> using the slide wording (app-independent services).",
        "Explain <b>provided vs required interface</b> and why this gives replaceability.",
        "Contrast <b>component vs class</b>; list <b>benefits &amp; risks of reuse</b>."
      ],
      videos: [
        ["Component-Based Development","Components, interfaces, reuse","component based software engineering"],
        ["UML Component Diagram","Provided/required interfaces, ports","UML component diagram tutorial"],
        ["Software Reuse","Benefits, risks, COTS, frameworks","software reuse benefits risks explained"]
      ]
    },

    /* ========================== WEEK 13 ========================== */
    {
      id: "w13", num: 13,
      title: "Software Architecture & Architecture Patterns",
      chapter: "Architecture handout + Gomaa",
      summary: "Software architecture as the system blueprint, architecture vs. design patterns, and the ten architecture patterns (Layered, Client-Server, Event-Driven, Microkernel, Microservices, Space-Based, Master-Slave, Pipe-Filter, Broker, Peer-to-Peer) with advantages, disadvantages and use cases.",
      tags: ["Architecture","Layered","Microservices","Event-Driven","Patterns"],
      sections: [
        { id:"w13-1", h:"What is Software Architecture?", b:`
<div class="def-box"><span class="term">Software architecture</span> — the high-level structure of a system: the rules, patterns and guidelines that dictate organization, interactions and component relationships. It is the <em>blueprint</em> ensuring the system meets requirements and is maintainable and scalable.</div>
<p>(Recall Week 8: architecture = arrangement of the parts and their interrelationships; a <strong>layer</strong> is a collection of components with similar services / high mutual dependency.)</p>
<p>Concerns it addresses: <strong>modularity</strong>, <strong>encapsulation</strong>, <strong>security</strong>, <strong>documentation</strong>, <strong>performance</strong>.</p>
<table><thead><tr><th></th><th>Architecture Pattern</th><th>Design Pattern</th></tr></thead><tbody>
<tr><td>Scope</td><td>Broad — entire system</td><td>Narrow — individual components</td></tr>
<tr><td>Purpose</td><td>Establish system layout</td><td>Reusable solution to recurring problem</td></tr>
<tr><td>Examples</td><td>Layered, Microservices, Client-Server</td><td>Singleton, Factory, Strategy, Observer</td></tr>
</tbody></table>` },
        { id:"w13-2", h:"Layered & Client-Server", b:`
<h4>Layered (N-tier)</h4>
<p>Components are separated into independent layers, one above another. Classic 4 layers: <strong>Presentation</strong> → <strong>Business</strong> → <strong>Application</strong> → <strong>Data</strong>. <em>+ Scalability, flexibility, maintainability. − Complexity, performance overhead, strict-separation inefficiency.</em> Use: CRM, e-commerce, desktop &amp; mobile apps, CMS.</p>
<h4>Client-Server</h4>
<p>A server holds resources; multiple clients request them and the server responds. <em>+ Centralized management, scalability, security. − Single point of failure, costly, complex.</em> Use: web apps, email, file sharing, streaming, Moodle.</p>` },
        { id:"w13-3", h:"Event-Driven · Microkernel · Microservices", b:`
<ul>
<li><strong>Event-Driven</strong> — services are triggered by <em>events</em> (state changes/reactions). + Scalable, real-time, flexible. − Complex to design/test, reliability needs extra mechanisms. Use: real-time analytics, IoT, fraud detection, online games, chatbots.</li>
<li><strong>Microkernel</strong> — a minimal <strong>core system</strong> + <strong>plug-in modules</strong> for extra features. + Flexible, scalable, maintainable. − Complex core↔plug-in communication, lacks built-in features. Use: OS (Windows NT, macOS), embedded, Eclipse IDE.</li>
<li><strong>Microservices</strong> — small independent services bundled into an application; loosely coupled. + Independent scaling, faster delivery, easier maintenance. − Complex management, network congestion, security surface. Use: Amazon, Netflix, online banking, EHR, social media.</li>
</ul>` },
        { id:"w13-4", h:"Space-Based · Master-Slave · Pipe-Filter · Broker · P2P", b:`
<ul>
<li><strong>Space-Based</strong> (cloud/grid) — shared memory space accessed by multiple nodes; solves high-traffic scalability. + Scalable, performant, flexible. − Complex, costly, network latency.</li>
<li><strong>Master-Slave</strong> (primary-secondary) — a master assigns tasks to slaves which report results back; parallel processing/load distribution. − Master is a single point of failure. Use: DB replication, load balancing, sensor networks.</li>
<li><strong>Pipe-Filter</strong> — filters process data and pass it via pipes. + Reusability, scalability, parallelism. − Hard debugging, data-format constraints, latency. Use: ETL, compilers, stream processing, image/signal processing.</li>
<li><strong>Broker</strong> — a broker routes requests to appropriate servers in a distributed system. + Scalable, flexible, fault-tolerant. − Complex, broker can be a single point of failure. Use: enterprise integration, RabbitMQ/Kafka, IoT.</li>
<li><strong>Peer-to-Peer</strong> — decentralized; each peer is both client and server. + Scalable, fault-tolerant, cost-efficient. − Security, data consistency, complex management. Use: BitTorrent, blockchain, Skype.</li>
</ul>
<div class="callout exam"><div class="ttl">Choosing the right architecture</div>
<p>Consider <strong>scalability, performance, availability, security, budget, technology stack</strong>. The handout's summary: Layered → e-commerce; Client-Server → email/banking; Event-Driven → reactive apps; Microkernel → easy feature addition; Microservices → scalable/flexible (Netflix).</p></div>` }
      ],
      terms: [
        ["Software Architecture","High-level blueprint: rules, patterns, relationships."],
        ["Architecture vs Design Pattern","Whole system vs within-component scope."],
        ["Layered (N-tier)","Presentation/Business/Application/Data layers."],
        ["Event-Driven","Services triggered by events."],
        ["Microservices","Small independent loosely-coupled services."],
        ["Microkernel","Minimal core + plug-ins."],
        ["Pipe-Filter","Filters connected by pipes (ETL, compilers)."],
        ["Broker / P2P","Intermediary routing / decentralized peers."]
      ],
      tips: [
        "Be able to give <b>+ / − / use case</b> for Layered, Client-Server, Event-Driven, Microservices, Microkernel.",
        "State the <b>architecture vs design pattern</b> distinction crisply.",
        "Name the <b>4 layers</b> of layered architecture and the <b>choosing criteria</b>."
      ],
      videos: [
        ["Software Architecture Patterns","Tour of the main patterns","software architecture patterns explained"],
        ["Layered / N-tier Architecture","The classic layered style","layered n-tier architecture explained"],
        ["Microservices vs Monolith","Trade-offs","microservices vs monolithic architecture"],
        ["Event-Driven Architecture","Events, producers, consumers","event driven architecture explained"]
      ]
    },

    /* ========================== WEEK 14 ========================== */
    {
      id: "w14", num: 14,
      title: "Client-Server & Service-Oriented Architectures",
      chapter: "Gomaa — distributed architectures",
      summary: "Client-server tiers (2/3/N-tier, thin vs. thick client), Service-Oriented Architecture (services, loose coupling, contracts, ESB, orchestration), web services (SOAP/REST), and how SOA relates to microservices, component-based, concurrent and real-time architectures.",
      tags: ["Client-Server","SOA","Web Services","REST","Tiers"],
      sections: [
        { id:"w14-1", h:"Client-Server Tiers", b:`
<p>The client-server style splits responsibility between requesting <strong>clients</strong> and resource-holding <strong>servers</strong>.</p>
<table><thead><tr><th>Topology</th><th>Tiers</th><th>Notes</th></tr></thead><tbody>
<tr><td><strong>2-tier</strong></td><td>Client ↔ Server (DB)</td><td>Business logic in the client (“fat client”) or DB. Simple, limited scalability.</td></tr>
<tr><td><strong>3-tier</strong></td><td>Presentation · Application/Business · Data</td><td>The most common enterprise topology (maps to the layered pattern).</td></tr>
<tr><td><strong>N-tier</strong></td><td>+ web tier, integration tier, …</td><td>Each tier scales independently.</td></tr>
</tbody></table>
<p><strong>Thin client</strong> — minimal logic, server does the work (e.g. browser). <strong>Thick/fat client</strong> — significant logic on the client. Trade-offs: centralized control &amp; security vs. single point of failure &amp; cost.</p>` },
        { id:"w14-2", h:"Service-Oriented Architecture (SOA)", b:`
<div class="def-box"><span class="term">SOA</span> — an architecture in which functionality is provided as <strong>services</strong>: self-contained, <strong>loosely coupled</strong> units with well-defined <strong>contracts</strong>, discoverable and reusable across applications.</div>
<p>Principles: <strong>loose coupling</strong>, <strong>service contract</strong> (interface/WSDL), <strong>abstraction</strong> (hide implementation), <strong>reusability</strong>, <strong>composability</strong>, <strong>discoverability</strong>, <strong>statelessness</strong>. An <strong>Enterprise Service Bus (ESB)</strong> handles routing, transformation and protocol mediation between services; <strong>orchestration</strong> coordinates services into a business process. SOA is the architectural ancestor of the <em>microservices</em> pattern (Week 13) — microservices are finer-grained, independently deployable services without a heavy central ESB.</p>` },
        { id:"w14-3", h:"Web Services — SOAP vs. REST", b:`
<table><thead><tr><th></th><th>SOAP</th><th>REST</th></tr></thead><tbody>
<tr><td>Style</td><td>Protocol (XML envelope)</td><td>Architectural style over HTTP</td></tr>
<tr><td>Contract</td><td>WSDL, strict</td><td>Resources + HTTP verbs, lightweight</td></tr>
<tr><td>Payload</td><td>XML</td><td>JSON / XML / …</td></tr>
<tr><td>Strengths</td><td>Standards, security (WS-*), transactions</td><td>Simple, scalable, cache-friendly</td></tr>
<tr><td>Typical use</td><td>Enterprise, banking</td><td>Web/mobile APIs, microservices</td></tr>
</tbody></table>` },
        { id:"w14-4", h:"Related Architectural Styles (course objectives)", b:`
<p>The syllabus lists the architectural styles this course introduces. Tie them together:</p>
<ul>
<li><strong>Object-oriented</strong> — objects collaborate via messages (Weeks 3, 6, 7).</li>
<li><strong>Client-server</strong> — request/response over tiers (this week).</li>
<li><strong>Service-oriented</strong> — services + contracts + ESB (this week).</li>
<li><strong>Component-based</strong> — replaceable units via provided/required interfaces (Week 12).</li>
<li><strong>Concurrent</strong> — multiple tasks/processes executing in parallel; needs synchronization (relevant to event-driven &amp; master-slave, Week 13).</li>
<li><strong>Real-time</strong> — correctness depends on meeting <em>timing deadlines</em>; statecharts (Week 7) are heavily used to model real-time behavior.</li>
<li><strong>Microservice</strong> — fine-grained, independently deployable SOA (Week 13).</li>
</ul>
<div class="callout exam"><div class="ttl">Likely final question</div><p>“Compare client-server, SOA and microservices” — answer with <em>granularity</em>, <em>coupling</em>, <em>deployment</em>, <em>communication</em> and a use case for each.</p></div>` }
      ],
      terms: [
        ["2/3/N-tier","Client-server topologies; 3-tier ≈ layered."],
        ["Thin vs Thick Client","Server-heavy vs client-heavy logic."],
        ["SOA","Loosely-coupled services with contracts."],
        ["Service Contract","The interface/agreement a service exposes."],
        ["ESB","Enterprise Service Bus — routing/transformation hub."],
        ["SOAP vs REST","XML protocol vs HTTP architectural style."],
        ["Real-time Architecture","Correctness depends on timing deadlines."]
      ],
      tips: [
        "Draw/explain <b>2-tier vs 3-tier</b> and map 3-tier to the layered pattern.",
        "List <b>SOA principles</b> and the <b>SOAP vs REST</b> differences.",
        "Be ready to <b>compare client-server, SOA and microservices</b> in a table."
      ],
      videos: [
        ["Client-Server & Tiers","2-tier vs 3-tier vs n-tier","2 tier vs 3 tier architecture explained"],
        ["SOA Explained","Service-oriented architecture principles","service oriented architecture SOA explained"],
        ["SOAP vs REST","Web service styles compared","soap vs rest api difference"],
        ["SOA vs Microservices","How they relate and differ","SOA vs microservices difference"]
      ]
    }
  ]
};
