/* ============================================================================
   ai essentials  ::  contentData.js
   Course + CompCert facts, per-domain metadata + objectives, PBQ format
   definitions, curated external resources, the Assessment-Mechanics and
   Career-Guidance readers, and the lazy-load targets for the dense domain
   reading content (AIESS.reading[1..5]) and flashcard decks (AIESS.flash[1..5]).

   This file loads first and establishes the global AIESS namespace consumed
   by quizEngine.js and app.js.

   NOTE: CompTIA AI Essentials is a self-paced COURSE that leads to the AI
   Essentials CompCert (a Certificate of Competency earned via a 30-minute
   online assessment). It has no exam code and no 100–900 scaled score, so this
   platform scores its practice mock by PERCENTAGE MASTERY, not a scaled score.

   Authored by Professor Rizwan Virani.
   ========================================================================== */
window.AIESS = window.AIESS || {};

AIESS.exam = {
  code: "AI Essentials",              // no version code; the name doubles as the code (like CC / CISSP)
  name: "CompTIA AI Essentials",
  fullName: "CompTIA AI Essentials",
  vendor: "CompTIA",
  body: "CompTIA",
  credential: "AI Essentials CompCert (Certificate of Competency)",
  format: "Course + CompCert assessment",
  modules: 4,                          // official course modules (1.0 Intro, 2.0, 3.0, 4.0)
  instructionalHours: "~3.3 hours",    // lesson-plan aggregate 3:20
  assessmentMinutes: 30,               // the real CompCert is a 30-minute online assessment
  domains: 5,                          // this platform's study grouping of the course lessons
  /* ---- practice-mock settings: there is no timed scaled exam, so the mock is a
     full-length practice capstone that mirrors the CompCert's skills at length ---- */
  minutes: 90,
  maxQuestions: 75,
  passPercent: 80,                     // mastery target — NOT an official cut score
  launched: "2025"
  /* No scaleLow / scaleHigh / passing — this course/CompCert has no scaled score. */
};

/* Per-domain metadata. `objectives` are drawn from the AI Essentials course
   lesson objectives. `weight` has no official source and is derived from each
   domain's authored section share (five weights sum to 100). */
AIESS.domainMeta = [
  { id: 1, weight: 20, color: "d1", icon: "🧠", title: "AI & GenAI Foundations", sectionCount: 17,
    short: "What generative AI is and how it powers chatbots — the key terms (AI, ML, LLM, GenAI), the major tools and models, and when AI is the right choice.",
    objectives: [
      { id: "1.1", t: "Distinguish between key AI terms: AI, machine learning, LLMs, and generative AI" },
      { id: "1.2", t: "Explain how generative AI works and powers chatbots and assistants" },
      { id: "1.3", t: "Identify the major GenAI tools and models and what each is used for" },
      { id: "1.4", t: "Recognize the uses, limitations, and uncertainty of GenAI tools" },
      { id: "1.5", t: "Determine when and how AI is appropriate to use" }
    ] },
  { id: 2, weight: 20, color: "d2", icon: "💬", title: "Prompt Engineering", sectionCount: 17,
    short: "Craft effective prompts with the four building blocks — a clear goal, a persona, relevant context, and constraints — plus contextual files and right-sizing.",
    objectives: [
      { id: "2.1", t: "Write prompts that begin with a clear goal" },
      { id: "2.2", t: "Assign an effective persona to shape the response" },
      { id: "2.3", t: "Provide relevant context, including contextual files" },
      { id: "2.4", t: "Set constraints that bound length, style, and format" },
      { id: "2.5", t: "Right-size a complete prompt for the task" }
    ] },
  { id: 3, weight: 21, color: "d3", icon: "🔍", title: "Verifying & Improving AI Outputs", sectionCount: 18,
    short: "Why AI outputs can be wrong and how to catch it — hallucinations, bias, slop, outdated info, ethical and context errors — with a practical verification workflow.",
    objectives: [
      { id: "3.1", t: "Explain the risks and sources of inaccurate AI responses" },
      { id: "3.2", t: "Recognize the types of errors in AI outputs" },
      { id: "3.3", t: "Apply simple verification strategies to confirm accuracy" },
      { id: "3.4", t: "Follow a verification workflow and judge plausibility and risk" }
    ] },
  { id: 4, weight: 20, color: "d4", icon: "🔄", title: "Conversational AI & Iteration", sectionCount: 17,
    short: "Treat AI as a conversation, not a one-shot — clarifying questions, richer follow-up prompts, self-critique, and prompt chaining to steer better results.",
    objectives: [
      { id: "4.1", t: "Treat AI interactions as multi-turn conversations" },
      { id: "4.2", t: "Ask clarifying questions to understand a response" },
      { id: "4.3", t: "Add context, constraints, and details in follow-up prompts" },
      { id: "4.4", t: "Ask the AI to critique and improve its own response" },
      { id: "4.5", t: "Use prompt chaining to build on outputs and maintain continuity" }
    ] },
  { id: 5, weight: 19, color: "d5", icon: "💼", title: "Using AI Responsibly at Work", sectionCount: 17,
    short: "Use AI responsibly at work — data privacy, policies, copyright, and bias — and spot the best use cases, from AI-as-teacher to automating routine workflows.",
    objectives: [
      { id: "5.1", t: "Identify when inputting information into AI is risky (privacy, sensitive/proprietary data)" },
      { id: "5.2", t: "Follow company AI usage policies and compliance rules" },
      { id: "5.3", t: "Avoid copyright, bias, and misinformation pitfalls" },
      { id: "5.4", t: "Identify good use cases for AI, from learning to creative work" },
      { id: "5.5", t: "Streamline routine tasks with AI automation and workflows" }
    ] }
];

/* The five PBQ decision formats. `domainColor` just drives the badge tint. */
AIESS.pbqFormats = [
  { id: 1, icon: "✍", domainColor: 2, obj: "2.1 / 2.5", badge: "PROMPT BUILD", title: "Prompt Construction",
    desc: "Build a complete prompt field by field — goal, persona, context, and constraints — to satisfy a stated objective for a real task.",
    long: "Each scenario gives you a goal and a situation. Construct the prompt field by field: state the <b>goal</b>, assign a <b>persona</b>, supply the right <b>context</b>, and set the <b>constraints</b> (length, format, tone). Weak, vague prompts score low; specific, well-scoped prompts score high." },
  { id: 2, icon: "🔍", domainColor: 3, obj: "3.2 / 3.3", badge: "OUTPUT CHECK", title: "Output Evaluation & Error Spotting",
    desc: "Read a prompt and its AI output, flag the error type, rate the output's fitness for purpose, and choose the correct fix.",
    long: "You are the reviewer. Read the exhibit — a prompt and the AI's response — then identify the <b>error type</b> (hallucination, bias, generic/slop, outdated, ethical, or misread context), judge <b>fitness for purpose</b>, and select the <b>corrective action</b> (verify a source, rephrase, add detail, or reject)." },
  { id: 3, icon: "🔄", domainColor: 4, obj: "4.2 / 4.4", badge: "FOLLOW-UP", title: "Conversation & Follow-up",
    desc: "Choose or craft the best second prompt — clarify, add elements, or request a self-critique — to steer the AI toward the goal.",
    long: "The first answer rarely lands. Given a first prompt and response, choose the most effective <b>follow-up</b>: a <b>clarifying question</b>, an <b>added element</b> (context, constraint, or detail), or a request for the AI to <b>critique and revise</b> its own work. Order the moves that reach the goal fastest." },
  { id: 4, icon: "🛡", domainColor: 5, obj: "5.1 / 5.2", badge: "RESPONSIBLE USE", title: "Responsible & Secure Use",
    desc: "Risk-tier a scenario: decide what is safe to share, which policy applies, and whether disclosure is required before using AI.",
    long: "A judgment workspace. For each scenario, decide whether the data is <b>safe to input</b>, which <b>policy or law</b> applies (privacy, copyright, company policy, HIPAA/GDPR), whether <b>disclosure</b> of AI use is required, and the correct <b>responsible-use action</b>." },
  { id: 5, icon: "⚙", domainColor: 5, obj: "5.4 / 5.5", badge: "AUTOMATION", title: "Use-Case & Automation Selection",
    desc: "Decide whether AI fits a task, pick the safe and relevant context files, and assemble an automated-workflow prompt.",
    long: "For each task, decide whether it is a <b>good candidate</b> for AI, select which <b>context files</b> are safe and relevant to attach, and assemble the <b>workflow prompt</b> that turns a routine chore — a summary, a draft, a set of minutes — into a reliable automation." }
];

/* Curated free study resources for building practical AI fluency. */
AIESS.resources = [
  { icon: "🎓", title: "CompTIA AI Essentials — Official Course Page", host: "comptia.org",
    url: "https://www.comptia.org/en-us/certifications/ai-essentials/",
    desc: "The authoritative source for the AI Essentials course and CompCert: what the credential verifies, how the assessment works, and how to enroll. Use it as your master checklist." },
  { icon: "📘", title: "Elements of AI — Free Online Course", host: "elementsofai.com",
    url: "https://www.elementsofai.com/",
    desc: "A free, non-technical introduction to what AI is, what it can and cannot do, and how to think about it — an excellent companion for the Foundations material." },
  { icon: "💬", title: "Anthropic — Prompt Engineering Guide", host: "docs.anthropic.com",
    url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview",
    desc: "A practical, vendor guide to writing effective prompts — goals, roles, context, and constraints — that reinforces the Prompt Engineering domain with concrete patterns." },
  { icon: "🛠", title: "OpenAI — Prompt Engineering Best Practices", host: "platform.openai.com",
    url: "https://platform.openai.com/docs/guides/prompt-engineering",
    desc: "Clear, example-driven advice on getting better results from chatbots: be specific, provide context, and iterate — the same skills tested across Domains 2 and 4." },
  { icon: "⚖", title: "NIST AI Risk Management Framework", host: "nist.gov",
    url: "https://www.nist.gov/itl/ai-risk-management-framework",
    desc: "The reference for using AI responsibly — trustworthiness, bias, transparency, and privacy. Underpins the responsible-use judgment in Domain 5." },
  { icon: "👥", title: "r/ArtificialIntelligence — Community", host: "reddit.com/r/ArtificialIntelligence",
    url: "https://www.reddit.com/r/ArtificialIntelligence/",
    desc: "A broad community for practical AI discussion: new tools, real-world use cases, and honest talk about limitations and etiquette — useful context for every domain." }
];

/* ---- Reader: Assessment Mechanics card ---- */
AIESS.examMechanics = [
  { heading: "What the AI Essentials CompCert is", body:
    "<p>CompTIA <strong>AI Essentials</strong> has two parts: a short, self-paced <strong>course</strong> and the <strong>AI Essentials CompCert</strong> — a <em>Certificate of Competency</em> that verifies your ability to use AI tools efficiently and responsibly in real-world scenarios. Unlike a traditional certification, a CompCert is not a lengthy proctored exam; it is a focused, skills-based credential backed by the trusted CompTIA brand and designed to be a valuable, verifiable addition to your résumé.</p>" +
    "<p>You earn the credential by completing a <strong>30-minute online assessment</strong> that evaluates how well you can apply AI in practical situations — writing effective prompts, verifying outputs, and using AI responsibly. The course teaches exactly those skills; this platform gives you a deeper, longer practice environment to master them before you sit the assessment.</p>" +
    "<div class='callout exam'><div class='lbl'>Key idea</div>The CompCert measures <strong>applied judgment</strong> — the best, safest, most appropriate way to use AI — not memorized trivia or machine-learning theory.</div>" },
  { heading: "Scoring: mastery, not a scaled score", body:
    "<p>The AI Essentials CompCert is a competency credential; it does <strong>not</strong> use the 100–900 scaled score you may have seen on exams like Security+, and CompTIA does not publish a numeric cut score. Because there is no official scaled score, <strong>this platform scores its practice mock by percentage mastery</strong>. You get a straightforward “percent correct,” compared against a clearly labeled <strong>mastery target of 80%</strong>.</p>" +
    "<p>Treat the percentage as a <em>readiness signal</em> — “am I consistently at or above 80%?” — rather than a prediction of an official score. Aim to clear the target comfortably and across every domain, not just on average. There is no penalty for guessing on the practice items, so never leave one blank: eliminate what you can and make your best choice.</p>" +
    "<blockquote>This platform's mock reports “NN% — Mastery target 80% (the AI Essentials CompCert has no official passing score; the real credential is a 30-minute online assessment).”</blockquote>" },
  { heading: "Question styles and how to read them", body:
    "<p>Good AI-fluency questions are <strong>“best answer”</strong> questions. Two or three options are often <em>plausible</em>, and only one is the <em>most appropriate</em> for the situation. Read the last sentence first — it usually contains the real ask (“which prompt is <em>most</em> effective…”, “what should you do <em>first</em>…”, “which is the <em>safest</em> choice…”). Words like <strong>first</strong>, <strong>best</strong>, <strong>most</strong>, and <strong>safest</strong> are decisive.</p>" +
    "<ul><li><strong>Scenario items</strong> describe a real task — identify the goal, the audience, and any privacy or accuracy constraint before you look at the options.</li><li><strong>Performance-based tasks (PBQs)</strong> ask you to build a prompt, evaluate an output, or make a responsible-use call. Complete every field; partial credit is generally available.</li><li><strong>Responsible-use items</strong> reward caution: when in doubt about sensitive data or policy, the careful choice is usually correct.</li></ul>" +
    "<div class='callout'><div class='lbl'>Strategy</div>Answer everything you know cold first, flag the rest, and return with your remaining time. Never run out the clock with easy points unanswered.</div>" },
  { heading: "How the course is structured", body:
    "<p>The AI Essentials course is compact and practical — about <strong>3.3 instructional hours</strong> across <strong>four modules</strong>: a brief course intro, <em>Introduction to AI Chatbots</em>, <em>Improving AI Outputs</em>, and <em>Using AI in Your Work</em>. It opens with an optional, ungraded <strong>pre-assessment</strong> that generates a personalized learning path so you can focus on the areas you most need.</p>" +
    "<p>This platform reorganizes that content into <strong>five study domains</strong> — Foundations, Prompt Engineering, Verifying &amp; Improving Outputs, Conversational AI, and Using AI Responsibly at Work — so the dashboard reads like a full prep course. Each domain expands the course's lessons into deep, scenario-driven reading, quizzes, flashcards, and hands-on practice.</p>" +
    "<div class='callout scenario'><div class='lbl'>Map</div>Domain 1 ← Lesson 2.1 · Domain 2 ← Lesson 2.2 · Domain 3 ← Lesson 3.1 · Domain 4 ← Lesson 3.2 · Domain 5 ← Module 4.</div>" },
  { heading: "How to prepare with this platform", body:
    "<p>Work the platform in order and you will be ready for the CompCert with room to spare. Start with the <strong>Domain Study</strong> readers to build understanding, lock in vocabulary with the <strong>Rapid Recall Flashcards</strong>, then pressure-test yourself with the <strong>Domain Quizzes</strong> and the <strong>PBQ simulators</strong>. When you are consistently at or above the 80% mastery target, sit the full-length <strong>Mock Exam</strong> under timed conditions.</p>" +
    "<p>Because the credential is about <em>doing</em>, the highest-value practice is hands-on: build real prompts, evaluate real outputs, and make responsible-use decisions until the moves feel automatic. The labs and PBQs are built for exactly that.</p>" }
];

/* ---- Reader: Career Guidance card ---- */
AIESS.careerGuidance = [
  { heading: "Why AI fluency matters in every role", body:
    "<p><strong>AI is now woven into everyday work</strong> — drafting emails, summarizing documents, generating reports, researching, and brainstorming — across business, administrative, creative, and technical roles alike. Employers increasingly expect professionals to use these tools <em>effectively and responsibly</em>, and they value demonstrable proof of that skill. That is precisely what the AI Essentials CompCert provides: verifiable evidence, backed by CompTIA, that you can put AI to work in real situations.</p>" +
    "<p>You do not need to be a programmer or a data scientist. AI Essentials is <strong>end-user AI fluency</strong> — the practical ability to get good results from AI while avoiding its pitfalls — and it applies to almost any job.</p>" },
  { heading: "What AI Essentials strengthens", body:
    "<p>The credential concentrates on the skills that make someone genuinely more productive with AI:</p>" +
    "<ul>" +
    "<li><strong>Prompting</strong> — turning a vague request into a clear goal, persona, context, and constraints that get useful results the first time.</li>" +
    "<li><strong>Verifying</strong> — spotting hallucinations, bias, and outdated or shallow answers, and checking facts before you rely on them.</li>" +
    "<li><strong>Conversing</strong> — treating AI as an iterative partner, refining with follow-ups instead of accepting a first draft.</li>" +
    "<li><strong>Responsible use</strong> — protecting privacy, respecting copyright and company policy, and knowing when <em>not</em> to use AI.</li>" +
    "<li><strong>Automation</strong> — recognizing routine tasks that AI can streamline and building simple, reliable workflows.</li>" +
    "</ul>" +
    "<div class='callout exam'><div class='lbl'>Why it matters</div>These are transferable skills. The same judgment that writes a good prompt for a report writes a good prompt for a lesson plan, a marketing brief, or a customer reply.</div>" },
  { heading: "Where it fits alongside other credentials", body:
    "<p>AI Essentials is an <strong>entry point</strong> to working with AI — a foundational, vendor-neutral credential that sits below role-specific or technical AI certifications. It pairs naturally with <strong>CompTIA AI Fundamentals</strong> (a broader AI-literacy course) and complements existing skills in any discipline, from IT and cybersecurity to marketing, education, and operations.</p>" +
    "<p>It is deliberately <em>not</em> a machine-learning-engineering or data-science track. Think of it as the AI equivalent of core digital literacy: the baseline competence a modern professional is expected to have, and a credible first step before deeper, domain-specific AI study.</p>" },
  { heading: "Building on AI Essentials", body:
    "<p>Treat the CompCert as a launch point. The fastest way to grow is to <strong>apply the skills in real work</strong> — use AI to draft, summarize, learn, and automate, and keep a simple record of what worked. Document a few strong before-and-after examples; practical evidence of good AI use is persuasive to employers.</p>" +
    "<div class='callout scenario'><div class='lbl'>Practical advice</div>From here, layer on <strong>AI Fundamentals</strong> for breadth, then AI skills specific to your field — analytics, security, content, or support. The habit that carries you forward is the same one this course builds: use AI thoughtfully, verify what it gives you, and stay responsible with data.</div>" }
];

/* Reading content is NOT bundled here. Each domain's dense reading sections live
   in their own module under assets/js/content/domainN.js and are fetched on
   demand by app.js the first time a Domain Study card is opened. This object is
   the shared target those modules populate: AIESS.reading[N] = [ ...sections ]. */
AIESS.reading = AIESS.reading || {};

/* Flashcard decks are likewise lazy-loaded from assets/js/content/flashN.js
   (100 cards per domain) and populate this object: AIESS.flash[N] = [ ...cards ]. */
AIESS.flash = AIESS.flash || {};

/* Quiz questions and PBQ instances are loaded from assets/js/content/quiz1..5.js
   and assets/js/content/pbqs.js (see index.html), which push into these arrays
   that quizEngine.js consumes. Initialized here so load order is not fragile. */
AIESS.questions = AIESS.questions || [];
AIESS.pbqs = AIESS.pbqs || [];
