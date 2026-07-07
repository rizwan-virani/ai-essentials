/* ai-essentials :: content/pbqs.js — performance-based decision tasks for the CompTIA AI Essentials study platform.
   Field-by-field, graded scenarios about USING AI well and responsibly. Five formats:
   1 Prompt Construction (domain 2), 2 Output Evaluation & Error Spotting (domain 3),
   3 Conversation & Follow-up (domain 4), 4 Responsible & Secure Use (domain 5),
   5 Use-Case & Automation Selection (domain 5). */
window.AIESS = window.AIESS || {}; AIESS.pbqs = AIESS.pbqs || [];
AIESS.pbqs.push(
  /* ============================ FORMAT 1 — PROMPT CONSTRUCTION (7) ============================ */
  {
    id:"PBQ-001", format:1, domain:2,
    title:"Draft a Customer Apology Email",
    brief:"A customer's order arrived a week late and they emailed an angry complaint. You want an AI assistant to draft a reply. Build the prompt piece by piece so the draft is on-brand, apologetic, and actionable rather than a generic form letter.",
    exhibitTitle:"prompt://build",
    exhibit:"GOAL: write a reply to an unhappy customer\n\nSituation\n<span class='dim'>-------------------------------------------</span>\n<span class='warnc'>Customer:</span> order #4471 arrived 7 days late\n<span class='warnc'>Tone of complaint:</span> frustrated, threatening to leave\n<span class='ok'>Company voice:</span> warm, plain-spoken, no corporate jargon\n<span class='ok'>Offer available:</span> 15% off next order\n\nYou are assembling a prompt with four parts:\n  [GOAL]  [PERSONA]  [CONTEXT]  [CONSTRAINT]",
    fields:[
      { label:"Best GOAL statement", hint:"Specific beats vague.", options:["Write an email","Write a reply to customer #4471 that apologizes for the 7-day delay and offers a concrete goodwill gesture","Say sorry","Handle the customer"], answer:1, explain:"A strong goal names the exact task and the outcome (apologize + concrete gesture), giving the model a clear target instead of an open-ended 'write an email.'" },
      { label:"Best PERSONA for the assistant", options:["A lawyer protecting the company from liability","An experienced customer-support specialist who writes warmly and plainly","A poet","A stand-up comedian"], answer:1, explain:"Matching the persona to the job and brand voice (a warm, plain-spoken support specialist) shapes tone appropriately; a lawyer or comedian would misfire." },
      { label:"Most useful CONTEXT to include", options:["The company's annual revenue","The CEO's favorite color","The order number, that it was 7 days late, and the 15%-off offer that is available","The weather that week"], answer:2, explain:"Give the model the facts it must use: the order, the specific problem, and the exact remedy you can offer, so the reply is accurate and actionable." },
      { label:"Best CONSTRAINT to add", options:["Keep it under 150 words, apologize once sincerely, and avoid corporate jargon","Make it as long as possible","Use at least five exclamation points","Do not mention the delay"], answer:0, explain:"Constraints that bound length, tone, and forbidden phrasing produce a tight, on-brand reply; 'do not mention the delay' would ignore the customer's actual issue." }
    ],
    summary:"A good prompt pairs a specific goal, a fitting persona, the exact facts as context, and clear constraints on length and tone."
  },
  {
    id:"PBQ-002", format:1, domain:2,
    title:"Lesson Plan for a 5th-Grade Science Class",
    brief:"A teacher wants an AI assistant to draft a 45-minute lesson plan introducing the water cycle to fifth graders. Assemble the prompt so the output is age-appropriate, standards-aware, and usable as-is.",
    exhibitTitle:"prompt://build",
    exhibit:"GOAL: create a science lesson plan\n\nSituation\n<span class='dim'>-------------------------------------------</span>\n<span class='cy'>Grade:</span> 5th (ages 10-11)\n<span class='cy'>Topic:</span> the water cycle\n<span class='cy'>Time:</span> one 45-minute period\n<span class='ok'>Class need:</span> hands-on, low-cost materials only\n\nAssemble: [GOAL]  [PERSONA]  [CONTEXT]  [CONSTRAINT]",
    fields:[
      { label:"Best GOAL statement", options:["Teach science","Write a 45-minute 5th-grade lesson plan that introduces the water cycle with a hands-on activity and a quick assessment","Make a water cycle thing","Explain evaporation"], answer:1, explain:"The goal fixes the audience, duration, topic, and the deliverables (activity + assessment), so the model produces a complete, usable plan." },
      { label:"Best PERSONA", options:["A university physics professor","An experienced elementary-school science teacher","A textbook publisher's lawyer","A weather forecaster"], answer:1, explain:"An elementary science teacher persona calibrates vocabulary, pacing, and classroom management for 10-year-olds far better than a university professor." },
      { label:"Most useful CONTEXT", options:["The teacher's salary","That only low-cost, common household materials are available and the period is 45 minutes","The school's founding date","The principal's name"], answer:1, explain:"Telling the model the real constraints of the room (cheap materials, fixed time) makes the activity practical rather than aspirational." },
      { label:"Best CONSTRAINT", options:["Use only vocabulary a 5th grader knows and include a 5-minute check-for-understanding at the end","Assume students have lab-grade equipment","Make it a 3-hour block","Write it for graduate students"], answer:0, explain:"Bounding vocabulary to the grade level and requiring a short assessment keeps the plan age-appropriate and measurable." }
    ],
    summary:"For instructional content, anchor the prompt to the audience's age, the time available, the real materials, and a built-in check for understanding."
  },
  {
    id:"PBQ-003", format:1, domain:2,
    title:"Summarize a Long Meeting Transcript",
    brief:"You have a 90-minute project meeting transcript and want an AI assistant to turn it into something your team will actually read. Construct the prompt so the summary is structured, decision-focused, and assigns owners.",
    exhibitTitle:"prompt://build",
    exhibit:"GOAL: summarize a meeting\n\nSituation\n<span class='dim'>-------------------------------------------</span>\n<span class='cy'>Input:</span> 90-minute transcript (pasted below the prompt)\n<span class='cy'>Audience:</span> busy teammates who missed the call\n<span class='ok'>They care about:</span> decisions, action items, owners, deadlines\n\nAssemble: [GOAL]  [PERSONA]  [CONTEXT]  [CONSTRAINT]",
    fields:[
      { label:"Best GOAL statement", options:["Summarize this","Condense the transcript into decisions made, action items with owners and due dates, and open questions","Read the meeting","Make it shorter"], answer:1, explain:"Naming the exact sections you want (decisions, action items + owners/dates, open questions) turns a vague 'summarize' into a structured, useful artifact." },
      { label:"Best PERSONA", options:["A court stenographer who transcribes verbatim","A sharp project manager who tracks decisions and accountability","A novelist","A sports commentator"], answer:1, explain:"A project-manager persona naturally organizes around decisions and ownership, which is what the audience needs, rather than reproducing every word." },
      { label:"Most useful CONTEXT", options:["That the reader is a busy teammate who missed the meeting and needs the outcomes, not a play-by-play","The room's temperature","How many coffees were consumed","The building's address"], answer:0, explain:"Telling the model who will read it and what they need steers the summary toward outcomes over narrative." },
      { label:"Best CONSTRAINT", options:["Use bullet points, mark any item lacking an owner as 'UNASSIGNED,' and keep it under one page","Write ten pages","Include every filler word","Do not list any action items"], answer:0, explain:"Format and flagging constraints (bullets, an explicit UNASSIGNED tag, a length cap) make gaps visible and the summary skimmable." }
    ],
    summary:"Summarization prompts work best when they specify the sections, the reader, a skimmable format, and a way to surface missing information."
  },
  {
    id:"PBQ-004", format:1, domain:2,
    title:"Explain a Technical Concept to a Non-Technical Boss",
    brief:"Your manager asked what 'the cloud' means for the company's costs. You want an AI assistant to produce a plain-language explanation you can forward. Build a prompt that lands the explanation at the right level.",
    exhibitTitle:"prompt://build",
    exhibit:"GOAL: explain a technical concept\n\nSituation\n<span class='dim'>-------------------------------------------</span>\n<span class='cy'>Reader:</span> non-technical executive\n<span class='cy'>Question:</span> what does moving to 'the cloud' mean for our costs?\n<span class='ok'>Must avoid:</span> jargon, acronyms without definition\n<span class='ok'>Must include:</span> a simple analogy + a cost trade-off\n\nAssemble: [GOAL]  [PERSONA]  [CONTEXT]  [CONSTRAINT]",
    fields:[
      { label:"Best GOAL statement", options:["Explain cloud","In plain English, explain what moving to the cloud means and how it changes our costs, for a non-technical executive","Talk about servers","Define IaaS, PaaS, and SaaS"], answer:1, explain:"The goal ties the explanation to the reader's actual question (cost impact) and their level (non-technical exec), preventing a jargon dump." },
      { label:"Best PERSONA", options:["A cloud architect writing a design doc","A skilled explainer who translates technical ideas into business terms","A compiler","A hardware technician"], answer:1, explain:"A translator/explainer persona is built to bridge technical and business audiences, unlike an architect who may default to deep jargon." },
      { label:"Most useful CONTEXT", options:["The exec's frequent-flyer number","That the reader has no technical background and cares mainly about cost trade-offs","The data center's serial numbers","The programming language used"], answer:1, explain:"Stating the reader's background and what they care about (cost) is the context that keeps the answer aimed and useful." },
      { label:"Best CONSTRAINT", options:["Use one everyday analogy, define any term you must use, and keep it to about 200 words","Use as many acronyms as possible","Write it in code","Assume the reader is a systems engineer"], answer:0, explain:"Requiring an analogy, in-line definitions, and a length cap forces clarity at the executive's level." }
    ],
    summary:"To explain technical topics to non-experts, anchor the prompt to the reader's level, demand an analogy, forbid undefined jargon, and cap the length."
  },
  {
    id:"PBQ-005", format:1, domain:2,
    title:"Generate Interview Questions for a Role",
    brief:"A hiring manager wants an AI assistant to draft interview questions for a junior data-analyst opening. Construct the prompt so the questions are job-relevant, fair, and legally sound.",
    exhibitTitle:"prompt://build",
    exhibit:"GOAL: draft interview questions\n\nSituation\n<span class='dim'>-------------------------------------------</span>\n<span class='cy'>Role:</span> junior data analyst\n<span class='cy'>Key skills:</span> SQL basics, spreadsheets, clear communication\n<span class='warnc'>Must avoid:</span> anything about age, family, health, or origin\n<span class='ok'>Format wanted:</span> mix of technical + behavioral, with what a good answer shows\n\nAssemble: [GOAL]  [PERSONA]  [CONTEXT]  [CONSTRAINT]",
    fields:[
      { label:"Best GOAL statement", options:["Make interview questions","Draft 8 interview questions for a junior data-analyst role, mixing technical and behavioral, each with a note on what a strong answer demonstrates","Ask about SQL","Interview someone"], answer:1, explain:"The goal specifies count, role, question types, and the scoring note, so the output is directly usable by an interviewer." },
      { label:"Best PERSONA", options:["A hiring manager experienced in fair, structured interviewing","A fortune teller","A salesperson","A stand-up comic"], answer:0, explain:"An experienced, fairness-minded hiring manager persona produces relevant, defensible questions and evaluation cues." },
      { label:"Most useful CONTEXT", options:["That the target skills are SQL basics, spreadsheets, and communication, at a junior level","The interviewer's lunch order","The office square footage","The company stock price"], answer:0, explain:"Providing the actual skills and seniority keeps questions calibrated to the role rather than too advanced or off-topic." },
      { label:"Best CONSTRAINT (fairness)", options:["Ask candidates their age to gauge experience","Avoid any question touching protected characteristics (age, family status, health, national origin) and keep all questions job-related","Ask where their parents are from","Ask if they plan to have children"], answer:1, explain:"Constraining the model to job-related, non-protected topics keeps the interview fair and legally sound; the other options invite discrimination claims." }
    ],
    summary:"Hiring prompts must fix the role and skills, request a scoring note, and explicitly forbid questions about protected characteristics."
  },
  {
    id:"PBQ-006", format:1, domain:2,
    title:"Write Product Descriptions for an Online Store",
    brief:"An e-commerce owner wants an AI assistant to write descriptions for a line of reusable water bottles. Build the prompt so the copy is persuasive, honest, and consistent across products.",
    exhibitTitle:"prompt://build",
    exhibit:"GOAL: write product copy\n\nSituation\n<span class='dim'>-------------------------------------------</span>\n<span class='cy'>Product:</span> insulated stainless-steel water bottle, 750ml\n<span class='cy'>Buyer:</span> eco-conscious commuters and gym-goers\n<span class='ok'>Verified features:</span> keeps drinks cold 24h, BPA-free, leak-proof lid\n<span class='warnc'>Do NOT invent:</span> unverified claims (e.g., 'medical-grade')\n\nAssemble: [GOAL]  [PERSONA]  [CONTEXT]  [CONSTRAINT]",
    fields:[
      { label:"Best GOAL statement", options:["Write about the bottle","Write a 60-word product description for the 750ml insulated bottle aimed at eco-conscious commuters, highlighting the verified features","Sell bottles","Describe stainless steel"], answer:1, explain:"The goal fixes length, product, audience, and the source of claims, producing focused, on-target copy." },
      { label:"Best PERSONA", options:["A conversion-focused e-commerce copywriter","A materials scientist","A tax auditor","A weather reporter"], answer:0, explain:"An e-commerce copywriter persona writes persuasive, benefit-led product copy suited to the storefront." },
      { label:"Most useful CONTEXT", options:["The buyer profile (eco-conscious commuters/gym-goers) and the verified feature list","The factory's electricity bill","The founder's zodiac sign","The warehouse ceiling height"], answer:0, explain:"Feeding the model the target buyer and the confirmed features grounds the copy in real, sellable benefits." },
      { label:"Best CONSTRAINT (honesty)", options:["Add impressive-sounding claims even if unverified","Only use the verified features provided and do not invent claims like 'medical-grade' or health cures","Promise it cures dehydration","Say it lasts 100 years"], answer:1, explain:"Restricting the model to verified claims prevents false advertising and hallucinated features that could mislead buyers." }
    ],
    summary:"Marketing prompts should cap length, name the buyer, list verified features, and forbid invented or unsubstantiated claims."
  },
  {
    id:"PBQ-007", format:1, domain:2,
    title:"Create a Study Guide from Course Notes",
    brief:"A student wants an AI assistant to turn a chapter of biology notes into a study guide for an upcoming quiz. Assemble the prompt so the guide is accurate to the source and actually helps them study.",
    exhibitTitle:"prompt://build",
    exhibit:"GOAL: make a study guide\n\nSituation\n<span class='dim'>-------------------------------------------</span>\n<span class='cy'>Source:</span> the student's own chapter notes (pasted in)\n<span class='cy'>Exam:</span> multiple-choice quiz on cell biology\n<span class='ok'>Wants:</span> key terms, a few practice questions, and a 'commonly confused' list\n<span class='warnc'>Risk:</span> the model may add facts not in the notes\n\nAssemble: [GOAL]  [PERSONA]  [CONTEXT]  [CONSTRAINT]",
    fields:[
      { label:"Best GOAL statement", options:["Study biology","Turn the pasted notes into a study guide with key terms, 5 practice multiple-choice questions, and a list of commonly confused concepts","Make questions","Summarize the chapter"], answer:1, explain:"The goal enumerates the exact study aids wanted, so the model produces a complete guide rather than a plain summary." },
      { label:"Best PERSONA", options:["A biology tutor who builds clear study aids","A comedian","A travel agent","A car mechanic"], answer:0, explain:"A tutor persona knows how to structure review material and anticipate what trips students up." },
      { label:"Most useful CONTEXT", options:["That the quiz is multiple-choice on cell biology, so questions should match that format","The student's home address","The tutor's hourly rate","The classroom Wi-Fi password"], answer:0, explain:"Telling the model the exam format lets it generate practice questions in the right style." },
      { label:"Best CONSTRAINT (accuracy)", options:["Add extra facts from the internet to be thorough","Use only the concepts present in the pasted notes and flag anything the notes leave unclear rather than filling gaps","Make up plausible answers","Change the definitions to sound better"], answer:1, explain:"Constraining the guide to the source material prevents the model from introducing unverified or off-syllabus content the student wasn't taught." }
    ],
    summary:"Study-guide prompts should list the aids wanted, match the exam format, and restrict the model to the student's own source material."
  },

  /* ==================== FORMAT 2 — OUTPUT EVALUATION & ERROR SPOTTING (8) ==================== */
  {
    id:"PBQ-008", format:2, domain:3,
    title:"A Confidently Wrong Citation",
    brief:"You asked an AI assistant for a source to support a claim in a report. Evaluate its response: is the error a hallucination, and is the output fit to paste into your report as-is?",
    exhibitTitle:"chat://evaluate",
    exhibit:"<span class='cy'>PROMPT:</span> Give me a peer-reviewed study showing remote work\n        increases productivity, with a citation.\n\n<span class='warnc'>AI RESPONSE:</span>\nCertainly. According to Henderson &amp; Blake (2019),\n'Remote Work and Output,' <span class='hl'>Journal of Organizational\nBehavior</span>, vol. 40, pp. 233-251, remote employees were\n13% more productive. DOI: 10.1016/j.jorgb.2019.02.114\n\n<span class='dim'>(You search for this paper and DOI — neither exists.)</span>",
    fields:[
      { label:"What ERROR TYPE is this?", options:["Bias","Hallucination — a fabricated source and DOI","Outdated information","Generic slop"], answer:1, explain:"The model invented a plausible-looking citation, journal, and DOI that do not exist. Fabricated but confident specifics are the classic hallucination." },
      { label:"Is the output FIT to paste into the report as-is?", options:["Yes, it has a DOI so it must be real","No — an unverifiable citation could be fabricated and must be checked before use","Yes, if it sounds authoritative","Yes, citations are always accurate"], answer:1, explain:"A DOI or formal citation format is not proof of existence. Any AI-provided source must be independently verified before you rely on it." },
      { label:"Best FIX", options:["Trust it and move on","Ask the model to find real, verifiable sources and independently confirm each citation in a database like the journal's site or Google Scholar","Add three more AI citations to be safe","Change the page numbers so it looks different"], answer:1, explain:"The fix is to verify against an authoritative index and only cite sources you have confirmed exist and say what the model claims." }
    ],
    summary:"Fabricated citations with real-looking DOIs are hallucinations; never cite an AI-provided source without independently verifying it exists."
  },
  {
    id:"PBQ-009", format:2, domain:3,
    title:"Only Male Pronouns for 'Engineer'",
    brief:"You asked for a short profile of a typical software engineer. Read the output and decide what kind of problem it exhibits and how to correct it.",
    exhibitTitle:"chat://evaluate",
    exhibit:"<span class='cy'>PROMPT:</span> Describe a day in the life of a software engineer.\n\n<span class='warnc'>AI RESPONSE:</span>\n'<span class='hl'>He</span> starts <span class='hl'>his</span> day with coffee, then <span class='hl'>he</span> reviews\n<span class='hl'>his</span> code. A good engineer keeps <span class='hl'>his</span> skills sharp and\nleads <span class='hl'>his</span> team...'\n\n<span class='dim'>(Every engineer in the profile is assumed male.)</span>",
    fields:[
      { label:"What ERROR TYPE is this?", options:["Hallucination","Bias — defaulting to a single gender for a neutral role","Outdated data","A math error"], answer:1, explain:"Assuming all engineers are male reflects gender bias absorbed from training data; the role is gender-neutral." },
      { label:"Is the output FIT for a company culture blog?", options:["Yes, it reads smoothly","No — the biased framing could alienate readers and misrepresent the profession","Yes, most engineers are men anyway","Yes, pronouns don't matter"], answer:1, explain:"Biased content can exclude readers and signal a non-inclusive culture, making it unfit for a public post as written." },
      { label:"Best FIX", options:["Leave it; it's just grammar","Reprompt for inclusive, gender-neutral language (e.g., 'they' or varied examples) and review for other stereotypes","Add a disclaimer that only men were meant","Switch every pronoun to 'she' instead"], answer:1, explain:"Ask the model to use neutral or varied representation and re-check the passage; flipping to one other gender just relocates the bias." }
    ],
    summary:"Defaulting a neutral role to one gender is bias; fix it by prompting for inclusive language and scanning for other stereotypes."
  },
  {
    id:"PBQ-010", format:2, domain:3,
    title:"The Bland, Say-Nothing Blog Intro",
    brief:"You asked for an engaging intro to a blog post about starting a vegetable garden. Judge whether the draft is usable and what it's actually lacking.",
    exhibitTitle:"chat://evaluate",
    exhibit:"<span class='cy'>PROMPT:</span> Write an engaging intro for a blog post on starting\n        a home vegetable garden.\n\n<span class='warnc'>AI RESPONSE:</span>\n'In today's fast-paced world, gardening is a great way to\nrelax. There are many benefits to growing your own food.\nWhether you are a beginner or an expert, this guide has\nsomething for everyone. Let's dive in!'\n\n<span class='dim'>(Generic phrasing; no specific detail, hook, or voice.)</span>",
    fields:[
      { label:"What ERROR TYPE is this?", options:["Hallucination","Generic slop — vague filler with no specifics or hook","Ethical violation","Outdated info"], answer:1, explain:"Phrases like 'in today's fast-paced world' and 'let's dive in' are hollow AI filler with no concrete detail or point of view." },
      { label:"Is the draft FIT to publish as the intro?", options:["Yes, it's grammatically fine","No — it's generic and forgettable; it won't hook a reader","Yes, all intros sound like this","Yes, it mentions gardening"], answer:1, explain:"Correct grammar isn't the bar; an intro must earn attention with a specific, vivid hook, which this lacks." },
      { label:"Best FIX", options:["Publish it and hope for the best","Reprompt with a specific angle, a vivid opening image, and the target reader, and forbid clichés like 'in today's world'","Make it twice as long with more clichés","Add more exclamation points"], answer:1, explain:"Give the model a concrete angle, a sensory hook, and a ban on stock phrases so it produces something distinctive." }
    ],
    summary:"Vague, cliche-filled 'slop' is a quality failure; fix it by supplying a specific angle, a real hook, and a ban on filler phrases."
  },
  {
    id:"PBQ-011", format:2, domain:3,
    title:"An Answer Frozen in 2021",
    brief:"You asked an AI assistant for the current best-selling electric vehicle. Evaluate whether the answer can be trusted and what the underlying limitation is.",
    exhibitTitle:"chat://evaluate",
    exhibit:"<span class='cy'>PROMPT:</span> What is the best-selling electric vehicle this year,\n        and what's its starting price today?\n\n<span class='warnc'>AI RESPONSE:</span>\n'As of my last update, the top-selling EV is the Model X,\nstarting around &#36;39,990. Prices are current as of 2021.'\n\n<span class='dim'>(The model has no live data and states a stale year.)</span>",
    fields:[
      { label:"What ERROR TYPE is this?", options:["Bias","Outdated information — answer reflects a past training cutoff, not today","Hallucination","Generic slop"], answer:1, explain:"The model is answering from stale training data and even flags '2021,' so its 'this year' figures are outdated for a present-day question." },
      { label:"Is the answer FIT to quote as current pricing?", options:["Yes, prices never change","No — pricing and sales rankings change constantly and need a live, dated source","Yes, the model said 'current'","Yes, EVs are always the same price"], answer:1, explain:"Time-sensitive facts like prices and sales leaders must come from a live, dated source, not a fixed training snapshot." },
      { label:"Best FIX", options:["Accept the 2021 numbers","Use a tool or model with live web access, or verify today's figures on the manufacturer's site, and cite the date","Ask the same model again louder","Round the price to make it look newer"], answer:1, explain:"For current facts, use a browsing-enabled tool or check an authoritative live source and record the date checked." }
    ],
    summary:"Stale answers from a training cutoff are 'outdated' errors; time-sensitive facts need a live, dated source rather than the model's memory."
  },
  {
    id:"PBQ-012", format:2, domain:3,
    title:"AI Offers to Write the Fake Reviews",
    brief:"A user asked an AI assistant to help boost their product's rating. Read the exchange and decide what's wrong with the request-and-response and how to redirect it.",
    exhibitTitle:"chat://evaluate",
    exhibit:"<span class='cy'>PROMPT:</span> Write 20 glowing 5-star customer reviews I can post\n        under fake names to boost my product's rating.\n\n<span class='warnc'>AI RESPONSE:</span>\n'Sure! Here are 20 enthusiastic reviews you can post as\ndifferent customers...'\n<span class='dim'>[review 1] 'Best purchase ever! - Sarah M.'</span> ...\n\n<span class='dim'>(These would be deceptive, fabricated reviews.)</span>",
    fields:[
      { label:"What is the core problem?", options:["Outdated information","Ethical/integrity violation — creating deceptive fake reviews","A harmless formatting choice","A hallucinated citation"], answer:1, explain:"Fabricating reviews under fake identities is deceptive and, in many places, illegal; complying is an ethics failure regardless of quality." },
      { label:"Is this output FIT to use?", options:["Yes, everyone does it","No — deceptive reviews mislead consumers and can violate consumer-protection law and platform rules","Yes, if the product is actually good","Yes, reviews are just opinions"], answer:1, explain:"Deceptive astroturfing harms buyers and breaks platform terms and consumer-protection laws; it should not be used." },
      { label:"Best FIX", options:["Post them anyway","Decline the fake reviews and instead ask the AI to draft an honest review-request email to real, verified customers","Ask for 40 reviews instead","Post them under real-sounding names only"], answer:1, explain:"Redirect to a legitimate approach: solicit genuine feedback from actual customers rather than manufacturing false reviews." }
    ],
    summary:"Generating fake reviews is an ethical and legal violation; redirect to soliciting honest feedback from real customers."
  },
  {
    id:"PBQ-013", format:2, domain:3,
    title:"The Model Answered the Wrong Question",
    brief:"You asked how to reduce your monthly grocery bill, but the response is about restaurant spending. Diagnose what went wrong and how to get back on track.",
    exhibitTitle:"chat://evaluate",
    exhibit:"<span class='cy'>PROMPT:</span> I spend too much on groceries each month. Give me 5\n        practical ways to lower my grocery bill.\n\n<span class='warnc'>AI RESPONSE:</span>\n'Great question! To spend less at restaurants: 1) cook at\nhome more, 2) skip appetizers, 3) avoid ordering drinks,\n4) use dining coupons, 5) limit takeout...'\n\n<span class='dim'>(The answer is about restaurants, not groceries.)</span>",
    fields:[
      { label:"What ERROR TYPE is this?", options:["Hallucination of facts","Misread context — it answered a different question (restaurants, not groceries)","Bias","Outdated data"], answer:1, explain:"The model drifted to restaurant spending, which is not what was asked; it misread or ignored the actual context (grocery bill)." },
      { label:"Is the output FIT for purpose?", options:["Yes, saving money is saving money","No — it doesn't address the grocery question that was asked","Yes, it has five tips","Yes, it's positive in tone"], answer:1, explain:"Even useful-sounding tips are unfit if they answer the wrong question; relevance to the actual ask is the test." },
      { label:"Best FIX", options:["Accept the restaurant tips","Restate the request clearly ('groceries specifically, e.g., store shopping and meal planning') and ask it to try again","Ask a totally different question","Praise the model and move on"], answer:1, explain:"Re-anchor the model to the real question with a clarifying restatement so the next answer stays on grocery spending." }
    ],
    summary:"When the model answers a different question, that's a misread-context error; fix it by restating the ask precisely and having it retry."
  },
  {
    id:"PBQ-014", format:2, domain:3,
    title:"Suspiciously Precise Statistics",
    brief:"You asked for statistics on how many people exercise regularly. Evaluate the response's reliability and what to do before using the numbers in a presentation.",
    exhibitTitle:"chat://evaluate",
    exhibit:"<span class='cy'>PROMPT:</span> What percentage of adults exercise at least 3 times\n        a week? Give me a number for my slide.\n\n<span class='warnc'>AI RESPONSE:</span>\n'Exactly <span class='hl'>47.3%</span> of adults worldwide exercise at least\n3 times per week, according to global health data.'\n\n<span class='dim'>(No named study, date, or region; oddly exact figure.)</span>",
    fields:[
      { label:"What is the concern?", options:["The tone is too casual","An unsourced, suspiciously precise statistic that may be fabricated","It used a percentage sign","It's too short"], answer:1, explain:"A single, oddly exact global figure with no named source, year, or methodology is a hallmark of a fabricated or unverifiable statistic." },
      { label:"Is it FIT to put on the slide as fact?", options:["Yes, it has a precise number","No — cite it only after finding the real source, date, and definition behind the figure","Yes, precise numbers are always right","Yes, 'global health data' is a source"], answer:1, explain:"Precision is not accuracy. 'Global health data' names no actual source; you must trace the real study before presenting it." },
      { label:"Best FIX", options:["Use 47.3% as-is","Ask the model to name a specific, dated source and then verify that source directly before citing any figure","Round it to 50% and cite the model","Add a second made-up statistic for balance"], answer:1, explain:"Require a specific, checkable source and confirm it yourself; if none exists, don't use the number." }
    ],
    summary:"An unsourced, hyper-precise statistic is a red flag for fabrication; trace and verify the real source before presenting any figure."
  },
  {
    id:"PBQ-015", format:2, domain:3,
    title:"Advice That Overreaches Into Medicine",
    brief:"A user described chest tightness and asked the AI what medication to take. Evaluate the response and the right way to handle a request like this.",
    exhibitTitle:"chat://evaluate",
    exhibit:"<span class='cy'>PROMPT:</span> I've had chest tightness and shortness of breath for\n        two days. What dose of which medication should I take?\n\n<span class='warnc'>AI RESPONSE:</span>\n'You likely have anxiety. Take 400mg of ibuprofen twice\ndaily and you'll be fine. No need to see a doctor.'\n\n<span class='dim'>(Confident diagnosis + dosing + discouraging real care.)</span>",
    fields:[
      { label:"What is the primary problem?", options:["Generic slop","Ethical/safety failure — giving a confident medical diagnosis and dosing and discouraging professional care","Outdated pricing","A citation error"], answer:1, explain:"Diagnosing symptoms, prescribing a dose, and telling the user not to seek care is unsafe medical overreach the model is not qualified to give." },
      { label:"Is this output FIT to act on?", options:["Yes, ibuprofen is common","No — potentially dangerous; chest symptoms need a qualified clinician, not an AI diagnosis","Yes, it sounds confident","Yes, it saved a doctor visit"], answer:1, explain:"Acting on AI medical dosing for potentially serious symptoms is dangerous; a human professional must assess these." },
      { label:"Best FIX", options:["Follow the AI's dosing","Treat AI health info as general only, and for concerning symptoms consult a licensed clinician or emergency services","Ask the AI for a stronger drug","Increase the dose to feel better faster"], answer:1, explain:"AI can offer general information but must not replace a clinician; concerning symptoms require professional evaluation." }
    ],
    summary:"Confident AI diagnosis and dosing is an unsafe ethical failure; treat AI health output as general information and route real symptoms to a professional."
  },

  /* ===================== FORMAT 3 — CONVERSATION & FOLLOW-UP (7) ===================== */
  {
    id:"PBQ-016", format:3, domain:4,
    title:"The First Draft Is Too Vague",
    brief:"You asked for help writing a cover letter and got a generic template back. Decide the best follow-up move to steer the conversation toward a strong, tailored letter.",
    exhibitTitle:"chat://followup",
    exhibit:"<span class='cy'>YOU:</span> Write me a cover letter for a marketing job.\n\n<span class='ok'>AI (first answer):</span>\n'Dear Hiring Manager, I am excited to apply for the\nmarketing position. I am a hard worker and a team player\nwith many relevant skills. I would be a great fit...'\n\n<span class='dim'>(No specifics: no company, role details, or your achievements.)</span>",
    fields:[
      { label:"Best FOLLOW-UP move", options:["Ask it to make the same letter longer","Add specifics: paste the job posting and your top 3 relevant achievements, then ask it to tailor the letter","Tell it 'good job' and use it as-is","Start a brand-new chat about something else"], answer:1, explain:"The draft is generic because the model lacks specifics. Supplying the posting and your achievements lets it produce a tailored letter." },
      { label:"Why is adding elements better than just regenerating?", options:["Regenerating costs money","More context lets the model personalize; regenerating with no new input yields more generic text","Longer is always better","The model prefers bullet points"], answer:1, explain:"Without new information, a re-roll produces equally vague output; concrete details are what enable personalization." },
      { label:"Good next step after the tailored draft", options:["Publish immediately without reading","Read it, then ask the model to critique its own letter for anything generic or unsupported and tighten it","Delete it","Ask for ten unrelated letters"], answer:1, explain:"A self-critique pass catches remaining fluff and unsupported claims, refining the letter before you send it." }
    ],
    summary:"A vague first draft calls for adding concrete context, not just regenerating; then a self-critique pass tightens the result."
  },
  {
    id:"PBQ-017", format:3, domain:4,
    title:"An Ambiguous Request",
    brief:"You asked the AI to 'make a plan for the event,' and it guessed at details. Decide the best conversational move when the model has filled in too many blanks.",
    exhibitTitle:"chat://followup",
    exhibit:"<span class='cy'>YOU:</span> Make a plan for the event.\n\n<span class='ok'>AI (first answer):</span>\n'Here's a plan for your 50-person outdoor wedding in June\nwith a &#36;10,000 budget and a rustic theme...'\n\n<span class='dim'>(You never specified type, size, date, budget, or theme —\nthe model assumed all of them.)</span>",
    fields:[
      { label:"Best FOLLOW-UP move", options:["Accept all the assumptions","Provide the real parameters (event type, size, date, budget) so the plan fits your actual situation","Ask it to assume even more","Ask an unrelated question"], answer:1, explain:"The model guessed because your prompt was ambiguous; giving it the true parameters replaces guesses with a usable plan." },
      { label:"An equally valid move if you're unsure what to specify", options:["Let the model keep guessing","Ask the model what information it needs from you to build an accurate plan","Tell it to stop asking questions","Copy the guessed plan into a document"], answer:1, explain:"Turning the question back — 'what do you need to know?' — surfaces the missing inputs so you can supply them." },
      { label:"What this illustrates about prompting", options:["The model reads minds","Ambiguous prompts force the model to assume; specificity or a clarifying exchange fixes it","Longer prompts are always worse","You should never give details"], answer:1, explain:"When a prompt underspecifies, the model must fill gaps; the cure is either more detail or a clarifying back-and-forth." }
    ],
    summary:"When the model fills in unstated details, supply the real parameters or ask it what it needs — ambiguity is what forced the guessing."
  },
  {
    id:"PBQ-018", format:3, domain:4,
    title:"Refining Code That Almost Works",
    brief:"You asked for a spreadsheet formula and the AI gave one that's close but doesn't handle a case you care about. Choose the best follow-up to iterate toward a correct solution.",
    exhibitTitle:"chat://followup",
    exhibit:"<span class='cy'>YOU:</span> Give me a formula to average column B.\n\n<span class='ok'>AI (first answer):</span>\n=AVERAGE(B2:B100)\n\n<span class='cy'>YOU (realize):</span> some cells in B are blank or say 'N/A',\nand those are skewing or breaking the result.\n\n<span class='dim'>(The formula works only for clean numeric data.)</span>",
    fields:[
      { label:"Best FOLLOW-UP move", options:["Ask for a completely different task","Tell the model the new requirement (ignore blanks and 'N/A' text) and ask it to adjust the formula","Give up on formulas","Ask it to make the range bigger only"], answer:1, explain:"Iterate by stating the edge case you discovered; the model can then adapt the formula (e.g., AVERAGEIF) to handle blanks and text." },
      { label:"Best way to confirm the new formula works", options:["Assume it's correct because the model is confident","Test it on a small sample with known blanks/'N/A' and check the result by hand","Post it to production untested","Ask the model to promise it works"], answer:1, explain:"Verifying against a small known dataset confirms the fix behaves as expected before you trust it on all your data." },
      { label:"Good habit when iterating on solutions", options:["Change everything at once","Refine one requirement at a time and re-test, so you know which change fixed what","Never test","Accept the first answer always"], answer:1, explain:"Incremental refinement with testing isolates the effect of each change and keeps the conversation productive." }
    ],
    summary:"Iterate by naming the specific edge case you found, ask for an adjustment, then verify the fix on known data before trusting it."
  },
  {
    id:"PBQ-019", format:3, domain:4,
    title:"Ask the Model to Check Its Own Work",
    brief:"The AI produced a persuasive argument for a debate, but you suspect it's one-sided. Decide the best follow-up to strengthen and stress-test the response.",
    exhibitTitle:"chat://followup",
    exhibit:"<span class='cy'>YOU:</span> Argue that cities should ban all cars downtown.\n\n<span class='ok'>AI (first answer):</span>\n'Banning cars downtown reduces pollution, noise, and\naccidents while boosting local business and walkability...'\n\n<span class='dim'>(A strong one-sided case; no counterarguments considered.)</span>",
    fields:[
      { label:"Best FOLLOW-UP move to stress-test it", options:["Ask it to repeat the same argument","Ask it to critique its own argument and list the strongest counterarguments and their rebuttals","Ask for a poem instead","Tell it the argument is perfect"], answer:1, explain:"Requesting a self-critique with counterarguments exposes weak spots and produces a more balanced, defensible position." },
      { label:"Why request counterarguments at all?", options:["To make the response longer","A one-sided case is fragile; anticipating objections makes your position robust and credible","Because the model enjoys debate","To use more of the context window"], answer:1, explain:"Surfacing objections and addressing them strengthens the argument and prepares you for real rebuttals." },
      { label:"Good next step for a balanced final piece", options:["Publish only the one-sided version","Ask the model to synthesize a balanced take that acknowledges trade-offs and states the strongest overall conclusion","Delete the counterarguments","Add more unsupported claims"], answer:1, explain:"Synthesizing both sides yields a credible, trade-off-aware conclusion rather than a brittle one-sided pitch." }
    ],
    summary:"To harden a one-sided answer, have the model critique itself and produce counterarguments, then synthesize a balanced, trade-off-aware conclusion."
  },
  {
    id:"PBQ-020", format:3, domain:4,
    title:"Narrowing a Too-Broad Answer",
    brief:"You asked how to get in shape and got a sprawling, do-everything answer. Choose the follow-up that turns it into something you can actually start this week.",
    exhibitTitle:"chat://followup",
    exhibit:"<span class='cy'>YOU:</span> How do I get in shape?\n\n<span class='ok'>AI (first answer):</span>\n'There are many approaches: cardio, strength training,\nyoga, diet changes, sleep optimization, supplements,\nHIIT, macro tracking, mobility work, and more...'\n\n<span class='dim'>(Accurate but overwhelming; no prioritization for you.)</span>",
    fields:[
      { label:"Best FOLLOW-UP move", options:["Ask for even more options","Add your constraints (e.g., 3 hours/week, no gym, beginner) and ask for a prioritized starter plan","Ask about an unrelated topic","Tell it to list 50 more ideas"], answer:1, explain:"Supplying your real constraints lets the model prioritize and produce a focused starter plan instead of an exhaustive menu." },
      { label:"Why add constraints instead of asking to 'simplify'?", options:["Constraints slow the model down","Constraints give the model the criteria to prioritize by; 'simplify' alone leaves it guessing what matters to you","Simplify is a banned word","The model can't count"], answer:1, explain:"Concrete constraints (time, equipment, level) are the basis for prioritization; a bare 'simplify' lacks that steering." },
      { label:"Good next step once you have a starter plan", options:["Ignore it","Ask for a simple week-1 schedule you can follow and how to progress in week 2","Ask for supplements only","Request the broad list again"], answer:1, explain:"Turning the plan into a concrete week-1 schedule with a progression path makes it actionable and sustainable." }
    ],
    summary:"Tame an overwhelming answer by adding your real constraints so the model can prioritize, then ask for a concrete first-week plan."
  },
  {
    id:"PBQ-021", format:3, domain:4,
    title:"The Model Contradicted Itself",
    brief:"Across two messages, the AI gave you conflicting figures for the same thing. Decide how to resolve the contradiction constructively.",
    exhibitTitle:"chat://followup",
    exhibit:"<span class='ok'>AI (message 1):</span> 'A standard marathon is 26.2 miles.'\n\n<span class='ok'>AI (message 2, later):</span> 'Remember, a marathon is about\n42 miles, so pace yourself.'\n\n<span class='dim'>(26.2 miles = ~42 KILOMETERS. Message 2 conflated the two.)</span>",
    fields:[
      { label:"Best FOLLOW-UP move", options:["Pick one at random","Point out the contradiction and ask the model to reconcile it and state the correct figure with units","Believe the most recent one automatically","Ignore both numbers"], answer:1, explain:"Naming the conflict and asking for a reconciliation with explicit units gets the model to correct the unit mix-up (42 km, not miles)." },
      { label:"Why not just trust the latest message?", options:["Newer is always right","Recency doesn't guarantee correctness; the later figure here is the wrong one","The first message is always right","The model never repeats itself"], answer:1, explain:"A more recent answer isn't automatically correct; here message 2 introduced the error, so you must verify, not assume." },
      { label:"Good habit when a model contradicts itself", options:["Assume the model is always consistent","Verify the disputed fact against an authoritative source rather than trusting either message blindly","Stop using units","Average the two numbers"], answer:1, explain:"When outputs conflict, confirm the fact externally; don't average contradictory claims or trust one on faith." }
    ],
    summary:"When the model contradicts itself, flag the conflict, ask it to reconcile with units, and verify the disputed fact against a reliable source."
  },
  {
    id:"PBQ-022", format:3, domain:4,
    title:"Getting the Right Format, Not Just the Right Content",
    brief:"The AI gave correct information as a wall of prose, but you need it as a comparison table for a slide. Choose the follow-up that fixes the format without losing accuracy.",
    exhibitTitle:"chat://followup",
    exhibit:"<span class='cy'>YOU:</span> Compare renting vs. buying a home.\n\n<span class='ok'>AI (first answer):</span>\n'Renting offers flexibility and lower upfront cost, while\nbuying builds equity but requires a down payment and\nmaintenance. Renting... buying... renting... buying...'\n(four dense paragraphs)\n\n<span class='dim'>(Content is fine; the format is wrong for a slide.)</span>",
    fields:[
      { label:"Best FOLLOW-UP move", options:["Ask a new question entirely","Ask it to reformat the same content as a two-column table (Rent vs. Buy) with short bullet points","Tell it to write more paragraphs","Ask it to delete half the content"], answer:1, explain:"The information is correct; a reformat request converts the prose into the table structure your slide needs while keeping the facts." },
      { label:"Why specify the exact format you want?", options:["The model can't write tables","Being explicit about structure (columns, bullets, length) gets output you can drop straight into your slide","Formatting is impossible to change","Tables are always wrong"], answer:1, explain:"Explicit format instructions produce directly usable output and avoid another round of manual reformatting." },
      { label:"Good final check before using the table", options:["None needed","Scan that no facts were dropped or altered during the reformat and that each cell is accurate","Delete the headers","Add extra rows of filler"], answer:1, explain:"Reformatting can occasionally drop or garble details, so verify the table still matches the correct content." }
    ],
    summary:"When content is right but the format is wrong, ask for a specific reformat (e.g., a table) and then confirm no facts were lost."
  },

  /* ===================== FORMAT 4 — RESPONSIBLE & SECURE USE (5) ===================== */
  {
    id:"PBQ-023", format:4, domain:5,
    title:"Pasting Patient Records into a Public Chatbot",
    brief:"A clinic administrator wants to use a free public AI chatbot to summarize patient visit notes. The notes include names, diagnoses, and dates of birth. Decide whether this is safe and what governs it.",
    exhibitTitle:"scenario://healthcare",
    exhibit:"<span class='warnc'>TASK:</span> summarize 40 patient visit notes into a report\n\nData in the notes\n<span class='dim'>-------------------------------------------</span>\n<span class='warnc'>- Patient full names</span>\n<span class='warnc'>- Diagnoses and treatments</span>\n<span class='warnc'>- Dates of birth, MRN numbers</span>\n\nProposed tool: a free, public consumer AI chatbot\n(no business agreement, data may be retained/trained on)",
    fields:[
      { label:"Is this data SAFE to paste into the public chatbot?", options:["Yes, chatbots are private","No — it is protected health information and must not go to an unvetted public tool","Yes, if you delete the chat after","Yes, names alone aren't sensitive"], answer:1, explain:"Names plus diagnoses and DOB/MRN are protected health information; pasting them into a public tool with no agreement risks a serious breach." },
      { label:"Which law/policy most directly applies (US healthcare)?", options:["HIPAA — governs protection of health information","The First Amendment","Copyright law","Building codes"], answer:0, explain:"In the US, HIPAA governs the privacy and security of protected health information and restricts how it may be disclosed or processed." },
      { label:"Right ACTION", options:["Paste it anyway to save time","Use only an approved, agreement-backed tool, or de-identify the data first, per the clinic's policy","Email it to yourself first, then paste","Ask the chatbot to keep it secret"], answer:1, explain:"Use a sanctioned tool covered by a proper agreement, or remove identifiers before processing; never send PHI to an unvetted public service." }
    ],
    summary:"Patient names, diagnoses, and DOB are protected health information under HIPAA; never paste them into a public chatbot — use an approved tool or de-identify first."
  },
  {
    id:"PBQ-024", format:4, domain:5,
    title:"Uploading the Unreleased Financials",
    brief:"An analyst wants an AI assistant to help write commentary on the company's quarterly numbers — which are material, non-public, and embargoed until the earnings call. Decide how to proceed responsibly.",
    exhibitTitle:"scenario://finance",
    exhibit:"<span class='warnc'>TASK:</span> draft earnings commentary from the raw figures\n\nAbout the data\n<span class='dim'>-------------------------------------------</span>\n<span class='warnc'>- Material, non-public financial results</span>\n<span class='warnc'>- Embargoed until Thursday's public earnings call</span>\n<span class='ok'>- Company policy:</span> confidential data stays in approved systems\n\nProposed tool: a personal account on a public AI service",
    fields:[
      { label:"Is this data SAFE to share with a personal public AI account?", options:["Yes, it's just numbers","No — it is confidential, material non-public information and must stay in approved systems","Yes, if you're careful","Yes, once you're logged in"], answer:1, explain:"Material non-public financials are confidential; sending them to a personal public account risks leaks and potential securities-law issues." },
      { label:"Which concern/policy applies?", options:["Confidentiality and insider-information rules","Fire safety code","Trademark law","Net neutrality"], answer:0, explain:"Handling material non-public information implicates confidentiality obligations and insider-information regulations." },
      { label:"Is DISCLOSURE to a manager warranted before using AI here?", options:["No, just do it quietly","Yes — confirm with your manager/policy which approved tools may handle embargoed financials","No, ask the AI instead","Only after the earnings call"], answer:1, explain:"Before processing embargoed material, verify the approved-tools policy with your manager rather than deciding unilaterally." },
      { label:"Right ACTION", options:["Upload to your personal AI account","Use only a company-approved, access-controlled AI tool, or wait until the data is public","Post the numbers in a group chat first","Screenshot them to bypass upload limits"], answer:1, explain:"Restrict processing to sanctioned, controlled tools, or wait for public release; personal public services are off-limits for embargoed data." }
    ],
    summary:"Embargoed, material non-public financials are confidential — keep them in approved, controlled tools (or wait for release), and confirm policy with a manager first."
  },
  {
    id:"PBQ-025", format:4, domain:5,
    title:"AI Wrote Most of the Report — Do You Disclose?",
    brief:"You used an AI assistant to draft 80% of a report you're submitting for a graduate course that requires original work. Decide the responsible path on attribution and integrity.",
    exhibitTitle:"scenario://academic",
    exhibit:"<span class='warnc'>SITUATION:</span> a graded graduate assignment\n\nWhat happened\n<span class='dim'>-------------------------------------------</span>\n<span class='warnc'>- AI drafted ~80% of the report text</span>\n<span class='ok'>- Course policy:</span> AI use must be disclosed; work must be your own\n<span class='cy'>- You edited and fact-checked the AI draft</span>\n\nQuestion: how do you handle attribution and integrity?",
    fields:[
      { label:"Is non-disclosure acceptable here?", options:["Yes, editing makes it yours","No — the course policy requires disclosing AI use","Yes, if the grade is good","Yes, everyone uses AI"], answer:1, explain:"When a policy requires disclosure, submitting AI-heavy work as fully your own without saying so is an academic-integrity violation." },
      { label:"What does responsible use require?", options:["Hide the AI use","Disclose the AI assistance as the policy requires and ensure you understand and can defend the content","Delete the assignment","Blame the AI for errors"], answer:1, explain:"Follow the disclosure rule and take ownership of accuracy — you remain responsible for what you submit." },
      { label:"Right ACTION for the content itself", options:["Submit the raw AI draft untouched","Verify claims, correct errors, add your own analysis, and cite AI use per policy","Add fake citations to look researched","Copy a classmate's version instead"], answer:1, explain:"Beyond disclosure, you must fact-check, contribute original analysis, and cite the AI's role as required." }
    ],
    summary:"When policy requires it, disclose AI assistance, verify and own the content, and add your own analysis — undisclosed AI-heavy work is an integrity violation."
  },
  {
    id:"PBQ-026", format:4, domain:5,
    title:"Feeding Customer PII into a Marketing Tool",
    brief:"A marketer wants to paste a spreadsheet of EU customers' names, emails, and purchase history into a public AI tool to write personalized campaigns. Decide whether this is compliant.",
    exhibitTitle:"scenario://privacy",
    exhibit:"<span class='warnc'>TASK:</span> generate personalized emails from a customer list\n\nThe data\n<span class='dim'>-------------------------------------------</span>\n<span class='warnc'>- Names, email addresses, purchase histories</span>\n<span class='cy'>- Customers located in the EU</span>\n<span class='ok'>- No customer consent to share data with third parties</span>\n\nProposed tool: a public AI service with unclear data handling",
    fields:[
      { label:"Is this data SAFE to paste into the public AI tool?", options:["Yes, emails are public info","No — it is personal data being sent to a third party without consent or safeguards","Yes, if the campaign is nice","Yes, purchase history isn't personal"], answer:1, explain:"Names, emails, and purchase histories are personal data; sending them to an unvetted third party without consent or safeguards is non-compliant." },
      { label:"Which law most directly applies (EU customers)?", options:["GDPR — governs processing of EU residents' personal data","The Second Amendment","Maritime law","Antitrust law"], answer:0, explain:"GDPR governs how EU residents' personal data may be processed and shared, including with third-party services." },
      { label:"Right ACTION", options:["Upload the whole list to the public tool","Use an approved tool with proper data agreements, and only process personal data with a lawful basis and safeguards","Remove the header row and upload anyway","Ask the tool to promise GDPR compliance in chat"], answer:1, explain:"Process EU personal data only in tools covered by proper agreements and with a lawful basis and safeguards, not an unvetted public service." }
    ],
    summary:"EU customers' names, emails, and histories are personal data under GDPR — process them only with a lawful basis in approved, agreement-backed tools, not a public AI service."
  },
  {
    id:"PBQ-027", format:4, domain:5,
    title:"Over-Trusting AI for a Hiring Decision",
    brief:"An HR coordinator wants to let an AI tool auto-reject job applicants by scoring resumes, with no human review. Decide the responsible way to use AI in hiring.",
    exhibitTitle:"scenario://hiring",
    exhibit:"<span class='warnc'>PLAN:</span> AI scores every resume and auto-rejects low scores\n\nConcerns\n<span class='dim'>-------------------------------------------</span>\n<span class='warnc'>- No human reviews the AI's rejections</span>\n<span class='warnc'>- Model may reflect historical hiring bias</span>\n<span class='ok'>- Decisions affect people's livelihoods and are regulated</span>\n\nQuestion: is fully automated auto-rejection responsible?",
    fields:[
      { label:"Is fully automated, no-review auto-rejection responsible?", options:["Yes, it's efficient","No — high-stakes decisions about people need human oversight and bias checks","Yes, AI is neutral","Yes, if it's fast"], answer:1, explain:"Consequential decisions affecting livelihoods require human-in-the-loop review; unchecked automated rejection can bake in and scale bias." },
      { label:"What is the main risk to watch for?", options:["The AI being too slow","Discriminatory bias from historical data leading to unfair, possibly unlawful rejections","Using too little electricity","The resumes being too long"], answer:1, explain:"Models trained on biased historical hiring can systematically disadvantage protected groups, creating fairness and legal exposure." },
      { label:"Right ACTION", options:["Fully automate rejections to save time","Use AI to assist (e.g., surface candidates) with human review of decisions, audit for bias, and keep an appeal path","Hide that AI is used","Reject anyone the AI dislikes"], answer:1, explain:"Keep humans accountable for outcomes: use AI as a decision-support aid, audit it for bias, and retain human review and recourse." }
    ],
    summary:"High-stakes hiring decisions need human oversight, bias auditing, and recourse — AI should assist, not autonomously auto-reject applicants."
  },

  /* ===================== FORMAT 5 — USE-CASE & AUTOMATION SELECTION (3) ===================== */
  {
    id:"PBQ-028", format:5, domain:5,
    title:"Automating Weekly Status Reports",
    brief:"Every Friday you manually compile a status report from the same three source files. You're deciding whether and how to use AI to speed this up. Evaluate the fit and design the workflow.",
    exhibitTitle:"task://weekly-report",
    exhibit:"<span class='cy'>TASK:</span> write a weekly status report every Friday\n\nInputs (same each week)\n<span class='dim'>-------------------------------------------</span>\n<span class='ok'>- task-tracker export (CSV)</span>\n<span class='ok'>- this week's meeting notes (text)</span>\n<span class='ok'>- last week's report (for format)</span>\n\nOutput: a one-page report in a consistent structure",
    fields:[
      { label:"Is AI a GOOD FIT for this task?", options:["No, reports must be handwritten","Yes — it's a repetitive, text-summarization task with stable inputs and a clear format","No, AI can't read CSVs at all","No, only humans can summarize"], answer:1, explain:"Repetitive summarization from consistent inputs into a fixed format is an ideal fit for AI assistance." },
      { label:"Which CONTEXT FILES should you attach?", options:["Only your calendar","The task-tracker export, this week's meeting notes, and last week's report as a format template","A random unrelated document","Nothing; let it guess"], answer:1, explain:"Attaching the real inputs plus a prior report gives the model the data and the target structure to match." },
      { label:"Best WORKFLOW PROMPT", options:["'Write a report.'","'Using the attached tracker and notes, produce a one-page status report matching last week's structure; flag any tasks with no update as At Risk.'","'Summarize everything you know.'","'Make it look busy.'"], answer:1, explain:"A workflow prompt that names the inputs, the required structure, and a rule for gaps yields a consistent, decision-useful report." },
      { label:"Good habit before sending the report", options:["Send it unread","Skim for accuracy against the sources and correct anything the model misread","Delete the sources","Add filler to fill the page"], answer:1, explain:"Even a good draft needs a quick human accuracy check against the source files before distribution." }
    ],
    summary:"Repetitive report-writing from stable inputs is a strong AI fit — attach the real source files plus a format template, prompt with structure and gap rules, and verify before sending."
  },
  {
    id:"PBQ-029", format:5, domain:5,
    title:"Should AI Make the Final Call on Refunds?",
    brief:"Support wants to speed up refund handling. Some steps suit AI; deciding to approve a large refund may not. Sort out where AI fits and how to structure the workflow.",
    exhibitTitle:"task://refunds",
    exhibit:"<span class='cy'>TASK:</span> handle incoming refund requests faster\n\nSub-steps\n<span class='dim'>-------------------------------------------</span>\n<span class='ok'>- draft a polite reply</span>\n<span class='ok'>- summarize the order + policy that applies</span>\n<span class='warnc'>- APPROVE/DENY a large (&#36;900) refund</span>\n\nAvailable context: order history, refund policy doc",
    fields:[
      { label:"Where is AI a GOOD FIT vs. not?", options:["AI should approve/deny all refunds itself","AI is a good fit to draft replies and summarize policy, but a human should make the final approve/deny on a large refund","AI shouldn't help at all","AI should only handle the money movement"], answer:1, explain:"Drafting and summarizing are low-risk AI wins; the consequential financial decision should stay with an accountable human." },
      { label:"Which CONTEXT FILES to attach for the draft/summary?", options:["A marketing brochure","The customer's order history and the refund-policy document","The company org chart","Nothing"], answer:1, explain:"The order history and policy doc give the model exactly what it needs to summarize the situation and applicable rules accurately." },
      { label:"Best WORKFLOW PROMPT", options:["'Refund this person.'","'Summarize this order against the attached policy, note whether it appears eligible and why, and draft a reply — but leave the final approve/deny for a human.'","'Approve everything.'","'Ignore the policy.'"], answer:1, explain:"The prompt uses AI for analysis and drafting while explicitly reserving the decision for a person, matching risk to oversight." },
      { label:"Why keep the approval human?", options:["Humans are slower on purpose","A large financial decision carries risk and accountability that warrants human judgment and a record","AI can't read policies","Customers dislike AI"], answer:1, explain:"High-value, consequential actions warrant human accountability and judgment, even when AI does the surrounding legwork." }
    ],
    summary:"Use AI for low-risk drafting and policy summarization, but reserve the consequential approve/deny decision for an accountable human."
  },
  {
    id:"PBQ-030", format:5, domain:5,
    title:"Building a Reusable Onboarding-Email Workflow",
    brief:"HR sends a similar welcome email to every new hire, tailored to their team and start date. You want a repeatable AI workflow. Decide the fit, the context to supply, and the prompt design.",
    exhibitTitle:"task://onboarding-email",
    exhibit:"<span class='cy'>TASK:</span> generate a tailored welcome email per new hire\n\nWhat varies\n<span class='dim'>-------------------------------------------</span>\n<span class='ok'>- new hire name, team, manager, start date</span>\nWhat stays the same\n<span class='ok'>- tone, required first-day info, benefits link</span>\n\nGoal: consistent, personalized emails at scale",
    fields:[
      { label:"Is AI a GOOD FIT for this workflow?", options:["No, every email must be written from scratch","Yes — a templated, personalized email with a few variables is well suited to AI","No, AI can't personalize","No, HR emails must be handwritten"], answer:1, explain:"A consistent template with a handful of per-hire variables is a textbook fit for AI-assisted generation at scale." },
      { label:"Which CONTEXT FILES / inputs to supply?", options:["Only the office floor plan","An approved email template plus the new hire's details (name, team, manager, start date) and the standard first-day info","A competitor's newsletter","Nothing; let it invent details"], answer:1, explain:"Providing the approved template and the variable data ensures on-brand, accurate emails without invented specifics." },
      { label:"Best WORKFLOW PROMPT", options:["'Write a welcome email.'","'Using the attached template and this hire's details, produce a personalized welcome email; keep the standard first-day info and benefits link unchanged, and do not invent any details not provided.'","'Say welcome somehow.'","'Make each email totally different.'"], answer:1, explain:"A reusable prompt that references the template, injects the variables, preserves fixed content, and forbids invention yields consistent, correct emails." },
      { label:"Good final safeguard", options:["Send with no review","Have HR spot-check the first few and confirm names, dates, and links are correct before scaling","Remove the benefits link","Randomize the start dates"], answer:1, explain:"A quick human spot-check of the first batch catches variable-substitution errors before the workflow runs at scale." }
    ],
    summary:"Templated, variable-driven emails are a strong AI fit — supply the approved template plus the per-hire data, prompt it to preserve fixed content and not invent details, and spot-check before scaling."
  }
);
