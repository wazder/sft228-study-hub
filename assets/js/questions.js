/* ============================================================
   SFT228 — Question bank: multiple-choice, open-ended, and
   full mock midterm + final exams. Answers verified against
   the lecture slides and the supplementary handouts.
   mcq:  { w, q, o:[...], a:correctIndex, e:explanation }
   open: { w, q, a:modelAnswerHTML }
   ============================================================ */
window.SFT_QA = {

  /* ----------------------- MULTIPLE CHOICE ----------------------- */
  mcq: [
    /* Week 1 */
    { w:1, q:"An information system is best defined as a system that:", o:[
      "stores files on a disk","processes data into information","connects computers in a network","writes program code"], a:1,
      e:"Per the slides: 'Information systems are systems that process data into information.'" },
    { w:1, q:"Which is the correct distinction between a system and a network?", o:[
      "A system's elements are fully independent; a network's are not",
      "A network's elements can more or less function independently; a system's cannot function the same way if removed",
      "They are identical concepts",
      "A network has no elements"], a:1,
      e:"Elements within a system cannot function the same way if taken out; network elements are relatively independent (e.g. workstations on the Internet)." },
    { w:1, q:"All commercial products share three basic traits. Which is NOT one of them?", o:[
      "They must satisfy requirements or exploit opportunities",
      "They are human artifacts that must be built",
      "Their development must follow a methodology",
      "They must be written in an object-oriented language"], a:3,
      e:"The three traits are requirements, being built artifacts, and following a methodology — language choice is not one of them." },
    { w:1, q:"Understanding the problem space is the job of ___ ; designing the product happens in the ___ .", o:[
      "design / problem space","analysis / solution space","testing / problem space","coding / solution space"], a:1,
      e:"Analysis = understanding the problem space; design = working in the solution space." },
    { w:1, q:"Which quality attribute means 'its output is predictable within an acceptable range'?", o:[
      "Correctness","Reliability","Robustness","Efficiency"], a:1,
      e:"Reliability = predictable output within an acceptable range. Robustness = resists mishandling." },
    { w:1, q:"The task of information technology is to support ___ ; the task of information systems is to support ___ .", o:[
      "human enterprises / IT","information systems / human enterprises","networks / databases","users / programmers"], a:1,
      e:"IT supports information systems; information systems support human enterprises." },
    { w:1, q:"Which of the following is an infrastructural information system that records and processes routine activities?", o:[
      "Business Intelligence (BI)","Transaction Processing System (TPS)","B2C system","System software"], a:1,
      e:"A TPS records and processes data about the routine activities of an enterprise." },
    { w:1, q:"'Requirements are NOT product specifications.' This statement means:", o:[
      "Requirements and specifications are the same",
      "Requirements state objectives users must achieve; specifications define the product that realizes them",
      "Specifications come before requirements",
      "Requirements are optional"], a:1,
      e:"Requirements identify objectives the product must help users achieve; product specifications define the product itself." },

    /* Week 2 */
    { w:2, q:"'Method' defines a ___ while 'methodology' defines a ___ .", o:[
      "strategy / tactic","tactic / strategy","goal / scope","tool / rule"], a:1,
      e:"Method = tactic, methodology = strategy; a tactic often only makes sense within a strategy." },
    { w:2, q:"Which is a documented, sequential, document-driven lifecycle whose design is conceived as processes and data, not objects?", o:[
      "Spiral model","Waterfall model","Extreme Programming","Microkernel"], a:1,
      e:"The Waterfall model: sequential phases, document-driven, design as processes & data." },
    { w:2, q:"The Spiral model is best described as:", o:[
      "a document-driven sequential model","a risk-oriented model that breaks the project into mini-projects","an agile method with user stories","a maturity rating framework"], a:1,
      e:"The Spiral model is risk-oriented and splits the project into mini-projects." },
    { w:2, q:"In throwaway prototyping, the prototype is:", o:[
      "refined repeatedly until it becomes the final product",
      "discarded once the correct specifications are confirmed",
      "never built",
      "delivered directly to the customer as the product"], a:1,
      e:"Throwaway: discarded after stakeholders are confident the specifications are correct. Incremental: refined into the product." },
    { w:2, q:"Which is NOT listed as a limitation of the Waterfall model?", o:[
      "Inflexibility","Over-reliance on documentation","Detachment from the marketplace","Excessive use of pair programming"], a:3,
      e:"Pair programming is an XP practice, not a Waterfall limitation. The limits: inflexibility, over-documentation, detachment from technology/marketplace/profession." },
    { w:2, q:"The correct order of CMM maturity levels is:", o:[
      "Initial → Defined → Repeatable → Managed → Optimizing",
      "Initial → Repeatable → Defined → Managed → Optimizing",
      "Repeatable → Initial → Managed → Defined → Optimizing",
      "Initial → Managed → Repeatable → Defined → Optimizing"], a:1,
      e:"CMM: Initial → Repeatable → Defined → Managed → Optimizing." },
    { w:2, q:"In XP, CRC cards, spike solutions and refactoring belong to which practice group?", o:[
      "Planning","Designing","Coding","Testing"], a:1,
      e:"Designing: CRC cards, spike solutions, refactoring. Planning: user stories, release plan, pair programming." },
    { w:2, q:"Which statement captures the slide's view of project management vs. development?", o:[
      "Both are iterative","Both are sequential","Project plan is sequential in concept; development is iterative in practice","Development is sequential; project plan is iterative"], a:2,
      e:"'Project plan is sequential in concept. Software development is iterative in practice.'" },
    { w:2, q:"A full object-oriented development requires three things. Which is one of them?", o:[
      "A waterfall plan","An OO analysis and design","A throwaway prototype","A CMM level-5 rating"], a:1,
      e:"OO technology + OO analysis & design + a project plan adapted to an OO approach." },

    /* Week 3 */
    { w:3, q:"Object identity is described as:", o:[
      "changeable and shareable","unique and unchanging","equal to the object's state","the same as a class"], a:1,
      e:"Identity is unique (cannot be faked) and unchanging (perception does not change even if the object changes)." },
    { w:3, q:"The state of an object is:", o:[
      "its unique identifier","the combination of its attributes and their current values","its list of operations only","its superclass"], a:1,
      e:"State = the combination of an object's attributes and their associated values at a stage in its lifetime." },
    { w:3, q:"Composition differs from aggregation because:", o:[
      "composition has no parts","in composition the life of the components relies on the life of the whole",
      "aggregation is a strong form of composition","they are identical"], a:1,
      e:"Composition is a strong aggregation where the components' lifetime depends on the whole's." },
    { w:3, q:"Polymorphism is:", o:[
      "packaging data and processes together",
      "the ability of objects of different classes to perform the same operation differently",
      "hiding internal workings","creating a subclass"], a:1,
      e:"Polymorphism: different classes perform the same operation differently (one operation → many methods)." },
    { w:3, q:"In the domain dictionary, nouns (subjects/objects) are primarily candidates for:", o:[
      "methods","objects in an OO sense","business rules","actors only"], a:1,
      e:"Nouns are candidates for becoming objects; verbs indicate processes (and may hide nouns)." },
    { w:3, q:"UML supports three views of the same system. They are:", o:[
      "Owner's, Architect's, Builder's","Past, Present, Future","Static, Dynamic, Real-time","Input, Process, Output"], a:0,
      e:"Owner's (conceptual), Architect's (logical), Builder's (physical)." },
    { w:3, q:"Business classes vs. utility classes:", o:[
      "Business classes are defined in design; utility in analysis",
      "Business classes have a real-world counterpart (analysis); utility classes do not (design)",
      "They are the same","Utility classes always have a real-world counterpart"], a:1,
      e:"Business classes have real-world counterparts (discovered in analysis); utility classes are defined in design." },
    { w:3, q:"Which is a correct section of a domain-analysis document (supplementary handout)?", o:[
      "Source code listing","Glossary of domain terms","Unit test results","Deployment diagram"], a:1,
      e:"The document includes Introduction, Glossary, General knowledge, Customers/users, Environment, Tasks, Competing software, Similarities." },
    { w:3, q:"Encapsulation is best defined as:", o:[
      "concluding characteristics apply to a broader range",
      "packaging data and processes within one single unit",
      "a subclass incorporating a superclass's behavior",
      "the operations available to the public"], a:1,
      e:"Encapsulation = packaging data + processes in one unit. Information hiding conceals the internals; the interface is the public operations." },

    /* Week 4 */
    { w:4, q:"A use case is best described as:", o:[
      "an internal class diagram","a contract that formalizes the interaction between stakeholders and the system",
      "a database schema","a deployment node"], a:1,
      e:"A use case is a unit of system behavior and a contract formalizing stakeholder↔system interaction." },
    { w:4, q:"The four components of a use case are:", o:[
      "Goal, Stakeholders, System, Scenario","Actor, Class, Object, Method",
      "Name, ID, Scope, Priority","Normal, Alternate, Sub, Exception"], a:0,
      e:"Goal, Stakeholders, System, Scenario. (Name/ID/Scope/Priority are template fields; flows are parts of a scenario.)" },
    { w:4, q:"In a use-case diagram, the rectangle represents:", o:[
      "an actor","the system boundary / scope","an association","a use case"], a:1,
      e:"Rectangle = system boundary; stick figure = actor; ellipse = use case; line = association." },
    { w:4, q:"A primary actor is one whose:", o:[
      "goal is specified by the name of the use case","interests are never affected",
      "role supports another actor","actions are always automated"], a:0,
      e:"The primary actor's goal is the use-case name; supporting/secondary actors assist the primary actor." },
    { w:4, q:"Which is NOT a part of a scenario?", o:[
      "Normal flow","Alternate flow","Sub-flows","Multiplicity"], a:3,
      e:"A scenario = normal flow, alternate flow, sub-flows, exceptions. Multiplicity belongs to class diagrams." },
    { w:4, q:"The context diagram is composed of:", o:[
      "classes, attributes, operations",
      "a system/subsystem, outside entities, and the interactions between them",
      "actors, use cases, include/extend",
      "states, transitions, events"], a:1,
      e:"Context diagram = system as a whole + outside entities + their interactions." },
    { w:4, q:"Which statement is TRUE about what use-case modeling is NOT?", o:[
      "It models the system from the inside",
      "It is effective for non-functional requirements",
      "It is the same as functional decomposition",
      "It describes what a system accomplishes, not how"], a:3,
      e:"Use cases describe WHAT, not HOW; they are limited to external behavior and are NOT functional decomposition." },
    { w:4, q:"In the 'Purchase Groceries' example, the Point-of-Sale system is an example of a:", o:[
      "real (bricks-and-mortar) system","information system","context diagram","statechart"], a:1,
      e:"The POS is the information system; the bricks-and-mortar store is the real system." },

    /* Week 5 */
    { w:5, q:"An INCLUDE relationship means:", o:[
      "a use case optionally extends a base use case",
      "one use case uses the functionality of another independent use case",
      "two actors are generalized",
      "a use case is divided vertically"], a:1,
      e:"Include = one use case uses an independent use case's functionality (mandatory). Extend = optional/conditional addition to a base use case." },
    { w:5, q:"'Register Patient (Extend: 142 - Verify Credit Card) when the patient pays by credit card' illustrates:", o:[
      "an include relationship","an extend relationship","actor generalization","use-case division"], a:1,
      e:"A conditional addition to a base use case is an extend relationship." },
    { w:5, q:"Vertical division of a use case is needed when:", o:[
      "the flow is too complex or lacks unity","it has too many parallel steps",
      "two use cases must be combined","the actor must be generalized"], a:1,
      e:"Vertical division: too many parallel steps. Horizontal division: flow too complex / lacks unity." },
    { w:5, q:"In noun/verb analysis of a use case, verbs are primarily candidates for:", o:[
      "classes","attributes","methods/operations","actors"], a:2,
      e:"Nouns → candidate classes/objects; verbs → candidate methods/operations." },
    { w:5, q:"Use-case generalization is applied when:", o:[
      "use cases achieve the same goal by different means",
      "a use case has no actor",
      "the system boundary is unknown",
      "an actor has no role"], a:0,
      e:"Generalize use cases when they achieve the same goal by different means." },
    { w:5, q:"Which is a template field, NOT a scenario flow?", o:[
      "Normal flow","Trigger","Exception","Sub-flow"], a:1,
      e:"Trigger (the event that starts the use case) is a template field; the others are scenario flows." },
    { w:5, q:"Refactoring use cases means:", o:[
      "deleting all alternate flows",
      "abstracting and reorganizing common behavior into new use cases",
      "renaming the primary actor",
      "merging two actors"], a:1,
      e:"Refactoring abstracts and reorganizes common behavior among use cases into new use cases." },
    { w:5, q:"The actor dictionary records, for each actor, all of the following EXCEPT:", o:[
      "description","whether it is abstract","the use cases it participates in","its private attributes' SQL types"], a:3,
      e:"Actor dictionary: actor, description, abstract flag, and the use cases — not SQL/implementation detail." },

    /* Week 6 */
    { w:6, q:"In UML, the symbol '#' denotes which visibility?", o:[
      "Public","Private","Protected","Package"], a:2,
      e:"+ public, - private, # protected, ~ package (friend)." },
    { w:6, q:"The multiplicity '1..*' means:", o:[
      "zero or one","exactly one","one or more","zero or more"], a:2,
      e:"1..* = one or more. 0..* = zero or more; 0..1 = zero or one." },
    { w:6, q:"A class is described in structural modeling as:", o:[
      "only a real-world object","an abstraction of objects and a template for creating objects",
      "a single instance","a database table only"], a:1,
      e:"A class is both an abstraction of objects and a template for creating them." },
    { w:6, q:"'Responsibilities' of a class are:", o:[
      "what the class must know and do","its private keys","its visibility symbols","its package name"], a:0,
      e:"Responsibilities = what a class must know and do; defining a class fully = defining its responsibilities in detail." },
    { w:6, q:"Treating objects as 'black boxes' refers mainly to:", o:[
      "inheritance","information hiding / encapsulation","multiplicity","constraints"], a:1,
      e:"A black box hides inner workings; access only via the public interface (encapsulation / information hiding)." },
    { w:6, q:"A class diagram primarily shows:", o:[
      "messages ordered in time","a set of classes and their interrelationships",
      "states and transitions","data stores and flows"], a:1,
      e:"Class diagram = classes + their interrelationships. Time-ordered messages = sequence diagram." },
    { w:6, q:"In structural modeling, a constraint is:", o:[
      "an attribute's data type","a rule that applies to associations","a visibility symbol","an actor"], a:1,
      e:"Constraints are rules that apply to associations." },
    { w:6, q:"The CRC technique stands for:", o:[
      "Class-Responsibility-Collaboration","Create-Read-Change","Class-Relation-Constraint","Control-Required-Component"], a:0,
      e:"CRC = Class–Responsibility–Collaboration (from XP's designing practices, used to find/define classes)." },

    /* Week 7 */
    { w:7, q:"In an object-oriented virtual system, objects can interact ONLY by:", o:[
      "shared global variables","sending and receiving messages","direct memory access","file locks"], a:1,
      e:"The only possible way of interaction is through sending and receiving messages." },
    { w:7, q:"Which dynamic diagram emphasizes the order of interactions in time?", o:[
      "Statechart","Sequence diagram","Class diagram","Component diagram"], a:1,
      e:"Sequence diagram = order of interactions in time; collaboration = organization; statechart = state; activity = flow." },
    { w:7, q:"The difference between an operation and a method is:", o:[
      "they are identical","operation = what an object can do; method = how it is implemented",
      "method = what; operation = how","operation belongs to actors only"], a:1,
      e:"Operation = what an object does; method = how it is implemented (one operation → many methods = polymorphism)." },
    { w:7, q:"A statechart diagram is unique because it:", o:[
      "shows data stores","illustrates the milestones in the lifetime of one class of objects in its entirety",
      "shows physical nodes","lists requirements"], a:1,
      e:"It is the only dynamic model that can illustrate the milestones of one class of objects in its entirety." },
    { w:7, q:"An event is:", o:[
      "an attribute value","an action by one object that interrupts the condition of one or more other objects",
      "a return value","a constructor"], a:1,
      e:"Events are actions by one object that interrupt the existing condition of other objects." },
    { w:7, q:"Accessor operations are:", o:[
      "constructors and destructors","get (returns a value) and set (changes a value)",
      "public classes","UML notes"], a:1,
      e:"get returns the value of an attribute; set changes it." },
    { w:7, q:"The best way to arrive at a collaboration (communication) diagram is to:", o:[
      "start from a class diagram","start from a sequence diagram","start from a DFD","start from a deployment diagram"], a:1,
      e:"Collaboration = communication; the slides recommend deriving it from a sequence diagram." },
    { w:7, q:"On a sequence diagram, the dotted vertical line represents:", o:[
      "an association","the timeline / lifeline","a message","a state"], a:1,
      e:"The dotted vertical line is the timeline (lifeline); the hollow box on it is the object's activation/lifetime." },

    /* Week 8 */
    { w:8, q:"Logical design differs from physical design because logical design:", o:[
      "commits to a specific technology",
      "considers technological paradigms but stays clear of specific technologies",
      "is the same as coding",
      "ignores the problem domain"], a:1,
      e:"Logical design is paradigm-aware but technology-neutral; physical design commits to concrete technology." },
    { w:8, q:"A design object is:", o:[
      "always part of the problem domain",
      "not part of the problem domain but necessary to build the solution",
      "a business rule",
      "an actor"], a:1,
      e:"Design objects are not in the problem domain but are necessary for the solution." },
    { w:8, q:"UML stereotyping applies to:", o:[
      "what the elements represent in the real world",
      "modeling elements, not what those elements represent",
      "only database tables",
      "only actors"], a:1,
      e:"Stereotyping specializes/generalizes modeling elements (e.g. «control»), not what they represent." },
    { w:8, q:"A lifecycle object:", o:[
      "carries data between objects","creates, organizes, tracks and destroys other objects",
      "renders the user interface","stores SQL"], a:1,
      e:"A lifecycle object creates, organizes, tracks and destroys other objects (often entity instances)." },
    { w:8, q:"A dataset, as used in application design, is a:", o:[
      "control object","general-purpose utility object that carries data between objects within an application",
      "boundary object","persistence database"], a:1,
      e:"A dataset is a general-purpose utility object that carries data between objects." },
    { w:8, q:"The Web control model must recreate state on every request because web connections are:", o:[
      "encrypted","stateless","object-oriented","synchronous"], a:1,
      e:"Web connections are stateless; the application must recreate the state every time it receives a message." },
    { w:8, q:"A constructor method's role is to:", o:[
      "destroy an object","give the object the minimum data it needs to start its existence",
      "overload an operator","hide information"], a:1,
      e:"Constructors provide the minimum data an object requires to start existing." },
    { w:8, q:"A package in UML is:", o:[
      "a deployment node","a general-purpose mechanism for grouping related items in a hierarchy",
      "an actor","a constraint"], a:1,
      e:"A package groups related items hierarchically; a namespace gives unique naming within each sphere." },

    /* Week 9 */
    { w:9, q:"The user interface is best described as:", o:[
      "the database layer","the area of interaction between an application and its human users (where problem & solution domains meet)",
      "the control layer","a deployment node"], a:1,
      e:"The UI is where the problem domain and the solution domain meet and interact." },
    { w:9, q:"Which is a responsibility of the user interface?", o:[
      "Storing data permanently","Guiding users to accomplish tasks","Routing network packets","Compiling code"], a:1,
      e:"UI responsibilities: accept/edit input, produce intelligible output, guide users to accomplish tasks." },
    { w:9, q:"In HCI, 'Fit' refers to the match among:", o:[
      "client, server, network","human, computer, task","input, process, output","model, view, controller"], a:1,
      e:"Fit = the match among the Human, Computer and Task; it affects performance and well-being." },
    { w:9, q:"The Technology Acceptance Model (TAM) examines:", o:[
      "perceived usefulness and perceived ease of use","CPU and memory usage",
      "cost and schedule","lines of code"], a:0,
      e:"TAM examines perceived usefulness and perceived ease of use (plus attitudes)." },
    { w:9, q:"Controls that allow the user to choose between two or more options are called:", o:[
      "displayers","selectors","executors","decorators"], a:1,
      e:"Selectors allow the user to choose between options; executors run commands; displayers show info; decorators are aesthetic." },
    { w:9, q:"Which is a recognized type of user interface?", o:[
      "Form-fill interface","Pipe-filter interface","Broker interface","Master-slave interface"], a:0,
      e:"Types: natural-language, Q&A, menus, form-fill, command-language, GUI, web. The others are architecture patterns." },
    { w:9, q:"'Notifying that input is not in the correct form' is an example of:", o:[
      "a usability heuristic","a type of user feedback","a design pattern","an actor"], a:1,
      e:"It is one of the listed types of feedback for users." },
    { w:9, q:"The two components of the user interface are the presentation language and the:", o:[
      "action language","query language","markup language","machine language"], a:0,
      e:"Presentation language = computer→human; action language = human→computer." },

    /* Week 10 */
    { w:10, q:"Persistence design is fundamentally about:", o:[
      "rendering the UI","mapping the object space to the data space",
      "compiling code","routing events"], a:1,
      e:"Persistence maps the 'object space' to the 'data space' so objects outlive a single execution." },
    { w:10, q:"In object→relational mapping, a class typically maps to a:", o:[
      "row","column","table","foreign key"], a:2,
      e:"Class→table, object→row, attribute→column, identity→primary key, association→foreign key." },
    { w:10, q:"A DFD process must have:", o:[
      "no inputs","at least one input and one output","only a data store","only an external entity"], a:1,
      e:"DFD rule: each process should have at least one input and one output." },
    { w:10, q:"A Level-0 DFD is also called a:", o:[
      "context diagram","class diagram","sequence diagram","deployment diagram"], a:0,
      e:"Level 0 DFD = context diagram: the whole system as a single process + external entities." },
    { w:10, q:"Which is one of the four DFD components?", o:[
      "Actor","Data store","State","Constructor"], a:1,
      e:"DFD components: external entity, process, data store, data flow." },
    { w:10, q:"In the Gane–Sarson notation, processes are drawn as:", o:[
      "circles","rounded rectangles (lozenges)","triangles","stick figures"], a:1,
      e:"Yourdon-Coad/DeMarco use circles for processes; Gane–Sarson use rounded rectangles." },
    { w:10, q:"The 'impedance mismatch' refers to the gap between:", o:[
      "UI and network","the object model and the relational model",
      "client and server","analysis and design"], a:1,
      e:"Objects use identity/inheritance/references; relational tables use values/keys/joins — the impedance mismatch." },
    { w:10, q:"A persistence layer is valuable because it:", o:[
      "speeds up the CPU","isolates business logic from how data is stored",
      "removes the need for a database","replaces the UI"], a:1,
      e:"It decouples business logic from storage technology — a layered-architecture idea." },

    /* Week 11 */
    { w:11, q:"The four essential elements of a design pattern are:", o:[
      "Name, Problem, Solution, Consequences","Class, Object, Method, Attribute",
      "Input, Process, Output, Storage","Actor, Goal, System, Scenario"], a:0,
      e:"Every GoF pattern has a Name, the Problem it addresses, the Solution, and the Consequences." },
    { w:11, q:"The Observer pattern defines:", o:[
      "a surrogate for another object","a one-to-many dependency so dependents are notified automatically on state change",
      "a tree of part-whole objects","a simplified interface to a subsystem"], a:1,
      e:"Observer: one-to-many; when the subject changes state, all observers are notified and updated automatically." },
    { w:11, q:"Which pattern converts the interface of one class into another interface clients expect?", o:[
      "Facade","Adapter","Proxy","Composite"], a:1,
      e:"Adapter converts one interface into another so incompatible classes can work together." },
    { w:11, q:"The Composite pattern lets clients:", o:[
      "control access to an object","treat individual objects and compositions uniformly",
      "encapsulate a request as an object","define interchangeable algorithms"], a:1,
      e:"Composite composes objects into trees and lets clients treat individual objects and compositions uniformly." },
    { w:11, q:"Encapsulating a request as an object to support undo/queue/log is the intent of:", o:[
      "Strategy","Command","State","Visitor"], a:1,
      e:"Command encapsulates a request as an object, enabling parameterization, queue/log, and undo." },
    { w:11, q:"Strategy pattern is used to:", o:[
      "provide a placeholder for another object","define a family of interchangeable algorithms",
      "notify dependents automatically","build tree structures"], a:1,
      e:"Strategy encapsulates interchangeable algorithms (e.g. QuickSort/MergeSort set at runtime)." },
    { w:11, q:"GoF patterns are classified by Purpose × Scope. The three Purposes are:", o:[
      "Creational, Structural, Behavioral","Class, Object, Interface",
      "Simple, Medium, Complex","Static, Dynamic, Real-time"], a:0,
      e:"Purpose: Creational, Structural, Behavioral. Scope: Class or Object." },
    { w:11, q:"Facade primarily:", o:[
      "controls access to a real subject","provides a simple interface to a complex subsystem",
      "lets behavior change with state","represents an operation on an object structure"], a:1,
      e:"Facade provides a simple interface to a complex subsystem and decouples it from clients." },

    /* Week 12 */
    { w:12, q:"A component is defined as:", o:[
      "a single class instance",
      "a reusable and replaceable software unit that provides services independent of particular applications",
      "a database row","a use case"], a:1,
      e:"Component = reusable, replaceable software unit providing application-independent services." },
    { w:12, q:"The 'provided interface' of a component is:", o:[
      "services it needs from others","services it offers to others",
      "its private attributes","its deployment node"], a:1,
      e:"Provided interface = services offered; required interface = services needed." },
    { w:12, q:"Component replaceability is possible because components connect via:", o:[
      "shared global variables","matching interfaces (required plugs into provided)",
      "the same source code","identical class names"], a:1,
      e:"Any component offering the same provided interface can be substituted (replaceability via matching interfaces)." },
    { w:12, q:"Compared with a class, a component is:", o:[
      "finer-grained and not deployable","coarser-grained and independently deployable/replaceable",
      "always abstract","never reusable"], a:1,
      e:"Components are coarser-grained, defined by interfaces, and independently deployable & replaceable." },
    { w:12, q:"COTS stands for:", o:[
      "Class-Oriented Test Suite","Commercial Off-The-Shelf","Component Of The System","Core Object Type Specification"], a:1,
      e:"COTS = Commercial Off-The-Shelf components, a major reuse mechanism alongside frameworks." },
    { w:12, q:"Which is a RISK of software reuse?", o:[
      "Faster development","Higher reliability","Maintenance may depend on the supplier (COTS lock-in)","Lower cost"], a:2,
      e:"Reuse risks include supplier-dependent maintenance, integration overhead, and up-front investment." },
    { w:12, q:"A framework is best described as:", o:[
      "a finished application","a reusable semi-finished architecture with extension points ('hot spots')",
      "a single design pattern","a deployment node"], a:1,
      e:"A framework is a reusable, semi-finished architecture you extend at defined hot spots." },
    { w:12, q:"The protected (#) visibility is explicitly discussed in which chapter?", o:[
      "Use Cases","Components & Reuse","Dynamic Modeling","Domain Analysis"], a:1,
      e:"The slides note that protected visibility is discussed in the Components & Reuse chapter." },

    /* Week 13 */
    { w:13, q:"An architecture pattern differs from a design pattern mainly in:", o:[
      "programming language","scope — entire system vs. within components",
      "the number of classes","whether it uses UML"], a:1,
      e:"Architecture pattern = broad, whole-system; design pattern = narrow, within components." },
    { w:13, q:"The classic four layers of the layered architecture pattern are:", o:[
      "Presentation, Business, Application, Data","Client, Server, Broker, Peer",
      "Core, Plug-in, Pipe, Filter","Master, Slave, Space, Event"], a:0,
      e:"Layered/N-tier: Presentation → Business → Application → Data." },
    { w:13, q:"A key disadvantage of the client-server pattern is:", o:[
      "no centralized management","single point of failure if the server fails",
      "impossible to scale","no security"], a:1,
      e:"Client-server: centralized server is a single point of failure; also costly and complex." },
    { w:13, q:"Which pattern uses a minimal core system plus plug-in modules?", o:[
      "Microservices","Microkernel","Pipe-Filter","Broker"], a:1,
      e:"Microkernel = core system + plug-in modules (e.g. Eclipse, Windows NT)." },
    { w:13, q:"Event-Driven Architecture is most appropriate for:", o:[
      "batch payroll once a month","real-time analytics, IoT and fraud detection",
      "a single-user desktop calculator","static brochure websites"], a:1,
      e:"EDA suits real-time/reactive systems: analytics, IoT, fraud detection, online games, chatbots." },
    { w:13, q:"Microservices are characterized by:", o:[
      "one large tightly-coupled program","small, loosely-coupled, independently deployable services",
      "a single shared database only","no network communication"], a:1,
      e:"Microservices: small, loosely-coupled, independently scalable/deployable services." },
    { w:13, q:"In the Pipe-Filter pattern:", o:[
      "a broker routes requests","filters process data and pass it via pipes",
      "peers act as client and server","a master assigns tasks to slaves"], a:1,
      e:"Pipe-Filter: each filter processes data and passes it to the next via a pipe (ETL, compilers)." },
    { w:13, q:"Which is a documented concern that software architecture addresses?", o:[
      "Compiler version","Modularity, encapsulation, security, performance",
      "Mouse DPI","Keyboard layout"], a:1,
      e:"Architecture addresses modularity, encapsulation, security, documentation and performance." },

    /* Week 14 */
    { w:14, q:"A 3-tier client-server topology typically separates:", o:[
      "Presentation, Application/Business, Data","Client and Server only",
      "Core and Plug-in","Master and Slave"], a:0,
      e:"3-tier: Presentation · Application/Business · Data — it maps onto the layered pattern." },
    { w:14, q:"A 'thin client' is one that:", o:[
      "holds most of the business logic","has minimal logic; the server does the work",
      "has no network connection","is always a mobile app"], a:1,
      e:"Thin client = minimal logic (e.g. a browser); thick/fat client holds significant logic." },
    { w:14, q:"A core principle of SOA is:", o:[
      "tight coupling","loosely-coupled services with well-defined contracts",
      "no interfaces","shared global state"], a:1,
      e:"SOA: self-contained, loosely-coupled services with well-defined contracts, reusable across applications." },
    { w:14, q:"An Enterprise Service Bus (ESB) is responsible for:", o:[
      "rendering the UI","routing, transformation and protocol mediation between services",
      "compiling source code","storing objects to disk"], a:1,
      e:"The ESB handles routing, transformation and protocol mediation; orchestration coordinates services into a process." },
    { w:14, q:"Compared with SOAP, REST is:", o:[
      "a strict XML protocol with WSDL","an architectural style over HTTP, lightweight, often JSON",
      "only for banking","incompatible with the web"], a:1,
      e:"SOAP = XML protocol with WSDL; REST = lightweight HTTP architectural style (JSON/XML), web/mobile/microservices." },
    { w:14, q:"Microservices relate to SOA as:", o:[
      "an unrelated style","a finer-grained, independently deployable evolution of SOA without a heavy central ESB",
      "the same thing","the opposite of services"], a:1,
      e:"Microservices are fine-grained, independently deployable services — SOA's architectural descendant." },
    { w:14, q:"Real-time architecture is one whose correctness depends on:", o:[
      "the programming language","meeting timing deadlines","the number of classes","the UI theme"], a:1,
      e:"Real-time: correctness depends on meeting timing deadlines; statecharts model real-time behavior." },
    { w:14, q:"Which style is defined by replaceable units connected through provided/required interfaces?", o:[
      "Component-based","Peer-to-peer","Pipe-filter","Event-driven"], a:0,
      e:"Component-based architecture: replaceable units via provided/required interfaces (Week 12)." }
  ],

  /* ----------------------- OPEN-ENDED ----------------------- */
  open: [
    { w:1, q:"Explain the difference between data and information using an example, and why the same data can yield different information.",
      a:"<p><b>Data</b> are raw, unprocessed facts; <b>information</b> is data processed so it has meaning and purpose for a receiver. The same data yields different information depending on its <b>purpose</b>. Example: weight, height, cholesterol and symptoms (data) become a <i>diagnosis</i> for a doctor but a <i>fitness assessment</i> for a trainer. The slides stress that information systems 'process data into information'.</p>" },
    { w:1, q:"List and briefly define the nine quality attributes of an information system.",
      a:"<ul><li><b>Correctness</b> – meets needs/requirements correctly.</li><li><b>Reliability</b> – predictable output within an acceptable range.</li><li><b>Availability</b> – available when users need it.</li><li><b>Security</b> – protected against unauthorized access.</li><li><b>Robustness</b> – resists mishandling/negligent operation.</li><li><b>Efficiency</b> – maximum speed, minimum resources.</li><li><b>Flexibility</b> – accommodates change.</li><li><b>Maintainability</b> – easy to repair.</li><li><b>Testability</b> – logic can be tested thoroughly so information is reliable.</li></ul>" },
    { w:1, q:"What is the relationship between problem space, solution space, analysis and design?",
      a:"<p>The <b>problem space</b> is the environment in which the product must operate; the <b>solution space</b> contains issues about the product itself. <b>Analysis</b> = understanding the problem space; <b>design</b> = working in the solution space (turning 'what' into 'how'). This framing structures the whole course: analysis first, design second.</p>" },
    { w:2, q:"Compare the Waterfall model and Prototyping. Give two limits of Waterfall and two problems of prototyping.",
      a:"<p><b>Waterfall</b>: sequential, document-driven phases, design as processes & data. Limits: inflexibility (can't swim upstream), over-reliance on documentation, detachment from technology/marketplace/profession.<br/><b>Prototyping</b>: a working model to verify requirements (incremental vs throwaway). Problems: unbalanced architecture, illusion of completeness, diminishing changeability, too little documentation/modeling.</p>" },
    { w:2, q:"Describe the five CMM maturity levels in order and the focus of each.",
      a:"<ol><li><b>Initial</b> (ad hoc) – focus: individual effort.</li><li><b>Repeatable</b> – focus: project management.</li><li><b>Defined</b> – focus: engineering process.</li><li><b>Managed</b> – focus: product & process quality.</li><li><b>Optimizing</b> – focus: continuous process improvement.</li></ol>" },
    { w:2, q:"What is the difference between a method and a methodology, and why is complexity central to methodology?",
      a:"<p>A <b>method</b> defines a <i>tactic</i>; a <b>methodology</b> defines the <i>strategy</i> and the theoretical understanding of how methods are used. <b>Complexity</b> is the primary source behind the emergence/change of methodology: when understanding the problem or building the solution exceeds small groups and improvisation, a methodology becomes necessary.</p>" },
    { w:3, q:"Define encapsulation, information hiding, inheritance and polymorphism.",
      a:"<p><b>Encapsulation</b> – packaging data and processes within one unit. <b>Information hiding</b> – concealing/protecting the internals from the outside (ATM example). <b>Inheritance</b> – a subclass incorporates the behavior of a superclass. <b>Polymorphism</b> – objects of different classes perform the same operation differently (one operation → many methods).</p>" },
    { w:3, q:"What is a domain dictionary? What concepts are the most promising to populate it and what do they become?",
      a:"<p>The <b>domain dictionary</b> organizes and brands domain concepts — the link between stakeholders (verify) and analysts (build the model). Most promising concepts: <b>subjects</b> and <b>objects</b> (nouns → candidate OO <i>objects</i>) and <b>verbs</b> (processes that may hide nouns). Template fields: Name, Type, Description, Source, Notes; types include Process, Function, Role, Object/Entity, Business Rule, Formula, Identifier.</p>" },
    { w:3, q:"Distinguish aggregation from composition and abstract from concrete classes.",
      a:"<p><b>Aggregation</b> is the relationship of an object to its component objects (whole–part). <b>Composition</b> is a strong aggregation where the components' life relies on the whole's life. <b>Concrete</b> classes can be instantiated into actual objects; <b>abstract</b> classes cannot.</p>" },
    { w:4, q:"List the four components of a use case and explain the role of the primary vs. supporting actor.",
      a:"<p>Four components: <b>Goal</b> (the use-case name; success = goal fully achieved), <b>Stakeholders</b> (interests affected; must all be enforced), <b>System</b> (defines the boundary), <b>Scenario</b> (ordered actor↔system interactions). The <b>primary actor</b>'s goal is the use-case name and drives the use case; <b>supporting/secondary actors</b> assist the primary actor in reaching the goal.</p>" },
    { w:4, q:"State five things use-case modeling is NOT.",
      a:"<ul><li>Limited to a system's external behavior — not the inside.</li><li>Not effective for non-functional requirements.</li><li>Not the same as functional decomposition.</li><li>Not inherently object-oriented.</li><li>Describes what a system accomplishes, not how.</li></ul>" },
    { w:4, q:"What is a context diagram and what three elements compose it?",
      a:"<p>A <b>context diagram</b> represents the interaction of outside entities with a system <i>as a whole</i>. Three elements: (1) a system/subsystem, (2) entities outside the system that interact with it, (3) the interactions between the outside entities and the system.</p>" },
    { w:5, q:"Explain the difference between INCLUDE and EXTEND with a Walden example each, and how the diagram shows them.",
      a:"<p><b>Include</b> – one use case uses the functionality of another <i>independent</i> use case (mandatory). Example: <i>Receive Patient</i> includes <i>140 Register Patient</i> when the patient is new. <b>Extend</b> – a use case extends the functionality of a <i>base</i> use case (optional/conditional). Example: <i>Register Patient</i> is extended by <i>142 Verify Credit Card</i> when paying by credit card. In a use-case diagram the dependency type is shown by the <b>direction of the arrow</b>.</p>" },
    { w:5, q:"How are classes and methods extracted from a use-case description? Demonstrate on the vending-machine flow.",
      a:"<p><b>Nouns</b> are candidate classes/objects; <b>verbs</b> are candidate methods/operations. Filter nouns to keep tangible things, roles and in-scope concepts; drop pure attributes and the whole-'system'. Vending machine: nouns → <code>Machine, Customer, Product, Payment, TouchScreen</code>; verbs → <code>display(), insert(), validate(), select(), dispense(), reset()</code>. Objects are specific instances, e.g. <code>coke : Product</code>.</p>" },
    { w:5, q:"List six 'uses of use cases' beyond requirements gathering.",
      a:"<ul><li>Requirements traceability</li><li>Gathering business rules</li><li>Capturing system (external) behavior</li><li>Object derivation</li><li>Incremental development (by prioritizing UCs)</li><li>Base for the user interface</li><li>Test-case definition</li><li>Base for user documentation</li><li>Business-process modeling</li></ul>" },
    { w:6, q:"Give the four UML visibility symbols with meanings, and explain multiplicity with three examples.",
      a:"<p>Visibility: <code>+</code> public (all entities), <code>-</code> private (no outside access), <code>#</code> protected (object & descendants), <code>~</code> package/friend (same package). <b>Multiplicity</b> = how many instances participate in an association: <code>1</code> exactly one (one nationality), <code>0..1</code> zero or one (insurance plan), <code>1..*</code> one or more (≥1 appointment), <code>0..*</code> zero or more (billing activity), <code>20..40</code> a range.</p>" },
    { w:6, q:"What are 'responsibilities' and 'collaboration' in structural modeling (CRC)?",
      a:"<p>A class's <b>responsibilities</b> are what it must <i>know</i> and <i>do</i>; fully defining a class = defining its responsibilities in detail. When one class cannot fulfil a responsibility alone it <b>delegates</b> to and <b>collaborates</b> with others (e.g. <code>Patient.getAppointments → Appointment</code>). This is the <b>CRC</b> idea: Class–Responsibility–Collaboration.</p>" },
    { w:7, q:"Name the four dynamic diagrams and what each emphasizes.",
      a:"<p><b>Sequence</b> – the order of interactions in time. <b>Collaboration/Communication</b> – how objects are organized and what messages they exchange. <b>Statechart</b> – the effect of interactions on the state of one class of objects (the only model showing a class's lifetime milestones in full). <b>Activity</b> – the logical flow of activities.</p>" },
    { w:7, q:"Distinguish operation, method, message and event.",
      a:"<p><b>Operation</b> – what an object does or can do. <b>Method</b> – how that operation is implemented (one operation → many methods = polymorphism). <b>Message</b> – an instruction/info sent to an object expecting it to act; its syntax matches the operation. <b>Event</b> – an action by one object that interrupts the condition of one or more other objects.</p>" },
    { w:8, q:"Differentiate logical and physical design, and explain why domain analysis matters to design.",
      a:"<p><b>Logical design</b> takes existing technological paradigms into account while steering clear of specific technologies; <b>physical design</b> commits to concrete technology. Domain analysis matters because 'without a sound domain analysis, even an ingenious design is likely to fail' — design objects and structures must respect the problem context.</p>" },
    { w:8, q:"Explain flow objects, control objects, lifecycle objects and datasets.",
      a:"<p><b>Flow objects</b> guide the application toward its goal. <b>Control objects</b> manage the application's flow/control («control» stereotype). <b>Lifecycle objects</b> create, organize, track and destroy other objects (often entity instances). A <b>dataset</b> is a general-purpose <i>utility</i> object that carries data between objects within an application.</p>" },
    { w:9, q:"What is 'Fit' in HCI and what does TAM examine?",
      a:"<p><b>Fit</b> is the match among the <b>Human, Computer and Task</b>; a better fit yields better performance and well-being. <b>TAM</b> (Technology Acceptance Model) organizes thinking about whether users will accept technology by examining <b>perceived usefulness</b> and <b>perceived ease of use</b>, along with attitudes (satisfaction, anxiety, enjoyment, playfulness).</p>" },
    { w:9, q:"List several categories of visual controls (UI building blocks) with a one-line role.",
      a:"<ul><li><b>Displayers</b> – textual/pictorial info.</li><li><b>Editors</b> – accept input.</li><li><b>Selectors</b> – choose options/values.</li><li><b>Executors</b> – request command execution.</li><li><b>Navigators</b> – move among containers.</li><li><b>Manipulators</b> – control appearance.</li><li><b>Pointers / Decorators / Object signifiers / Multifunctional</b>.</li></ul>" },
    { w:10, q:"Describe object→relational mapping and the impedance mismatch.",
      a:"<p>The <b>impedance mismatch</b>: objects use identity, inheritance, references and collections; relational tables use values, keys and joins. Mapping: <b>class→table, object→row, attribute→column, identity→primary key, association→foreign key</b> (or a link table for many-to-many), inheritance → one table per hierarchy/class/concrete class. A <b>persistence layer</b> isolates business logic from storage technology.</p>" },
    { w:10, q:"State the four DFD components and the four DFD rules; what are levels 0, 1, 2?",
      a:"<p>Components: <b>external entity, process, data store, data flow</b>. Rules: each process has ≥1 input & output; each data store has ≥1 flow in & out; stored data must go through a process; all processes lead to another process or a data store. Levels: <b>0</b> = context diagram (whole system + external entities), <b>1</b> = main sub-processes, <b>2</b> = deeper detail.</p>" },
    { w:11, q:"Define a design pattern, list its four essential elements, and the GoF Purpose categories.",
      a:"<p>A <b>design pattern</b> describes a recurring problem and the core of its solution, reusable many times without ever doing it the same way (Alexander). Four elements: <b>Name, Problem, Solution, Consequences</b>. GoF Purpose: <b>Creational</b> (object creation), <b>Structural</b> (composition), <b>Behavioral</b> (interaction); Scope: <b>Class</b> or <b>Object</b>.</p>" },
    { w:11, q:"Give the intent and a 'use when' for Observer, Strategy, Adapter, Facade and Composite.",
      a:"<ul><li><b>Observer</b> – one-to-many auto-notification; use when changing one object requires updating an unknown number of others.</li><li><b>Strategy</b> – interchangeable encapsulated algorithms; use to vary an algorithm at runtime.</li><li><b>Adapter</b> – convert one interface into another; use when classes have incompatible interfaces.</li><li><b>Facade</b> – simple interface to a complex subsystem; use to decouple clients from subsystem detail.</li><li><b>Composite</b> – tree of part-whole, uniform treatment; use for recursive hierarchies.</li></ul>" },
    { w:12, q:"Define component and reuse; explain provided vs. required interfaces and why they enable replaceability.",
      a:"<p>A <b>component</b> is a reusable, replaceable software unit providing services <i>independent of particular applications</i>; <b>reuse</b> = technologies/concepts allowing units to be used by more than one application. A <b>provided</b> interface is what the component offers; a <b>required</b> interface is what it needs. Because components connect through matching interfaces, any component offering the same <i>provided</i> interface can be substituted — that is replaceability.</p>" },
    { w:12, q:"List three benefits and three risks of software reuse.",
      a:"<p><b>Benefits</b>: faster development/time-to-market; higher reliability (proven units); lower cost; consistency/standardization; lets teams focus on domain logic. <b>Risks</b>: component may not exactly fit requirements; maintenance depends on the supplier (COTS lock-in); integration/interface-mismatch overhead; up-front investment to build reusable assets.</p>" },
    { w:13, q:"Contrast architecture patterns and design patterns, then compare Layered and Microservices (one + and one − each).",
      a:"<p><b>Architecture pattern</b> = broad, whole-system structure (Layered, Microservices, Client-Server); <b>design pattern</b> = narrow, within-component solution (Singleton, Strategy, Observer). <b>Layered</b>: + maintainability (changes isolated per layer); − performance overhead from extra layers. <b>Microservices</b>: + independent scaling/deployment; − complex management and network congestion.</p>" },
    { w:13, q:"For Event-Driven, Microkernel and Client-Server, give one advantage, one disadvantage and a use case.",
      a:"<p><b>Event-Driven</b>: + real-time processing; − complex to test; use: IoT/fraud detection. <b>Microkernel</b>: + easy feature addition via plug-ins; − complex core↔plug-in communication; use: Eclipse IDE / OS. <b>Client-Server</b>: + centralized management/security; − single point of failure; use: email, banking, Moodle.</p>" },
    { w:14, q:"Compare client-server, SOA and microservices in terms of granularity, coupling and deployment.",
      a:"<p><b>Client-server</b>: coarse request/response across tiers; clients tightly bound to a server topology. <b>SOA</b>: services with formal contracts, loosely coupled, often integrated via a central ESB. <b>Microservices</b>: fine-grained, independently deployable & scalable services, loosely coupled, no heavy central ESB — the architectural descendant of SOA. Use cases: 3-tier web app; enterprise integration; Netflix-style scalable platform.</p>" },
    { w:14, q:"State the core SOA principles and the main differences between SOAP and REST.",
      a:"<p><b>SOA principles</b>: loose coupling, service contract, abstraction, reusability, composability, discoverability, statelessness; an <b>ESB</b> mediates and <b>orchestration</b> coordinates services. <b>SOAP</b> = XML protocol with a strict WSDL contract, strong standards/security, used in enterprise/banking. <b>REST</b> = lightweight HTTP architectural style using resources & verbs (often JSON), scalable and cache-friendly, used for web/mobile APIs and microservices.</p>" }
  ]
};

/* ----------------------- MOCK EXAMS ----------------------- */
(function(){
  const m = SFT_QA.mcq, o = SFT_QA.open;
  // Midterm: weeks 1-7 (analysis half). Final: all weeks, weighted to design half.
  SFT_QA.exams = {
    midterm: {
      title: "Mock Make-up Midterm",
      scope: "Weeks 1–7 · Analysis half",
      duration: 60,
      mcq: [
        m[0], m[3], m[5],            // W1
        m[9], m[13], m[14],          // W2
        m[16], m[21], m[23],         // W3
        m[25], m[27], m[30],         // W4
        m[33], m[35], m[38],         // W5
        m[41], m[44], m[46],         // W6
        m[49], m[52], m[54]          // W7
      ].filter(Boolean),
      open: [ o[2], o[4], o[9], o[12], o[18] ].filter(Boolean)
    },
    final: {
      title: "Mock Make-up Final",
      scope: "Weeks 1–14 · Comprehensive (design-weighted)",
      duration: 90,
      mcq: [
        m[1], m[6],                  // W1
        m[11], m[15],                // W2
        m[19], m[22],                // W3
        m[26], m[28],                // W4
        m[33], m[37],                // W5
        m[42], m[45],                // W6
        m[50], m[52],                // W7
        m[56], m[58], m[60], m[61],  // W8
        m[64], m[66], m[68],         // W9
        m[72], m[74], m[76],         // W10
        m[80], m[82], m[85],         // W11
        m[88], m[90], m[93],         // W12
        m[96], m[98], m[100],        // W13
        m[104], m[106], m[109]       // W14
      ].filter(Boolean),
      open: [ o[1], o[16], o[24], o[26], o[28], o[30], o[32] ].filter(Boolean)
    }
  };
})();
