# Remaining Review Items

Outstanding items from the documentation review (May 2026). Each item includes the original feedback and recommended approach.

## Templates Are Not Actually Downloadable

The Templates Library links to documentation pages with templates embedded in prose. There are no standalone downloadable files.

**Recommendation:** Create standalone downloadable templates (Markdown, Word, or spreadsheet formats) for the most-used artifacts: charter, intake form, risk tiering worksheet, AI inventory, impact assessment, decision log, incident log, and vendor assessment checklist. At minimum, add clearly marked "copy this template" blocks on each page that visually separate the template from the explanatory text.

## No Visual Journey or Site Map

The sidebar organizes content by section, but there is no visual representation of how the pieces fit together. A governance lifecycle diagram (intake → triage → review → approve → monitor → refresh) would help readers understand the system as a whole.

**Recommendation:** Add a visual flow diagram to the docs landing page (`content/docs/index.mdx`) or create a dedicated "How It All Fits Together" page. Even a simple SVG or Mermaid diagram showing the lifecycle would help. Consider adding it to the home page as well.

## Generative AI Coverage Is Scattered

GenAI-specific guidance is spread across Security Review, Red-Teaming, NIST AI RMF, Risk Tiering, and Governing Purchased AI without a unified page. A leader asking "how do I govern ChatGPT/Copilot usage?" has to piece it together.

**Recommendation:** Add a dedicated "Governing Generative AI" page (suggested location: Getting Started or a standalone guide) that pulls together genAI-specific guidance from across the toolkit into one coherent view. Cover: acceptable use policies, risk tiering for genAI, prompt injection and security concerns, data leakage risks, human oversight for genAI outputs, and the common vendor scenarios (enterprise copilots, foundation model APIs).

## Minor Content Issues

### Key Concepts placement

Key Concepts defines "Champion" before the reader has encountered the Operating Models section. Consider moving Key Concepts to the Reference section as a glossary, or adding a note that champions are explained in detail in Operating Models.

### Operating Models sidebar order

The meta.json puts "Choosing Your Model" before "Champion Networks," but the Choosing page references champions without explaining them. Consider swapping the order in `content/docs/operating-models/meta.json` so Champion Networks comes before Choosing Your Model.

### Escalation Paths needs a concrete example

The page has a good table of triggers and destinations but no narrative example. Add a short scenario (e.g., "Here is what happens when a council cannot reach consensus on a facial recognition use case") to make the page more tangible.

### Training and Literacy lacks external resources

The page describes training tiers and topics but does not link to any actual training materials. Add links to free resources: NIST AI RMF learning materials, EU AI Act training resources, and any relevant open courseware.

### Section index pages are repetitive

Every section index follows the same "paragraph + In This Section bullet list" pattern. Consider adding a brief "what you will be able to do after reading this section" framing to each one to give the reader a reason to keep going.

### Other Frameworks page has the same government playbooks table

The government playbooks table in `content/docs/standards-and-regulations/other-frameworks.mdx` should also have linked resource names (matching the links added to `real-world-patterns/public-sector.mdx`).
