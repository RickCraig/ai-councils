# AI Council Toolkit

An open, implementation-grade playbook for building, running, and sustaining an internal AI Council. Practical templates, governance patterns, and operating models you can use today.

**[View the live site](https://aicounciltoolkit.com)**

## What's inside

The toolkit covers the full governance lifecycle:

- **Getting Started** — What an AI Council is, whether you need one, and your first 30 days
- **Operating Models** — Centralized, federated, and hybrid governance structures
- **Foundation Pack** — Charter, principles, roles, meetings, and decision rights
- **Intake & Triage** — Registration, risk tiering, routing, and AI inventory
- **Review & Assurance** — Impact assessments, model cards, security review, and red-teaming
- **Operations** — Monitoring, incidents, policy refresh, training, and reporting
- **Templates** — All governance artifacts in one place
- **Standards & Regulations** — NIST AI RMF, ISO 42001, EU AI Act, and crosswalks
- **Real-World Patterns** — How enterprises, public sector, and adjacent councils do it

## Getting started

```bash
git clone https://github.com/RickCraig/ai-council-toolkit.git
cd ai-council-toolkit
npm install
npm run dev
```

The dev server starts at `http://localhost:3000`.

### Useful commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build (validates all content) |
| `npm run lint` | Run ESLint |

## Contributing

Contributions are welcome. There are two ways to contribute depending on your comfort level.

### Suggest changes (no code required)

If you've found an error, have a suggestion, or want to request new content, [open an issue](https://github.com/RickCraig/ai-council-toolkit/issues/new). Describe what you'd like changed and why. That's it.

### Submit a pull request

For direct content contributions:

1. Fork the repository and create a branch (`feat/your-topic` or `fix/description`)
2. Write or edit content in `content/docs/` following the guidelines below
3. Run `npm run build` to make sure everything compiles cleanly
4. Submit your pull request with a short description of the change

### Content guidelines

- Use **American English** throughout (organization, color, behavior)
- Use kebab-case for file names: `risk-tiering.mdx`, not `riskTiering.mdx`
- Every MDX file needs `title` and `description` in its frontmatter
- If you add a new page, add its slug to the section's `meta.json` and link it from the section's `index.mdx`
- Lead with why before what. Explain the purpose before the details.
- Keep pages focused. If a page exceeds roughly 500 lines, consider splitting it.

### Commit messages

Use [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` for new content or features
- `fix:` for corrections
- `docs:` for README or comment changes
- `chore:` for tooling and config

## License

This project is licensed under the [MIT License](LICENSE).
