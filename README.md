# ai essentials

**A comprehensive, open-source CompTIA AI Essentials study platform.**
In-depth coverage of all 5 exam domains, a 500-question bank with full per-distractor rationale, 500 Rapid Recall flashcards, 30 performance-based decision simulations, a drag-and-drop taxonomy classifier, 20 hands-on practice labs, and a full-length timed mock.

> Designed and authored by **Professor Rizwan Virani.**

---

## What this is

An academic preparation resource that tests your knowledge **dynamically** with original, randomized questions and hands-on simulators. It is a comprehensive study portal that covers every objective in the official AI Essentials course outline, and it is completely free, self-paced, and offline-capable once loaded. It builds practical, end-user **AI fluency** — how to use generative AI effectively and responsibly in real work.

## What this is not

- **Not** a source of actual or copyrighted CompTIA exam questions, "brain dumps," or leaked items. **Every question in this repository is original.**
- **Not** the official CompTIA AI Essentials CompCert assessment itself (a separate **30-minute** CompTIA assessment), and not affiliated with, endorsed by, or sponsored by CompTIA.
- **Not** a data-science or machine-learning-engineering course, and not a guarantee of a passing score. It builds practical AI fluency — judgment, not memorization.

---

## At a glance

| | |
| --- | --- |
| **Credential** | CompTIA AI Essentials CompCert (Certificate of Competency) |
| **Kind** | Self-paced course + a 30-minute online assessment |
| **Course length** | ~3.3 instructional hours (4 modules) |
| **Scoring** | Mastery-based — **no** 100–900 scaled score |
| **This platform's mock** | 75 questions · 90 minutes · **80% mastery target** |
| **Study domains** | 5 |

## The 5 domains

These five study domains reorganize the course's four modules into a full prep track (Domain 1 ← Lesson 2.1 · Domain 2 ← Lesson 2.2 · Domain 3 ← Lesson 3.1 · Domain 4 ← Lesson 3.2 · Domain 5 ← Module 4). Weights are derived from each domain's study depth and have no official source.

| # | Domain | Weight |
| --- | --- | --- |
| 1 | AI & GenAI Foundations | 20% |
| 2 | Prompt Engineering | 20% |
| 3 | Verifying & Improving AI Outputs | 21% |
| 4 | Conversational AI & Iteration | 20% |
| 5 | Using AI Responsibly at Work | 19% |

## Features

| Area | What you get |
| --- | --- |
| **Domain study modules** | 5 rigorous reading interfaces, one per study domain, with clear definitions, comparison tables, tips, and real-world examples. **86 sections** expanding the AI Essentials course outline, lazy-loaded per domain. |
| **Rapid Recall flashcards** | **500 cards** with a **Leitner spaced-repetition** scheduler, per-domain decks, a Master Acronym Drill, and an All Due Today review. |
| **Practice quizzes** | A bank of **500 original questions**, each graded with a full rationale that explains the correct answer **and why every individual distractor is wrong**. Domain, quick, adaptive, and missed-question modes. |
| **PBQ simulators** | **30 performance-based decision tasks** across 5 formats — prompt construction, output evaluation, conversation & follow-up, responsible use, and automation — plus a drag-and-drop **Taxonomy Mapping** engine (7 classification activities). |
| **Hands-on labs** | **20 interactive practice labs** with a full-screen console, dropdown decisions, a live command terminal, and a progress log. |
| **Mock exam** | A full-length, timed practice capstone weighted across the five study domains, with a countdown timer, flagging, and a domain-by-domain dashboard that reports **percentage mastery**. |
| **Supplemental hub** | An Industry Certification Explorer and a curated external-resources library. |
| **Theme** | A global light/dark toggle with all state saved to your browser. |

## How to use it

1. **Read the Assessment Mechanics & Career Guidance cards first** to understand how the CompCert works, scoring, and question styles.
2. **Deep-dive the Domain Study cards** — one rigorous reading interface per domain.
3. **Lock in terms with Rapid Recall Flashcards**, graded on a spaced-repetition scheduler.
4. **Validate with the Domain Quizzes**, drawn at random and graded with full rationale.
5. **Train practical skills in the PBQ Simulators** and the Taxonomy Mapping engine.
6. **Get hands-on in the Labs** — flip a card to review objectives, then launch the practice console.
7. **Benchmark readiness with the full-length, timed Mock Exam**, reported as percentage mastery against the 80% target.

## Run it locally

The site is fully static — no build step. Serve the folder with any static web server:

```bash
# from the repository root:
python -m http.server 8125
# then open http://localhost:8125
```

Best experienced on a desktop or laptop in Google Chrome; the labs, terminal simulations, and drag-and-drop activities require a mouse and keyboard.

## Project structure

```
.
├── index.html                  # shell: hero, onboarding, dashboard mount, script order
├── LICENSE                     # dual license (MIT code + CC BY-NC-SA content)
├── README.md
└── assets/
    ├── css/
    │   └── styles.css          # theme + study-platform components, dark & light
    └── js/
        ├── contentData.js      # course facts, domain metadata, readers
        ├── quizEngine.js       # assessment + PBQ engines (data loaded from content/)
        ├── flashEngine.js      # spaced-repetition flashcard engine
        ├── app.js              # router, theme manager, analytics, reading UI
        └── content/            # lazy-loaded + data modules
            ├── domain1..5.js      # dense reading per domain
            ├── quiz1..5.js        # 100 practice questions per domain
            ├── pbqs.js            # performance-based decision simulations
            ├── flash1..5.js       # flashcard decks
            ├── labs.js            # hands-on practice labs
            ├── taxonomy.js        # drag-and-drop classification
            └── certs.js           # Industry Certification Explorer catalog
```

## License

This project is **dual-licensed**:

- The **software framework and interface code** are licensed under the **MIT License**.
- The **educational curriculum content** (study text modules, question banks, flashcards, and lab scenarios) is licensed under the **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License** (CC BY-NC-SA 4.0).

See the [LICENSE](LICENSE) file for full terms.

---

*This is a personal educational resource. All views and content are entirely my own and do not represent the views, positions, endorsements, or policies of my employer or of any other person, organization, or institution. "CompTIA" and "AI Essentials" are trademarks of CompTIA, Inc., used here only to identify the course this resource helps you prepare for. All practice questions are original. Released for academic use.*
