import Section from "./Section";
import { currentlyLearning } from "@/data/portfolio";

export default function CurrentlyLearning() {
  return (
    <Section id="learning" label="05 — Currently Learning">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 id="learning-heading" className="heading-md text-ink-900">
            Areas I'm working on.
          </h2>
        </div>
        <div className="lg:col-span-7">
          <ul className="space-y-3">
            {currentlyLearning.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 body-base text-ink-700"
              >
                <span className="font-mono text-terracotta text-sm pt-1 select-none">
                  →
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
