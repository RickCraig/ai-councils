# AI Artifact Removal - Design

**Goal:** Remove AI-generated writing artifacts from all documentation content to ensure natural, human-quality prose.

**Scope:** All 38 MDX files in `content/docs/`

## What Gets Cleaned

1. **Em-dashes (219 occurrences)** - Rewrite every sentence to use commas, periods, parentheses, or colons instead. No dashes at all.
2. **British English (73 occurrences)** - Switch to American English: organisation -> organization, behaviour -> behavior, prioritise -> prioritize, etc.
3. **"artefact" (18 occurrences)** - Change to "artifact"
4. **AI buzzwords** - Replace filler uses of "comprehensive", "landscape", etc. Leave them where they are genuinely the right word (e.g., "robustness" as an OECD principle name, "comprehensive" when specifically describing the EU AI Act).
5. **CLAUDE.md update** - Add these rules to the content guidelines so future content stays clean.

## What Stays

- Em-dashes in `meta.json` separator syntax (`"---Label---"`) are Fumadocs separators, not em-dashes. Left alone.
- "Robust" when quoting framework language (OECD principles).
- "Comprehensive" when specifically describing the EU AI Act's scope.

## Approach

Process file-by-file, rewriting sentences rather than blind find-and-replace. Each sentence needs context-aware rewriting to sound natural.
