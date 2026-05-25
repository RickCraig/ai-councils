"use client";

import Link from "next/link";

type Stage = {
  name: string;
  gloss: string;
  href: string;
};

const STAGES: Stage[] = [
  { name: "Intake", gloss: "Register the use case", href: "/docs/intake-and-triage/use-case-registration" },
  { name: "Triage", gloss: "Risk-tier and route", href: "/docs/intake-and-triage/risk-tiering" },
  { name: "Review", gloss: "Impact & assurance", href: "/docs/review-and-assurance" },
  { name: "Approve", gloss: "Decide with conditions", href: "/docs/foundation/meetings-and-decisions" },
  { name: "Monitor", gloss: "Watch in production", href: "/docs/operations/monitoring" },
  { name: "Refresh", gloss: "Re-tier & learn", href: "/docs/operations/policy-refresh" },
];

// Geometry in a 0–100 viewBox / percentage coordinate space.
const CENTER = 50;
const RING_R = 38; // dashed ring + directional arcs + dots
const LABEL_R_AXIS = 47; // top/bottom labels clear the ring vertically
const LABEL_R_DIAG = 51; // diagonal labels sit further out to clear the dots
const DOT_R = 1.7;
const GAP_DEG = 16; // angular padding so arcs do not touch the dots
const STEP = 360 / STAGES.length;

const angleOf = (i: number) => -90 + i * STEP;

function polar(angleDeg: number, r: number) {
  const a = (angleDeg * Math.PI) / 180;
  return { x: CENTER + r * Math.cos(a), y: CENTER + r * Math.sin(a) };
}

const ARC_PATHS = STAGES.map((_, i) => {
  const a0 = angleOf(i) + GAP_DEG;
  let a1 = angleOf(i + 1) - GAP_DEG; // wraps: last segment ends at 270 (= Intake)
  if (a1 < a0) a1 += 360;
  const p0 = polar(a0, RING_R);
  const p1 = polar(a1, RING_R);
  return `M ${p0.x.toFixed(2)} ${p0.y.toFixed(2)} A ${RING_R} ${RING_R} 0 0 1 ${p1.x.toFixed(2)} ${p1.y.toFixed(2)}`;
});

export function LifecycleDiagram() {
  return (
    <figure className="my-8">
      <figcaption className="sr-only">
        AI governance lifecycle: Intake, Triage, Review, Approve, Monitor, Refresh — a
        continuous loop where Refresh feeds back to Intake.
      </figcaption>

      {/* Desktop / tablet: circular ring */}
      <div className="relative mx-auto hidden aspect-square w-full max-w-md sm:block">
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full overflow-visible"
          aria-hidden="true"
          style={{ pointerEvents: "none" }}
        >
          <defs>
            <marker
              id="lifecycle-arrowhead"
              markerWidth="5"
              markerHeight="5"
              refX="3"
              refY="1.6"
              orient="auto"
            >
              <path d="M0,0 L3.2,1.6 L0,3.2 Z" style={{ fill: "var(--color-fd-muted-foreground)" }} />
            </marker>
          </defs>

          {/* dashed guide ring */}
          <circle
            cx={CENTER}
            cy={CENTER}
            r={RING_R}
            fill="none"
            strokeWidth="0.4"
            strokeDasharray="0.8 1.8"
            style={{ stroke: "var(--color-fd-border)" }}
          />

          {/* clockwise directional arcs */}
          {ARC_PATHS.map((d, i) => (
            <path
              key={i}
              d={d}
              fill="none"
              strokeWidth="0.5"
              markerEnd="url(#lifecycle-arrowhead)"
              style={{ stroke: "var(--color-fd-muted-foreground)", opacity: 0.65 }}
            />
          ))}

          {/* stage dots on the ring */}
          {STAGES.map((stage, i) => {
            const { x, y } = polar(angleOf(i), RING_R);
            return (
              <circle
                key={stage.name}
                cx={x}
                cy={y}
                r={DOT_R}
                strokeWidth="0.8"
                style={{ fill: "var(--color-fd-background)", stroke: "var(--color-fd-primary)" }}
              />
            );
          })}
        </svg>

        {/* center hub label */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="text-xs font-semibold uppercase tracking-wide text-fd-foreground">
            AI Governance
          </div>
          <div className="text-xs font-semibold uppercase tracking-wide text-fd-muted-foreground">
            Lifecycle
          </div>
        </div>

        {/* stage labels (links) just outside the ring */}
        {STAGES.map((stage, i) => {
          const angle = angleOf(i);
          const isAxis = Math.abs(Math.cos((angle * Math.PI) / 180)) < 0.01;
          const { x, y } = polar(angle, isAxis ? LABEL_R_AXIS : LABEL_R_DIAG);
          return (
            <Link
              key={stage.name}
              href={stage.href}
              className="group absolute flex w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center transition-transform hover:scale-105"
              style={{ left: `${x}%`, top: `${y}%`, textDecoration: "none" }}
            >
              <span className="text-sm font-semibold text-fd-foreground group-hover:text-fd-primary">
                {stage.name}
              </span>
              <span className="text-xs leading-tight text-fd-muted-foreground">
                {stage.gloss}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Mobile: vertical numbered list */}
      <ol className="mx-auto flex max-w-sm flex-col border-l border-fd-border pl-6 sm:hidden">
        {STAGES.map((stage, i) => (
          <li key={stage.name} className="relative pb-6">
            <span
              className="absolute -left-[1.65rem] flex h-5 w-5 items-center justify-center rounded-full border border-fd-border bg-fd-card text-[0.65rem] font-semibold text-fd-muted-foreground"
              aria-hidden="true"
            >
              {i + 1}
            </span>
            <Link href={stage.href} className="group block" style={{ textDecoration: "none" }}>
              <span className="font-semibold text-fd-foreground group-hover:text-fd-primary">
                {stage.name}
              </span>
              <span className="block text-sm text-fd-muted-foreground">{stage.gloss}</span>
            </Link>
          </li>
        ))}
        <li className="relative">
          <span className="absolute -left-[1.75rem] text-fd-muted-foreground" aria-hidden="true">
            ↺
          </span>
          <span className="text-sm italic text-fd-muted-foreground">
            Refresh feeds back to Intake — governance is a loop.
          </span>
        </li>
      </ol>
    </figure>
  );
}
