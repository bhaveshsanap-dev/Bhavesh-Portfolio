import Section from "./Section";
import { profile } from "@/data/portfolio";

export default function About() {
  const paragraphs = profile.about.split("\n\n");

  return (
    <Section id="about" label="01 — About">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 id="about-heading" className="heading-lg text-ink-900">
            A little about me.
          </h2>
        </div>
        <div className="lg:col-span-7 lg:pt-2">
          <div className="space-y-6 max-w-prose-narrow">
            {paragraphs.map((p, i) => (
              <p key={i} className="body-lg">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
