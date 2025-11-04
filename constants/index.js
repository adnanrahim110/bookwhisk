import {
  reviews_m1,
  reviews_m10,
  reviews_m11,
  reviews_m12,
  reviews_m2,
  reviews_m3,
  reviews_m4,
  reviews_m5,
  reviews_m6,
  reviews_m7,
  reviews_m8,
  reviews_m9,
  reviews_w1,
  reviews_w2,
  reviews_w3,
  reviews_w4,
  reviews_w5,
  reviews_w6,
  reviews_w7,
  reviews_w8,
  services_ab,
  services_bc,
  services_bd,
  services_be,
  services_bf,
  services_bm,
  services_bt,
  services_gw,
  services_pg,
  services_sp,
  services_wc,
} from "@/public";

export const navigation_links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Children's Book Publishing",
    href: "/childrens-book-publishing",
  },
  {
    name: "About Us",
    href: "/about-us",
  },
  {
    name: "Contact Us",
    href: "/contact",
  }
];

export const services = [
  {
    title: "Self Publishing",
    href: "/self-publishing",
    card: {
      title: "Effortless Self-Publishing",
      icon: services_sp,
      text: "Take full control of your publishing journey without the learning curve. We combine professional quality with total author freedom, giving you everything you need to publish and profit with confidence.",
      points: [
        "End-to-End Publishing Service",
        "100% Royalties & Sales Tracking",
        "Fast Turnaround with Professional Quality"
      ]
    },
    hero: {
      subtitle: "Self Publishing",
      title: "Your Book. Your Vision.",
      tagline: "Our Expertise.",
      text: [
        "At BookWhisk, we believe self-publishing should feel empowering, not overwhelming. Our mission is to remove the complexity, confusion, and technical barriers that often hold authors back. Whether it’s your first manuscript or your fifth, we make the publishing process seamless from concept to completion, so you can focus on what truly matters: your story.",
        "Our in-house publishing team handles everything, editing, formatting, cover design, ISBN registration, and platform distribution, while you maintain full ownership and creative control. From start to finish, your dedicated project manager ensures every detail aligns with your goals and publishing standards."
      ],
      img: ""
    },
    sec1: {
      title: "End-to-End Publishing Made Simple",
      text: "Complete publishing freedom with professional support at every step.",
      cards: [
        {
          title: "End-to-End Publishing Service",
          text: "From manuscript refinement to worldwide distribution, BookWhisk manages every stage of your publishing journey. Our specialists ensure your book meets international publishing guidelines, is formatted for print and digital editions, and is made available on all major platforms/marketplace."
        },
        {
          title: "100% Royalties & Real-Time Sales Tracking",
          text: "Unlike traditional publishers, we don't claim a percentage of your profits. You keep 100% of your royalties, because it's your work, and your success. Once published, you'll have full access to your accounts and dashboards, allowing you to track sales and performance in real-time. You retain complete ownership, copyrights, and control over your book, always."
        },
        {
          title: "Fast Turnaround with Professional Quality",
          text: "Our streamlined workflow combines creativity, technology, and precision to deliver top-tier publishing services in record time. From editing to distribution, every phase is optimized for efficiency, without ever compromising on quality. You'll enjoy the same professional polish that major publishers deliver, but with the personal touch and freedom of self-publishing."
        },
        {
          title: "Transparent Pricing & Clear Milestones",
          text: "We believe in honesty from the very first step. You'll know exactly what's included, clear deliverables, timelines, and no hidden fees. We charge a one-time service fee upfront to allocate dedicated in-house resources to your project, ensuring your book gets the full attention it deserves from start to finish. Regular progress updates keep you informed every step of the way."
        }
      ],
    },
    sec2: {
      title: "Your Journey to Publication",
      text: "From Manuscript to Marketplace, Seamless, Simple, and Supported Every Step of the Way Our streamlined process keeps you in control while our in -house specialists handle the heavy lifting, from editing and design to publishing and distribution.Here’s how we bring your book to life: ",
      img: "",
      points: [
        {
          title: "Free Consultation & Custom Plan",
          text: "We start with a one-to-one call to learn your goals, timeline, and audience. From that conversation we produce a tailored publishing plan with clear milestones, deliverables, and a transparent quote."
        },
        {
          title: "Onboarding & Project Kickoff",
          text: "On acceptance you'll be assigned a dedicated Project Manager. We collect your files, confirm style preferences, set deadlines, and share the project timeline and communication plan."
        },
        {
          title: "Editing (Developmental → Line → Proof)",
          text: "Our editorial team assesses the manuscript and recommends the right level of work. We complete developmental edits (structure, pacing), then line editing (clarity, voice), and finish with proofreading for publication quality. You review each round and approve changes."
        },
        {
          title: "Cover Design & Interior Design",
          text: "Designers craft a market-smart cover and interior layout tailored to your genre. You receive concept options, give feedback, and approve the final artwork and layout for print and eBook formats."
        },
        {
          title: "Formatting & File Preparation",
          text: "We format your book for print (POD) and digital (EPUB/MOBI), ensure typography, margins and image handling are perfect, and produce all platform-ready files. Accessibility, image DPI, and platform specs are validated."
        },
        {
          title: "Finalization & Quality Assurance",
          text: "Our QA team runs a full checklist: layout integrity, metadata accuracy, image quality, ISBN/barcode placement, and platform validation. You receive final proofs for sign-off."
        },
        {
          title: "Publishing & Distribution Setup",
          text: "We create/optimize your accounts and listings on major platforms (Amazon KDP, Apple Books, Kobo, Ingram/print-on-demand pathways, and audiobook channels if selected). Metadata, keywords, categories, and pricing are configured for discoverability."
        },
        {
          title: "Launch Support & Reporting",
          text: "When your book goes live, we monitor listings, confirm live status, and deliver a launch report. If you chose marketing services, we begin promotion and provide ongoing sales reporting and optimization recommendations."
        },
        {
          title: "Post-Launch Growth (optional)",
          text: "We can continue with marketing, paid campaigns, translations, audiobook production, or expanded distribution to grow visibility, reviews, and long-term sales."
        }
      ]
    },

    cta: {
      title: "",
      text: "",
      btnText: "",
    }
  },
  {
    title: "Writing Assistance",
    href: "/writing-assistance",
    card: {
      title: "Writing Assistance and Guidance",
      icon: services_wc,
      text: "Transform your unfinished manuscript into a publication-ready book. Our expert writing team helps you overcome creative blocks, beat procrastination, and shape your story with clarity and confidence.",
      points: [
        "Kickstart Your Writing Journey",
        "Collaborate With Professional Writing Experts",
        "Turn Your Draft Into a Ready-to-Edit Manuscript"
      ]
    },
    hero: {
      subtitle: "Writing Assistance & Guidance",
      title: "We Guide You Write",
      tagline: "Where Unfinished Stories Find Their Voice.",
      text: [
        "At BookWhisk, we understand that every great book begins with an idea, but turning that idea into a finished manuscript can be daunting. Whether you’ve written a few chapters, an outline, or are simply staring at a blank page, our Writing Assistance and Guidance service is designed to help you move forward with clarity, structure, and confidence.",
        "Our team of professional genre specialists writters work alongside you to develop your manuscript, strengthen your narrative, and ensure your story reaches its fullest potential. This isn’t just coaching, it’s a collaborative creative process built around your vision."
      ],
      img: ""
    },
    sec1: {
      title: "A Seamless Path from Writing to Publishing",
      text: "The beauty of working with BookWhisk is continuity. Once your manuscript is complete, it naturally transitions into the editing, design, and publishing process, all within the same team. In other words, no disconnect, no loss of momentum, and no repeating steps. We carry your story from the first word to the finished book, ensuring consistency, quality, and care at every stage.",
      cards: [
        {
          title: "Expert Writing Assistance That Gets You Finished",
          text: "Collaborate with our team of professional writers and editors to move your manuscript forward, whether you're stuck halfway or just getting started. Get personalized feedback, structured direction, and creative input that helps you write with clarity, confidence, and consistency, all aimed at helping you finish your book and get it ready for publication."
        },
        {
          title: "Genre Specialist Writers",
          text: "No matter your genre, fiction, nonfiction, memoir, poetry, or children's literature, our expert writers meet you exactly where you are in your writing journey. With deep industry experience and creative precision, we bring structure, insight, and discipline to your story, helping you craft a book that truly connects with its intended audience."
        },
        {
          title: "Flexible (Author Centric Timeline)",
          text: "Your time, your pace, your process. Whether you need short, intensive process to move past a block or ongoing writing support, we adapt to your schedule and creative rhythm, helping you stay consistent and confident as your manuscript evolves."
        },
        {
          title: "Track Progress, Shape Your Success",
          text: "Stay accountable with transparent progress tracking and milestone updates. Receive expert feedback at every stage and celebrate each breakthrough as you move closer to finishing your manuscript, without losing sight of your creative spark."
        }
      ],
    },
    sec2: {
      title: "Our 5-Step Writing Assistance Process",
      text: "A clear, collaborative path from draft to finished manuscript.",
      img: "/imgs/",
      points: [
        {
          title: "Onboard & Define Goals",
          text: "Once you sign up, we'll schedule a one-on-one kickoff call (phone/video) to review your goals, current draft status, target audience, and timeline. We'll identify the manuscript's needs (plot, structure, voice, research gaps) and agree the success criteria. <br/><br/> Deliverables for you: Kickoff summary, prioritized action list, and a tailored writing roadmap with checkpoints.<br/><br/> Example: \"Goal: Finish a 70k-word novel in 4 months; priorities: tighten mid-book pacing, deepen protagonist arc.\""
        },
        {
          title: "Draft Review & Feedback Plan",
          text: "Our genre-specialist reader/editor performs a thorough review of your existing draft (or sample chapters) and produces a clear feedback package: high-level developmental notes + chapter-by-chapter comments + quick wins to implement immediately. We then present the feedback in a recorded walkthrough or call and agree the next steps. <br/><br/> Deliverables for you: Annotated manuscript, development memo, prioritized revision checklist. <br/><br/> Example feedback items: \"Chapter 6: cut 300 words to increase tension; restructure chapters 9–11 to resolve subplot by chapter 12.\""
        },
        {
          title: "Focused Development Sprints (Write & Revise)",
          text: "We break work into short, focused sprints (1–3 weeks each). During each sprint you'll get direct coaching sessions (one-to-one) and practical writing assignments. Your writing specialist provides targeted feedback, model text examples, and structural suggestions to keep momentum. Sessions can be live or asynchronous depending on your schedule. <br/><br/> Deliverables for you: Sprint brief, session notes, specific revision tasks, and sample rewrites where helpful. <br/><br/> Example sprint: Sprint 2, Character deepening: 2 coaching sessions, rewrite of key scenes, feedback turnaround within 48 hours."
        },
        {
          title: "Revision Cycles & Unlimited Feedback",
          text: "Revision is iterative. You submit revised chapters; our team returns clear, actionable feedback and line-level edits. We offer unlimited revision rounds during the writing assistance phase so you can refine until the manuscript meets the agreed standards. Throughout, a dedicated project lead ensures continuity and prevents repetitive work. <br/><br/> Deliverables for you: Revised manuscript with editorial comments, tracked-change edits (when requested), checklist of remaining tasks. <br/><br/> Example: You submit chapters 1–8 → we return chapter-level revisions and a 2-page suggestion memo → you revise → final check within 72 hours."
        },
        {
          title: "Completion, Polish & Seamless Handover to Finalization Process",
          text: "When the manuscript is complete, we perform a final quality check (structure, voice, pacing, consistency). We then hand your manuscript directly to our in-house editing and production teams, no repeat intake, no lost context, so editing, design, and formatting begin immediately. We'll also advise on next steps for marketing and publication strategy. <br/><br/> Deliverables for you: Publication-ready manuscript, final report of changes and decisions, and a recommended next-step plan (editing package, design brief, timeline). <br/><br/> Example outcome: Final manuscript delivered, transitioned to copyediting; estimated time to publish assets: 4–8 weeks depending on package."
        }
      ]
    },
    cta: {
      title: "Your story deserves to be completed",
      text: "Partner with BookWhisk and turn your unfinished manuscript into a publication-ready book",
      btnText: "Start Now",
    }
  },
  {
    title: "Book Editing",
    href: "/book-editing",
    card: {
      title: "Book Editing",
      icon: services_be,
      text: "Transform your manuscript into its most powerful form, polished, precise, and ready for publication. Our editors refine your voice, enhance clarity, and ensure every word resonates.",
      points: [
        "Professional Editing That Elevates Your Story",
        "In-Depth Revision & Editorial Guidance",
        "Developmental, Line Editing Expertise"
      ]
    },
    hero: {
      subtitle: "Book Editing",
      title: "Good writing tells a story.",
      tagline: "Great Editing Makes Readers Feel It.",
      text: [
        "Whether your manuscript is a first draft or nearly finished, our professional editors at BookWhisk bring clarity, consistency, and character to your writing, without losing your unique voice. We help your story shine and prepare it for publication, distribution, and success."
      ],
      img: ""
    },
    sec1: {
      title: "Expert Editing, Tailored to Your Story",
      text: "From structural guidance to final polish, our dedicated editors refine every word while preserving your unique voice.",
      cards: [
        {
          title: "Dedicated Editors",
          text: "Work with a genre-specialist editor who understands your voice and market. Preserving your voice and adding nuanced improvements only a human can provide."
        },
        {
          title: "Developmental Editing",
          text: "Get a big-picture evaluation of your manuscript. We focus on your story's structure, pacing, and character development to ensure everything flows naturally and keeps readers engaged from start to finish."
        },
        {
          title: "Line & Copy Editing",
          text: "This stage refines your sentences for clarity, tone, rhythm, and grammatical accuracy. We smooth awkward phrasing, tighten language, and polish every detail, ensuring your voice shines through in a clean, professional read."
        },
        {
          title: "Personalized Support",
          text: "Depending on your package, you'll receive direct communication with your assigned editor, from detailed feedback to revision discussions, so you stay in control every step of the way."
        },
        {
          title: "Quick Turnaround Times",
          text: "Stay on schedule with fast, reliable editing services that deliver exceptional quality."
        },
        {
          title: "Unlimited Revision Support",
          text: "We partner with you until your manuscript meets its highest potential."
        }
      ],
    },
    sec2: {
      title: "How BookWhisk Makes Editing Fast, Clear, Collaborative, and Quality Driven",
      text: "We follow a transparent, step-by-step editing workflow so you always know what's happening, why it matters, and what you'll receive at each stage. Every manuscript is assigned an editor who guides the process from kickoff to finalization and publication-ready handoff.",
      img: "",
      points: [
        {
          title: "Kick-Off & Briefing",
          text: "After onboarding, you meet your assigned editor for a 30–60 minute briefing (phone or video). We review your book goals, target audience, comparable titles, preferred tone, and any reference materials. We confirm the current manuscript status (outline, partial draft, full draft), agreed deliverables, deadlines, and the best channels for ongoing communication.<br/><br/>What you'll get:<br/>• A written Project Brief summarizing goals, scope, timeline, and success criteria.<br/>• A shared project plan with milestones and expected turnaround times.<br/><br/>Why it Matters: This meeting ensures the editor understands your creative intent and that both parties have the same expectations, reducing rework and keeping the project efficient."
        },
        {
          title: "Initial Read-through & Editorial Report",
          text: "Your editor performs a comprehensive read of the full manuscript (or the submitted portion). They prepare a detailed Editorial Report that addresses big-picture elements: story structure, plot/argument flow, pacing, character arcs or chapter logic, theme clarity, point of view consistency, and market fit. The report includes prioritised recommendations (what to fix first), concrete examples, and suggested approaches for revision.<br/><br/>Typical contents of the report:<br/>• Executive summary (strengths + primary concerns)<br/>• Chapter-by-chapter notes and examples<br/>• Suggested structural changes (reordering chapters, combining scenes, subplot adjustments)<br/>• A prioritized revision checklist<br/><br/>What you'll get:<br/>• Annotated manuscript (high-level comments)<br/>• PDF or doc Editorial Report with action items<br/>• Optional recorded walkthrough or follow-up call to discuss the report<br/><br/>Why it Matters: This stage converts broad impressions into a clear action plan, so revision work is focused and effective rather than guesswork."
        },
        {
          title: "Revision & Collaboration Phase",
          text: "You revise according to the Editorial Report. Depending on your preference, revisions may be done section or chapter-by-chapter basis. The editor provides targeted feedback on each submission: questions to clarify intent, line suggestions, and examples of possible rewrites. We offer regular check-ins (weekly/biweekly) or asynchronous feedback, whichever matches your schedule.<br/><br/>How feedback is delivered:<br/>• Inline comments in tracked changes (MS Word) or annotation tools (Google Docs, PDF comments).<br/>• Short memos summarizing the main objectives for each revision round.<br/>• Optional coaching sessions to workshop difficult scenes or chapter transitions.<br/><br/>Turnaround & cadence:<br/>• Typical feedback turnaround: 48–72 hours for chapter-level notes; 5–14 days for larger sections (timeline varies with scope, can be discussed as per your timeline).<br/>• We use sprint-style deliverables (1–3 week cycles) to maintain momentum and measurable progress.<br/><br/>Why it Matters: This collaborative loop keeps the manuscript moving forward while preserving creative intent. It's where the draft starts turning into a coherent, stronger book."
        },
        {
          title: "Line & Copy Edit Implementation",
          text: "Once developmental issues are addressed, the editor performs line-level and copy editing. This stage focuses on sentence clarity, rhythm, word choice, dialogue, consistency, grammar, and punctuation. The editor also enforces a style guide (house or client-specific), standardizes metadata (names, places, timelines), and flags factual inconsistencies.<br/><br/>What you'll Get:<br/>• Tracked-change manuscript with line edits and comments.<br/>• A copyediting style sheet (record of stylistic choices and changes).<br/>• Query list for any unresolved author decisions.<br/><br/>Why it Matters: Line editing transforms readable prose into compelling prose. It's the difference between \"good enough\" and professional publication quality."
        },
        {
          title: "Final Review & Seamless Publishing Handoff",
          text: "After you accept the revised manuscript, we complete a final read to confirm consistency, fix lingering queries, and ensure the manuscript meets the agreed standard. We prepare a concise Final Editorial Report summarizing key changes, unresolved queries, and recommendations for the next production stages (design, typesetting, proofing). Your manuscript is passed directly to our in-house production team (designers, formatters) with full editorial notes and context, no re-intake required.<br/><br/>What You'll Get:<br/>• Final manuscript (clean and tracked-change versions)<br/>• Final Editorial Report and style sheet<br/>• Production brief for design/formatting teams<br/><br/>Why it Matters: This step guarantees a smooth transition into layout, proofreading, and publishing, maintaining editorial integrity and reducing delays or miscommunication."
        }
      ]
    },
    cta: {
      title: "Ready to refine your manuscript?",
      text: "Get a Free Editing Consultation",
      btnText: "Chat Now",
    }
  },
  {
    title: "Book Cover Design",
    href: "/book-cover-design",
    card: {
      title: "Book Cover Design",
      icon: services_bc,
      text: "Transform your manuscript into a visual masterpiece that stops readers mid-scroll and draws them in instantly.",
      points: [
        "Custom, Studio-Quality Design",
        "Optimized for Every Format",
        "Crafted to Captivate & Sell"
      ]
    },
    hero: {
      subtitle: "Book Cover Design",
      title: "Designed to Captivate.",
      tagline: "Built to Sell.",
      text: [
        "Your book’s cover is more than just art, it’s your first impression, your hook, and your most powerful marketing tool. At BookWhisk, we create covers that don’t just look beautiful, but connect with readers, communicate your story’s essence, and stand out in a crowded marketplace.",
        "Whether you’re publishing fiction, nonfiction, poetry, or children’s books, our design team blends creative instinct with market insight to craft covers that tell your story before the first page is even turned."
      ],
      img: ""
    },
    sec1: {
      title: "Make a Powerful First Impression",
      cards: [
        {
          title: "A Collaborative Creative Process",
          text: "We start with your vision, your themes, tone, and reader audience. From there, our designers translate that vision into a professional concept that balances artistry and strategy. You'll see multiple drafts, share your feedback, and stay part of the creative process at every step."
        },
        {
          title: "Genre-Specific Design Expertise",
          text: "Every genre speaks its own visual language. Capture your book's essence with a cover that reflects its genre, tone, and emotional core. Our designers specialize across categories, from sleek thrillers and heartfelt memoirs to epic fantasy and literary fiction, ensuring your cover resonates with the right readers and feels authentic to your story."
        },
        {
          title: "Professional Market Alignment",
          text: "Beyond design appeal, we focus on positioning: layout, typography, color psychology, and competitive research. Your cover won't just be attractive, it'll be strategically built to perform in today's publishing landscape."
        },
        {
          title: "Creative Freedom",
          text: "Create at your pace with flexible design timelines. Use our drag-and-drop builder for DIY projects or let our design team take the lead. Either way, you maintain full control over fonts, imagery, layout, and color schemes."
        }
      ],
    },
    sec2: {
      title: "Our Cover Design Services & Process",
      text: "A compelling cover isn't optional, it's essential. A professionally designed book cover builds instant trust, communicates quality, and gives readers a reason to stop scrolling and start reading. With BookWhisk, your cover isn't just designed, it's crafted to sell.",
      img: "",
      points: [
        {
          title: "Creative Briefing & Vision Alignment",
          text: "We begin with an in-depth consultation to understand your story, audience, and aesthetic. You can share sample covers, ideas, or even a feeling, and we'll shape it into a creative direction."
        },
        {
          title: "Concept Development",
          text: "Our team presents multiple design concepts that align with your genre, message, and marketing goals. Each design option is unique and crafted to highlight your book's essence."
        },
        {
          title: "Feedback & Refinement",
          text: "We collaborate closely to fine-tune every detail, typography, color scheme, layout, and imagery, until your vision shines through. Unlimited revisions ensure full satisfaction."
        },
        {
          title: "Finalization & Formatting",
          text: "Once approved, your cover is prepared for all major publishing formats, print, eBook, and audiobook, ensuring flawless quality across every platform."
        },
        {
          title: "Delivery & Handoff",
          text: "You receive high-resolution, publication-ready files for instant upload or print. You'll also retain full ownership of your final design.<br/><br/>What You'll Get:<br/>• Custom book cover (front, back, and spine)<br/>• Print-ready & eBook-ready formats (PDF, JPG, PNG)<br/>• Source design files upon request<br/>• Commercial image licenses (if applicable)<br/>• Unlimited revisions during the design phase<br/>• Full ownership of your final cover design"
        }
      ]
    },
    cta: {
      title: "Collaborate with Design Experts Who Know What Sells",
      text: "Get a Free Design Consultation",
      btnText: "Chat Now",
    }
  },
  {
    title: "Book Proofreading",
    href: "/book-proofreading",
    card: {
      title: "Proofreading & Grammar Check",
      icon: services_pg,
      text: "Error-free. Reader-ready. Professionally proofed for clarity, flow, and impact, without losing your voice.",
      points: [
        "Precision Final Review",
        "Style Preservation",
        "Ready for Publication"
      ]
    },
    hero: {
      subtitle: "Book Proofreading",
      title: "For authors who’ve already refined their story",
      tagline: "Now it’s Time for Perfection",
      text: [
        "Even the most seasoned authors know that a final proofread makes all the difference. After countless edits and revisions, small inconsistencies and typos can still slip through, and that’s where we come in.",
        "At BookWhisk, our proofreaders provide the final layer of polish that turns a well-edited manuscript into a flawless, publication-ready book. Every comma, quotation mark, and sentence rhythm is checked to ensure your writing flows naturally and reads professionally, without losing your voice or tone."
      ],
      img: ""
    },
    sec1: {
      title: "Book Proofreading: Polished Pages, Endless Impact",
      text: "",
      cards: [
        {
          title: "Comprehensive Proofreading",
          text: "Our professional proofreaders meticulously review your manuscript line by line, identifying and correcting grammar, spelling, punctuation, and minor stylistic issues."
        },
        {
          title: "Voice-Preserving Review",
          text: "We maintain your creative expression and tone while refining clarity and consistency, so your writing sounds exactly like you, just sharper."
        },
        {
          title: "Style Consistency",
          text: "We ensure consistent formatting, capitalization, and stylistic choices across your manuscript, so your book reads seamlessly from start to finish."
        },
        {
          title: "Final Quality Assurance",
          text: "Each project goes through an internal quality check to make sure nothing slips through before it heads to design, formatting, or publication."
        }
      ],
    },
    sec2: {
      title: "Our Proofreading Process",
      text: "",
      img: "",
      points: [
        {
          title: "Submission & Briefing",
          text: "You share your manuscript and any specific style preferences or publisher guidelines. We take the time to understand your tone, audience, and goals before starting."
        },
        {
          title: "Initial Review & Mark-Up",
          text: "Your proofreader conducts a complete, detailed review, correcting surface-level errors, tracking changes, and flagging inconsistencies or minor improvements."
        },
        {
          title: "Collaborative Refinement",
          text: "You receive the edited file with comments and tracked changes for transparency. You can review every suggestion and approve revisions at your own pace."
        },
        {
          title: "Quality Assurance Check",
          text: "After revisions are finalized, your proofreader conducts a final read-through to ensure your manuscript is clean, cohesive, and fully ready for publishing."
        },
        {
          title: "Seamless Handoff to Production",
          text: "Once approved, your proofed manuscript transitions smoothly to our formatting and publishing team, with no delays or rework needed."
        }
      ]
    },
    cta: {
      title: "Your story is written, now let’s make it flawless",
      text: "Our proofreaders give your manuscript the attention it deserves, ensuring every word reads as clearly as it was meant to and checked as per the international publishing guidelines and standards.",
      btnText: "Chat Now",
    }
  },
  {
    title: "Book Formatting",
    href: "/book-formatting",
    card: {
      title: "Seamless Book Formatting",
      icon: services_bf,
      text: "Turn your finished manuscript into a beautifully designed book that’s ready to publish anywhere. Our formatting experts craft clean, consistent layouts for both print and eBook, tailored to your genre, audience, and publishing goals.",
      points: [
        "Professional formatting for print & eBook",
        "Custom layouts for every genre & style",
        "Publish & Print Ready Formats",
        "100% compatibility with all reading devices"
      ]
    },
    hero: {
      subtitle: "Book Formatting",
      title: "Read Between the Lines",
      tagline: "Precision Formatting, Page After Page",
      text: [
        "You’ve written your story. Now it’s time for it to look, and read, like a professional book. At BookWhisk, our expert formatters and layout techs take your manuscript and transform it into beautifully designed files for print and digital publishing.",
        "Enjoy a seamless, fast process that keeps you in control, with personalized support at every step to ensure your book meets industry standards and captivates readers from page one."
      ],
      img: ""
    },
    sec1: {
      title: "Book Formatting Services: Every Detail Done Right",
      text: "",
      cards: [
        {
          title: "Custom Layout Design",
          text: "Our formatters are experts in every genre, from cookbooks, illustrated children’s books to academic nonfiction, crafting layouts that reflect your book’s tone, style, and audience. Every design element, from typography to chapter structure, is built to elevate readability and aesthetic appeal. <br/><br/> No Learning Curve for You. Forget about technical headaches. We handle every layout specification, bleed margin, and print requirement, so you can focus purely on writing, not formatting."
        },
        {
          title: "E-Book & Print Conversion",
          text: "Turn your manuscript into a fully optimized EPUB file, ready for Kindle, Apple Books, Kobo, and more. Our team ensures flawless layout, clean formatting, and smooth readability across every device, no broken spacing or distorted design. Both Flowable and Fixed Layout options deliver a polished, professional reading experience that preserves your book’s style and integrity. <br/><br/> Beautifully structured interiors for paperback, hardcover, and digital editions (EPUB, MOBI, PDF), ensuring your book looks flawless on every device and shelf."
        },
        {
          title: "Professional Quality, Delivered Fast",
          text: "Save valuable time without sacrificing quality. We deliver market-ready, industry-standard files quickly and efficiently, no DIY frustration or trial-and-error needed. Receive fully optimized files for Amazon KDP, IngramSpark, Apple Books, Kobo, and more. Your book will be ready to publish anywhere, instantly. "
        },
        {
          title: "Comprehensive Genre-Specific Formatting",
          text: "Whether it’s a cookbook, children’s book, graphic novel, illustrated edition, or complex layout, Spines offers tailored formatting options to suit your specific needs."
        },
        {
          title: "Seamless Workflow",
          text: "From manuscript to formatting to publishing, your project flows smoothly through every stage, keeping your book on schedule, consistent, and stress-free. "
        },
        {
          title: "Final Quality Check",
          text: "Before delivery, we run a thorough proofing and quality-assurance review to catch any inconsistencies and ensure a clean, professional finish from cover to final page."
        },
      ],
    },
    sec2: {
      title: "Our Formatting Process",
      text: "",
      img: "",
      points: [
        {
          title: "Specification Consultation",
          text: "We begin with a short consultation to review your manuscript's size, genre, trim specifications, and target platforms. You share any special design preferences, image needs, or formatting challenges."
        },
        {
          title: "Layout & Design Draft",
          text: "Our formatting team builds the layout based on the specification, applying the correct trim size, margins, chapter styling, images, and typography. You preview the interior design mock-up and provide feedback."
        },
        {
          title: "Revision & Refinement",
          text: "We apply your feedback, adjust layout elements (images, captions, spacing), and ensure the design aligns with your vision. Two rounds of revisions are included to refine every detail."
        },
        {
          title: "Export & Quality Assurance",
          text: "Once approved, we export your book into publication-ready formats (print and digital). We run final checks for device compatibility, image resolution, bleed/trim accuracy, and digital metadata."
        },
        {
          title: "File Delivery & Publishing Handoff",
          text: "You receive all final files (print-ready PDF, EPUB/MOBI, source files if requested). With BookWhisk, your book moves directly into production, design, cover, and distribution, without lost momentum."
        }
      ]
    },
    cta: {
      title: "Your story deserves a format that matches its quality",
      text: "Turn your manuscript into a professional-grade book ready for readers, retailers, and libraries.",
      btnText: "Start Your Project Today",
    }
  },
  // {
  //   title: "Self Publishing",
  //   href: "/ebook-publishing",
  //   card: {
  //     title: "eBook Creation",
  //     icon: services_eb,
  //     text: "Create professional, responsive eBooks optimized for major retailers and reading devices. We ensure your content looks great and reads flawlessly across platforms.",
  //     points: [
  //       "Reflowable & fixed-layout formats",
  //       "Device-optimized layouts",
  //       "Retail-ready ePub & distribution files"
  //     ]
  //   },
  //   hero: {
  //     subtitle: "",
  //     title: "",
  //     tagline: "",
  //     text: [],
  //     img: ""
  //   },
  //   sec1: {
  //     title: "Why Self-Publish with BookWhisk?",
  //     text: "Complete publishing freedom with professional support at every step.",
  //     cards: [
  //       {
  //         title: "End-to-End Publishing Service",
  //         text: "From manuscript refinement to worldwide distribution, BookWhisk manages every stage of your publishing journey. Our specialists ensure your book meets international publishing guidelines, is formatted for print and digital editions, and is made available on all major platforms/marketplace."
  //       },
  //       {
  //         title: "100% Royalties & Real-Time Sales Tracking",
  //         text: "Unlike traditional publishers, we don't claim a percentage of your profits. You keep 100% of your royalties, because it's your work, and your success. Once published, you'll have full access to your accounts and dashboards, allowing you to track sales and performance in real-time. You retain complete ownership, copyrights, and control over your book, always."
  //       },
  //       {
  //         title: "Fast Turnaround with Professional Quality",
  //         text: "Our streamlined workflow combines creativity, technology, and precision to deliver top-tier publishing services in record time. From editing to distribution, every phase is optimized for efficiency, without ever compromising on quality. You'll enjoy the same professional polish that major publishers deliver, but with the personal touch and freedom of self-publishing."
  //       },
  //       {
  //         title: "Transparent Pricing & Clear Milestones",
  //         text: "We believe in honesty from the very first step. You'll know exactly what's included, clear deliverables, timelines, and no hidden fees. We charge a one-time service fee upfront to allocate dedicated in-house resources to your project, ensuring your book gets the full attention it deserves from start to finish. Regular progress updates keep you informed every step of the way."
  //       }
  //     ],
  //   },
  //   sec2: {
  //     title: "",
  //     subtitle: "",
  //     text: "",
  //     img: "",
  //     points: [
  //       {
  //         title: "",
  //         text: ""
  //       }
  //     ]
  //   },
  // },
  {
    title: "Audiobook Publishing Services",
    href: "/audiobook-publishing-services",
    card: {
      title: "Audiobook Creation & Publishing",
      icon: services_ab,
      text: "Transform your manuscript into an engaging, studio-quality listening experience that connects with audiences everywhere. From narration to mastering, we handle every detail so your story sounds as powerful as it reads.",
      points: [
        "Studio-Quality Production",
        "Global Audiobook Distribution",
        "Seamless Book-to-Audio Conversion"
      ]
    },
    hero: {
      subtitle: "Audiobook Creation & Publishing",
      title: "Turn Your Words into an Experience Worth Hearing",
      text: [
        "Your story deserves more than just pages, it deserves a voice. With BookWhisk's Audiobook Creation & Publishing service, we bring your manuscript to life through rich narration, expert production, and seamless distribution. Whether it's a heartfelt memoir, a gripping thriller, or a thought-provoking non-fiction title, our team ensures your story resonates through every chapter and every note. "
      ],
      img: ""
    },
    sec1: {
      title: "Your Words, Perfectly Spoken",
      text: "",
      cards: [
        {
          title: "Professional In-house Narrator",
          text: "We have a wide pool of professional in-house voiceover artist which you will get to select as per your preferences and requirments. We will share samples for you to listen and select once you get onboard with us."
        },
        {
          title: "Narrator Selection",
          text: "We'll conduct a casting call within our professional network and send you 5–10 tailored audition samples within a few business days. Each narrator is carefully selected to match your book's energy, emotion, and audience. You make the final call, and we handle the rest, ensuring a smooth transition into recording and production."
        },
        {
          title: "Audiobook Finalization & Mixing",
          text: "Once narration is complete, our audio engineers step in to polish, balance, and master your audiobook to industry standards. Every file is carefully mixed for clarity, pacing, and tone consistency, ensuring a rich, immersive listening experience."
        },
        {
          title: "Every Audiobook Gets a Final Listen",
          text: "We have real people prooflisten your audiobook from start to finish. That means catching small things like mispronunciations or timing issues before your listeners ever hear them."
        },
        {
          title: "You Own 100% Ownership and Copyrights",
          text: "You will retain full ownership and copyrights to the audiobook we create, No dedications, Rereference, and No royalty splits required. You earn full royalties on every platform where your audiobook is sold or streamed."
        },
        {
          title: "Fast Turnarounds",
          text: "We're built for efficiency. Once your narrator is selected, recording begins right away, with most audiobooks completed within 2–6 weeks, depending on length and complexity. You'll stay updated at every stage, from voice recording to post-production, so your project stays on schedule."
        }
      ],
    },
    sec2: {
      title: "How it will be executed",
      text: "",
      img: "",
      points: [
        {
          title: "Onboarding & Creative Brief",
          text: "Once you join our audiobook program, we'll send you a detailed audiobook questionnaire to capture your preferences, from narrator style and accent to pacing and tone. You'll also share your finalized manuscript, which becomes the foundation of the recording process."
        },
        {
          title: "Voice Casting & Selection",
          text: "With access to our network of professional narrators and voiceover artists, you'll receive 5–10 curated audition samples tailored to your book's genre, mood, and target audience."
        },
        {
          title: "Recording & Review",
          text: "Once the voice talent is confirmed, recording begins in our partner studios under the direction of our production team. You'll receive sample chapters or progress clips throughout the process, giving you the opportunity to review pacing, tone, and delivery."
        },
        {
          title: "Audio Finalization & Mixing",
          text: "After narration approval, our sound engineers step in to polish and master your audiobook. We fine-tune levels, remove background noise, balance EQ, and ensure flawless transitions between chapters. Your audiobook is then mixed into MP3, M4B, and WAV formats, all meeting the international audiobook publishing standards for peak sound quality and listener experience."
        },
        {
          title: "Publishing & Distribution",
          text: "Once finalized, we convert your master files into ACX-ready formats for distribution on relevant selected (By Author) platforms. Our publishing team handles all the technical submissions, including ASIN registration, barcode creation, and metadata setup, ensuring your audiobook goes live smoothly and professionally."
        }
      ]
    },
    cta: {
      title: "Your Story Deserves to Be Heard",
      text: "At BookWhisk, we help you capture that audience, with professional narration, sound design, and seamless publishing that elevate your story to its full potential.",
      btnText: "Start Your Audiobook Project Today",
    }
  },
  {
    title: "Expert Ghostwriting",
    href: "/ghostwriting",
    card: {
      title: "Expert Ghostwriting",
      icon: services_gw,
      text: "Top-tier, genre-specialist writers collaborate with you in a transparent process to turn ideas into publishable manuscripts while preserving your voice and ownership.",
      points: [
        "Top-Tier, Genre-Specialist Writers",
        "Collaborative, Transparent Process",
        "100% Ownership, Human Authentic Voice"
      ]
    },
    hero: {
      subtitle: "Expert Ghostwriting",
      title: "Your Vision",
      tagline: "Professionally Written",
      text: [
        "Every great book begins with an idea, but turning that idea into a finished, publishable manuscript takes time, skill, and storytelling expertise.Turn your ideas, notes, or rough drafts into a professionally written, publish-ready book crafted by our team of genre-specialist seasoned ghostwriters who specialize across genres.",
        "Ghostwriting with BookWhisk is more than writing, it’s collaboration. Our professional writers and editors partner closely with you to understand your story, tone, and goals. Together, we build a manuscript that feels unmistakably yours, but refined, structured, and publication-ready."
      ],
      img: ""
    },
    sec1: {
      title: "Your Words. Our Expertise. One Incredible Book.",
      text: "",
      cards: [
        {
          title: "Ghostwriters with a Personal Touch",
          text: "Our experienced ghostwriters specialize in a wide range of genres, including memoirs, business books, fiction, non-fiction, and children’s stories. <br/> <br/> Your project is a true collaboration, where your voice and vision take center stage. Every detail is crafted to reflect your unique story, ensuring the final manuscript feels authentically yours."
        },
        {
          title: "Collaborative Process and Seamless Communication",
          text: "At BookWhisk, we believe ghostwriting is a partnership. You’ll be actively involved throughout the process, with regular opportunities to review drafts and provide feedback. <br/> <br/> Communication is streamlined through our intuitive online platform, where you can track progress, share thoughts, and watch your book take shape."
        },
        {
          title: "Crafting Books That Connect with Readers",
          text: "We specialize in all genres, including memoirs, business books, fiction, non-fiction, and children’s stories. <br/> <br/> Whether it’s a personal journey or a professional guide, our ghostwriters bring your ideas to life with captivating results."
        },
        {
          title: "Copyright Protection and Legal Safeguards",
          text: "Your intellectual property is fully protected with strict confidentiality agreements, ensuring your ideas remain private. <br/> <br/> You retain full ownership of your book’s content that we will write, organize, or publish for you."
        },
      ],
    },
    sec2: {
      title: "From Vision to Finished Book",
      text: "Ghostwriting is a collaborative process that turns your ideas into a professionally written book. Whether you're partnering with BookWhisks' ghostwriting services or exploring the process, these 9 steps will guide you from concept to completion:",
      img: "",
      points: [
        {
          title: "Define Your Goals and Vision",
          text: "Start by clarifying your book's purpose, target audience, and what you want to achieve. Knowing your vision helps the ghostwriter align the writing with your objectives and create a focused manuscript."
        },
        {
          title: "Gather and Share Your Materials",
          text: "Provide all existing notes, drafts, recordings, or relevant documents related to your book idea. The more detailed your input, the better the ghostwriter can capture your concept and voice."
        },
        {
          title: "Agree on Tone, Voice, and Style",
          text: "Discuss how you want the book to sound, whether formal, conversational, humorous, or inspirational. Defining the tone and style early ensures the writing matches your personality and appeals to your readers."
        },
        {
          title: "Collaborate on a Detailed Outline",
          text: "Work together to create a chapter-by-chapter outline or roadmap. This structure guides the writing process, keeps the content organized, and ensures your vision is reflected throughout the manuscript."
        },
        {
          title: "Research and Fact-Checking",
          text: "If your book involves specialized or factual information, share resources or allow the ghostwriter to conduct research. Accurate and well-researched content strengthens the credibility of your book."
        },
        {
          title: "Writing Initial Drafts",
          text: "The ghostwriter begins drafting chapters based on the outline and your materials. Drafts are typically delivered in segments so you can review progress and provide timely feedback."
        },
        {
          title: "Review and Provide Feedback",
          text: "Carefully evaluate each draft and communicate your thoughts, corrections, and suggestions. This collaborative feedback is essential to refine the manuscript and make sure it reflects your voice."
        },
        {
          title: "Revise, Edit, and Polish",
          text: "Through several rounds of revision, the ghostwriter fine-tunes the manuscript for clarity, flow, and consistency. The goal is to create a seamless, compelling read that meets your expectations."
        },
        {
          title: "Final Proofreading and Publishing Preparation",
          text: "Conduct a final review to catch any remaining errors and polish the text. Once finalized, prepare your manuscript for publishing, formatting, cover design, and book distribution are the next steps to bring your book to readers."
        }
      ]
    },
    cta: {
      title: "Ready to Turn Your Ideas into a Finished Book?",
      text: "Let’s Write Your Book, Together.",
      btnText: "Start Now",
    }
  },
  {
    title: "Book Marketing",
    href: "/book-marketing",
    marketing: true,
    card: {
      title: "Targeted & Holistic Book Marketing",
      icon: services_bm,
      text: "Data-driven precision meets creative storytelling, promoting your book strategically, authentically, and sustainably.",
      points: [
        "Tried, Tested, & Proven Strategy",
        "Continuous Optimization & Growth",
        "Custom Tailored Plans"
      ]
    },
    hero: {
      subtitle: "Targeted & Holistic Book Marketing",
      title: "Reach the right readers",
      tagline: "Build Your Author Brand, and Turn Your Book into a Lasting Success.",
      text: [
        "Every book deserves an audience, but finding yours takes more than just ads and algorithms.",
        "At BookWhisk, we blend data-driven targeting with creative storytelling to position your book where it matters most, in front of the readers who will actually care about your story.",
        "Our approach isn’t cookie-cutter or one-size-fits-all. Every campaign is custom-built to suit your genre, goals, and audience. Whether you’ve just launched your book or you’re ready to give it a fresh push, we help you grow visibility, credibility, and sales, organically and strategically."
      ],
      img: ""
    },
    sec1: {
      title: "How We Make Your Book Impossible to Miss",
      text: "",
      cards: [
        {
          title: "Foundation Setup: Amazon, Website, & SEO Optimization",
          text: "We start by making your digital foundation strong and discoverable.<br/><br/>Your Amazon author and book pages are fully optimized for visibility, keywords, and category placement.<br/><br/>We also create or refine your author website, ensuring it's ready to attract, convert, and impress readers, all optimized for Google ranking and organic reach."
        },
        {
          title: "Keyword Research & Market Mapping",
          text: "We don't guess, we strategize.<br/><br/>Our marketing specialists perform in-depth keyword research and audience mapping to identify what your ideal readers are searching for.<br/><br/>This becomes the blueprint for all campaigns, from SEO and social media to ad placements, ensuring every move we make aligns with real market demand."
        },
        {
          title: "Content Planning & Social Media Integration",
          text: "With your target audience defined, we design a monthly content plan that builds authority and engagement.<br/><br/>We share relevant topics, article ideas, and post formats that align with your voice and book's message. Once approved, our content team crafts and publishes it strategically across blogs, book review sites, and social platforms like Instagram, Facebook, and X."
        },
        {
          title: "Ongoing Content Development & Link-Building",
          text: "Now it's time to amplify.<br/><br/>We consistently create fresh, keyword-rich content, blogs, guest posts, press features, and social updates, that bring organic traction and improve your visibility across search engines.<br/><br/>Our ethical link-building strategy connects your book to authoritative sources, boosting your online credibility and SEO ranking."
        },
        {
          title: "Community Engagement & Profile Creation",
          text: "We extend your online footprint through directory listings, book communities, and genre-specific platforms.<br/><br/>Your book will be featured on curated literary blogs and forums to reach enthusiastic readers, reviewers, and influencers who shape conversations around new titles."
        }
      ],
    },
    sec2: {
      title: "Why BookWhisk Marketing Works",
      text: "Today's readers discover books everywhere, podcasts, TikTok, blogs, search engines, and audiobooks. Every genre, from romance to memoirs to self-help, has its own active reader community. With the right strategy, your book can find its audience, build reviews, and become part of the ongoing conversation, one that keeps selling long after launch day.",
      img: "",
      points: [
        {
          title: "Tailored Strategy, Real Results",
          text: "No bots. No mass templates. Every campaign is tailored to your genre, audience, and publishing goals."
        },
        {
          title: "SEO Meets Storytelling",
          text: "We blend creative content with smart keyword strategy to ensure your book ranks and resonates."
        },
        {
          title: "Omnichannel Reach",
          text: "From Amazon to Google, and from social media to literary blogs, we place your book wherever your audience already spends time."
        },
        {
          title: "Long-Term Visibility",
          text: "Our marketing is built for momentum, not quick spikes. Your brand and book presence will continue to grow even after campaigns end."
        }
      ]
    },
    cta: {
      title: "Ready to Get Your Book Seen, Read, and Remembered?",
      text: "Let’s build a marketing strategy that brings it to the right readers, and keeps it there. ",
      btnText: "Start Now",
    }
  },
  {
    title: "Global Book Distribution",
    href: "/book-distribution",
    marketing: true,
    card: {
      title: "Global Book Distribution",
      icon: services_bd,
      text: "Global reach made simple. Distribute your book across the world’s leading online platforms and digital libraries while keeping full control and 100% of your NET royalties.",
      points: [
        "Seamless Worldwide Reach",
        "eBook, Print & Audiobook Formats",
        "Print-on-Demand Setup Across All Platforms"
      ]
    },
    hero: {
      subtitle: "Global Book Distribution",
      title: "Your book Everywhere That Matters",
      text: [
        "Reach readers across the world through powerful online distribution, without losing control or royalties. Whether you’re publishing in print, digital, or audio formats, we make your story accessible on every major platform.",
        "At BookWhisk, distribution isn’t about listing your book everywhere, it’s about strategic visibility. We ensure your book is positioned on top-performing online marketplaces, reaching readers where they buy and discover new titles.",
        "You retain 100% rights and royalties, we simply handle the setup, optimization, and delivery to global audiences."
      ],
      img: ""
    },
    sec1: {
      title: "Seamless Multi-Format Distribution with Worldwide Reach",
      text: "",
      cards: [
        {
          title: "Multi-Format Distribution",
          text: "We prepare and distribute your book across eBook, paperback, hardcover, and audiobook formats, ensuring consistent presentation and metadata across all platforms."
        },
        {
          title: "Worldwide Reach via Top Platforms",
          text: "Get published on Amazon (KDP & Audible), Apple Books, Google Play, Kobo, Scribd, and other major online channels that drive real reader engagement from every corner of the world."
        },
        {
          title: "Professional POD (Print-on-Demand) Setup",
          text: "We handle everything from file formatting to backend setup for print-on-demand distribution, making your book instantly available for global purchase without inventory hassle."
        },
        {
          title: "Optimized Metadata & Category Placement",
          text: "We strategically categorize your book with optimized keywords, descriptions, and BISAC codes to boost discoverability and sales performance."
        },
        {
          title: "Royalty Management & Author Control",
          text: "You maintain full control over pricing, rights, and revenue. We make the process transparent, easy, and fully aligned with your publishing goals."
        },
        {
          title: "Why BookWhisk Distribution Works",
          text: "We prioritize digital accessibility, where readers actually buy and discover books today. Our distribution model is designed for real traction across e-commerce and streaming platforms."
        },
        {
          title: "Sales Visibility & Growth",
          text: "We don't just distribute, we position. Every title we handle is optimized for visibility, keywords, and audience targeting, helping you steadily build sales momentum."
        },
        {
          title: "End-to-End Support",
          text: "From account setup to file delivery, metadata optimization, and POD configuration, our team ensures every technical detail is handled seamlessly."
        },
      ],
    },
    sec3: {
      title: <>One of the most common questions authors ask is <span className="text-primary block">“Will my book be available in physical bookstores?”</span></>,
      tagline: "Here’s the truth: it starts online.",
      text: [
        "Many authors often ask, “How does my book end up in physical bookstores?” The answer starts online. By ensuring your book is properly formatted, optimized, and distributed across major digital platforms like Amazon, Barnes & Noble, and IngramSpark, it becomes instantly available for order through print-on-demand systems. Once your book begins gaining traction and consistent sales online, retailers and bookstores can choose to stock it physically or fulfill orders locally through their own networks.",
        "At BookWhisk, we combine global reach with precision setup, optimizing your metadata, pricing, and publishing foundation so your book doesn’t just exist online but thrives there. From there, the path to bookstore shelves happens naturally, driven by visibility, demand, and your growing readership.",
      ],
    },
    sec4: {
      title: "Where in the World are Your Books?",
      img: "/imgs/map.avif",
      continents: [
        {
          name: "Europe",
          detail: {
            title: "Book Distribution Markets in Europe",
            country: [
              {
                name: "Germany",
                text: "The German book market is worth 9.29 billion euros (approx. $11 billion USD). Categories that perform best in the German market include: Adult, Juvenile, and YA Fiction, Religion, Music, Business/Economics, Biography, History, and Games/Activities. Even if your book doesn’t fall into one of these categories, we sell hundreds of thousands of titles into the German market every year and majority of them are in English!"
              },
              {
                name: "Poland",
                text: "The Polish book market is worth 532 million euros (approx. $636 million USD) and grew by 4% in 2019. Mainstream literature and children’s books have been gaining market share over the past 5 years in Poland, climbing from 19% in 2015 to 34% of book income earned in 2019. The most popular book categories in Poland are Adult Fiction, Juvenile Fiction and Nonfiction, Business/Economics, Biography, Self-Help, Computing, History, Religion, and Health/Fitness. We sell tens of thousands of English titles into Poland annually.",
              },
              {
                name: "United Kingdom",
                text: "As one of the places Publishing Push has our very own offices and print facility (versus partnering with a local printer and distributor), we recognise the United Kingdom as one of our most popular hubs for publishing interest. Home to 5,000 booksellers, the UK book market is worth over $3.3 Billion pounds. Main market segments of interest to the consumer: higher-ed, professional, language, religion.",
              },
              {
                name: "Italy",
                text: "The Italian book market is worth 3.04 billion euros ($3.7 billion USD) with tens of thousands of English titles sold into the Italian market every year! With distribution to over 4,000 nationwide physical retailers, chain and independent bookstores represent over 66% of readers’ purchasing habits in Italy. Across both all retailers, the most popular book categories in Italy are Adult, Juvenile, and YA Fiction, History, Religion, Business/Economics, Biography, Comics/Graphic Novels, Body/Mind/Spirit, and Health/Fitness.",
              },
              {
                name: "Spain",
                text: "The Spanish book market is worth more than €3 billion ($3.4 billion USD) annually with over 75% of the tens of thousands of titles we sell here written in English! Over the past decade, the number of readers in Spain has grown year-over-year. The most popular book categories in Spain include Juvenile Fiction and Nonfiction, Adult and YA Fiction, History, Comics/Graphic Novels, Biography, Self-Help, Business/Economics, and Art.",
              },
            ]
          }
        },
        {
          name: "Americas",
          detail: {
            title: "Book Distribution Markets in The Americas",
            country: [
              {
                name: "United States of America",
                text: "There are four print facilities: one located in California, two in Tennessee, and another in Pennsylvania for fast, efficient shipping across the United States. The United States represents our most popular sales location in terms of retail, library, and consumer book sales."
              },
              {
                name: "Brazil",
                text: "Brazil is the largest book market in Latin America. The Brazilian book market is worth 3.9 billion BRL (approx. $710 million USD). The majority of those sold being in English in the categories of Comics/Graphic Novels, Juvenile Fiction and Nonfiction, Adult and YA Fiction, Business/Economics, Foreign Language Study, Art, Games/Activities, and Religion."
              }
            ]
          }
        },
        {
          name: "Asia",
          detail: {
            title: "Book Distribution Markets in Asia",
            country: [
              {
                name: "China",
                text: "China is particular about what data it shares, but we know from data that 98% of book sold via our distribution are in English. The most popular book categories sold in China are Juvenile Fiction and Nonfiction, Adult Fiction, Business/Economics, Educational, Music, History, Science, Computing, and Art."
              },
              {
                name: "India",
                text: "The Indian book market is worth $7 billion USD and growing every year. With a population of nearly 1.3 billion people, India imports nearly $60 million USD worth of books annually, many of which are written in English. The most popular book categories sold in India are Religion, Adult Fiction, Juvenile Fiction and Nonfiction, History, Biography, Business/Economics, Self-Help, Sociology, and Education."
              },
              {
                name: "South Korea",
                text: "The South Korean Book market is worth $5.4 billion USD and has been growing consistently over the past few years. The South Korean government may censor some books, but your content will never be edited at a text level. The most popular book categories in South Korea are Juvenile Fiction and Nonfiction, Adult Fiction, Business/Economics, Religion, Computing, Education, Science, Biography, and History."
              },
              {
                name: "Japan",
                text: "The Japanese book market is worth 1,224 billion yen (approx. $11.2 billion USD). Digital publications accounted for 24% of the entire publishing market in Japan in 2020 and the most popular book categories of all book types sold in Japan include Juvenile Fiction and Nonfiction, Comics/Graphic Novels, Adult Fiction, History, Business/Economics, Education, Religion, Biography, and Foreign Language Study."
              },
            ]
          }
        },
        {
          name: "Rest of World",
          detail: {
            title: "Book Distribution Markets in the Rest of the World",
            country: [
              {
                name: "Australia",
                text: "Through our distribution partners we have access to a print facility in Australia, including an expansion implemented in 2020 to account for growing demand within the region. With a population of over 40 million people, that's a lot of readers!"
              },
              {
                name: "South Africa",
                text: "The South African book publishing industry accounts for about 2.9 million rand ($169 million USD). Some of the top selling book categories in South Africa include Business & Economics, Religion, Poetry, Motivational & Inspirational, Fairy Tales & Mythology, and Mind, Body & Spirit."
              },
            ]
          }
        }
      ]
    },
    cta: {
      title: "Your story deserves more than local shelves",
      text: <>With BookWhisk, you can publish once and sell everywhere, digitally, globally, and professionally. <br /> Ready to go global? Let’s make your book discoverable to readers worldwide.</>,
      btnText: "Start Now",
    }
  },
  {
    title: "Book Translation",
    href: "/book-translation-services",
    marketing: true,
    card: {
      title: "Book Translation",
      icon: services_bt,
      text: "Bring your story to the world, expertly translated without losing its essence, tone, or heart.",
      points: [
        "Multilingual Excellence",
        "Genre-Savvy Translators",
        "Authentic Voice, Intact"
      ]
    },
    hero: {
      subtitle: "Book Translation Services",
      title: "Whisk Your Story to Readers Around the World",
      text: [
        "Every great story deserves to be heard, in every language. At BookWhisk, our book translation services bridge cultures and connect your words with global audiences, ensuring your voice remains authentic and powerful across borders.",
        "We don’t just translate your book, we adapt its rhythm, tone, and emotion for new readers while preserving the integrity of your original message. Whether it’s a memoir, novel, self-help guide, or academic work, our professional literary translators help your story resonate naturally in any market."
      ],
      img: ""
    },
    sec1: {
      title: "Why Choose BookWhisk for Translation?",
      text: "Professional, culturally-aware translation that preserves your voice and connects with readers worldwide.",
      cards: [
        {
          title: "Genre-Specialized Translators",
          text: "Work with translators who are not just fluent, but literary experts in your genre. From fantasy to memoir, they understand narrative tone, pacing, and emotion, ensuring your story feels authentic and engaging in every language."
        },
        {
          title: "Cultural & Emotional Adaptation",
          text: "We go beyond direct translation. Our team adapts cultural references, idioms, and emotional nuances so your story resonates naturally with new readers, preserving your voice while connecting across borders."
        },
        {
          title: "Dual-Language Editing & Quality Review",
          text: "Each translation is reviewed by bilingual editors for flow, tone, and consistency. Through multi-layered proofreading and quality checks, we guarantee a publication-ready manuscript that reads as beautifully as the original."
        },
        {
          title: "End-to-End Translation Support",
          text: "From manuscript assessment to final delivery, we handle every detail, translation, editing, formatting, and revisions.You stay in control while we ensure a smooth, professional process from start to global- ready finish."
        }
      ],
    },
    sec2: {
      title: "Our Translation Process",
      text: "A clear, professional path from manuscript to multilingual publication.",
      img: "",
      points: [
        {
          title: "Manuscript Review & Language Pairing",
          text: "We begin by reviewing your manuscript and pairing you with a professional translator who specializes in your genre and target language. This ensures that your translation captures not just meaning, but emotion, context, and culture."
        },
        {
          title: "Tone & Style Alignment",
          text: "Before translation begins, our translator studies your writing style, audience, and objectives. This alignment phase ensures that the translated work reflects your voice faithfully, not just word for word, but heart to heart."
        },
        {
          title: "Professional Translation & Editing",
          text: "Your manuscript is translated with literary precision by a native-speaking translator, then reviewed by an editor fluent in both languages for clarity, fluency, and consistency. Every sentence is crafted to read naturally and beautifully in its new form."
        },
        {
          title: "Quality Assurance & Proofreading",
          text: "After translation, the manuscript undergoes an in-depth proofreading and formatting review to ensure a seamless, print-ready version, free from errors or inconsistencies."
        },
        {
          title: "Final Review & Delivery",
          text: "You'll receive your translated manuscript in your preferred format (Word, PDF, or InDesign layout). We provide the opportunity for your review and offer revisions until you're fully satisfied with the outcome."
        },
        {
          title: "Languages We Work With",
          text: "English <br/> Spanish <br/> French <br/> German <br/> Italian <br/> Portuguese <br/> Arabic <br/> Chinese <br/> Japanese <br/> …and more upon request."
        }
      ]
    },
    cta: {
      title: "Ready to Go Global?",
      text: "Let’s take your story beyond borders. Reach millions of new readers and make your mark on the international stage, without compromising your voice or vision. ",
      btnText: "start now",
    }
  },
];

export const reviews = [
  {
    author: "Alex Martin",
    avatar: reviews_m1,
    comment:
      "The quality of their work exceeded my expectations, and their commitment to excellence was evident at every stage. While no process is without its challenges, BookWhisk handled everything with patience and expertise, making the journey smooth and rewarding.",
  },
  {
    author: "William Arthur",
    avatar: reviews_m2,
    comment:
      "There is no other company on the face of the planet that’s going to put themselves in your shoes every step of the way, and go out of their way to make sure not only that you are successful, but that you, as a published author, develop a backbone!",
  },
  {
    author: "Smith Jones",
    avatar: reviews_m3,
    comment:
      "I had the most phenomenal and pleasurable experience working with Casper. Every request that I had made was met with a delightful spirit and the willingness to help me win the day. I am overwhelmed with his devotion and leadership… What a spectacular team member under the realm of BookWhisk.",
  },
  {
    author: "Taylor Brown",
    avatar: reviews_m4,
    comment:
      "BookWhisk can take the idea you are passionate about and facilitate bringing it into reality. Everyone was not only helpful but very encouraging in the entire creative process. I highly recommend BookWhisk as the best publishing service available to all aspiring authors who would like to touch the world with their thoughts.",
  },
  {
    author: "Davis Miller",
    avatar: reviews_m5,
    comment:
      "John and the rest of the team were supportive and patient as I worked through the process. Ready to tackle book #2!!!",
  },
  {
    author: "Ava Clark",
    avatar: reviews_w1,
    comment:
      "OMG, Casper has done it again!! My second book looks incredible on the inside and out! I love Casper’s professionalism and how he constantly kept me in the loop and was quick to correct any changes necessary to make the book exactly what I envisioned.",
  },
  {
    author: "Samuel Moore",
    avatar: reviews_m6,
    comment:
      "I am happy to recommend BookWhisk and my project manager Ryan as the best in the industry! Authors, while considering publishing, STOP looking and choose BookWhisk!",
  },
  {
    author: "Noah Benjamin",
    avatar: reviews_m7,
    comment:
      "If you are a first-time author like myself, BookWhisk is the publishing company you need!",
  },
  {
    author: "Robert Clark",
    avatar: reviews_m8,
    comment:
      "I want to take this opportunity to thank the staff at BookWhisk, especially Casper. You have made a lifelong dream come true: becoming an author. I look forward to working with you on my second book. God bless!",
  },
  {
    author: "Michael Carter",
    avatar: reviews_w2,
    comment:
      "I continue to be very impressed with BookWhisk. From onboarding with Ryan to my account manager John, they were very thorough and communicative every step of the way. They do set you up to succeed! I would recommend this team to anyone.",
  },
  {
    author: "Elizabeth Williams",
    avatar: reviews_w3,
    comment:
      "My production manager, Ryan, was extremely helpful and a pleasure to work with; he was incredibly involved and called with updates every week. He was just as excited as me to have my book out!",
  },
  {
    author: "Grace Eleanor",
    avatar: reviews_w4,
    comment:
      "It was a true partnership. I couldn’t have asked for a better team to collaborate with on this journey. Thank you for championing my story and for the incredible work you do in amplifying diverse voices.",
  },
  {
    author: "Olivia Martin",
    avatar: reviews_w5,
    comment:
      "The enthusiasm and encouragement from BookWhisk is incredible. My account managers Casper Williams and John Foster helped me through the entire process, made me feel welcomed, encouraged me to ask questions, and ensured that my novel would remain true to my vision.",
  },
  {
    author: "Scarlett Davidson",
    avatar: reviews_w6,
    comment:
      "Blown away!! My mind is BLOWN. The process was so simple—from the vision being captured to the book now LIVE! Writing a book I thought was a dream, but now it’s a reality. THANK YOU, at a loss for words!",
  },
  {
    author: "Thomas Wilson",
    avatar: reviews_m9,
    comment:
      "John Foster at BookWhisk could not have been more helpful. He was attentive and quick, turning around my comments in a day (if not in a few hours). I could not be happier.",
  },
  {
    author: "Freya Willows",
    avatar: reviews_w7,
    comment:
      "I HIGHLY recommend them to any author, whether you are new or not. Casper Williams, my production manager, was very professional, patient and amazing to work with. I am very difficult and persistent but Casper did manage me very well… So, Casper, be prepared, more books are coming for you to publish!",
  },
  {
    author: "Henry Edward",
    avatar: reviews_m10,
    comment:
      "I sent my book to 17 different publishers and got rejected every time, and vanity publishers quoted me between $11k-$17k. With BookWhisk, I got my book published in less than 30 days!",
  },
  {
    author: "Ethan James",
    avatar: reviews_m11,
    comment:
      "I’ve paid over $3,500 for editors in the past, and I felt like they changed my book! With BookWhisk, I had complete creative control over how my book turned out.",
  },
  {
    author: "Emily Smith",
    avatar: reviews_w8,
    comment:
      "I’m a total beginner when it comes to computers, but I managed to design a professional-looking cover with BookWhisk in just 3 minutes!",
  },
  {
    author: "Bryan Robertson",
    avatar: reviews_m12,
    comment:
      "My proofreading process used to take months, and I had to hire 3 freelancers. With BookWhisk, I can do it in a single day.",
  },
];

export const FAQS_LIST = [
  {
    q: "How Long Does It Take to Publish a Book?",
    a: "The timeline depends on the complexity of your project and the services required. However, BookWhisk offers streamlined publishing solutions designed for efficiency without compromising quality. If your manuscript is already refined and near publication ready, we can have it available in the marketplace in as little as 7–10 business days. Need a faster turnaround? Connect with a publishing consultant to explore expedited options tailored to your timeline.",
  },
  {
    q: "What’s the Difference Between Paperback and Hardcover?",
    a: "The key distinction lies in durability and presentation. A paperback features a flexible, lightweight cover bound with adhesive, making it more portable and cost effective. A hardcover, on the other hand, is bound with a rigid, cloth- or paper-wrapped board, offering greater longevity and a premium feel. While paperbacks are ideal for casual readers, hardcovers elevate the reading experience, making them perfect for collectors and high-end releases.",
  },
  {
    q: "Can I choose my book’s ink quality, paper weight, and size?",
    a: "Absolutely. Every detail is yours to decide. At the outset of your publishing journey, we provide a curated selection of premium options for ink quality, paper weight, and book dimensions. Once your book is formatted, the size is locked in, ensuring a seamless final layout. However, you retain the flexibility to adjust paper weight and ink quality at any time via your personalized author dashboard.",
  },
  {
    q: "Who owns my book? Do I retain my copyright?",
    a: "Your book. Your rights. Your vision. As the author, you retain 100% ownership and full copyright to your work, BookWhisk has no stake in your intellectual property. You maintain complete creative control throughout the publishing process, with our expert team offering guidance and strategic direction. Every final decision, down to the smallest detail, is yours to make.",
  },
  {
    q: "How do I receive my royalties?",
    a: "Your royalties are deposited directly into your bank account—100% yours, always. BookWhisk does not take a percentage of your earnings. Your royalties will be net of the distribution platform’s fees (such as all global platform, and other retailers). Every sale is yours to keep, ensuring that your hard work is rewarded in full.",
  },
  {
    q: "Where will my book be sold and distributed?",
    a: "Your book’s reach depends on the publishing plan you select. With our most comprehensive package, your work is integrated into one of the industry’s largest global distribution networks, spanning 40+ leading platforms. Your book will be available in major online retailers, independent bookstores, chain stores, eBook marketplaces, and more. We ensure your story finds its audience, wherever they may be.",
  },
  {
    q: "How Are Keywords Selected to Make My Book Searchable on all global platform?",
    a: 'Keywords are the gateway to your book’s visibility. The most effective keywords are short, targeted phrases (typically 2–3 words long) that align with what readers are actively searching for.<br/>all global platform enforces strict guidelines for keywords—violations can result in rejection. To ensure compliance, avoid:<br/>1. Mentions of other authors or books<br/>2. Sales rank claims (e.g., "bestselling")<br/>3. Promotional terms (e.g., "free" or "discounted")<br/>4. Irrelevant keywords that do not directly relate to your book<br/>At BookWhisk, we handle this process meticulously, utilizing advanced keyword research tools to pinpoint the most effective terms—so you don’t have to navigate the complexities alone.',
  },
  {
    q: "What Is Print-on-Demand (POD)?",
    a: "Print-on-demand (POD) is a game-changer in modern publishing. No longer must authors order books in bulk, risking storage headaches and upfront costs. With POD, your book is printed and shipped only when a reader places an order, ensuring maximum efficiency and minimal waste.<br/>Your book will be available worldwide through all global platform, and countless other retailers—without you having to manage inventory or fulfillment. It’s cost-effective, sustainable, and hassle-free.<br/>Want to see a physical copy before full distribution? Our press proof service allows you to review a printed copy before committing to larger print runs.",
  },
  {
    q: "What Are the Advantages of Print-on-Demand?",
    a: "Print-on-demand offers authors unparalleled flexibility:<br/>✅ No upfront bulk printing costs – Print copies only when there’s demand.<br/>✅ Global distribution – Your book is available across major online retailers.<br/>✅ Zero storage hassles – No need to warehouse or ship books yourself.<br/>✅ Full creative control – Choose your book’s format, paper type, and binding style.<br/>With BookWhisk, you can focus on writing while we handle the logistics. Your book will be printed, distributed, and delivered—all without you ever having to manage inventory.",
  },
  {
    q: "Are Audiobooks Profitable? Can I Publish One?",
    a: "Absolutely. Audiobooks are the fastest-growing sector in publishing, with more readers than ever consuming books on the go.<br/>And yes, you can publish an audiobook. At BookWhisk, we offer a full suite of audiobook services—including professional narration, production, and distribution—to ensure your book is available in every format readers desire.<br/>If you’re looking to expand your reach, increase sales, and future-proof your book, an audiobook is an essential investment. Ready to explore the possibilities? Let’s bring your words to life.",
  },
  {
    q: "Can You Help Market and Promote My Published Book?",
    a: "Without strategic marketing, even the finest books can go unnoticed. At BookWhisk, we ensure your book reaches its target audience with tailored marketing solutions.<br/>From press release distribution to targeted social media campaigns, we position your book for maximum visibility. Our custom author websites establish your online presence, while professionally designed promotional materials enhance your outreach at signings and events.<br/>Publishing is just the beginning—let’s make sure your book gets the attention it deserves.",
  },
];
