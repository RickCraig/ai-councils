import Link from "next/link";
import { LifecycleDiagram } from "@/components/lifecycle-diagram";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="flex flex-col items-center px-4 pt-20 pb-16 text-center">
        <h1 className="mb-4 text-5xl font-bold tracking-tight">
          AI Council Toolkit
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-fd-muted-foreground">
          An open, implementation-grade playbook for building, running, and
          sustaining an internal AI Council. Practical templates, governance
          patterns, and operating models you can use today.
        </p>
        <div className="flex gap-4">
          <Link
            href="/docs/getting-started"
            className="rounded-lg bg-fd-primary px-5 py-2.5 font-medium text-fd-primary-foreground"
          >
            Get Started
          </Link>
          <Link
            href="/docs"
            className="rounded-lg border border-fd-border px-5 py-2.5 font-medium"
          >
            Browse the Toolkit
          </Link>
        </div>
      </section>

      {/* How it fits together */}
      <section className="border-t border-fd-border px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-3 text-center text-2xl font-semibold">
            How It All Fits Together
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-fd-muted-foreground">
            Governance is a continuous loop. Every use case moves through the same six
            stages — and the cycle repeats as systems change. Select any stage to jump in.
          </p>
          <LifecycleDiagram />
        </div>
      </section>

      {/* Who Is This For */}
      <section className="border-t border-fd-border bg-fd-card px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-semibold">
            Who Is This For?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-fd-border text-fd-muted-foreground">
                  <th className="pb-3 pr-4 font-medium">Your Role</th>
                  <th className="pb-3 font-medium">Start Here</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-fd-border">
                <tr>
                  <td className="py-3 pr-4 font-medium">
                    CIO / Executive sponsor starting from zero
                  </td>
                  <td className="py-3">
                    <Link href="/docs/getting-started" className="text-fd-primary underline underline-offset-2">Getting Started</Link>
                    {" then "}
                    <Link href="/docs/operating-models" className="text-fd-primary underline underline-offset-2">Operating Models</Link>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">
                    Legal / Compliance needing policy language
                  </td>
                  <td className="py-3">
                    <Link href="/docs/foundation" className="text-fd-primary underline underline-offset-2">Foundation Pack</Link>
                    {" then "}
                    <Link href="/docs/standards-and-regulations" className="text-fd-primary underline underline-offset-2">Standards &amp; Regulations</Link>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">
                    Product / Engineering submitting a use case
                  </td>
                  <td className="py-3">
                    <Link href="/docs/intake-and-triage" className="text-fd-primary underline underline-offset-2">Intake &amp; Triage</Link>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">
                    Security needing review controls
                  </td>
                  <td className="py-3">
                    <Link href="/docs/review-and-assurance" className="text-fd-primary underline underline-offset-2">Review &amp; Assurance</Link>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">
                    Council chair running a meeting
                  </td>
                  <td className="py-3">
                    <Link href="/docs/foundation/meetings-and-decisions" className="text-fd-primary underline underline-offset-2">Meetings &amp; Decisions</Link>
                    {" then "}
                    <Link href="/docs/templates" className="text-fd-primary underline underline-offset-2">Templates</Link>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">
                    Program lead refreshing after 6 months
                  </td>
                  <td className="py-3">
                    <Link href="/docs/operations" className="text-fd-primary underline underline-offset-2">Operations</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-semibold">
            Design Principles
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-fd-border p-5">
              <h3 className="mb-2 font-semibold">Council-first</h3>
              <p className="text-sm text-fd-muted-foreground">
                The human governance layer is the primary unit of design, not a
                byproduct of tooling.
              </p>
            </div>
            <div className="rounded-lg border border-fd-border p-5">
              <h3 className="mb-2 font-semibold">Practical over theoretical</h3>
              <p className="text-sm text-fd-muted-foreground">
                Every section ships artifacts you can use, not just principles to
                aspire to.
              </p>
            </div>
            <div className="rounded-lg border border-fd-border p-5">
              <h3 className="mb-2 font-semibold">Tiered and federated</h3>
              <p className="text-sm text-fd-muted-foreground">
                Low-risk cases move fast. Only hard cases reach the council.
                Specialists stay authoritative in their domains.
              </p>
            </div>
            <div className="rounded-lg border border-fd-border p-5">
              <h3 className="mb-2 font-semibold">Living governance</h3>
              <p className="text-sm text-fd-muted-foreground">
                Councils that only do approvals die. Councils that maintain
                learning loops stay valuable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="border-t border-fd-border bg-fd-card px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-semibold">
            What&apos;s Inside
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Getting Started",
                href: "/docs/getting-started",
                desc: "What an AI Council is, whether you need one, and your first 30 days",
              },
              {
                title: "Operating Models",
                href: "/docs/operating-models",
                desc: "Centralized, federated, and hybrid governance structures",
              },
              {
                title: "Foundation Pack",
                href: "/docs/foundation",
                desc: "Charter, principles, roles, meetings, and decision rights",
              },
              {
                title: "Intake & Triage",
                href: "/docs/intake-and-triage",
                desc: "Registration, risk tiering, routing, and AI inventory",
              },
              {
                title: "Review & Assurance",
                href: "/docs/review-and-assurance",
                desc: "Impact assessments, model cards, security review, and red-teaming",
              },
              {
                title: "Operations",
                href: "/docs/operations",
                desc: "Monitoring, incidents, policy refresh, training, and reporting",
              },
              {
                title: "Templates",
                href: "/docs/templates",
                desc: "All governance artifacts in one place",
              },
              {
                title: "Standards & Regulations",
                href: "/docs/standards-and-regulations",
                desc: "NIST AI RMF, ISO 42001, EU AI Act, and crosswalks",
              },
              {
                title: "Real-World Patterns",
                href: "/docs/real-world-patterns",
                desc: "How Microsoft, IBM, NSW, Yale, and others do it",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-lg border border-fd-border p-4 transition-colors hover:border-fd-primary"
              >
                <h3 className="mb-1 font-semibold group-hover:text-fd-primary">
                  {item.title}
                </h3>
                <p className="text-sm text-fd-muted-foreground">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
