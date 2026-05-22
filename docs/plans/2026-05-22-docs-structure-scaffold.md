# AI Council Toolkit Documentation Structure - Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Scaffold the complete Fumadocs documentation structure for the AI Council Toolkit, with all sections, navigation, and stub content derived from the research document.

**Architecture:** Fumadocs MDX-based docs site. Content lives in `content/docs/` with nested folders per section. Each folder has a `meta.json` for sidebar ordering and an `index.mdx` as the section landing page. Leaf pages are individual `.mdx` files. The home page gets a role-based guided paths section. No custom components needed yet — pure content scaffolding.

**Tech Stack:** Fumadocs MDX, Next.js App Router, Tailwind CSS

**Reference:** Research document at `C:\Users\rick\Downloads\AI_Council_Research.md`

---

## Fumadocs content conventions

- `content/docs/meta.json` — root sidebar config, lists section folder names and separators
- `content/docs/<section>/meta.json` — section sidebar config, lists page slugs
- `content/docs/<section>/index.mdx` — section landing page
- `content/docs/<section>/<page>.mdx` — leaf page
- Frontmatter: `title`, `description`, optionally `full: true` for full-width pages
- Separator syntax in meta.json: `"---Label---"`

---

### Task 1: Root meta.json — Define the full sidebar navigation

**Files:**
- Modify: `content/docs/meta.json`

**Step 1: Replace root meta.json with full structure**

```json
{
  "title": "AI Council Toolkit",
  "pages": [
    "index",
    "---Build Your Council---",
    "getting-started",
    "operating-models",
    "---Toolkit Packs---",
    "foundation",
    "intake-and-triage",
    "review-and-assurance",
    "operations",
    "---Reference---",
    "templates",
    "standards-and-regulations",
    "real-world-patterns"
  ]
}
```

**Step 2: Verify the file is valid JSON**

Run: `node -e "require('./content/docs/meta.json'); console.log('OK')"`
Expected: `OK`

**Step 3: Commit**

```bash
git add content/docs/meta.json
git commit -m "docs: define full sidebar navigation structure"
```

---

### Task 2: Update root index.mdx — Toolkit landing page

**Files:**
- Modify: `content/docs/index.mdx`

**Step 1: Replace content with toolkit introduction**

```mdx
---
title: AI Council Toolkit
description: An open, implementation-grade reference for building, running, and sustaining an internal AI Council.
---

## Why This Toolkit Exists

AI adoption is broadening faster than governance maturity. Many organisations have principles, but not an operating system. This toolkit fills the gap between abstract governance frameworks and commercial platforms by showing you how to stand up and run the human governance layer — the AI Council itself.

## What You'll Find Here

This toolkit is organised as a **playbook plus artefacts**:

- **Getting Started** — Understand what an AI Council is and whether you need one
- **Operating Models** — Choose a governance structure that fits your organisation
- **Foundation Pack** — Charter, roles, principles, meeting cadence, and decision rights
- **Intake & Triage Pack** — Registration, risk-tiering, routing, and inventory
- **Review & Assurance Pack** — Impact assessments, model cards, red-teaming, and security review
- **Operations Pack** — Monitoring, incidents, policy refresh, training, and reporting
- **Templates Library** — All downloadable artefacts in one place
- **Standards & Regulations** — NIST AI RMF, ISO 42001, EU AI Act, and crosswalks
- **Real-World Patterns** — How Microsoft, IBM, NSW, Yale, and others do it

## Who Is This For?

| Role | Start here |
|------|-----------|
| **CIO / Executive sponsor** starting from zero | [Getting Started](/docs/getting-started) → [Operating Models](/docs/operating-models) |
| **Legal / Compliance** needing policy language | [Foundation Pack](/docs/foundation) → [Standards & Regulations](/docs/standards-and-regulations) |
| **Product / Engineering** submitting a use case | [Intake & Triage](/docs/intake-and-triage) |
| **Security** needing review controls | [Review & Assurance](/docs/review-and-assurance) |
| **Council chair** running a meeting | [Foundation Pack](/docs/foundation/meetings-and-decisions) → [Templates](/docs/templates) |
| **Programme lead** refreshing after 6 months | [Operations](/docs/operations) |

## Design Principles

This toolkit is built on four ideas:

1. **Council-first** — The human governance layer is the primary unit of design, not a byproduct of tooling
2. **Practical over theoretical** — Every section ships artefacts you can use, not just principles to aspire to
3. **Tiered and federated** — Low-risk cases move fast; only hard cases reach the council; specialists stay authoritative in their domains
4. **Living governance** — Councils that only do approvals die; councils that maintain learning loops stay valuable
```

**Step 2: Commit**

```bash
git add content/docs/index.mdx
git commit -m "docs: write toolkit landing page with role-based navigation"
```

---

### Task 3: Getting Started section

**Files:**
- Create: `content/docs/getting-started/meta.json`
- Create: `content/docs/getting-started/index.mdx`
- Create: `content/docs/getting-started/what-is-an-ai-council.mdx`
- Create: `content/docs/getting-started/do-you-need-one.mdx`
- Create: `content/docs/getting-started/key-concepts.mdx`

**Step 1: Create meta.json**

```json
{
  "title": "Getting Started",
  "pages": ["index", "what-is-an-ai-council", "do-you-need-one", "key-concepts"]
}
```

**Step 2: Create index.mdx**

```mdx
---
title: Getting Started
description: Understand what an AI Council is, whether your organisation needs one, and the key concepts behind this toolkit.
---

This section introduces the core ideas behind the AI Council Toolkit and helps you decide whether — and how — to get started.

## In This Section

- [What Is an AI Council?](/docs/getting-started/what-is-an-ai-council) — Definition, purpose, and the four jobs of a council
- [Do You Need One?](/docs/getting-started/do-you-need-one) — Signals that your organisation is ready
- [Key Concepts](/docs/getting-started/key-concepts) — Terminology and mental models used throughout this toolkit
```

**Step 3: Create what-is-an-ai-council.mdx**

```mdx
---
title: What Is an AI Council?
description: An AI Council is a cross-functional governance body that sets policy, triages use cases, reviews high-risk systems, and maintains the controls that keep an organisation's AI portfolio trustworthy.
---

## Definition

An AI Council is a **practical governance capability** — a cross-functional body responsible for ensuring that an organisation's use of artificial intelligence is safe, ethical, compliant, and effective.

Unlike a one-off ethics committee or a purely advisory board, a well-designed AI Council is an **operating function** with standing membership, regular cadence, defined decision rights, and clear accountability.

## The Four Jobs of an AI Council

Based on patterns from NIST, ISO 42001, Microsoft, IBM, and public-sector councils, the most effective AI Councils perform four recurring jobs:

### 1. Set Policy and Risk Appetite

The council establishes the organisation's AI principles, acceptable-use policies, and risk tolerance. This includes defining what "high-risk" means, which use cases require review, and what standards apply.

### 2. Triage Use Cases

Not every AI project needs full council review. The council defines a tiering system so that low-risk use cases move through lighter processes, while high-risk or ambiguous cases are escalated appropriately.

### 3. Review High-Risk and Ambiguous Cases

For cases that reach the council, members conduct structured reviews — examining impact assessments, data practices, security posture, human oversight, and stakeholder effects.

### 4. Maintain Controls, Records, and Learning Loops

Governance doesn't end at approval. The council maintains an AI inventory, tracks decisions, monitors deployed systems, manages incidents, refreshes policies, and ensures the organisation learns from experience.

## What a Council Is Not

- **Not a bottleneck** — A well-designed council accelerates safe deployment by providing clear paths and pre-approved patterns
- **Not an ethics debating society** — It produces decisions, records, and artefacts, not just discussions
- **Not a single committee** — The best councils are tiered and federated, with champions embedded in teams and specialists handling domain-specific reviews
```

**Step 4: Create do-you-need-one.mdx**

```mdx
---
title: Do You Need One?
description: Signals that indicate your organisation would benefit from establishing an AI Council.
---

## Signs You Need an AI Council

Not every organisation needs a formal AI Council today, but the following signals suggest it's time:

### You're deploying AI beyond experiments

Once AI systems affect customers, employees, or business decisions, the risk profile changes. A council provides structured oversight for production systems.

### Teams are making governance decisions independently

If different teams are setting their own AI policies, choosing their own risk thresholds, or making ethical judgements without coordination, you have fragmented governance. A council provides consistency.

### Regulatory requirements are approaching

The EU AI Act, US federal AI inventory mandates, and sector-specific regulations (healthcare, finance, government) increasingly require documented governance. A council provides the organisational structure to meet these obligations.

### You've had an incident or near-miss

A biased model, a data leak, a public relations issue, or a compliance finding — any of these is a strong signal that reactive governance isn't sufficient.

### Stakeholders are asking questions

When board members, regulators, customers, or employees ask "how do you govern AI?", you need a credible answer. A council — with a charter, records, and process — provides that answer.

## When You Might Not Need One Yet

- You have fewer than 2-3 AI use cases in production
- All AI use is low-risk and well-understood (e.g., internal analytics dashboards)
- You have no regulatory obligations related to AI

Even in these cases, establishing lightweight governance early (a simple policy, an inventory, and a named owner) makes it easier to scale later.
```

**Step 5: Create key-concepts.mdx**

```mdx
---
title: Key Concepts
description: Core terminology and mental models used throughout the AI Council Toolkit.
---

## Terminology

| Term | Definition |
|------|-----------|
| **AI Council** | The central cross-functional governance body responsible for AI oversight |
| **Champion** | An individual embedded in a business unit or team who acts as liaison between the council and delivery teams |
| **Tiering** | The process of classifying AI use cases by risk level to determine the appropriate review pathway |
| **Intake** | The process by which new AI use cases are registered and assessed for the first time |
| **Triage** | The routing step that determines whether a use case is self-serve, champion-reviewed, specialist-reviewed, or council-reviewed |
| **Impact assessment** | A structured evaluation of an AI system's potential effects on people, the organisation, and society |
| **Model card** | A standardised document describing a machine learning model's intended use, performance, and limitations |
| **Datasheet** | A standardised document describing a dataset's provenance, composition, and intended use |
| **AI inventory** | A register of all AI systems in use or development across the organisation |

## Mental Models

### Layered Governance

The best AI governance is not a single committee. It is a layered system:

- **Executive sponsor** — Sets tone, allocates resources, accountable to the board
- **AI Council** — Central policy, triage, and review body
- **Specialist reviewers** — Security, privacy, legal, domain experts called in for specific reviews
- **Champions** — Embedded in teams, first point of contact, handle low-risk guidance
- **Delivery teams** — Build and operate AI systems, responsible for completing assessments and following policy

### Front-Door Review + Ongoing Monitoring

Governance is not a gate you pass through once. Effective councils run two loops:

1. **Front-door review** — New use cases are assessed before deployment
2. **Ongoing monitoring** — Deployed systems are periodically reviewed, incidents are tracked, and policies are refreshed

### Risk-Based Routing

Not every use case needs the same level of scrutiny. A tiering system routes cases to the right level:

- **Tier 1 (Low risk)** — Self-serve with templates and guidelines
- **Tier 2 (Medium risk)** — Champion review with lightweight assessment
- **Tier 3 (High risk)** — Full council review with impact assessment
- **Tier 4 (Prohibited / needs escalation)** — Escalated to executive sponsor or blocked
```

**Step 6: Commit**

```bash
git add content/docs/getting-started/
git commit -m "docs: add getting-started section with three pages"
```

---

### Task 4: Operating Models section

**Files:**
- Create: `content/docs/operating-models/meta.json`
- Create: `content/docs/operating-models/index.mdx`
- Create: `content/docs/operating-models/governance-structures.mdx`
- Create: `content/docs/operating-models/choosing-your-model.mdx`
- Create: `content/docs/operating-models/champion-networks.mdx`

**Step 1: Create meta.json**

```json
{
  "title": "Operating Models",
  "pages": ["index", "governance-structures", "choosing-your-model", "champion-networks"]
}
```

**Step 2: Create index.mdx**

```mdx
---
title: Operating Models
description: Choose a governance structure that fits your organisation's size, maturity, and risk profile.
---

Before you charter a council, you need to decide **how governance will be structured**. This section covers the main patterns, how to choose between them, and why champion networks are a first-class design element.

## In This Section

- [Governance Structures](/docs/operating-models/governance-structures) — Centralised, federated, and hybrid models
- [Choosing Your Model](/docs/operating-models/choosing-your-model) — A decision framework based on org size, AI maturity, and regulatory pressure
- [Champion Networks](/docs/operating-models/champion-networks) — Why embedded champions are essential and how to build the network
```

**Step 3: Create governance-structures.mdx**

```mdx
---
title: Governance Structures
description: Centralised, federated, and hybrid governance models for AI Councils.
---

## Three Models

Organisations typically adopt one of three governance structures for AI oversight. The right choice depends on your size, complexity, and how far AI has spread across the organisation.

### Centralised Model

A single AI Council handles all policy, triage, and review.

**Best for:** Smaller organisations, early-stage AI programmes, or organisations with a narrow set of AI use cases.

**Pros:** Consistency, clear authority, simpler to stand up.

**Cons:** Can become a bottleneck as AI adoption scales. Council members may lack domain expertise for specialised use cases.

### Federated Model

Multiple domain-specific committees (e.g., healthcare AI, research AI, customer-facing AI) operate with delegated authority. A central council sets policy and handles escalations.

**Best for:** Large organisations, universities, or government agencies with diverse AI portfolios.

**Pros:** Domain expertise where it matters, scales with the organisation, reduces central bottleneck.

**Cons:** Risk of inconsistency across domains. Requires clear escalation paths and shared standards.

**Example:** Yale operates an AI Steering Committee for harmonised oversight, an AI Governance Committee for sensitive approvals, and specialist committees for research, health data, healthcare AI, and advisory review.

### Hybrid Model

A central council sets policy and reviews high-risk cases. Champions embedded in teams handle day-to-day guidance. Specialist reviewers are called in as needed.

**Best for:** Mid-to-large organisations that want central consistency without centralised bottleneck.

**Pros:** Balances consistency with speed. Champions provide local context. Specialists bring depth.

**Cons:** Requires investment in the champion network and clear routing logic.

**Example:** Microsoft operates an Office of Responsible AI for policy, a companywide Responsible AI Council led by the CTO, division-level leaders, and a network of champions who support assessments and local implementation.

## Common Elements Across All Models

Regardless of structure, effective AI governance includes:

- **Executive sponsorship** — A named senior leader accountable to the board
- **Clear decision rights** — Who can approve, escalate, or block
- **Defined routing logic** — How cases move from intake to the right reviewer
- **Shared standards** — Common risk tiers, assessment templates, and policies
- **Records and transparency** — Decision logs, meeting minutes, and reporting
```

**Step 4: Create choosing-your-model.mdx**

```mdx
---
title: Choosing Your Model
description: A decision framework to help you select the right AI governance structure.
---

## Decision Framework

Use the following factors to guide your choice of operating model.

### Organisation Size

| Size | Recommended Starting Model |
|------|---------------------------|
| Under 500 employees | Centralised |
| 500–5,000 employees | Hybrid |
| Over 5,000 employees | Federated or Hybrid |

### AI Maturity

| Stage | Description | Recommended Model |
|-------|------------|-------------------|
| **Exploring** | Fewer than 5 AI projects, mostly experimental | Centralised (lightweight) |
| **Scaling** | 5–20 AI systems, some in production | Hybrid |
| **Embedded** | AI widely used across business units | Federated with central policy |

### Regulatory Pressure

If your organisation operates in a heavily regulated sector (healthcare, finance, government) or under the EU AI Act's high-risk obligations, you will likely need more structured governance earlier — lean toward hybrid or federated models with formal records.

### Decision Matrix

| Factor | Centralised | Hybrid | Federated |
|--------|------------|--------|-----------|
| Speed to stand up | Fast | Medium | Slower |
| Scales with AI adoption | Limited | Good | Best |
| Domain expertise | Limited | Good (via champions) | Best |
| Consistency | Best | Good | Requires effort |
| Overhead | Low | Medium | Higher |

## Start Simple, Evolve

Most organisations should start with a **centralised or lightweight hybrid model** and evolve toward federation as AI adoption grows. The toolkit is designed to support this evolution — the same charter, intake, and review artefacts work across all three models.
```

**Step 5: Create champion-networks.mdx**

```mdx
---
title: Champion Networks
description: Why embedded AI champions are essential and how to build an effective network.
---

## Why Champions Matter

A council that operates only as a central committee will either become a bottleneck or lose touch with how AI is actually being built and used. **Champions** solve this by embedding governance awareness directly into delivery teams.

The champion pattern is well-proven in adjacent domains:

- **Security** — OWASP's Security Champions Guide recommends assigning a security champion in each development team with dedicated time, training, and periodic briefings
- **Responsible AI** — Microsoft and IBM both use champion networks as a core part of their AI governance operating models
- **Data governance** — Collibra's model includes data stewards as the operational link between central governance and business units

## The Champion Role

An AI Champion is a team member (not a full-time governance role) who:

- Acts as first point of contact for AI governance questions in their team
- Helps colleagues complete intake forms and self-assessments
- Routes complex or high-risk cases to the council or specialist reviewers
- Shares council decisions, policy updates, and lessons learned back to their team
- Flags emerging risks, near-misses, or concerns early

## Building the Network

### 1. Identify and recruit

Look for people who are already informally advising on AI use in their teams. Prioritise volunteers over appointees — champions need genuine interest, not just a title.

### 2. Define the time commitment

Champions need **dedicated time** — OWASP recommends this explicitly. A typical commitment is 2–4 hours per week, depending on team AI activity.

### 3. Train and equip

Provide champions with:
- The organisation's AI policy and risk-tiering criteria
- Intake and self-assessment templates
- Access to the council's decision log and FAQ
- A communication channel (e.g., Slack/Teams channel) for questions and peer support

### 4. Maintain the community

- Hold monthly champion briefings (30 minutes) to share updates, discuss difficult cases, and gather feedback
- Rotate champions periodically to spread knowledge and prevent burnout
- Recognise champion contributions in performance reviews

## Champions in the Routing Model

Champions play a key role in the risk-based routing system:

- **Tier 1 (Low risk)** — Champion confirms the team's self-assessment and approves
- **Tier 2 (Medium risk)** — Champion reviews the assessment and may approve or escalate
- **Tier 3+ (High risk)** — Champion ensures the assessment is complete, then routes to the council
```

**Step 6: Commit**

```bash
git add content/docs/operating-models/
git commit -m "docs: add operating-models section with three pages"
```

---

### Task 5: Foundation Pack section

**Files:**
- Create: `content/docs/foundation/meta.json`
- Create: `content/docs/foundation/index.mdx`
- Create: `content/docs/foundation/charter.mdx`
- Create: `content/docs/foundation/principles.mdx`
- Create: `content/docs/foundation/roles-and-membership.mdx`
- Create: `content/docs/foundation/meetings-and-decisions.mdx`
- Create: `content/docs/foundation/escalation-paths.mdx`

**Step 1: Create meta.json**

```json
{
  "title": "Foundation Pack",
  "pages": ["index", "charter", "principles", "roles-and-membership", "meetings-and-decisions", "escalation-paths"]
}
```

**Step 2: Create index.mdx**

```mdx
---
title: Foundation Pack
description: The foundational artefacts for chartering and launching an AI Council — charter, principles, roles, meetings, and escalation paths.
---

The Foundation Pack contains everything you need to formally establish an AI Council. These artefacts define **who** the council is, **what** it stands for, **how** it operates, and **where** decisions go when the council can't resolve them.

## In This Section

- [Charter](/docs/foundation/charter) — A model charter defining the council's mission, scope, authority, and accountability
- [Principles](/docs/foundation/principles) — Aligning your council's values to international standards
- [Roles and Membership](/docs/foundation/roles-and-membership) — Sponsor, chair, members, advisors, and champions
- [Meetings and Decisions](/docs/foundation/meetings-and-decisions) — Cadence, quorum, agenda templates, decision rules, and minutes
- [Escalation Paths](/docs/foundation/escalation-paths) — What happens when the council can't decide, disagrees, or encounters a crisis

## Sources

This pack draws on NCUA's data governance council charter, Collibra's operating roles model, Microsoft's council-and-champions structure, IBM's four-role governance model, and Yale's committee framework.
```

**Step 3: Create charter.mdx**

```mdx
---
title: Charter
description: A model charter for establishing an AI Council with clear mission, scope, authority, and accountability.
---

## Why a Charter Matters

A charter transforms an informal group into a **legitimate governance body**. Without one, councils drift — membership is unclear, authority is disputed, and decisions lack standing. NCUA's data governance charter is a strong precedent: it defines purpose, guiding principles, responsibilities, membership, meetings, quorum, consensus, advisory roles, and chair responsibilities.

## Model Charter Template

Below is a model charter you can adapt to your organisation. Each section includes guidance on what to include and why.

### 1. Purpose

State the council's mission in one or two sentences. Example:

> The AI Council exists to ensure that [Organisation]'s use of artificial intelligence is safe, ethical, compliant with applicable laws and standards, and aligned with our values and strategic objectives.

### 2. Scope

Define what falls under the council's authority:

- All AI and machine learning systems developed, procured, or operated by the organisation
- Generative AI tools and services used by employees
- Vendor and third-party AI systems integrated into business processes
- Automated decision-making systems that affect customers, employees, or the public

### 3. Authority

Specify the council's decision rights:

- **Approve** — Authority to approve AI use cases that meet policy requirements
- **Conditionally approve** — Authority to approve with required mitigations
- **Escalate** — Authority to escalate to executive sponsor or board
- **Block** — Authority to halt AI use cases that pose unacceptable risk
- **Recommend** — Advisory authority on policy, standards, and risk appetite

### 4. Accountability

The council reports to [Executive Sponsor / Board Committee / CTO]. An annual report is provided to [Board / Executive Leadership] covering the AI inventory, decisions made, incidents, and policy changes.

### 5. Membership

See [Roles and Membership](/docs/foundation/roles-and-membership) for detailed role definitions.

### 6. Meetings

See [Meetings and Decisions](/docs/foundation/meetings-and-decisions) for cadence, quorum, and decision rules.

### 7. Review and Renewal

The charter is reviewed annually or when there is a material change in the organisation's AI portfolio, regulatory environment, or risk appetite.
```

**Step 4: Create principles.mdx**

```mdx
---
title: Principles
description: Aligning your AI Council's principles to international standards and frameworks.
---

## Why Principles Matter

Principles provide the **normative foundation** for council decisions. When a novel case arises that no policy anticipated, the council falls back on principles. They also communicate the organisation's commitments externally.

## Recommended Principle Sources

The strongest principles frameworks to draw from are:

| Framework | Key Emphases |
|-----------|-------------|
| **OECD AI Principles** (updated May 2024) | Human rights, transparency, robustness, security, safety, accountability |
| **UNESCO Recommendation on AI Ethics** | Human rights, dignity, fairness, transparency, human oversight |
| **Council of Europe Framework Convention** | Human rights, democracy, rule of law |
| **NIST AI RMF** | Govern, Map, Measure, Manage — lifecycle governance |
| **ISO/IEC 42001** | Management system approach — continuous improvement |

## Model Principles Set

We recommend adopting 6–8 principles. More than that becomes difficult to remember and apply. Here is a model set:

### 1. Human Oversight

AI systems support human decision-making. Humans remain accountable for outcomes, and meaningful human oversight is maintained proportionate to risk.

### 2. Fairness and Non-Discrimination

AI systems are designed, tested, and monitored to avoid unfair bias and discrimination against individuals or groups.

### 3. Transparency and Explainability

People affected by AI systems can understand that AI is being used, how it influences decisions, and how to seek recourse.

### 4. Safety and Security

AI systems are robust, secure, and resilient. Security is addressed throughout the lifecycle, including adversarial threats specific to AI.

### 5. Privacy and Data Governance

AI systems respect privacy rights and are built on data that is lawfully collected, appropriately governed, and fit for purpose.

### 6. Accountability

Roles and responsibilities for AI governance are clearly defined. Decisions are documented. The organisation can demonstrate compliance.

### 7. Societal and Environmental Wellbeing

The broader impacts of AI systems on society and the environment are considered and, where possible, positive outcomes are pursued.

## Using Principles in Practice

Principles are not wall art. They should be:

- **Referenced in the charter** as the council's normative foundation
- **Embedded in intake forms** — require teams to self-assess against each principle
- **Used in review discussions** — structure council deliberation around principles
- **Cited in decision records** — explain which principles informed each decision
- **Published externally** — communicate commitments to customers, regulators, and the public
```

**Step 5: Create roles-and-membership.mdx**

```mdx
---
title: Roles and Membership
description: Define the roles, responsibilities, and membership criteria for your AI Council.
---

## Core Roles

Effective AI Councils use a **layered role structure** rather than a flat committee. This pattern appears consistently across Microsoft, IBM, NCUA's data governance model, and Collibra's governance framework.

### Executive Sponsor

- **Who:** A C-suite or senior executive (CTO, CDO, CISO, or equivalent)
- **Responsibilities:** Sets tone from the top, allocates budget and resources, accountable to the board, resolves escalations the council cannot, champions AI governance in leadership forums
- **Time commitment:** Monthly briefing + escalation availability

### Council Chair

- **Who:** A senior leader with cross-functional credibility — often the head of AI, data, or responsible technology
- **Responsibilities:** Sets agendas, facilitates meetings, ensures decisions are recorded and communicated, manages the council's operating rhythm, represents the council to the executive sponsor and board
- **Time commitment:** 4–8 hours per week

### Council Members

- **Who:** 6–10 cross-functional representatives. Typical seats include:
  - AI/ML engineering
  - Data science or analytics
  - Legal and compliance
  - Information security
  - Privacy / data protection
  - Ethics or responsible technology
  - Business operations (rotating based on use cases under review)
  - HR / people (for employee-facing AI)
- **Responsibilities:** Attend meetings, review cases assigned to them, contribute domain expertise, vote on decisions
- **Time commitment:** 2–4 hours per week (meeting + preparation)
- **Term:** 2-year terms with staggered rotation to maintain continuity

### Advisory Specialists

- **Who:** Subject-matter experts called in for specific reviews (e.g., accessibility specialist, clinical expert, external ethicist)
- **Responsibilities:** Provide expert input on referred cases. No standing membership or voting rights.
- **Time commitment:** As needed

### Champions

See [Champion Networks](/docs/operating-models/champion-networks) for the full champion role definition and network design.

## Membership Criteria

When selecting council members, prioritise:

1. **Cross-functional representation** — The council must reflect the breadth of AI's impact
2. **Seniority to make decisions** — Members should have authority to commit their function
3. **Willingness to engage** — Governance requires active participation, not passive attendance
4. **Diversity of perspective** — Include people who will challenge assumptions

## Onboarding New Members

New council members should receive:

- A copy of the charter and principles
- The current AI inventory summary
- The last 3 months of meeting minutes and decision logs
- The intake and review templates
- A briefing from the chair or an experienced member
```

**Step 6: Create meetings-and-decisions.mdx**

```mdx
---
title: Meetings and Decisions
description: Cadence, quorum rules, agenda templates, decision-making processes, and record-keeping for AI Council meetings.
---

## Meeting Cadence

| Meeting Type | Frequency | Duration | Purpose |
|-------------|-----------|----------|---------|
| **Full council** | Fortnightly or monthly | 60–90 min | Review cases, set policy, discuss emerging issues |
| **Triage huddle** | Weekly (optional) | 30 min | Chair + 1-2 members route incoming cases |
| **Champion briefing** | Monthly | 30 min | Share updates, gather feedback from champion network |
| **Executive briefing** | Quarterly | 30 min | Report to sponsor on inventory, decisions, risks, and programme health |

## Quorum

A quorum requires a majority of voting members (typically >50%) including the chair or deputy chair. Decisions made without quorum are advisory and must be ratified at the next quorate meeting.

## Decision-Making

### Preferred: Consensus with Fallback

1. The chair presents the case and recommendation
2. Members discuss, raise concerns, and propose conditions
3. The chair tests for consensus: "Does anyone object to this recommendation?"
4. If consensus is reached, the decision is recorded
5. If consensus cannot be reached, the chair calls a vote (simple majority)
6. Dissenting views are recorded in the minutes

### Decision Options

| Decision | Meaning |
|----------|---------|
| **Approved** | Use case meets policy requirements and may proceed |
| **Approved with conditions** | Use case may proceed once specified mitigations are in place |
| **Deferred** | More information is needed before a decision can be made |
| **Escalated** | Case exceeds the council's authority or risk appetite — referred to executive sponsor |
| **Not approved** | Use case does not meet requirements and may not proceed in its current form |

## Agenda Template

```text
AI Council Meeting — [Date]

1. Apologies and quorum check
2. Minutes of previous meeting — approval
3. Actions arising — status update
4. New cases for review
   a. [Case name] — [Presenter] — [Tier level]
   b. [Case name] — [Presenter] — [Tier level]
5. Policy or standards updates
6. Emerging risks or incidents
7. Any other business
8. Next meeting date
```

## Decision Log

Every decision should be recorded with:

- **Case ID** and name
- **Date** of decision
- **Decision** (approved / approved with conditions / deferred / escalated / not approved)
- **Conditions** (if any)
- **Rationale** — which principles, risks, or evidence informed the decision
- **Assigned actions** and owners
- **Review date** (when the decision should be revisited)

## Minutes

Meeting minutes should be concise and focus on **decisions and actions**, not discussion transcripts. Distribute within 48 hours of the meeting.
```

**Step 7: Create escalation-paths.mdx**

```mdx
---
title: Escalation Paths
description: What happens when the council can't decide, members disagree, or a crisis emerges.
---

## Why Escalation Paths Matter

A council without escalation paths will either deadlock on hard decisions or overstep its authority. Clear escalation rules protect the council's legitimacy and ensure that the right decisions are made at the right level.

## Escalation Triggers

A case should be escalated when:

- The council cannot reach consensus after reasonable discussion
- The case exceeds the council's defined risk appetite or authority
- The case involves a novel technology, use case, or context not covered by existing policy
- There is a material conflict of interest among council members
- An incident has occurred that requires immediate executive attention
- External stakeholders (regulators, media, public) are involved

## Escalation Destinations

| Trigger | Escalated To | Expected Response |
|---------|-------------|-------------------|
| Consensus failure | Executive sponsor | Decision within 5 business days |
| Exceeds authority | Executive sponsor or board committee | Decision + policy clarification |
| Novel / unprecedented | Executive sponsor + external advisor | Decision + policy update |
| Conflict of interest | Executive sponsor (conflicted members recused) | Decision with independent review |
| Incident / crisis | Executive sponsor + incident response team | Immediate triage + post-incident review |
| Regulatory inquiry | Legal + executive sponsor | Coordinated response |

## Incident Escalation

For AI incidents (system failure, bias discovered in production, data breach involving AI, public complaint), the council should have a dedicated rapid-response path:

1. **Champion or team** reports the incident to the council chair
2. **Chair** assesses severity and notifies the executive sponsor if warranted
3. **Incident response** follows the organisation's existing incident management process, with AI-specific considerations added
4. **Post-incident review** is scheduled at the next council meeting
5. **Lessons learned** are documented and used to update policy and training
```

**Step 8: Commit**

```bash
git add content/docs/foundation/
git commit -m "docs: add foundation pack section with five pages"
```

---

### Task 6: Intake and Triage Pack section

**Files:**
- Create: `content/docs/intake-and-triage/meta.json`
- Create: `content/docs/intake-and-triage/index.mdx`
- Create: `content/docs/intake-and-triage/ai-inventory.mdx`
- Create: `content/docs/intake-and-triage/use-case-registration.mdx`
- Create: `content/docs/intake-and-triage/risk-tiering.mdx`
- Create: `content/docs/intake-and-triage/routing-logic.mdx`
- Create: `content/docs/intake-and-triage/vendor-checklist.mdx`

**Step 1: Create meta.json**

```json
{
  "title": "Intake & Triage",
  "pages": ["index", "ai-inventory", "use-case-registration", "risk-tiering", "routing-logic", "vendor-checklist"]
}
```

**Step 2: Create index.mdx**

```mdx
---
title: Intake & Triage Pack
description: Registration, risk-tiering, routing, and inventory — the operational engine of AI governance.
---

The Intake & Triage Pack is where governance moves from abstract principles to **practical throughput**. This is the pack that determines how new AI use cases enter the governance system, how they're assessed for risk, and how they're routed to the right level of review.

If you make only one part of this toolkit work well, make it this one.

## In This Section

- [AI Inventory](/docs/intake-and-triage/ai-inventory) — Maintaining a register of all AI systems
- [Use Case Registration](/docs/intake-and-triage/use-case-registration) — The intake form for new AI projects
- [Risk Tiering](/docs/intake-and-triage/risk-tiering) — Classifying use cases by risk level
- [Routing Logic](/docs/intake-and-triage/routing-logic) — Determining who reviews what
- [Vendor Checklist](/docs/intake-and-triage/vendor-checklist) — Additional considerations for procured AI

## Sources

This pack draws on Canada's Algorithmic Impact Assessment, NSW's AI Assessment Framework, Queensland's FAIRA, the US DOJ's AI inventory methodology, NIST's use-case and profile materials, and Singapore's AI Verify.
```

**Step 3: Create ai-inventory.mdx**

```mdx
---
title: AI Inventory
description: Maintaining a living register of all AI systems across the organisation.
---

## Why an Inventory

An AI inventory is the **system of record** for all AI in your organisation. Without one, the council is governing blind. Regulatory mandates are also making inventories non-optional — the US DOJ requires annual AI use-case inventories submitted to OMB, and the EU AI Act requires registration of high-risk systems.

## What to Track

At a minimum, each entry should capture:

| Field | Description |
|-------|------------|
| **System ID** | Unique identifier |
| **Name** | Human-readable name |
| **Description** | What the system does, in plain language |
| **Owner** | Business unit and named individual |
| **Status** | Planning / Development / Pilot / Production / Retired |
| **Risk tier** | Tier 1–4 (see [Risk Tiering](/docs/intake-and-triage/risk-tiering)) |
| **Use case type** | Internal decision support / customer-facing / automated decision / generative AI / etc. |
| **Data sources** | Key data inputs |
| **Affected stakeholders** | Who is affected by the system's outputs |
| **Approval status** | Pending / Approved / Approved with conditions / Not approved |
| **Last review date** | When the system was last reviewed by the council or champion |
| **Next review date** | When the system is next due for review |

## Tooling Options

The inventory can be maintained in:

- A **spreadsheet** (simplest starting point)
- A **project management tool** (e.g., Notion, Airtable) with structured fields
- A **dedicated governance platform** (e.g., Credo AI, OneTrust, ModelOp) as the programme matures

The format matters less than the discipline of keeping it current.

## Maintenance Cadence

- **New entries:** Added at intake registration
- **Status updates:** Updated by system owner when status changes
- **Periodic review:** Full inventory reviewed quarterly by the council or chair
- **Annual audit:** Complete inventory validated against actual AI use, cross-referenced with procurement and IT asset records
```

**Step 4: Create use-case-registration.mdx**

```mdx
---
title: Use Case Registration
description: The intake form for new AI use cases entering the governance process.
---

## Purpose

Every new AI use case — whether built in-house, procured from a vendor, or using a generative AI service — should be registered through a standard intake form. This form captures the information needed for risk tiering and routing.

## Registration Form Fields

### Basic Information

- **Submitter name and role**
- **Business unit / team**
- **System or project name**
- **Brief description** — What does this system do? What problem does it solve?
- **AI technique** — Machine learning, deep learning, generative AI, rule-based, other
- **Development approach** — Built in-house / vendor-procured / open-source / SaaS

### Stakeholder Impact

- **Who are the primary users?** (internal employees, customers, public)
- **Who is affected by the system's outputs?** (individuals, groups, communities)
- **What decisions does the system support or automate?**
- **What happens if the system is wrong?** (Describe the consequences of errors or failures)

### Data

- **What data does the system use?** (Describe sources and types)
- **Does the data include personal information?**
- **Does the data include sensitive categories?** (health, financial, biometric, children, etc.)
- **How is the data collected and with what consent?**

### Risk Indicators

- **Could this system affect someone's access to services, benefits, or opportunities?**
- **Could this system cause physical, financial, or reputational harm?**
- **Does this system operate in a regulated domain?** (healthcare, finance, employment, law enforcement)
- **Is human review of the system's outputs required or feasible?**
- **Is this a novel use of AI for the organisation?**

### Requested Timeline

- **Target deployment date**
- **Is there a regulatory or contractual deadline?**

## After Submission

1. The form is reviewed by the council chair or triage designee
2. A risk tier is assigned (see [Risk Tiering](/docs/intake-and-triage/risk-tiering))
3. The case is routed to the appropriate reviewer (see [Routing Logic](/docs/intake-and-triage/routing-logic))
4. The submitter is notified of the assigned tier and next steps
```

**Step 5: Create risk-tiering.mdx**

```mdx
---
title: Risk Tiering
description: A framework for classifying AI use cases by risk level to determine the appropriate review pathway.
---

## Why Tier

Not every AI use case needs the same scrutiny. Tiering ensures that **low-risk cases move fast** while **high-risk cases get the attention they need**. This aligns with the EU AI Act's risk-based approach, NIST AI RMF's profiling, and NSW's risk-based referral model.

## Four-Tier Model

### Tier 1 — Low Risk

**Characteristics:**
- Internal use only, no external stakeholder impact
- Decision support (human makes final decision)
- No personal or sensitive data
- Well-established technique with known limitations
- Low consequence of error

**Examples:** Internal analytics dashboards, code-completion tools for developers, internal document search

**Review pathway:** Self-serve with templates. Champion confirms.

### Tier 2 — Medium Risk

**Characteristics:**
- Customer-facing or employee-facing, but with human oversight
- Uses personal data with appropriate consent
- Moderate consequence of error
- Established technique but new context for the organisation

**Examples:** Customer support chatbot with human escalation, employee performance analytics (advisory only), content recommendation

**Review pathway:** Champion review with lightweight assessment.

### Tier 3 — High Risk

**Characteristics:**
- Affects access to services, benefits, opportunities, or rights
- Automated or semi-automated decision-making with significant impact
- Uses sensitive personal data
- Operates in a regulated domain
- Novel technique or novel application
- High consequence of error

**Examples:** Credit scoring, hiring screening, medical diagnosis support, benefits eligibility, facial recognition, predictive policing

**Review pathway:** Full council review with impact assessment, model card, and security review.

### Tier 4 — Prohibited or Requires Executive Escalation

**Characteristics:**
- Prohibited by law or organisational policy
- Unacceptable risk to human rights, safety, or organisational reputation
- Exceeds the council's defined risk appetite

**Examples:** Social scoring, real-time biometric identification in public spaces (where prohibited), covert surveillance, manipulative systems

**Review pathway:** Escalated to executive sponsor. May be blocked.

## Tiering Worksheet

Use the risk indicators from the [Use Case Registration](/docs/intake-and-triage/use-case-registration) form to assign a tier:

| Question | If Yes → Higher Tier |
|----------|---------------------|
| Affects access to services, benefits, or opportunities? | +1 tier |
| Could cause physical, financial, or reputational harm? | +1 tier |
| Operates in a regulated domain? | +1 tier |
| Uses sensitive personal data? | +1 tier |
| Automated decision-making without human review? | +1 tier |
| Novel use of AI for the organisation? | +1 tier |

Start at Tier 1. For each "yes" answer, move up one tier (cap at Tier 4). The triage designee may adjust based on context and judgement.
```

**Step 6: Create routing-logic.mdx**

```mdx
---
title: Routing Logic
description: How AI use cases are routed from intake to the right level of review.
---

## Routing Flow

```text
Use Case Submitted
       │
       ▼
  Triage (Chair / Designee)
       │
       ├── Tier 1 (Low) ──────► Champion confirms ──► Approved
       │
       ├── Tier 2 (Medium) ───► Champion reviews ──► Approved / Escalated
       │
       ├── Tier 3 (High) ─────► Council review ───► Decision
       │
       └── Tier 4 (Prohibited) ► Executive sponsor ► Blocked / Exception
```

## Routing Rules

| Tier | Primary Reviewer | Can Approve? | Escalation Path |
|------|-----------------|-------------|-----------------|
| **Tier 1** | Champion | Yes | Escalate to council if uncertain |
| **Tier 2** | Champion + specialist (if needed) | Yes, with conditions | Escalate to council for complex cases |
| **Tier 3** | Full council | Yes | Escalate to executive sponsor |
| **Tier 4** | Executive sponsor | Block or grant exception | Board committee for organisation-wide precedent |

## Specialist Referral

Some cases require specialist input regardless of tier:

| Domain | Specialist | When to Refer |
|--------|-----------|---------------|
| **Security** | CISO / security team | Generative AI, internet-facing systems, systems processing sensitive data |
| **Privacy** | DPO / privacy team | Personal data processing, cross-border data flows, new data sources |
| **Legal** | Legal counsel | Regulated domains, contractual obligations, IP concerns |
| **Accessibility** | Accessibility lead | Customer-facing systems, employee tools |
| **Domain expert** | Varies | Healthcare AI → clinical expert, financial AI → risk officer, etc. |

## Turnaround Times

| Tier | Target Turnaround |
|------|------------------|
| Tier 1 | 2 business days |
| Tier 2 | 5 business days |
| Tier 3 | 10 business days (next council meeting) |
| Tier 4 | Case-by-case |

## Pre-Approved Patterns

To reduce review overhead, the council can define **pre-approved patterns** — categories of use that have already been reviewed and approved at the policy level. Teams using a pre-approved pattern complete a simplified registration and champion confirmation, regardless of what the tiering worksheet suggests.

Examples of pre-approved patterns:
- Use of approved code-completion tools by engineering teams
- Use of approved transcription tools for internal meetings
- Standard analytics dashboards using aggregated, non-personal data
```

**Step 7: Create vendor-checklist.mdx**

```mdx
---
title: Vendor Checklist
description: Additional governance considerations when procuring AI systems from third-party vendors.
---

## Why a Separate Checklist

Vendor-procured AI introduces risks that in-house development does not: reduced visibility into model design, data practices, and security posture. The standard intake process applies, but the following additional questions should be addressed.

## Vendor Assessment Questions

### Transparency and Documentation

- Does the vendor provide a model card or equivalent documentation?
- Can the vendor explain how the model was trained, what data was used, and what its known limitations are?
- Does the vendor publish bias testing or fairness audit results?
- Is the vendor transparent about sub-processors and third-party model use?

### Data Practices

- Where is data stored and processed? (Jurisdictions and data residency)
- Is customer data used for model training or improvement?
- Can the organisation opt out of data use for model training?
- What data retention and deletion policies does the vendor follow?
- How does the vendor handle data subject rights (access, deletion, correction)?

### Security

- Does the vendor have SOC 2, ISO 27001, or equivalent certification?
- What adversarial testing has the vendor performed (red-teaming, prompt injection testing)?
- How does the vendor handle vulnerability disclosure and patching?
- What is the vendor's incident response process?

### Contractual

- Do the contract terms provide audit rights?
- Are liability and indemnification terms clear for AI-specific harms?
- Can the organisation exit the contract and retrieve its data?
- Are service levels defined for model performance and availability?

### Ongoing Governance

- Does the vendor notify customers of model updates or retraining?
- Can the organisation monitor model performance independently?
- What is the vendor's process for handling bias reports or complaints?

## Integration with Intake

The vendor checklist is completed **alongside** the standard [Use Case Registration](/docs/intake-and-triage/use-case-registration) form. Vendor cases should not receive a lower risk tier simply because the AI is third-party — in fact, reduced visibility may warrant a **higher** tier.
```

**Step 8: Commit**

```bash
git add content/docs/intake-and-triage/
git commit -m "docs: add intake-and-triage pack section with five pages"
```

---

### Task 7: Review and Assurance Pack section

**Files:**
- Create: `content/docs/review-and-assurance/meta.json`
- Create: `content/docs/review-and-assurance/index.mdx`
- Create: `content/docs/review-and-assurance/impact-assessments.mdx`
- Create: `content/docs/review-and-assurance/model-cards-and-datasheets.mdx`
- Create: `content/docs/review-and-assurance/security-review.mdx`
- Create: `content/docs/review-and-assurance/red-teaming.mdx`
- Create: `content/docs/review-and-assurance/human-oversight.mdx`

**Step 1: Create meta.json**

```json
{
  "title": "Review & Assurance",
  "pages": ["index", "impact-assessments", "model-cards-and-datasheets", "security-review", "red-teaming", "human-oversight"]
}
```

**Step 2: Create index.mdx**

```mdx
---
title: Review & Assurance Pack
description: The council's review instruments — impact assessments, model cards, security review, red-teaming, and human oversight.
---

The Review & Assurance Pack provides the **instruments the council uses during structured reviews**. These are the artefacts that transform a committee discussion into an evidence-based decision.

## In This Section

- [Impact Assessments](/docs/review-and-assurance/impact-assessments) — Structured evaluation of an AI system's potential effects
- [Model Cards and Datasheets](/docs/review-and-assurance/model-cards-and-datasheets) — Standardised documentation for models and datasets
- [Security Review](/docs/review-and-assurance/security-review) — AI-specific security considerations aligned to SAIF, OWASP, and NIST
- [Red-Teaming](/docs/review-and-assurance/red-teaming) — Structured adversarial testing for AI systems
- [Human Oversight](/docs/review-and-assurance/human-oversight) — Ensuring meaningful human control proportionate to risk

## Sources

This pack draws on Microsoft's AI Impact Assessment template, NIST's Generative AI Profile, Google's Secure AI Framework, OWASP's Top 10 for LLM Applications, NIST SP 800-218A, model card and datasheet standards, and AI Verify's testing framework.
```

**Step 3: Create impact-assessments.mdx**

```mdx
---
title: Impact Assessments
description: A structured template for evaluating the potential effects of an AI system on people, the organisation, and society.
---

## Purpose

An impact assessment is the **core review document** for Tier 3 (high-risk) cases. It provides the council with structured evidence to make an informed decision. Microsoft requires impact assessments for responsible AI review; Canada's Algorithmic Impact Assessment uses 65 risk questions and 41 mitigation questions.

## When to Use

- All Tier 3 cases (mandatory)
- Tier 2 cases where the champion or council requests deeper analysis
- Any case involving automated decision-making that affects individuals

## Assessment Template

### 1. System Overview

- System name and ID (from AI inventory)
- Purpose and intended use
- AI technique and architecture (high-level)
- Development stage (design / development / pilot / production)

### 2. Stakeholder Analysis

- **Primary users** — Who operates or interacts with the system?
- **Affected individuals** — Who is subject to the system's outputs or decisions?
- **Vulnerable groups** — Are any affected groups particularly vulnerable? (children, elderly, minorities, economically disadvantaged)
- **Third parties** — Are there broader societal or environmental effects?

### 3. Benefits and Harms

| Category | Potential Benefits | Potential Harms | Likelihood | Severity |
|----------|-------------------|-----------------|------------|----------|
| Individuals | | | | |
| Groups / communities | | | | |
| Organisation | | | | |
| Society / environment | | | | |

### 4. Fairness and Bias

- What protected characteristics are relevant to this use case?
- Has the training data been assessed for representation and bias?
- What fairness metrics will be used?
- How will fairness be monitored after deployment?

### 5. Transparency and Explainability

- Are affected individuals informed that AI is being used?
- Can the system's outputs be explained to affected individuals?
- Is there a process for individuals to seek recourse or challenge a decision?

### 6. Privacy and Data Protection

- Has a Data Protection Impact Assessment (DPIA) been completed?
- What personal data is processed and under what legal basis?
- How is data minimisation achieved?

### 7. Security

- Has a security review been completed? (see [Security Review](/docs/review-and-assurance/security-review))
- What adversarial threats have been considered?

### 8. Human Oversight

- What level of human oversight is in place? (see [Human Oversight](/docs/review-and-assurance/human-oversight))
- Is the level of oversight proportionate to the risk?

### 9. Mitigations

For each identified harm, document:
- The mitigation measure
- Who is responsible for implementing it
- When it will be in place
- How its effectiveness will be monitored

### 10. Recommendation

The assessment author's recommendation to the council: Approve / Approve with conditions / Do not approve / Need more information.
```

**Step 4: Create model-cards-and-datasheets.mdx**

```mdx
---
title: Model Cards and Datasheets
description: Standardised documentation for AI models and the datasets they use.
---

## Purpose

Model cards and datasheets are **standardised documentation formats** that make AI systems more transparent and reviewable. They were introduced by Google and Microsoft researchers and have become widely adopted as a governance best practice.

## Model Cards

A model card describes a trained model's intended use, performance characteristics, and limitations.

### Model Card Template

| Section | Contents |
|---------|----------|
| **Model name and version** | Identifier and version number |
| **Model type** | Architecture and technique (e.g., transformer, gradient boosting) |
| **Intended use** | Primary use cases the model was designed for |
| **Out-of-scope use** | Use cases the model should not be used for |
| **Training data** | Description of training data (source, size, date range, preprocessing) |
| **Evaluation data** | Description of evaluation data and how it differs from training data |
| **Performance metrics** | Key metrics (accuracy, precision, recall, F1, AUC, etc.) with confidence intervals |
| **Disaggregated performance** | Performance broken down by relevant demographic or contextual groups |
| **Limitations** | Known limitations, failure modes, and edge cases |
| **Ethical considerations** | Potential harms, biases, and sensitive use contexts |
| **Recommendations** | Guidance for users on responsible deployment |

## Datasheets for Datasets

A datasheet describes a dataset's provenance, composition, and intended use.

### Datasheet Template

| Section | Contents |
|---------|----------|
| **Dataset name and version** | Identifier and version |
| **Purpose** | Why was this dataset created? |
| **Creator** | Who created the dataset and on behalf of whom? |
| **Composition** | What data is included? How many instances? What features? |
| **Collection process** | How was the data collected? What consent was obtained? |
| **Preprocessing** | What cleaning, filtering, or transformation was applied? |
| **Intended use** | What tasks is this dataset appropriate for? |
| **Not appropriate for** | What tasks should this dataset not be used for? |
| **Distribution** | How is the dataset shared? Under what license? |
| **Maintenance** | Who maintains the dataset? How are updates handled? |
| **Legal and ethical** | Are there legal or ethical concerns? (Privacy, bias, representation) |

## When to Require These

| Artefact | When Required |
|----------|--------------|
| **Model card** | All Tier 3 cases. Recommended for Tier 2. |
| **Datasheet** | When the model uses a custom or curated dataset. Not required for off-the-shelf vendor models (covered by vendor checklist). |

For vendor-procured AI, request equivalent documentation from the vendor as part of the [Vendor Checklist](/docs/intake-and-triage/vendor-checklist).
```

**Step 5: Create security-review.mdx**

```mdx
---
title: Security Review
description: AI-specific security considerations aligned to SAIF, OWASP LLM Top 10, and NIST SP 800-218A.
---

## Why AI Security Is Different

AI systems introduce attack surfaces that traditional application security does not cover: training data poisoning, model theft, prompt injection, and adversarial inputs. A council that cannot speak credibly about security will quickly lose relevance.

## Frameworks

| Framework | Focus |
|-----------|-------|
| **Google SAIF** | Six core elements for securing AI systems |
| **OWASP Top 10 for LLM Applications** | Practical risks for large language model applications |
| **NIST SP 800-218A** | AI-specific extensions to the Secure Software Development Framework |
| **NIST AI RMF (Measure, Manage)** | Risk measurement and management including security |

## Security Review Checklist

### Data Security

- [ ] Training data is stored securely with access controls
- [ ] Data pipelines are authenticated and integrity-checked
- [ ] Sensitive data is encrypted at rest and in transit
- [ ] Data provenance is documented

### Model Security

- [ ] Model artefacts are stored in a secure registry with access controls
- [ ] Model integrity is verified before deployment (checksums, signatures)
- [ ] Model access is restricted to authorised users and systems
- [ ] Model outputs are validated before being used downstream

### Application Security

- [ ] Standard application security controls apply (OWASP Top 10)
- [ ] Input validation is applied to user-provided prompts and data
- [ ] Output filtering is applied to prevent information disclosure
- [ ] Rate limiting and abuse detection are in place

### LLM-Specific Risks (OWASP Top 10 for LLMs)

- [ ] **Prompt injection** — System prompt protection and input sanitisation
- [ ] **Insecure output handling** — Outputs are treated as untrusted
- [ ] **Training data poisoning** — Data provenance and integrity controls
- [ ] **Model denial of service** — Resource limits and timeout controls
- [ ] **Supply chain vulnerabilities** — Third-party model and library vetting
- [ ] **Sensitive information disclosure** — Output filtering and access controls
- [ ] **Insecure plugin design** — API and tool-use boundaries
- [ ] **Excessive agency** — Scope and permission limits for agentic systems
- [ ] **Overreliance** — User training and appropriate trust calibration
- [ ] **Model theft** — Access controls and monitoring

### Generative AI Specific

- [ ] Content safety filters are in place
- [ ] Grounding and attribution mechanisms reduce hallucination risk
- [ ] Guardrails prevent generation of harmful, illegal, or off-topic content
- [ ] Logging and monitoring capture usage patterns and anomalies

## Integration with Council Review

The security review checklist should be completed by the **security team or CISO representative** and submitted as part of the [Impact Assessment](/docs/review-and-assurance/impact-assessments) for Tier 3 cases. For Tier 2 cases, a lightweight security self-assessment is sufficient.
```

**Step 6: Create red-teaming.mdx**

```mdx
---
title: Red-Teaming
description: Structured adversarial testing for AI systems to identify vulnerabilities before deployment.
---

## What Is AI Red-Teaming?

AI red-teaming is the practice of **structured adversarial testing** — deliberately probing an AI system to discover failures, vulnerabilities, and harmful behaviours before users encounter them. NIST defines it as a structured testing effort to find flaws and vulnerabilities in an AI system, and Microsoft's AI Red Team has published detailed guidance on methodology.

## When to Red-Team

| Tier | Red-Teaming Requirement |
|------|------------------------|
| Tier 1 | Not required |
| Tier 2 | Recommended for customer-facing generative AI |
| Tier 3 | Required |
| Tier 4 | Required before any exception request |

## Red-Team Plan Template

### 1. Scope

- **System under test** — Name, version, and deployment context
- **Attack surface** — Which interfaces and capabilities are in scope?
- **Out of scope** — What should not be tested? (Production systems, third-party dependencies)

### 2. Objectives

What are you trying to find? Common objectives include:

- Safety failures (harmful, dangerous, or illegal outputs)
- Bias and fairness failures (discriminatory behaviour)
- Security vulnerabilities (prompt injection, data extraction, jailbreaks)
- Reliability failures (hallucinations, inconsistencies, edge cases)
- Policy violations (outputs that breach organisational guidelines)

### 3. Team Composition

Red teams should include:

- Technical AI/ML engineers who understand the system
- Security professionals experienced in adversarial testing
- Domain experts who understand the real-world context
- Diverse perspectives (different backgrounds, expertise, and thinking styles)

### 4. Methodology

- **Scenario-based testing** — Design realistic adversarial scenarios
- **Structured prompts** — Use prompt libraries and known attack patterns
- **Escalating difficulty** — Start with simple attacks, increase sophistication
- **Document everything** — Record every test, input, output, and observation

### 5. Findings and Remediation

For each finding, document:

- **Description** of the vulnerability or failure
- **Severity** (critical / high / medium / low)
- **Reproducibility** (always / sometimes / rare)
- **Evidence** (screenshots, logs, input/output pairs)
- **Recommended mitigation**
- **Owner** and target remediation date

### 6. Report to Council

The red-team report is submitted to the council as part of the review package. The council uses it alongside the impact assessment and security review to make an informed decision.
```

**Step 7: Create human-oversight.mdx**

```mdx
---
title: Human Oversight
description: Ensuring meaningful human control over AI systems, proportionate to risk.
---

## Why Human Oversight Matters

Human oversight is one of the most consistently referenced principles across international frameworks — OECD, UNESCO, the EU AI Act, and NIST AI RMF all emphasise it. The EU AI Act specifically requires "appropriate human oversight measures" for high-risk AI systems.

But oversight must be **meaningful**, not performative. A human who rubber-stamps AI outputs without understanding them provides no real oversight.

## Levels of Human Oversight

| Level | Description | Appropriate For |
|-------|------------|-----------------|
| **Human-in-the-loop** | A human reviews and approves every AI output before it takes effect | High-risk decisions: hiring, credit, medical diagnosis, benefits eligibility |
| **Human-on-the-loop** | A human monitors AI outputs and can intervene, but the system acts by default | Medium-risk systems: content moderation, fraud detection, customer routing |
| **Human-over-the-loop** | A human sets parameters, reviews aggregate performance, and can modify or shut down the system | Lower-risk systems: recommendations, analytics, internal automation |
| **Autonomous** | No routine human oversight of individual decisions | Only appropriate for Tier 1, low-consequence, well-understood systems |

## Designing Effective Oversight

### 1. Match oversight to risk

The level of human oversight should be proportionate to the consequences of error. Use the [Risk Tiering](/docs/intake-and-triage/risk-tiering) to guide the decision.

### 2. Ensure the human can actually oversee

Oversight is only meaningful if the human:
- Has the **expertise** to evaluate the AI's output
- Has the **time** to review at the volume required
- Has the **authority** to override or stop the system
- Has access to **explanations** of why the AI produced its output
- Is not subject to **automation bias** (over-trusting the AI)

### 3. Design for disagreement

The system should make it easy for the human to **disagree** with the AI. If overriding the AI is difficult, time-consuming, or socially costly, oversight is undermined.

### 4. Monitor the oversight itself

Track:
- How often humans override the AI
- Whether override rates change over time (declining rates may indicate automation bias)
- Whether overrides correlate with better outcomes

## Human Oversight Worksheet

Include in the impact assessment:

| Question | Response |
|----------|----------|
| What level of human oversight is in place? | |
| Who performs the oversight? (Role, expertise) | |
| What information does the overseer receive? | |
| Can the overseer override the AI? How? | |
| What is the expected volume of decisions? | |
| Can the overseer realistically review this volume? | |
| How will automation bias be mitigated? | |
| How will oversight effectiveness be monitored? | |
```

**Step 8: Commit**

```bash
git add content/docs/review-and-assurance/
git commit -m "docs: add review-and-assurance pack section with five pages"
```

---

### Task 8: Operations and Maintenance Pack section

**Files:**
- Create: `content/docs/operations/meta.json`
- Create: `content/docs/operations/index.mdx`
- Create: `content/docs/operations/monitoring.mdx`
- Create: `content/docs/operations/incidents.mdx`
- Create: `content/docs/operations/policy-refresh.mdx`
- Create: `content/docs/operations/training-and-literacy.mdx`
- Create: `content/docs/operations/reporting.mdx`

**Step 1: Create meta.json**

```json
{
  "title": "Operations",
  "pages": ["index", "monitoring", "incidents", "policy-refresh", "training-and-literacy", "reporting"]
}
```

**Step 2: Create index.mdx**

```mdx
---
title: Operations & Maintenance Pack
description: Post-deployment monitoring, incidents, policy refresh, training, and reporting — the practices that keep a council effective over time.
---

Councils that only do approvals eventually die. Councils that maintain **living governance** — monitoring deployed systems, managing incidents, refreshing policies, training the organisation, and reporting on programme health — stay valuable.

## In This Section

- [Monitoring](/docs/operations/monitoring) — Post-deployment monitoring and periodic review
- [Incidents](/docs/operations/incidents) — AI incident and near-miss management
- [Policy Refresh](/docs/operations/policy-refresh) — Keeping policies current as technology, regulation, and the organisation evolve
- [Training and Literacy](/docs/operations/training-and-literacy) — Building AI literacy across the organisation
- [Reporting](/docs/operations/reporting) — Annual and quarterly reporting on the AI governance programme

## Sources

This pack draws on the EU AI Act's literacy obligations, Google's post-launch lifecycle, Microsoft's annual transparency reporting, and the US DOJ's annual inventory discipline.
```

**Step 3: Create monitoring.mdx**

```mdx
---
title: Monitoring
description: Post-deployment monitoring and periodic review of AI systems.
---

## Why Monitor

Approval is not the finish line. AI systems can degrade, drift, or produce unexpected outcomes after deployment. Google explicitly frames responsibility as an end-to-end lifecycle running from early research through post-launch monitoring.

## What to Monitor

| Category | What to Track |
|----------|--------------|
| **Performance** | Accuracy, latency, error rates, and key business metrics |
| **Fairness** | Disaggregated performance across relevant demographic groups |
| **Drift** | Data drift (input distribution changes) and concept drift (relationship between inputs and outputs changes) |
| **Usage** | Volume, user patterns, edge case frequency |
| **Feedback** | User complaints, override rates, support tickets |
| **Security** | Anomalous inputs, attempted attacks, access violations |

## Periodic Review Calendar

| Review Type | Frequency | Responsible | Scope |
|-------------|-----------|-------------|-------|
| **Automated monitoring** | Continuous | System owner / engineering | Performance, drift, security alerts |
| **Champion check-in** | Monthly | Champion | Usage patterns, team feedback, any concerns |
| **Tier 2 review** | Every 6 months | Champion + specialist | Performance, fairness, compliance check |
| **Tier 3 review** | Annually | Full council | Full re-assessment against impact assessment |
| **Inventory audit** | Annually | Chair / programme lead | Validate inventory against actual AI use |

## Retirement

When an AI system is decommissioned, document:

- Reason for retirement
- Date of decommissioning
- Data disposition (archived, deleted, anonymised)
- Lessons learned
- Update the AI inventory to reflect retired status
```

**Step 4: Create incidents.mdx**

```mdx
---
title: Incidents
description: Managing AI-specific incidents and near-misses.
---

## What Counts as an AI Incident?

An AI incident is any event where an AI system causes or contributes to harm, near-harm, or a significant deviation from expected behaviour. Examples:

- A model produces biased or discriminatory outputs in production
- An AI system makes a consequential error affecting a real person
- A data breach involves training data or model outputs
- A generative AI system produces harmful, illegal, or reputation-damaging content
- A system fails in a way that disrupts business operations
- A near-miss is identified before harm occurs

## Incident Response Process

### 1. Report

Anyone can report an AI incident or near-miss. Channels should include:

- A dedicated email or form
- The champion network (first point of contact in most teams)
- Existing incident management tools (e.g., ServiceNow, PagerDuty)

### 2. Triage

The council chair or on-call designee triages the incident:

| Severity | Description | Response Time |
|----------|------------|---------------|
| **Critical** | Active harm to individuals, legal exposure, public-facing | Immediate |
| **High** | Significant risk of harm, regulatory implications | Within 24 hours |
| **Medium** | Degraded performance, internal impact | Within 3 business days |
| **Low** | Minor anomaly, no direct harm | Next scheduled review |

### 3. Contain

- Stop the system from causing further harm (pause, roll back, add human review)
- Notify affected individuals if required
- Preserve evidence (logs, inputs, outputs)

### 4. Investigate

- What happened?
- What was the root cause?
- Was this foreseeable? Was it in the risk assessment?
- What controls failed or were missing?

### 5. Remediate

- Fix the immediate issue
- Update controls, monitoring, and risk assessment
- Implement preventive measures

### 6. Review and Learn

- Present findings at the next council meeting
- Update the incident log
- Update policies, templates, or training if needed
- Share anonymised lessons learned with the champion network

## Incident Log Template

| Field | Description |
|-------|------------|
| **Incident ID** | Unique identifier |
| **Date reported** | When the incident was reported |
| **System** | AI system name and ID |
| **Severity** | Critical / High / Medium / Low |
| **Description** | What happened |
| **Impact** | Who was affected and how |
| **Root cause** | What went wrong |
| **Actions taken** | Containment and remediation steps |
| **Lessons learned** | What the organisation should do differently |
| **Status** | Open / Investigating / Resolved / Closed |
```

**Step 5: Create policy-refresh.mdx**

```mdx
---
title: Policy Refresh
description: Keeping AI governance policies current as technology, regulation, and the organisation evolve.
---

## Why Refresh

AI technology moves fast. Policies written for traditional ML may not cover generative AI. Regulations are evolving (EU AI Act timelines, US executive orders, sector-specific rules). The organisation itself changes — new business lines, new geographies, new risk appetite. A policy that is not refreshed becomes an irrelevant artefact.

## Refresh Triggers

Refresh policies when:

- **Scheduled** — Annual review at minimum
- **Regulatory change** — New law, regulation, or enforcement action relevant to AI
- **Technology change** — Adoption of a new AI capability (e.g., agentic AI, multimodal systems)
- **Incident** — A significant incident reveals a policy gap
- **Organisational change** — Merger, new business line, new geography, leadership change
- **Feedback** — Champions or teams report that a policy is unclear, impractical, or missing

## What to Review

| Artefact | Review Frequency |
|----------|-----------------|
| Charter | Annually |
| Principles | Annually (or when values/strategy change) |
| Risk tiering criteria | Every 6 months |
| Intake and review templates | Every 6 months |
| Pre-approved patterns list | Quarterly |
| Security review checklist | Every 6 months (or on new threat landscape) |
| Training materials | Annually |

## Refresh Process

1. **Chair flags the review** — puts it on the council agenda
2. **Owner drafts updates** — the artefact owner (e.g., security lead for security checklist) proposes changes
3. **Council reviews** — discusses and approves changes
4. **Communicate** — updated artefacts are published and champions are briefed
5. **Archive** — previous version is archived with a change log
```

**Step 6: Create training-and-literacy.mdx**

```mdx
---
title: Training and Literacy
description: Building AI literacy across the organisation to support effective governance.
---

## Why Literacy Matters

The EU AI Act includes explicit **AI literacy obligations** — organisations deploying AI must ensure that staff involved in AI system operation and use have sufficient AI literacy. Beyond compliance, literacy is what makes governance work: a council is only effective if the people submitting, reviewing, and operating AI systems understand the basics.

## Audience Tiers

| Audience | Literacy Goal | Format |
|----------|--------------|--------|
| **All employees** | Understand what AI is, how it's used in the organisation, and how to report concerns | Short e-learning module (30 min), annual refresh |
| **AI practitioners** (engineers, data scientists) | Understand the organisation's AI policy, risk tiering, intake process, and responsible development practices | Workshop (half-day), hands-on with templates |
| **Champions** | Deep understanding of governance process, risk assessment, and how to guide teams | Training programme (1–2 days), monthly briefings |
| **Council members** | Expertise in AI governance, risk frameworks, regulatory landscape, and review methodology | Onboarding programme, ongoing development, external conferences |
| **Executive leadership** | Strategic understanding of AI risks and opportunities, governance programme health | Quarterly briefings, board reports |

## Core Training Topics

### For All Employees

- What is AI? (Demystified, non-technical explanation)
- How is AI used in our organisation?
- What is the AI Council and how does it work?
- What are our AI principles?
- How to report concerns or incidents

### For AI Practitioners

- All of the above, plus:
- The intake and registration process
- Risk tiering and how to self-assess
- Responsible development practices (fairness testing, documentation, security)
- When and how to engage the champion or council

### For Champions

- All of the above, plus:
- How to review intake forms and self-assessments
- How to guide teams through governance requirements
- How to escalate effectively
- How to share lessons learned

## Measuring Literacy

- Training completion rates
- Assessment scores (short quiz after training)
- Champion network activity (questions asked, cases routed)
- Quality of intake submissions (improving over time = literacy is working)
```

**Step 7: Create reporting.mdx**

```mdx
---
title: Reporting
description: Quarterly and annual reporting on the AI governance programme.
---

## Why Report

Reporting serves three purposes:

1. **Accountability** — Demonstrates to leadership and the board that governance is functioning
2. **Transparency** — Builds trust with stakeholders (internal and, selectively, external)
3. **Improvement** — Surfaces trends, gaps, and opportunities to strengthen the programme

## Quarterly Report (to Executive Sponsor)

A concise update covering:

| Section | Contents |
|---------|----------|
| **Inventory summary** | Total systems by status and tier. New additions and retirements. |
| **Intake activity** | Cases submitted, tiered, and resolved this quarter. Average turnaround time. |
| **Decisions** | Notable approvals, conditions, escalations, and rejections. |
| **Incidents** | AI incidents and near-misses. Status and lessons learned. |
| **Policy updates** | Any policy changes made or proposed. |
| **Champion network** | Network health — coverage, activity, feedback. |
| **Emerging risks** | New technologies, regulatory developments, or organisational changes on the horizon. |
| **Actions needed** | Decisions or resources the sponsor needs to provide. |

## Annual Report (to Board / Executive Leadership)

A comprehensive review covering:

- Everything in the quarterly report, aggregated for the year
- **Programme maturity assessment** — How has governance capability evolved?
- **Regulatory compliance status** — Are obligations being met?
- **Benchmark comparison** — How does the programme compare to industry peers?
- **Strategic recommendations** — What should change in the coming year?
- **Resource needs** — Budget, headcount, tooling for the coming year

## External Transparency (Optional)

Some organisations (e.g., Microsoft) publish annual AI transparency reports. Consider publishing:

- A summary of AI principles and governance structure
- Aggregate statistics on AI use (number of systems, risk tiers, review volume)
- Key lessons learned (anonymised)
- Commitments for the coming year

This builds trust with customers, regulators, and the public.
```

**Step 8: Commit**

```bash
git add content/docs/operations/
git commit -m "docs: add operations and maintenance pack section with five pages"
```

---

### Task 9: Templates Library section

**Files:**
- Create: `content/docs/templates/meta.json`
- Create: `content/docs/templates/index.mdx`

**Step 1: Create meta.json**

```json
{
  "title": "Templates",
  "pages": ["index"]
}
```

**Step 2: Create index.mdx**

```mdx
---
title: Templates Library
description: All downloadable artefacts from the AI Council Toolkit in one place.
full: true
---

## Foundation Pack

| Template | Description | Format |
|----------|------------|--------|
| [Model Charter](/docs/foundation/charter) | Mission, scope, authority, accountability, and governance structure | Markdown |
| [Principles](/docs/foundation/principles) | Model principles set aligned to international standards | Markdown |
| [Roles and Membership](/docs/foundation/roles-and-membership) | Role definitions and membership criteria | Markdown |
| [Agenda Template](/docs/foundation/meetings-and-decisions) | Standard council meeting agenda | Text |
| [Decision Log](/docs/foundation/meetings-and-decisions) | Template for recording council decisions | Table |
| [Escalation Matrix](/docs/foundation/escalation-paths) | Triggers, destinations, and response times | Table |

## Intake & Triage Pack

| Template | Description | Format |
|----------|------------|--------|
| [AI Inventory](/docs/intake-and-triage/ai-inventory) | System-of-record template for all AI systems | Table |
| [Use Case Registration Form](/docs/intake-and-triage/use-case-registration) | Intake form for new AI use cases | Form |
| [Risk Tiering Worksheet](/docs/intake-and-triage/risk-tiering) | Risk classification framework and scoring | Table |
| [Routing Logic](/docs/intake-and-triage/routing-logic) | Decision tree for case routing | Flowchart |
| [Vendor Checklist](/docs/intake-and-triage/vendor-checklist) | Additional assessment questions for procured AI | Checklist |

## Review & Assurance Pack

| Template | Description | Format |
|----------|------------|--------|
| [Impact Assessment](/docs/review-and-assurance/impact-assessments) | Structured evaluation template for high-risk AI systems | Form |
| [Model Card Template](/docs/review-and-assurance/model-cards-and-datasheets) | Standardised model documentation | Table |
| [Datasheet Template](/docs/review-and-assurance/model-cards-and-datasheets) | Standardised dataset documentation | Table |
| [Security Review Checklist](/docs/review-and-assurance/security-review) | AI-specific security assessment | Checklist |
| [Red-Team Plan](/docs/review-and-assurance/red-teaming) | Adversarial testing plan template | Form |
| [Human Oversight Worksheet](/docs/review-and-assurance/human-oversight) | Oversight level assessment | Table |

## Operations & Maintenance Pack

| Template | Description | Format |
|----------|------------|--------|
| [Monitoring Calendar](/docs/operations/monitoring) | Periodic review schedule by tier | Table |
| [Incident Report](/docs/operations/incidents) | AI incident documentation template | Form |
| [Incident Log](/docs/operations/incidents) | Running log of AI incidents and near-misses | Table |
| [Policy Refresh Schedule](/docs/operations/policy-refresh) | Review frequency for each governance artefact | Table |
| [Quarterly Report](/docs/operations/reporting) | Executive sponsor reporting template | Report |
| [Annual Report](/docs/operations/reporting) | Board-level annual review template | Report |
```

**Step 3: Commit**

```bash
git add content/docs/templates/
git commit -m "docs: add templates library page"
```

---

### Task 10: Standards and Regulations section

**Files:**
- Create: `content/docs/standards-and-regulations/meta.json`
- Create: `content/docs/standards-and-regulations/index.mdx`
- Create: `content/docs/standards-and-regulations/nist-ai-rmf.mdx`
- Create: `content/docs/standards-and-regulations/iso-42001.mdx`
- Create: `content/docs/standards-and-regulations/eu-ai-act.mdx`
- Create: `content/docs/standards-and-regulations/other-frameworks.mdx`

**Step 1: Create meta.json**

```json
{
  "title": "Standards & Regulations",
  "pages": ["index", "nist-ai-rmf", "iso-42001", "eu-ai-act", "other-frameworks"]
}
```

**Step 2: Create index.mdx**

```mdx
---
title: Standards & Regulations
description: The regulatory and standards landscape that underpins credible AI governance.
---

A credible AI Council needs a **standards spine**. This section covers the key frameworks and regulations that inform the toolkit's design and that your council should be aware of.

## In This Section

- [NIST AI RMF](/docs/standards-and-regulations/nist-ai-rmf) — The US AI Risk Management Framework and its Playbook
- [ISO/IEC 42001](/docs/standards-and-regulations/iso-42001) — The first AI management system standard
- [EU AI Act](/docs/standards-and-regulations/eu-ai-act) — The EU's comprehensive AI regulation and its timeline
- [Other Frameworks](/docs/standards-and-regulations/other-frameworks) — OECD, UNESCO, Council of Europe, and sector-specific frameworks

## How These Relate to the Toolkit

| Framework | Role in the Toolkit |
|-----------|-------------------|
| **NIST AI RMF** | Lifecycle structure (Govern, Map, Measure, Manage) — shapes the overall governance flow |
| **ISO/IEC 42001** | Management system model — shapes the continuous improvement and records approach |
| **EU AI Act** | Regulatory compliance driver — shapes risk tiering, documentation, and literacy requirements |
| **OECD AI Principles** | Normative foundation — shapes council principles and external commitments |
| **UNESCO AI Ethics** | Human rights foundation — shapes fairness, transparency, and stakeholder analysis |
```

**Step 3: Create nist-ai-rmf.mdx**

```mdx
---
title: NIST AI RMF
description: The US AI Risk Management Framework — a voluntary, lifecycle-based approach to AI governance.
---

## Overview

The **NIST AI Risk Management Framework (AI RMF)** is a voluntary framework published by the US National Institute of Standards and Technology. It is organised around four core functions and provides a Playbook with suggested actions aligned to outcomes.

NIST also hosts crosswalks between the AI RMF and other frameworks (AI Verify, ISO 42001), making it an excellent integration point.

## Four Core Functions

### Govern

Cultivate and implement a culture of risk management. This includes:

- Policies, processes, and procedures for AI risk management
- Roles and responsibilities
- Organisational commitment and accountability

**Toolkit mapping:** [Foundation Pack](/docs/foundation) — charter, principles, roles, decision rights

### Map

Understand the context and risks of AI systems. This includes:

- Identifying intended purpose and scope
- Understanding stakeholders and impacts
- Categorising risk

**Toolkit mapping:** [Intake & Triage Pack](/docs/intake-and-triage) — registration, risk tiering, stakeholder analysis

### Measure

Assess, analyse, and track AI risks. This includes:

- Testing and evaluation
- Metrics for trustworthiness
- Tracking risks over time

**Toolkit mapping:** [Review & Assurance Pack](/docs/review-and-assurance) — impact assessments, model cards, security review, red-teaming

### Manage

Prioritise and act on AI risks. This includes:

- Risk treatment and mitigation
- Monitoring and response
- Continuous improvement

**Toolkit mapping:** [Operations Pack](/docs/operations) — monitoring, incidents, policy refresh, reporting

## Generative AI Profile

NIST has published a **Generative AI Profile** that extends the AI RMF specifically for generative AI systems, covering additional risks such as:

- Confabulation and hallucination
- Data privacy in training and inference
- Environmental costs
- Intellectual property concerns
- Harmful content generation
- Homogenisation of outputs

This profile is especially relevant for councils reviewing generative AI use cases.

## Using NIST AI RMF with This Toolkit

The four NIST functions map naturally to the four packs in this toolkit. If your organisation adopts NIST AI RMF as its primary framework, you can use this toolkit as the **operational implementation** of each function.
```

**Step 4: Create iso-42001.mdx**

```mdx
---
title: ISO/IEC 42001
description: The first international standard for AI management systems.
---

## Overview

**ISO/IEC 42001** is the first international standard specifically for **AI management systems**. It follows the ISO management system model (similar to ISO 27001 for information security) and provides a framework for establishing, implementing, maintaining, and continually improving AI management within an organisation.

## Key Concepts

### Management System Approach

ISO 42001 uses the Plan-Do-Check-Act (PDCA) cycle:

- **Plan** — Establish AI policy, objectives, risk assessment, and treatment plans
- **Do** — Implement the management system and controls
- **Check** — Monitor, measure, and audit the system
- **Act** — Take corrective actions and continually improve

### AI-Specific Controls

The standard includes controls for:

- AI policy and leadership commitment
- AI risk assessment
- Data management for AI
- AI system development and operation
- AI system performance evaluation
- Third-party AI relationships

## Related ISO Standards

| Standard | Focus |
|----------|-------|
| **ISO/IEC 23894** | AI-specific risk management guidance |
| **ISO/IEC 38507** | Governance implications of AI for governing bodies |
| **ISO/IEC 22989** | AI concepts and terminology |
| **ISO/IEC 23053** | Framework for AI systems using machine learning |

Together with ISO 42001, these form a comprehensive standards backbone.

## Using ISO 42001 with This Toolkit

If your organisation pursues ISO 42001 certification, this toolkit provides **practical artefacts** that support compliance:

| ISO 42001 Requirement | Toolkit Artefact |
|----------------------|-----------------|
| AI policy | [Principles](/docs/foundation/principles) + [Charter](/docs/foundation/charter) |
| Roles and responsibilities | [Roles and Membership](/docs/foundation/roles-and-membership) |
| Risk assessment | [Risk Tiering](/docs/intake-and-triage/risk-tiering) + [Impact Assessments](/docs/review-and-assurance/impact-assessments) |
| AI system documentation | [Model Cards](/docs/review-and-assurance/model-cards-and-datasheets) + [AI Inventory](/docs/intake-and-triage/ai-inventory) |
| Monitoring and measurement | [Monitoring](/docs/operations/monitoring) + [Reporting](/docs/operations/reporting) |
| Continual improvement | [Policy Refresh](/docs/operations/policy-refresh) + [Incidents](/docs/operations/incidents) |
```

**Step 5: Create eu-ai-act.mdx**

```mdx
---
title: EU AI Act
description: The EU's comprehensive AI regulation and what it means for AI Councils.
---

## Overview

The **EU AI Act** is the world's first comprehensive AI regulation. It entered into force on 1 August 2024 and is being phased in over a multi-year timeline.

## Key Timeline

| Date | Milestone |
|------|-----------|
| **1 August 2024** | AI Act enters into force |
| **2 February 2025** | Prohibited practices and AI literacy obligations apply |
| **2 August 2025** | Governance rules and General-Purpose AI (GPAI) obligations apply |
| **2 August 2026** | Act becomes fully applicable (with some exceptions) |

## Risk-Based Approach

The EU AI Act uses a four-tier risk classification:

| EU AI Act Tier | Description | Toolkit Equivalent |
|---------------|------------|-------------------|
| **Unacceptable risk** | Prohibited AI practices (e.g., social scoring, manipulative systems) | Tier 4 — Prohibited |
| **High risk** | AI in regulated domains with significant impact on individuals | Tier 3 — Full council review |
| **Limited risk** | Transparency obligations (e.g., chatbots must disclose AI use) | Tier 2 — Champion review |
| **Minimal risk** | No specific obligations | Tier 1 — Self-serve |

## Key Obligations for AI Councils

### AI Literacy (Article 4)

Organisations must ensure that staff involved in the operation and use of AI systems have **sufficient AI literacy**. This is not optional — it applies from 2 February 2025.

**Toolkit response:** [Training and Literacy](/docs/operations/training-and-literacy)

### Risk Management (Article 9)

High-risk AI systems must have a risk management system established, implemented, documented, and maintained.

**Toolkit response:** [Risk Tiering](/docs/intake-and-triage/risk-tiering) + [Impact Assessments](/docs/review-and-assurance/impact-assessments)

### Documentation (Article 11)

Technical documentation must be drawn up before a high-risk system is placed on the market.

**Toolkit response:** [Model Cards and Datasheets](/docs/review-and-assurance/model-cards-and-datasheets) + [AI Inventory](/docs/intake-and-triage/ai-inventory)

### Human Oversight (Article 14)

High-risk AI systems must be designed to allow effective human oversight.

**Toolkit response:** [Human Oversight](/docs/review-and-assurance/human-oversight)

### Registration (Article 49)

High-risk AI systems must be registered in an EU database before deployment.

**Toolkit response:** [AI Inventory](/docs/intake-and-triage/ai-inventory) (internal register that feeds external registration)

## Using This Toolkit for EU AI Act Compliance

The toolkit does not replace legal advice, but it provides the **governance infrastructure** needed to meet the Act's requirements. The council's intake, review, and records processes directly support the documentation, risk management, and transparency obligations.
```

**Step 6: Create other-frameworks.mdx**

```mdx
---
title: Other Frameworks
description: Additional international principles, assessment tools, and sector-specific frameworks relevant to AI governance.
---

## International Principles Frameworks

### OECD AI Principles (Updated May 2024)

The most widely referenced intergovernmental AI principles. Key emphases: human rights, transparency, robustness, security, safety, and accountability. Used as a normative foundation by many national AI strategies.

**Use in the toolkit:** Inform your council's [Principles](/docs/foundation/principles) and external commitments.

### UNESCO Recommendation on the Ethics of AI

Applies across all 194 UNESCO member states. Places human rights, dignity, fairness, transparency, and human oversight at the centre.

**Use in the toolkit:** Strengthens the human-rights and fairness dimensions of [Impact Assessments](/docs/review-and-assurance/impact-assessments).

### Council of Europe Framework Convention on AI

The first legally binding international treaty on AI. Designed to align AI with human rights, democracy, and the rule of law.

**Use in the toolkit:** Relevant for organisations operating in Council of Europe member states — informs [Principles](/docs/foundation/principles) and compliance commitments.

## Assessment Tools

### Canada — Algorithmic Impact Assessment (AIA)

A mandatory questionnaire tool for federal automated decision systems. Uses 65 risk questions and 41 mitigation questions to determine impact level.

**Use in the toolkit:** A model for structured intake and risk assessment — informs [Use Case Registration](/docs/intake-and-triage/use-case-registration) and [Risk Tiering](/docs/intake-and-triage/risk-tiering).

### NSW — AI Assessment Framework (AIAF)

A risk self-assessment framework covering AI design, development, deployment, procurement, and use.

**Use in the toolkit:** Informs the [Impact Assessment](/docs/review-and-assurance/impact-assessments) template and [Vendor Checklist](/docs/intake-and-triage/vendor-checklist).

### Queensland — FAIRA

A transparency, accountability, and risk-identification tool for agencies evaluating AI solutions.

**Use in the toolkit:** Informs intake form design and accountability documentation.

### Singapore — AI Verify

A testing framework and toolkit aligned to 11 internationally recognised AI governance principles. NIST hosts crosswalks between AI Verify and AI RMF.

**Use in the toolkit:** Informs the [Review & Assurance Pack](/docs/review-and-assurance) testing approach.

## Sector-Specific Resources

| Sector | Resource | Focus |
|--------|----------|-------|
| **Healthcare** | AMA AI Governance Toolkit | Clinical AI governance for health systems |
| **Finance** | Various national regulators | Model risk management (SR 11-7 in the US) |
| **Government** | UK Government AI Playbook | Public-sector AI implementation guidance |
| **Board-level** | IoD Ireland AI Governance Toolkit | Board-facing AI governance for directors |

## Security Frameworks

| Framework | Focus |
|-----------|-------|
| **Google SAIF** | Six core elements for securing AI systems |
| **OWASP Top 10 for LLMs** | Practical risks for large language model applications |
| **NIST SP 800-218A** | AI-specific secure software development practices |

See [Security Review](/docs/review-and-assurance/security-review) for how these are used in the toolkit.
```

**Step 7: Commit**

```bash
git add content/docs/standards-and-regulations/
git commit -m "docs: add standards-and-regulations section with four pages"
```

---

### Task 11: Real-World Patterns section

**Files:**
- Create: `content/docs/real-world-patterns/meta.json`
- Create: `content/docs/real-world-patterns/index.mdx`
- Create: `content/docs/real-world-patterns/enterprise.mdx`
- Create: `content/docs/real-world-patterns/public-sector.mdx`
- Create: `content/docs/real-world-patterns/adjacent-councils.mdx`

**Step 1: Create meta.json**

```json
{
  "title": "Real-World Patterns",
  "pages": ["index", "enterprise", "public-sector", "adjacent-councils"]
}
```

**Step 2: Create index.mdx**

```mdx
---
title: Real-World Patterns
description: How leading organisations and institutions have designed and operated AI governance.
---

Theory is useful, but **working examples** are more useful. This section distils patterns from organisations that have publicly described their AI governance structures.

## In This Section

- [Enterprise Patterns](/docs/real-world-patterns/enterprise) — Microsoft, IBM, Salesforce, and Google
- [Public Sector and Academia](/docs/real-world-patterns/public-sector) — NSW, Yale, US DOJ, and government playbooks
- [Adjacent Councils](/docs/real-world-patterns/adjacent-councils) — Lessons from data governance, security champions, architecture review boards, and design governance
```

**Step 3: Create enterprise.mdx**

```mdx
---
title: Enterprise Patterns
description: How Microsoft, IBM, Salesforce, and Google structure their AI governance.
---

## Microsoft

Microsoft's AI governance is one of the most publicly documented enterprise examples.

### Structure

- **Office of Responsible AI** — Provides policy and governance expertise, reports to the Board of Directors, maintains the Responsible AI Standard, requires impact assessments
- **Responsible AI Council** — Senior-leadership forum led by the CTO and President
- **Division-level leaders** — Responsible AI CVPs in each division
- **Champion network** — Champions support assessments and local implementation

### Key Practices

- **Responsible AI Standard** — A set of requirements applied across the company
- **Impact assessments** — Required for AI systems, with workflow tooling to register projects and route reviews
- **Specialist routing** — Security, privacy, and responsible AI experts are involved for sensitive or generative use cases
- **Annual transparency reporting** — Public reporting on AI governance activity

### Lesson for Your Council

Microsoft demonstrates the **hybrid model** at scale: central policy authority, division-level accountability, and a champion network for operational reach.

## IBM

### Structure

- **Policy Advisory Committee** — Senior leaders setting oversight and risk tolerance
- **AI Ethics Board** — Central cross-disciplinary review body
- **AI Ethics Focal Points** — Embedded in business units as the operational link
- **Advocacy Network** — Scales awareness across the organisation, supported by a project office

### Key Practices

- **Enterprise-wide governance** — Standards and guidance through a Responsible Technology Board
- **Layered roles** — Clear separation between strategic oversight (committee), review (board), operations (focal points), and awareness (advocacy)

### Lesson for Your Council

IBM's four-role model shows how to create **clear separation of concerns** while maintaining coordination across layers.

## Salesforce

### Structure

- **Office of Ethical and Humane Use** — Translates trust into standards, policies, testing programmes, and governance structures

### Key Practices

- Governance is integrated across product development and operations, not siloed in a separate ethics team
- Focus on **translating principles into operational standards** rather than maintaining a separate ethical review process

### Lesson for Your Council

Salesforce shows that governance is most effective when it is **embedded in how products are built**, not layered on top.

## Google

### Key Practices

- **AI Responsibility Lifecycle** — Explicitly frames responsibility as end-to-end, from early research through post-launch monitoring
- Responsibility is not a single review event but a continuous practice

### Lesson for Your Council

Google reinforces that councils must run both **front-door review** (pre-deployment) and **ongoing monitoring** (post-deployment). Approval is not the finish line.
```

**Step 4: Create public-sector.mdx**

```mdx
---
title: Public Sector and Academia
description: AI governance patterns from NSW, Yale, US DOJ, and government playbooks.
---

## NSW (New South Wales, Australia)

### Structure

- **AI Review Committee** — Reviews only high-risk systems
- **Risk-informed guidance** — Agencies retain final accountability; the committee provides guidance, not mandates
- **Risk-based referral model** — Only high-risk systems are escalated to the central committee

### Key Practices

- The AI Assessment Framework (AIAF) is a self-assessment tool used by agencies
- The committee focuses on **guidance and risk-informed review**, not approval authority

### Lesson for Your Council

NSW demonstrates the **referral model**: the central body reviews only what truly needs central review. Everything else is handled closer to the team. This prevents bottlenecks and keeps the council focused on high-impact cases.

## Yale University

### Structure

- **AI Steering Committee** — Provides harmonised oversight across the university
- **AI Governance Committee** — Handles sensitive approval requests referred by other governance bodies
- **Specialist committees** — Separate committees for research, health data, healthcare AI, and advisory review

### Key Practices

- **Federated governance** — Multiple committees with distinct scopes, connected by shared principles and escalation paths
- Specialist committees remain authoritative in their own domains

### Lesson for Your Council

Yale shows that federated governance works well in **large, diverse organisations** where a single committee cannot cover all domains. The key is clear scope boundaries and defined escalation between committees.

## US Department of Justice

### Key Practices

- **Annual AI inventory** — AI use cases are inventoried annually, submitted to OMB, and releasable entries are published
- Inventory is explicitly tied to **governance and public trust**

### Lesson for Your Council

The DOJ example shows that **inventory discipline** is not just compliance — it is a governance practice that builds internal and external trust.

## Government Playbooks

Several governments have published AI playbooks that are useful references:

| Country | Resource | Focus |
|---------|----------|-------|
| **UK** | Government AI Playbook | Public-sector AI implementation guidance |
| **Singapore** | Responsible AI Playbook + AI Verify | Principles and testing framework |
| **Canada** | Algorithmic Impact Assessment | Mandatory risk assessment for automated decisions |
| **Australia (NSW)** | AI Assessment Framework | Risk self-assessment for agencies |
| **Australia (Queensland)** | FAIRA | Transparency and risk identification |

These playbooks are especially useful as **input to your council's intake and review templates**.
```

**Step 5: Create adjacent-councils.mdx**

```mdx
---
title: Adjacent Councils
description: Lessons from data governance, security champions, architecture review boards, and design governance.
---

The AI Council is not the first governance body organisations have had to stand up. Mature patterns from **adjacent domains** offer practical lessons.

## Data Governance Councils

### NCUA Charter Model

NCUA's data governance council charter defines purpose, guiding principles, responsibilities, membership, quarterly meetings, quorum, consensus, advisory roles, and chair responsibilities in clear, reusable language.

**What to borrow:**
- Charter structure and language
- Quorum and consensus rules
- Role definitions (chair, members, advisory)

### Collibra's Role Stack

Collibra's data governance guidance defines a practical role stack: executive champion, convener, council members, and data stewards.

**What to borrow:**
- The "steward" pattern maps directly to AI champions
- Executive champion as a named, accountable sponsor
- Clear separation between convening and decision-making

## Security Champions (OWASP)

### OWASP Security Champions Guide

OWASP's guide is intentionally modular and recommends assigning a security champion in each development team with dedicated time, training, and periodic briefings.

### OWASP SAMM

OWASP's Software Assurance Maturity Model recommends champions as liaison between central security and delivery teams.

**What to borrow:**
- Champion selection criteria and recruitment approach
- Dedicated time commitment (not just a side responsibility)
- Training and briefing cadence
- Community of practice model

## Architecture Review Boards

### AWS ARB Model

AWS argues that effective architecture review boards need:

- Executive sponsorship
- Cross-functional representation (security, architecture, development, infrastructure, operations)
- A single source of truth for guidance and policies
- A review-process shepherd embedded in delivery

### Pennsylvania ARB

Pennsylvania's Architecture Review Board publishes **templates, checklists, and forms** alongside the board itself — not just principles, but the operational artefacts teams actually need.

**What to borrow:**
- The "shepherd" role — someone who guides teams through the review process (maps to the AI champion)
- Publishing artefacts alongside the board — the toolkit approach
- Cross-functional representation as a requirement, not a nice-to-have

## Design and UX Governance

### US Web Design System (USWDS)

USWDS states that product decisions should start with **real user needs** and maintains a recurring usability research practice.

### EU Communities of Practice Playbook

The EU playbook adds guidance on stakeholder mapping, co-created governance, and creating a **risk-free environment** that supports learning and innovation.

**What to borrow:**
- Start with affected people, not just compliance requirements
- Create psychological safety for teams to surface concerns early
- Governance should enable good outcomes, not just prevent bad ones
- Research and feedback loops keep governance grounded in reality

## The Common Thread

Across all these adjacent domains, the pattern is the same:

1. **Central body** sets policy and handles escalations
2. **Embedded champions** connect governance to delivery
3. **Published artefacts** (not just principles) make governance operational
4. **Tiered review** prevents bottlenecks
5. **Continuous improvement** keeps governance relevant
```

**Step 6: Commit**

```bash
git add content/docs/real-world-patterns/
git commit -m "docs: add real-world-patterns section with three pages"
```

---

### Task 12: Build verification and home page update

**Files:**
- Modify: `src/app/page.tsx`

**Step 1: Run build to verify all content renders**

Run: `npm run build`
Expected: Build succeeds with all routes generated under `/docs/...`

**Step 2: Update home page with section links**

Update `src/app/page.tsx` to:

```tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="mb-4 text-4xl font-bold">AI Council Toolkit</h1>
      <p className="mb-8 max-w-xl text-fd-muted-foreground">
        An open, implementation-grade reference for building, running, and
        sustaining an internal AI Council.
      </p>
      <div className="flex gap-4">
        <Link
          href="/docs"
          className="rounded-lg bg-fd-primary px-4 py-2 text-fd-primary-foreground"
        >
          Read the Docs
        </Link>
        <Link
          href="/docs/getting-started"
          className="rounded-lg border border-fd-border px-4 py-2"
        >
          Get Started
        </Link>
      </div>
    </main>
  );
}
```

**Step 3: Run build again to verify**

Run: `npm run build`
Expected: Build succeeds

**Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "docs: update home page with toolkit branding and links"
```

---

## Summary

| Task | Section | Pages |
|------|---------|-------|
| 1 | Root navigation | 1 file |
| 2 | Root index | 1 page |
| 3 | Getting Started | 4 pages |
| 4 | Operating Models | 4 pages |
| 5 | Foundation Pack | 6 pages |
| 6 | Intake & Triage | 6 pages |
| 7 | Review & Assurance | 6 pages |
| 8 | Operations | 6 pages |
| 9 | Templates Library | 1 page |
| 10 | Standards & Regulations | 5 pages |
| 11 | Real-World Patterns | 4 pages |
| 12 | Build verification + home page | 1 file |

**Total: ~44 content files + 1 component update across 12 tasks**
