window.TAXONOMY = [
  {
    title: "Good vs. Poor Tasks for AI",
    subtitle: "Sort each task by how well a general-purpose AI assistant handles it on its own.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "good", label: "Good fit" },
      { id: "poor", label: "Poor fit" },
      { id: "verify", label: "Needs verification" }
    ],
    items: [
      { text: "Brainstorm blog topics", cat: "good" },
      { text: "Draft a first-pass email", cat: "good" },
      { text: "Summarize a long article", cat: "good" },
      { text: "Rewrite text in a friendlier tone", cat: "good" },
      { text: "Explain a concept in simpler words", cat: "good" },
      { text: "Diagnose a patient without a doctor", cat: "poor" },
      { text: "Make a final legal decision alone", cat: "poor" },
      { text: "Decide who to hire on its own", cat: "poor" },
      { text: "Give binding financial advice unsupervised", cat: "poor" },
      { text: "Approve a loan with no human review", cat: "poor" },
      { text: "State last quarter's revenue figure", cat: "verify" },
      { text: "Cite a specific court case", cat: "verify" },
      { text: "Report a drug's exact dosage", cat: "verify" },
      { text: "Give today's stock price", cat: "verify" },
      { text: "Quote a statistic with a source", cat: "verify" }
    ]
  },
  {
    title: "Prompt Building Blocks",
    subtitle: "Match each prompt fragment to the part of a strong prompt it represents.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "goal", label: "Goal" },
      { id: "persona", label: "Persona" },
      { id: "context", label: "Context" },
      { id: "constraint", label: "Constraint" }
    ],
    items: [
      { text: "Write a persuasive introduction", cat: "goal" },
      { text: "Summarize these meeting notes", cat: "goal" },
      { text: "Draft three subject line options", cat: "goal" },
      { text: "Create a study plan for the week", cat: "goal" },
      { text: "Act as a career coach", cat: "persona" },
      { text: "You are a friendly tutor", cat: "persona" },
      { text: "Respond like a marketing expert", cat: "persona" },
      { text: "I'm preparing a speech for 8th graders", cat: "context" },
      { text: "This is for a small nonprofit's newsletter", cat: "context" },
      { text: "My audience has never coded before", cat: "context" },
      { text: "The event is next Friday afternoon", cat: "context" },
      { text: "Keep it under 100 words", cat: "constraint" },
      { text: "Use a professional tone", cat: "constraint" },
      { text: "Format the answer as a bulleted list", cat: "constraint" },
      { text: "Avoid any technical jargon", cat: "constraint" }
    ]
  },
  {
    title: "Types of AI Output Errors",
    subtitle: "Classify each symptom by the kind of AI output problem it reveals.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "hallucination", label: "Hallucination" },
      { id: "bias", label: "Bias" },
      { id: "outdated", label: "Outdated" },
      { id: "slop", label: "Generic slop" }
    ],
    items: [
      { text: "Cites a study that does not exist", cat: "hallucination" },
      { text: "Invents a fake book title and author", cat: "hallucination" },
      { text: "Makes up a confident but false statistic", cat: "hallucination" },
      { text: "Quotes a URL that leads nowhere", cat: "hallucination" },
      { text: "Assumes a nurse is always a woman", cat: "bias" },
      { text: "Favors one culture's holidays only", cat: "bias" },
      { text: "Describes 'a CEO' as always male", cat: "bias" },
      { text: "Skews examples toward one viewpoint", cat: "bias" },
      { text: "Names an old model as the newest one", cat: "outdated" },
      { text: "Misses a policy that changed last month", cat: "outdated" },
      { text: "Unaware of a recent world event", cat: "outdated" },
      { text: "Lists prices from two years ago", cat: "outdated" },
      { text: "Vague filler with no real substance", cat: "slop" },
      { text: "Repeats the prompt back as an answer", cat: "slop" },
      { text: "Bland corporate phrasing that says nothing", cat: "slop" },
      { text: "Padded intro before any real point", cat: "slop" }
    ]
  },
  {
    title: "Safe vs. Unsafe to Share with AI",
    subtitle: "Decide whether each piece of information is okay to paste into a public AI tool.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "safe", label: "Safe to share" },
      { id: "unsafe", label: "Unsafe to share" }
    ],
    items: [
      { text: "A public blog draft", cat: "safe" },
      { text: "A general question about grammar", cat: "safe" },
      { text: "A recipe you want improved", cat: "safe" },
      { text: "Text from a published news article", cat: "safe" },
      { text: "A made-up example with no real names", cat: "safe" },
      { text: "A generic coding question", cat: "safe" },
      { text: "A customer's Social Security number", cat: "unsafe" },
      { text: "Your company's unreleased financials", cat: "unsafe" },
      { text: "A patient's medical records", cat: "unsafe" },
      { text: "Login passwords or API keys", cat: "unsafe" },
      { text: "A confidential merger agreement", cat: "unsafe" },
      { text: "A coworker's home address", cat: "unsafe" },
      { text: "Proprietary source code under NDA", cat: "unsafe" },
      { text: "A credit card number", cat: "unsafe" }
    ]
  },
  {
    title: "Approved vs. Risky AI Use at Work",
    subtitle: "Sort each workplace action into responsible use or a policy risk.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "approved", label: "Approved" },
      { id: "risky", label: "Risky" }
    ],
    items: [
      { text: "Drafting a meeting agenda to review yourself", cat: "approved" },
      { text: "Brainstorming names for a new product", cat: "approved" },
      { text: "Rewording an email for clarity", cat: "approved" },
      { text: "Summarizing a public report you were sent", cat: "approved" },
      { text: "Generating practice interview questions", cat: "approved" },
      { text: "Using an approved company AI tool", cat: "approved" },
      { text: "Fact-checking AI output before sending it", cat: "approved" },
      { text: "Pasting customer PII into a public chatbot", cat: "risky" },
      { text: "Sending AI text to a client unreviewed", cat: "risky" },
      { text: "Uploading confidential files to a free tool", cat: "risky" },
      { text: "Letting AI approve expenses automatically", cat: "risky" },
      { text: "Presenting AI output as your own research", cat: "risky" },
      { text: "Trusting a legal answer without checking", cat: "risky" },
      { text: "Sharing trade secrets to get a better answer", cat: "risky" }
    ]
  },
  {
    title: "Follow-up Prompt Techniques",
    subtitle: "Match each follow-up prompt to the refinement technique it uses.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "clarify", label: "Clarify" },
      { id: "add", label: "Add elements" },
      { id: "critique", label: "Ask for self-critique" }
    ],
    items: [
      { text: "Can you make that simpler?", cat: "clarify" },
      { text: "What do you mean by that term?", cat: "clarify" },
      { text: "Rephrase the second point more clearly", cat: "clarify" },
      { text: "Focus only on the first idea", cat: "clarify" },
      { text: "Explain it like I'm ten years old", cat: "clarify" },
      { text: "Add a real-world example", cat: "add" },
      { text: "Include a short conclusion", cat: "add" },
      { text: "Give me two more options", cat: "add" },
      { text: "Add a call to action at the end", cat: "add" },
      { text: "Include a pros and cons list", cat: "add" },
      { text: "What did you get wrong here?", cat: "critique" },
      { text: "Point out any weak arguments above", cat: "critique" },
      { text: "Review your answer for mistakes", cat: "critique" },
      { text: "How could this response be improved?", cat: "critique" },
      { text: "List any assumptions you made", cat: "critique" }
    ]
  },
  {
    title: "Match the AI Tool to Its Category",
    subtitle: "Drop each popular AI tool into the type of product it is.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "chatbot", label: "Chatbot" },
      { id: "image", label: "Image generator" },
      { id: "code", label: "Code assistant" },
      { id: "answer", label: "Answer engine" }
    ],
    items: [
      { text: "ChatGPT", cat: "chatbot" },
      { text: "Claude", cat: "chatbot" },
      { text: "Google Gemini", cat: "chatbot" },
      { text: "Microsoft Copilot", cat: "chatbot" },
      { text: "DALL-E", cat: "image" },
      { text: "Midjourney", cat: "image" },
      { text: "Stability.ai", cat: "image" },
      { text: "Adobe Firefly", cat: "image" },
      { text: "GitHub Copilot", cat: "code" },
      { text: "Amazon CodeWhisperer", cat: "code" },
      { text: "Cursor", cat: "code" },
      { text: "Tabnine", cat: "code" },
      { text: "Perplexity", cat: "answer" },
      { text: "Google AI Overviews", cat: "answer" }
    ]
  }
];
