window.LABS = [
  {
    "id": "Lab 01",
    "num": 1,
    "group": "FOUNDATIONS",
    "title": "Telling AI Apart from Traditional Software",
    "desc": "Traditional programs follow fixed rules a developer wrote by hand, while AI systems learn patterns from data and produce probabilistic, non-deterministic output. In this lab you compare two systems side by side and label each behavior as rule-based or learned so you can recognize AI in the wild.",
    "objectives": [
      "Contrast deterministic rule-based logic with learned, probabilistic behavior.",
      "Identify signals that a system is AI-powered rather than hand-coded.",
      "Classify sample behaviors as traditional software or AI."
    ],
    "console": {
      "host": "aiess-lab01",
      "boot": [
        "[SYS] AI-vs-software comparison bench online.",
        "[SYS] Two sample systems loaded: TaxCalc and ChatHelper."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Label a system that gives the same answer every time"
        },
        {
          "id": "t2",
          "label": "Label a system whose output varies for the same prompt"
        },
        {
          "id": "t3",
          "label": "Record why one system is considered AI"
        },
        {
          "id": "t4",
          "label": "List the tells that mark a system as AI"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "A tax calculator that returns the identical result for identical inputs is best described as",
          "options": [
            "Traditional rule-based software",
            "Generative AI",
            "A neural network",
            "Machine learning"
          ],
          "correct": "Traditional rule-based software",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "A chat assistant that phrases the same answer differently each time is exhibiting",
          "options": [
            "Deterministic logic",
            "Probabilistic AI behavior",
            "A hard-coded lookup table",
            "A syntax error"
          ],
          "correct": "Probabilistic AI behavior",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "ENTER THE MAIN REASON CHATHELPER COUNTS AS AI",
        "placeholder": "it learns patterns from data",
        "button": "Submit",
        "response": "[OUT] Noted: ChatHelper is AI because it learned patterns from data rather than following hand-written rules.\n[OUT] Classification recorded.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "list tells",
          "out": "[AI] Output varies run to run\n[AI] Handles inputs it never saw\n[AI] Learned from data, not coded rules\n[AI] Expresses confidence, can be wrong",
          "task": "t4"
        },
        {
          "cmd": "help",
          "out": "[SYS] Commands: list tells, compare, show status"
        },
        {
          "cmd": "show status",
          "out": "[SYS] Comparison bench nominal."
        }
      ]
    }
  },
  {
    "id": "Lab 02",
    "num": 2,
    "group": "FOUNDATIONS",
    "title": "Picking the Right AI Tool for a Job",
    "desc": "Different AI tools are built for different jobs: chat assistants for text, image generators for pictures, transcription for speech, and analytics models for numbers. In this lab you match real tasks to the most suitable category of tool and confirm your choices against a job queue.",
    "objectives": [
      "Match a task to the AI tool category designed for it.",
      "Avoid forcing one tool to do a job it is poorly suited for.",
      "Justify a tool choice for a business scenario."
    ],
    "console": {
      "host": "aiess-lab02",
      "boot": [
        "[SYS] Tool-selection console online.",
        "[SYS] Job queue loaded: draft an email, make a logo, caption a meeting."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Choose a tool to draft a marketing email"
        },
        {
          "id": "t2",
          "label": "Choose a tool to create a logo concept"
        },
        {
          "id": "t3",
          "label": "Record the tool chosen for meeting transcription"
        },
        {
          "id": "t4",
          "label": "List the available tool categories"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Best tool to draft a marketing email",
          "options": [
            "A text/chat assistant",
            "An image generator",
            "A speech-to-text transcriber",
            "A spreadsheet macro"
          ],
          "correct": "A text/chat assistant",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Best tool to generate a first-draft logo concept",
          "options": [
            "A text/chat assistant",
            "An image generation model",
            "A transcription service",
            "A calculator"
          ],
          "correct": "An image generation model",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "ENTER THE TOOL CATEGORY FOR MEETING TRANSCRIPTION",
        "placeholder": "speech-to-text",
        "button": "Submit",
        "response": "[OUT] Meeting audio routed to a speech-to-text tool.\n[OUT] Tool choice recorded for the job queue.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "list tools",
          "out": "[TOOL] Text/chat assistant\n[TOOL] Image generator\n[TOOL] Speech-to-text\n[TOOL] Data analytics model",
          "task": "t4"
        },
        {
          "cmd": "help",
          "out": "[SYS] Commands: list tools, show queue, show status"
        },
        {
          "cmd": "show queue",
          "out": "[QUEUE] 3 jobs pending tool assignment."
        }
      ]
    }
  },
  {
    "id": "Lab 03",
    "num": 3,
    "group": "FOUNDATIONS",
    "title": "Classifying AI, Machine Learning, and Generative AI",
    "desc": "AI is the broad field, machine learning is a subset that learns from data, and generative AI is a further subset that creates new content. In this lab you place example systems into the correct nested category and log a definition so the relationships stick.",
    "objectives": [
      "Order AI, ML, and generative AI from broadest to narrowest.",
      "Classify example systems into the correct category.",
      "Explain what makes a system 'generative'."
    ],
    "console": {
      "host": "aiess-lab03",
      "boot": [
        "[SYS] Concept-classifier console online.",
        "[SYS] Examples loaded: spam filter, image generator, rules engine."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Classify a spam filter that learns from labeled email"
        },
        {
          "id": "t2",
          "label": "Classify a tool that writes new stories from a prompt"
        },
        {
          "id": "t3",
          "label": "Record what distinguishes generative AI"
        },
        {
          "id": "t4",
          "label": "Show how the three terms nest"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "A spam filter trained on labeled emails is an example of",
          "options": [
            "Machine learning",
            "Generative AI",
            "A hand-coded rules engine",
            "Robotic process automation"
          ],
          "correct": "Machine learning",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "A model that produces brand-new text from a prompt is",
          "options": [
            "Generative AI",
            "A traditional database query",
            "A spreadsheet formula",
            "Rule-based software"
          ],
          "correct": "Generative AI",
          "task": "t2"
        },
        {
          "id": "c3",
          "label": "Which statement about the relationship is correct?",
          "options": [
            "Generative AI is a subset of machine learning, which is a subset of AI",
            "AI is a subset of machine learning",
            "Machine learning and AI are unrelated fields",
            "Generative AI is broader than AI"
          ],
          "correct": "Generative AI is a subset of machine learning, which is a subset of AI",
          "task": "t1"
        }
      ],
      "payload": {
        "label": "ENTER WHAT MAKES A SYSTEM 'GENERATIVE'",
        "placeholder": "it creates new content",
        "button": "Submit",
        "response": "[OUT] Recorded: generative AI creates new original content (text, images, audio) rather than only classifying or predicting.\n[OUT] Definition saved.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show nesting",
          "out": "[CONCEPT] AI (broadest)\n[CONCEPT]  +- Machine Learning\n[CONCEPT]      +- Generative AI (narrowest)",
          "task": "t4"
        },
        {
          "cmd": "help",
          "out": "[SYS] Commands: show nesting, list examples, show status"
        }
      ]
    }
  },
  {
    "id": "Lab 04",
    "num": 4,
    "group": "FOUNDATIONS",
    "title": "Deciding When AI Is Appropriate to Use",
    "desc": "AI shines on ambiguous, language-heavy, or pattern-rich tasks but is a poor fit where exact answers, legal accountability, or private data are non-negotiable. In this lab you judge several scenarios and decide whether AI is an appropriate tool or a risky one.",
    "objectives": [
      "Recognize task traits that make AI a good fit.",
      "Flag scenarios where AI is inappropriate or high-risk.",
      "Recommend a go / no-go decision with a reason."
    ],
    "console": {
      "host": "aiess-lab04",
      "boot": [
        "[SYS] AI-fit decision console online.",
        "[SYS] Scenarios loaded: brainstorm names, compute payroll totals."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Judge AI fit for brainstorming product names"
        },
        {
          "id": "t2",
          "label": "Judge AI fit for exact payroll math of record"
        },
        {
          "id": "t3",
          "label": "Record a go/no-go decision with reason"
        },
        {
          "id": "t4",
          "label": "List traits of a good AI task"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Brainstorming 20 product-name ideas is",
          "options": [
            "A good fit for AI",
            "A poor fit for AI",
            "Illegal to use AI for",
            "Impossible for AI"
          ],
          "correct": "A good fit for AI",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Using generative AI as the system of record for exact payroll totals is",
          "options": [
            "A poor fit; use deterministic software",
            "The ideal use of AI",
            "Better than any calculator",
            "Required by best practice"
          ],
          "correct": "A poor fit; use deterministic software",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "ENTER GO OR NO-GO FOR 'AI DRAFTS A BLOG POST TO BE HUMAN-REVIEWED'",
        "placeholder": "go - low risk, human reviews it",
        "button": "Submit",
        "response": "[OUT] Decision logged: GO. Drafting with human review is a suitable, low-risk use of AI.\n[OUT] Recommendation saved.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "list fit-traits",
          "out": "[FIT] Ambiguous or open-ended\n[FIT] Language or pattern heavy\n[FIT] Draft quality is enough\n[FIT] A human can verify the output",
          "task": "t4"
        },
        {
          "cmd": "help",
          "out": "[SYS] Commands: list fit-traits, list scenarios, show status"
        },
        {
          "cmd": "show status",
          "out": "[SYS] Decision console nominal."
        }
      ]
    }
  },
  {
    "id": "Lab 05",
    "num": 5,
    "group": "PROMPTING",
    "title": "Building a Goal-Persona-Context-Constraint Prompt",
    "desc": "Strong prompts usually specify a goal, a persona for the AI, relevant context, and clear constraints. In this lab you assemble each part of that structure and submit a complete prompt, seeing how the pieces combine into a precise request.",
    "objectives": [
      "Identify the goal, persona, context, and constraint parts of a prompt.",
      "Assemble the four parts into one coherent prompt.",
      "Submit a well-structured prompt and read the confirmation."
    ],
    "console": {
      "host": "aiess-lab05",
      "boot": [
        "[SYS] Prompt-builder console online.",
        "[SYS] Template loaded: GOAL / PERSONA / CONTEXT / CONSTRAINT."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Pick the persona clause for the prompt"
        },
        {
          "id": "t2",
          "label": "Pick the constraint clause for the prompt"
        },
        {
          "id": "t3",
          "label": "Submit the fully assembled prompt"
        },
        {
          "id": "t4",
          "label": "Review the four-part template"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Which clause sets the PERSONA?",
          "options": [
            "Act as an experienced HR manager",
            "Summarize this policy",
            "Keep it under 100 words",
            "The audience is new hires"
          ],
          "correct": "Act as an experienced HR manager",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Which clause sets a CONSTRAINT?",
          "options": [
            "Limit the answer to three bullet points",
            "Act as a travel agent",
            "Here is the trip itinerary",
            "Help me plan a vacation"
          ],
          "correct": "Limit the answer to three bullet points",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "ENTER A COMPLETE GOAL/PERSONA/CONTEXT/CONSTRAINT PROMPT",
        "placeholder": "As a career coach, using my resume below, rewrite my summary in under 60 words.",
        "button": "Submit",
        "response": "[OUT] Prompt accepted with all four parts present: goal, persona, context, constraint.\n[OUT] Structured prompt logged.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show template",
          "out": "[TPL] GOAL: what you want\n[TPL] PERSONA: who the AI should act as\n[TPL] CONTEXT: background it needs\n[TPL] CONSTRAINT: limits on the answer",
          "task": "t4"
        },
        {
          "cmd": "help",
          "out": "[SYS] Commands: show template, show example, show status"
        }
      ]
    }
  },
  {
    "id": "Lab 06",
    "num": 6,
    "group": "PROMPTING",
    "title": "Improving a Weak, Vague Prompt",
    "desc": "Vague prompts like 'write something about dogs' produce vague results. In this lab you diagnose what a weak prompt is missing and rewrite it with specifics, then submit the improved version to see the difference clarity makes.",
    "objectives": [
      "Diagnose why a prompt is too vague.",
      "Add specifics that steer the AI toward a useful answer.",
      "Submit an improved, specific prompt."
    ],
    "console": {
      "host": "aiess-lab06",
      "boot": [
        "[SYS] Prompt-refinement console online.",
        "[SYS] Weak prompt loaded: 'write something about dogs'."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Identify the biggest weakness of the vague prompt"
        },
        {
          "id": "t2",
          "label": "Choose the single most useful specific to add"
        },
        {
          "id": "t3",
          "label": "Submit the rewritten, specific prompt"
        },
        {
          "id": "t4",
          "label": "Show a before/after example"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "The main problem with 'write something about dogs' is that it lacks",
          "options": [
            "A clear goal, audience, and format",
            "Correct spelling",
            "Enough exclamation points",
            "A greeting to the AI"
          ],
          "correct": "A clear goal, audience, and format",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Which addition improves the prompt the most?",
          "options": [
            "Write a 150-word care guide for first-time puppy owners",
            "Please write nicely",
            "Make it about dogs, thanks",
            "Use big words"
          ],
          "correct": "Write a 150-word care guide for first-time puppy owners",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "ENTER YOUR REWRITTEN, SPECIFIC PROMPT",
        "placeholder": "Write a 150-word beginner care guide for new puppy owners, friendly tone.",
        "button": "Submit",
        "response": "[OUT] Improved prompt accepted: clear goal, audience, length, and tone detected.\n[OUT] Rewrite logged.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show before-after",
          "out": "[BEFORE] write something about dogs\n[AFTER] Write a 150-word friendly care guide for first-time puppy owners covering food, vet visits, and exercise.",
          "task": "t4"
        },
        {
          "cmd": "help",
          "out": "[SYS] Commands: show before-after, show tips, show status"
        }
      ]
    }
  },
  {
    "id": "Lab 07",
    "num": 7,
    "group": "PROMPTING",
    "title": "Right-Sizing a Prompt",
    "desc": "A prompt can be too thin to be useful or so bloated it buries the request. In this lab you judge whether prompts give too little, too much, or just enough detail, then tune one to the right size for the task.",
    "objectives": [
      "Spot a prompt that gives too little detail.",
      "Spot a prompt overloaded with irrelevant detail.",
      "Tune a prompt to an appropriate level of detail."
    ],
    "console": {
      "host": "aiess-lab07",
      "boot": [
        "[SYS] Prompt-sizing console online.",
        "[SYS] Two prompts loaded for length review."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Judge a one-word prompt"
        },
        {
          "id": "t2",
          "label": "Judge a prompt padded with irrelevant backstory"
        },
        {
          "id": "t3",
          "label": "Submit a right-sized prompt"
        },
        {
          "id": "t4",
          "label": "Show the right-sizing rule of thumb"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "The prompt 'marketing' by itself is",
          "options": [
            "Too little detail to be useful",
            "Perfectly sized",
            "Too much detail",
            "A constraint"
          ],
          "correct": "Too little detail to be useful",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "A prompt with three paragraphs of unrelated life story before the request has",
          "options": [
            "Too much irrelevant detail",
            "Exactly the right detail",
            "Too little detail",
            "No goal at all"
          ],
          "correct": "Too much irrelevant detail",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "ENTER A RIGHT-SIZED PROMPT FOR 'SUMMARIZE A REPORT'",
        "placeholder": "Summarize the attached report in 5 bullets for executives.",
        "button": "Submit",
        "response": "[OUT] Prompt accepted: enough detail to guide, no irrelevant padding.\n[OUT] Right-sized prompt logged.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show rule",
          "out": "[RULE] Include what changes the answer (goal, audience, format, limits).\n[RULE] Leave out detail that does not affect the output.",
          "task": "t4"
        },
        {
          "cmd": "help",
          "out": "[SYS] Commands: show rule, show examples, show status"
        }
      ]
    }
  },
  {
    "id": "Lab 08",
    "num": 8,
    "group": "PROMPTING",
    "title": "Choosing Safe, Relevant Context Files",
    "desc": "Attaching the right context helps the AI, but attaching sensitive or off-topic files causes leaks and noise. In this lab you decide which files are safe and relevant to share with an AI assistant for a given task.",
    "objectives": [
      "Select context that is relevant to the task.",
      "Reject files that are sensitive or off-topic.",
      "Record a safe context selection."
    ],
    "console": {
      "host": "aiess-lab08",
      "boot": [
        "[SYS] Context-selection console online.",
        "[SYS] Task loaded: draft an FAQ from the public product guide."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Choose a relevant, safe file to attach"
        },
        {
          "id": "t2",
          "label": "Reject a file that should not be shared"
        },
        {
          "id": "t3",
          "label": "Record the final context selection"
        },
        {
          "id": "t4",
          "label": "List the files available to attach"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "For drafting a public FAQ, the best file to attach is",
          "options": [
            "The public product user guide",
            "A spreadsheet of customer credit-card numbers",
            "The CEO's private salary memo",
            "An unrelated vacation-photo folder"
          ],
          "correct": "The public product user guide",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Which file must NOT be attached to the assistant?",
          "options": [
            "A spreadsheet of customer credit-card numbers",
            "The public product user guide",
            "The published pricing page",
            "The public release notes"
          ],
          "correct": "A spreadsheet of customer credit-card numbers",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "ENTER THE FILES YOU WILL SAFELY ATTACH",
        "placeholder": "public product guide, published release notes",
        "button": "Submit",
        "response": "[OUT] Context accepted: only public, on-topic files selected. No sensitive data shared.\n[OUT] Selection logged.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "list files",
          "out": "[FILE] product-guide.pdf (public)\n[FILE] release-notes.md (public)\n[FILE] customer-cards.xlsx (SENSITIVE)\n[FILE] ceo-salary.docx (CONFIDENTIAL)",
          "task": "t4"
        },
        {
          "cmd": "help",
          "out": "[SYS] Commands: list files, show task, show status"
        }
      ]
    }
  },
  {
    "id": "Lab 09",
    "num": 9,
    "group": "VERIFY",
    "title": "Name That AI Error",
    "desc": "AI outputs fail in recognizable ways: hallucinated facts, confident-but-wrong answers, and outdated information. In this lab you read flawed responses and label the type of error so you know what to watch for.",
    "objectives": [
      "Recognize a hallucinated (fabricated) fact.",
      "Distinguish confident tone from actual correctness.",
      "Label an outdated-information error."
    ],
    "console": {
      "host": "aiess-lab09",
      "boot": [
        "[SYS] Error-classifier console online.",
        "[SYS] Sample flawed responses loaded."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Label a made-up citation"
        },
        {
          "id": "t2",
          "label": "Label an answer that is wrong but stated confidently"
        },
        {
          "id": "t3",
          "label": "Record the error in an outdated response"
        },
        {
          "id": "t4",
          "label": "List the common AI error types"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "The AI cites a book and author that do not exist. This is",
          "options": [
            "A hallucination",
            "A rounding error",
            "A network timeout",
            "Correct behavior"
          ],
          "correct": "A hallucination",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "A confidently worded but factually wrong answer shows that",
          "options": [
            "Confident tone does not guarantee correctness",
            "The AI is always right when confident",
            "Confidence proves the fact",
            "Tone equals accuracy"
          ],
          "correct": "Confident tone does not guarantee correctness",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "ENTER THE ERROR TYPE WHEN AI GIVES A 2021 PRICE AS CURRENT",
        "placeholder": "outdated information",
        "button": "Submit",
        "response": "[OUT] Recorded: outdated-information error (stale training data presented as current).\n[OUT] Classification saved.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "list errors",
          "out": "[ERR] Hallucination (fabricated facts)\n[ERR] Confident-but-wrong\n[ERR] Outdated information\n[ERR] Biased or one-sided output",
          "task": "t4"
        },
        {
          "cmd": "help",
          "out": "[SYS] Commands: list errors, show samples, show status"
        }
      ]
    }
  },
  {
    "id": "Lab 10",
    "num": 10,
    "group": "VERIFY",
    "title": "Running the Verification Workflow",
    "desc": "Trustworthy use of AI means verifying important claims before you act on them. In this lab you order the steps of a verification workflow and run a check against an independent source, building the habit of confirming before relying.",
    "objectives": [
      "Order the steps of a claim-verification workflow.",
      "Choose an appropriate independent source to check a claim.",
      "Run and record a verification result."
    ],
    "console": {
      "host": "aiess-lab10",
      "boot": [
        "[SYS] Verification-workflow console online.",
        "[SYS] Claim loaded: 'the meeting policy requires 48 hours notice'."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Pick the first step after receiving an AI claim"
        },
        {
          "id": "t2",
          "label": "Pick an appropriate source to verify against"
        },
        {
          "id": "t3",
          "label": "Run the verification and record the result"
        },
        {
          "id": "t4",
          "label": "Show the full workflow steps"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "The first step after getting an important AI claim is to",
          "options": [
            "Identify the claims that need checking",
            "Post it publicly immediately",
            "Delete the conversation",
            "Assume it is correct"
          ],
          "correct": "Identify the claims that need checking",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "The best source to verify a company meeting policy is",
          "options": [
            "The official company policy document",
            "A random social-media post",
            "The AI's own restatement",
            "A guess"
          ],
          "correct": "The official company policy document",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "ENTER THE VERIFICATION RESULT AFTER CHECKING THE POLICY DOC",
        "placeholder": "confirmed - policy doc says 48 hours",
        "button": "Submit",
        "response": "[OUT] Result recorded: claim confirmed against the official policy document.\n[OUT] Verification logged.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show workflow",
          "out": "[STEP 1] Identify claims to check\n[STEP 2] Find an independent, authoritative source\n[STEP 3] Compare the claim to the source\n[STEP 4] Accept, correct, or discard",
          "task": "t4"
        },
        {
          "cmd": "help",
          "out": "[SYS] Commands: show workflow, show claim, show status"
        }
      ]
    }
  },
  {
    "id": "Lab 11",
    "num": 11,
    "group": "VERIFY",
    "title": "Judging a Claim's Plausibility",
    "desc": "Before deep verification, a quick plausibility check catches obvious nonsense. In this lab you rate whether AI-produced claims are plausible, implausible, or need checking, sharpening your instinct for when to slow down.",
    "objectives": [
      "Rate a claim as plausible, implausible, or needs-checking.",
      "Use common sense and units to sanity-check numbers.",
      "Record a plausibility judgment."
    ],
    "console": {
      "host": "aiess-lab11",
      "boot": [
        "[SYS] Plausibility console online.",
        "[SYS] Claims loaded for a quick sanity check."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Rate an obviously impossible statistic"
        },
        {
          "id": "t2",
          "label": "Rate a specific figure that could be right or wrong"
        },
        {
          "id": "t3",
          "label": "Record a plausibility rating with reason"
        },
        {
          "id": "t4",
          "label": "Show plausibility red flags"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "'This city has 3 billion residents' should be rated",
          "options": [
            "Implausible on its face",
            "Definitely true",
            "Impossible to assess",
            "Plausible and final"
          ],
          "correct": "Implausible on its face",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "'Our Q3 revenue was $4.2M' from AI should be treated as",
          "options": [
            "Needs checking against records",
            "Guaranteed accurate",
            "Obviously false",
            "Not worth verifying"
          ],
          "correct": "Needs checking against records",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "ENTER YOUR RATING AND REASON FOR 'A HUMAN CAN RUN A 2-MINUTE MILE'",
        "placeholder": "implausible - far beyond world record",
        "button": "Submit",
        "response": "[OUT] Rating recorded: implausible; the claim contradicts well-known physical limits.\n[OUT] Judgment saved.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show red-flags",
          "out": "[FLAG] Numbers that defy common sense\n[FLAG] Suspiciously round or extreme figures\n[FLAG] Claims with no verifiable source\n[FLAG] Contradicts what you already know",
          "task": "t4"
        },
        {
          "cmd": "help",
          "out": "[SYS] Commands: show red-flags, show claims, show status"
        }
      ]
    }
  },
  {
    "id": "Lab 12",
    "num": 12,
    "group": "VERIFY",
    "title": "Spotting Bias or Outdated Information",
    "desc": "AI reflects the data it learned from, which can be one-sided or years out of date. In this lab you examine responses for bias and staleness, then note how to correct for each so your final output stays fair and current.",
    "objectives": [
      "Detect one-sided or biased framing in an answer.",
      "Detect information that is out of date.",
      "Record how to correct a biased or stale response."
    ],
    "console": {
      "host": "aiess-lab12",
      "boot": [
        "[SYS] Bias-and-currency console online.",
        "[SYS] Responses loaded for fairness and freshness review."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Flag a response that presents only one viewpoint"
        },
        {
          "id": "t2",
          "label": "Flag a response citing a stale statistic"
        },
        {
          "id": "t3",
          "label": "Record a correction for a biased answer"
        },
        {
          "id": "t4",
          "label": "List bias and staleness signals"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "An answer that only lists the upsides of one option shows",
          "options": [
            "One-sided bias",
            "Perfect balance",
            "A math error",
            "Up-to-date sourcing"
          ],
          "correct": "One-sided bias",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "An answer quoting 'the latest 2019 figures' is likely",
          "options": [
            "Outdated and needs a current source",
            "The freshest data available",
            "Unbiased by definition",
            "Impossible to update"
          ],
          "correct": "Outdated and needs a current source",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "ENTER HOW TO CORRECT A ONE-SIDED ANSWER",
        "placeholder": "ask for pros and cons of all options",
        "button": "Submit",
        "response": "[OUT] Correction recorded: request balanced coverage of multiple viewpoints and cite current sources.\n[OUT] Fix logged.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "list signals",
          "out": "[SIGNAL] Only one viewpoint presented\n[SIGNAL] Loaded or emotional wording\n[SIGNAL] Old dates or 'as of' years back\n[SIGNAL] Missing recent developments",
          "task": "t4"
        },
        {
          "cmd": "help",
          "out": "[SYS] Commands: list signals, show responses, show status"
        }
      ]
    }
  },
  {
    "id": "Lab 13",
    "num": 13,
    "group": "CONVERSATION",
    "title": "Crafting a Clarifying Follow-Up",
    "desc": "When an AI answer is close but off, a targeted follow-up beats starting over. In this lab you choose the follow-up that best steers the conversation and send one that pins down exactly what you need.",
    "objectives": [
      "Recognize when a follow-up is better than a new prompt.",
      "Choose a follow-up that narrows the answer.",
      "Send an effective clarifying follow-up."
    ],
    "console": {
      "host": "aiess-lab13",
      "boot": [
        "[SYS] Follow-up console online.",
        "[SYS] Prior answer loaded: a generic 5-day itinerary."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Decide whether to follow up or restart"
        },
        {
          "id": "t2",
          "label": "Pick the most useful clarifying follow-up"
        },
        {
          "id": "t3",
          "label": "Send a clarifying follow-up message"
        },
        {
          "id": "t4",
          "label": "Show follow-up tips"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "The itinerary is good but ignores your budget. You should",
          "options": [
            "Follow up to add the budget constraint",
            "Start a brand-new unrelated chat",
            "Accept it as-is",
            "Abandon the task"
          ],
          "correct": "Follow up to add the budget constraint",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "The strongest follow-up is",
          "options": [
            "Redo it for a $1,500 total budget and 2 travelers",
            "Make it better",
            "Try again",
            "Do something else"
          ],
          "correct": "Redo it for a $1,500 total budget and 2 travelers",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "ENTER YOUR CLARIFYING FOLLOW-UP",
        "placeholder": "Revise for a $1,500 budget, vegetarian meals, 2 adults.",
        "button": "Send",
        "response": "[OUT] Follow-up sent: budget and preferences added; assistant will revise the same plan.\n[OUT] Message logged.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show tips",
          "out": "[TIP] Reference the prior answer, do not restart\n[TIP] Add the missing constraint\n[TIP] Be specific about what to change",
          "task": "t4"
        },
        {
          "cmd": "help",
          "out": "[SYS] Commands: show tips, show answer, show status"
        }
      ]
    }
  },
  {
    "id": "Lab 14",
    "num": 14,
    "group": "CONVERSATION",
    "title": "Adding Elements to Refine an Answer",
    "desc": "You can steer an answer by adding elements such as tone, format, length, or audience. In this lab you select which element to add for a given goal and submit a refinement request that reshapes the output.",
    "objectives": [
      "Identify which element (tone, format, length, audience) to add.",
      "Match an added element to a desired change.",
      "Submit a refinement that adds a specific element."
    ],
    "console": {
      "host": "aiess-lab14",
      "boot": [
        "[SYS] Refinement console online.",
        "[SYS] Draft loaded: a dense paragraph of technical notes."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Add a format element to break up dense text"
        },
        {
          "id": "t2",
          "label": "Add a tone element for a customer audience"
        },
        {
          "id": "t3",
          "label": "Submit a refinement adding one element"
        },
        {
          "id": "t4",
          "label": "List elements you can add"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "To make a dense paragraph scannable, add",
          "options": [
            "A bulleted-list format",
            "More jargon",
            "A longer paragraph",
            "A random image"
          ],
          "correct": "A bulleted-list format",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "To make technical notes friendly for customers, add",
          "options": [
            "A warm, plain-language tone",
            "A hostile tone",
            "Heavier technical detail",
            "A legal disclaimer only"
          ],
          "correct": "A warm, plain-language tone",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "ENTER A REFINEMENT THAT ADDS ONE ELEMENT",
        "placeholder": "Rewrite as 5 friendly bullet points for customers.",
        "button": "Submit",
        "response": "[OUT] Refinement accepted: an added element (format and tone) will reshape the draft.\n[OUT] Request logged.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "list elements",
          "out": "[ELEM] Tone (formal, friendly)\n[ELEM] Format (list, table, steps)\n[ELEM] Length (shorter, longer)\n[ELEM] Audience (expert, beginner)",
          "task": "t4"
        },
        {
          "cmd": "help",
          "out": "[SYS] Commands: list elements, show draft, show status"
        }
      ]
    }
  },
  {
    "id": "Lab 15",
    "num": 15,
    "group": "CONVERSATION",
    "title": "Asking the AI to Critique Itself",
    "desc": "A useful technique is asking the AI to review and improve its own answer. In this lab you choose an effective self-critique request and send one that prompts the model to find gaps and strengthen its response.",
    "objectives": [
      "Understand why self-critique can improve an answer.",
      "Choose a well-formed self-critique request.",
      "Send a self-critique prompt."
    ],
    "console": {
      "host": "aiess-lab15",
      "boot": [
        "[SYS] Self-critique console online.",
        "[SYS] Prior answer loaded: a project plan draft."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Decide what self-critique is good for"
        },
        {
          "id": "t2",
          "label": "Pick the strongest self-critique request"
        },
        {
          "id": "t3",
          "label": "Send a self-critique prompt"
        },
        {
          "id": "t4",
          "label": "Show self-critique prompt patterns"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Asking the AI to critique its own answer helps by",
          "options": [
            "Surfacing gaps, risks, and weak spots",
            "Guaranteeing the answer is perfect",
            "Replacing your own judgment",
            "Making the answer shorter only"
          ],
          "correct": "Surfacing gaps, risks, and weak spots",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "The strongest self-critique request is",
          "options": [
            "List three weaknesses in your plan and fix each",
            "Is it good?",
            "Thanks",
            "Do nothing"
          ],
          "correct": "List three weaknesses in your plan and fix each",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "ENTER YOUR SELF-CRITIQUE PROMPT",
        "placeholder": "Review your plan, name its top 3 risks, and revise it.",
        "button": "Send",
        "response": "[OUT] Self-critique prompt sent: assistant will identify weaknesses and improve its answer.\n[OUT] Message logged.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show patterns",
          "out": "[PAT] 'What did you miss?'\n[PAT] 'List weaknesses, then fix them'\n[PAT] 'Argue the opposite view'\n[PAT] 'Rate your answer and improve it'",
          "task": "t4"
        },
        {
          "cmd": "help",
          "out": "[SYS] Commands: show patterns, show answer, show status"
        }
      ]
    }
  },
  {
    "id": "Lab 16",
    "num": 16,
    "group": "CONVERSATION",
    "title": "Chaining Prompts for a Multi-Step Task",
    "desc": "Big tasks work best when broken into a chain of smaller prompts, each building on the last. In this lab you order the steps of a prompt chain and submit the first link, learning to decompose work instead of asking for everything at once.",
    "objectives": [
      "Break a large task into an ordered chain of prompts.",
      "Recognize why chaining beats one giant prompt.",
      "Submit the first prompt in a chain."
    ],
    "console": {
      "host": "aiess-lab16",
      "boot": [
        "[SYS] Prompt-chaining console online.",
        "[SYS] Goal loaded: produce a researched blog post."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Order the steps of the prompt chain"
        },
        {
          "id": "t2",
          "label": "Decide why chaining is better here"
        },
        {
          "id": "t3",
          "label": "Submit the first prompt in the chain"
        },
        {
          "id": "t4",
          "label": "Show an example prompt chain"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "The correct first step of the chain is",
          "options": [
            "Outline the post's key sections",
            "Publish the final post",
            "Write the conclusion first",
            "Design the cover image"
          ],
          "correct": "Outline the post's key sections",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Chaining beats one giant prompt because it",
          "options": [
            "Keeps each step focused and reviewable",
            "Is always slower",
            "Removes the need to verify",
            "Prevents any errors"
          ],
          "correct": "Keeps each step focused and reviewable",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "ENTER THE FIRST PROMPT IN YOUR CHAIN",
        "placeholder": "Create an outline with 5 section headings for the post.",
        "button": "Submit",
        "response": "[OUT] First link accepted: outline requested; later prompts will expand each section.\n[OUT] Chain started.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show chain",
          "out": "[1] Outline sections\n[2] Draft each section\n[3] Add examples and data\n[4] Edit for tone and length",
          "task": "t4"
        },
        {
          "cmd": "help",
          "out": "[SYS] Commands: show chain, show goal, show status"
        }
      ]
    }
  },
  {
    "id": "Lab 17",
    "num": 17,
    "group": "RESPONSIBLE USE & AUTOMATION",
    "title": "Deciding What Is Safe to Share",
    "desc": "Pasting the wrong data into an AI tool can leak secrets or personal information. In this lab you sort sample inputs into safe-to-share and never-share, building judgment about what belongs in a prompt.",
    "objectives": [
      "Classify inputs as safe or unsafe to share with AI.",
      "Recognize personal and confidential data that must stay out.",
      "Record a safe-sharing decision."
    ],
    "console": {
      "host": "aiess-lab17",
      "boot": [
        "[SYS] Safe-to-share console online.",
        "[SYS] Sample inputs loaded for classification."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Classify a piece of public marketing copy"
        },
        {
          "id": "t2",
          "label": "Classify a customer's full credit-card number"
        },
        {
          "id": "t3",
          "label": "Record a safe-sharing decision"
        },
        {
          "id": "t4",
          "label": "List never-share data types"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Pasting already-public marketing copy into an AI tool is",
          "options": [
            "Safe to share",
            "A serious data breach",
            "Illegal everywhere",
            "Never allowed"
          ],
          "correct": "Safe to share",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Pasting a customer's full credit-card number is",
          "options": [
            "Never safe to share",
            "Perfectly fine",
            "Recommended for context",
            "Required for accuracy"
          ],
          "correct": "Never safe to share",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "ENTER YOUR DECISION FOR 'A PUBLISHED PRESS RELEASE'",
        "placeholder": "safe - it is already public",
        "button": "Submit",
        "response": "[OUT] Decision recorded: safe to share; the press release is already public.\n[OUT] Decision logged.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "list never-share",
          "out": "[BLOCK] Passwords and API keys\n[BLOCK] Personal data (SSN, card numbers)\n[BLOCK] Confidential business secrets\n[BLOCK] Health or legal records",
          "task": "t4"
        },
        {
          "cmd": "help",
          "out": "[SYS] Commands: list never-share, show inputs, show status"
        }
      ]
    }
  },
  {
    "id": "Lab 18",
    "num": 18,
    "group": "RESPONSIBLE USE & AUTOMATION",
    "title": "Spotting the Policy Violation",
    "desc": "Responsible AI use follows organizational policy on privacy, attribution, and acceptable tasks. In this lab you review AI-use scenarios and identify which ones break policy, then record the specific rule that was violated.",
    "objectives": [
      "Identify an action that violates AI-use policy.",
      "Name the specific policy rule broken.",
      "Record a compliant alternative."
    ],
    "console": {
      "host": "aiess-lab18",
      "boot": [
        "[SYS] Policy-review console online.",
        "[SYS] AI-use scenarios loaded for compliance review."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Flag the scenario that breaks policy"
        },
        {
          "id": "t2",
          "label": "Name the rule that was violated"
        },
        {
          "id": "t3",
          "label": "Record a compliant alternative"
        },
        {
          "id": "t4",
          "label": "Show the AI-use policy summary"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Which scenario violates policy?",
          "options": [
            "Uploading confidential client data to a public AI tool",
            "Drafting a public FAQ with AI",
            "Brainstorming slogans with AI",
            "Summarizing a public article"
          ],
          "correct": "Uploading confidential client data to a public AI tool",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "The rule most directly broken is",
          "options": [
            "Do not share confidential data with external tools",
            "Always use exclamation points",
            "Never draft emails",
            "Avoid brainstorming"
          ],
          "correct": "Do not share confidential data with external tools",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "ENTER A COMPLIANT ALTERNATIVE FOR THE VIOLATION",
        "placeholder": "use an approved internal tool with redacted data",
        "button": "Submit",
        "response": "[OUT] Alternative recorded: use an approved tool and redact confidential details first.\n[OUT] Remediation logged.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show policy",
          "out": "[POL] No confidential data in public tools\n[POL] Disclose AI assistance where required\n[POL] Verify AI output before use\n[POL] Respect copyright and attribution",
          "task": "t4"
        },
        {
          "cmd": "help",
          "out": "[SYS] Commands: show policy, show scenarios, show status"
        }
      ]
    }
  },
  {
    "id": "Lab 19",
    "num": 19,
    "group": "RESPONSIBLE USE & AUTOMATION",
    "title": "Writing an AI-Use Disclosure Statement",
    "desc": "Transparency means telling readers when AI helped create content. In this lab you choose the elements of a clear disclosure and write a short statement that honestly describes how AI was used and how the work was reviewed.",
    "objectives": [
      "Identify what an honest AI-use disclosure includes.",
      "Avoid vague or misleading disclosure wording.",
      "Write a clear AI-use disclosure statement."
    ],
    "console": {
      "host": "aiess-lab19",
      "boot": [
        "[SYS] Disclosure-builder console online.",
        "[SYS] Deliverable loaded: an AI-assisted report."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Choose an element every disclosure should include"
        },
        {
          "id": "t2",
          "label": "Reject a misleading disclosure phrasing"
        },
        {
          "id": "t3",
          "label": "Write a clear disclosure statement"
        },
        {
          "id": "t4",
          "label": "Show disclosure best practices"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "A good disclosure states",
          "options": [
            "That AI assisted and that a human reviewed the work",
            "Only the AI's brand name",
            "Nothing, to keep it short",
            "That AI wrote everything unaided when a human edited it"
          ],
          "correct": "That AI assisted and that a human reviewed the work",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Which phrasing is misleading and should be rejected?",
          "options": [
            "'No AI was used' on an AI-drafted report",
            "'AI assisted with the first draft'",
            "'Reviewed and edited by a human'",
            "'Generated with AI help, then verified'"
          ],
          "correct": "'No AI was used' on an AI-drafted report",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "ENTER YOUR AI-USE DISCLOSURE STATEMENT",
        "placeholder": "Portions drafted with AI assistance and reviewed by the author.",
        "button": "Submit",
        "response": "[OUT] Disclosure accepted: it honestly notes AI assistance and human review.\n[OUT] Statement logged.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show best-practices",
          "out": "[BP] Say AI was used and how\n[BP] Note that a human reviewed it\n[BP] Be honest, not vague\n[BP] Place it where readers will see it",
          "task": "t4"
        },
        {
          "cmd": "help",
          "out": "[SYS] Commands: show best-practices, show deliverable, show status"
        }
      ]
    }
  },
  {
    "id": "Lab 20",
    "num": 20,
    "group": "RESPONSIBLE USE & AUTOMATION",
    "title": "Designing an Automated Workflow",
    "desc": "AI can automate repetitive steps, but a good workflow keeps a human checkpoint where judgment matters. In this lab you order the stages of an AI-assisted automation and place the human-review checkpoint before results go live.",
    "objectives": [
      "Order the stages of an AI-assisted automated workflow.",
      "Place a human-in-the-loop checkpoint appropriately.",
      "Record a safe automation design."
    ],
    "console": {
      "host": "aiess-lab20",
      "boot": [
        "[SYS] Automation-design console online.",
        "[SYS] Process loaded: auto-draft replies to support tickets."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Pick the correct first stage of the workflow"
        },
        {
          "id": "t2",
          "label": "Place the human-review checkpoint"
        },
        {
          "id": "t3",
          "label": "Record the finished automation design"
        },
        {
          "id": "t4",
          "label": "Show the recommended workflow stages"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "The workflow should begin by",
          "options": [
            "Collecting the incoming ticket as input",
            "Sending replies with no review",
            "Deleting the ticket",
            "Publishing to social media"
          ],
          "correct": "Collecting the incoming ticket as input",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "The human-review checkpoint belongs",
          "options": [
            "After the AI draft, before the reply is sent",
            "Only after the reply is already sent",
            "Never; full automation is safest",
            "Before any input is collected"
          ],
          "correct": "After the AI draft, before the reply is sent",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "ENTER YOUR AUTOMATION DESIGN (INCLUDE THE HUMAN CHECKPOINT)",
        "placeholder": "collect ticket -> AI drafts reply -> human reviews -> send",
        "button": "Submit",
        "response": "[OUT] Design accepted: AI drafts, a human reviews, then the reply is sent. Human-in-the-loop confirmed.\n[OUT] Workflow logged.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show stages",
          "out": "[STAGE 1] Collect input (ticket)\n[STAGE 2] AI drafts a response\n[STAGE 3] Human reviews and approves\n[STAGE 4] Send the approved reply",
          "task": "t4"
        },
        {
          "cmd": "help",
          "out": "[SYS] Commands: show stages, show process, show status"
        }
      ]
    }
  }
];
