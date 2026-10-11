import { type ReactNode } from "react";

interface SectionProps {
  id: string;
  label: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, label, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`section-padding border-t border-ink-200 py-20 md:py-28 bg-ink-100 ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="mx-auto max-w-content">
        <div className="mb-12 md:mb-16">
          <span className="section-label">{label}</span>
        </div>
        {children}
      </div>
    </section>
  );
}
