import Section from "./Section";
import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <Section id="skills" label="02 — Skills">
      <h2 id="skills-heading" className="heading-lg text-ink-900 mb-12">
        What I'm learning and working with.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-ink-500 mb-5">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
