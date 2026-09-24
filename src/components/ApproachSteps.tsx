"use client";

import { useState } from "react";

type Step = { title: string; desc: string };

function FinishCheckIcon({ className = "h-4.5 w-4.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  );
}

export default function ApproachSteps({ steps }: { steps: Step[] }) {
  const [active, setActive] = useState(false);

  return (
    <div>
      {/* Desktop: horizontal connected rail — circles share the same grid as the labels below, so they always line up */}
      <div
        className="mt-9 hidden lg:block"
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <div className="grid gap-5" style={{ gridTemplateColumns: `repeat(${steps.length}, 1fr) auto` }}>
          {steps.map((step, i) => (
            <div key={step.title} className="relative">
              <div className="absolute left-11 -right-5 top-[22px] h-[2px] overflow-hidden bg-line-soft">
                <div
                  className="h-full origin-left bg-accent transition-transform duration-500 ease-out"
                  style={{
                    transform: active ? "scaleX(1)" : "scaleX(0)",
                    transitionDelay: `${i * 120}ms`,
                  }}
                />
              </div>
              <span
                className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border-2 border-accent text-[15px] font-extrabold transition-all duration-300 ease-out"
                style={{
                  backgroundColor: active ? "var(--color-accent)" : "white",
                  color: active ? "white" : "var(--color-accent)",
                  transform: active ? "scale(1.1)" : "scale(1)",
                  transitionDelay: `${i * 120}ms`,
                }}
              >
                {i + 1}
              </span>
              <div className="mt-4">
                <h3 className="mb-1.5 text-[15px] font-extrabold">{step.title}</h3>
                <p className="text-[13.5px] text-ink-soft">{step.desc}</p>
              </div>
            </div>
          ))}

          <div className="relative">
            <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-accent text-white">
              <FinishCheckIcon />
            </span>
            <p className="mt-4 text-[13px] font-extrabold whitespace-nowrap text-accent">Done</p>
          </div>
        </div>
      </div>

      {/* Mobile/tablet: vertical connected timeline (static — no hover on touch) */}
      <div className="mt-6 flex flex-col lg:hidden">
        {steps.map((step, i) => (
          <div key={step.title} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-white text-[13px] font-extrabold text-accent">
                {i + 1}
              </span>
              {i < steps.length - 1 && <div className="w-[2px] flex-1 bg-line-soft" />}
            </div>
            <div className={i < steps.length - 1 ? "pb-6" : ""}>
              <h3 className="mb-1.5 text-[15px] font-extrabold">{step.title}</h3>
              <p className="text-[13.5px] text-ink-soft">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
