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
