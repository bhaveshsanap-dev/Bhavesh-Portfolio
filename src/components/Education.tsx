import { GraduationCap, Award } from "lucide-react";
import Section from "./Section";
import { education, certification } from "@/data/portfolio";

export default function Education() {
  return (
    <Section id="education" label="04 — Education & Certification">
      <h2 id="education-heading" className="heading-lg text-ink-900 mb-12">
        Education.
      </h2>

      {/* Education entry */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16 pb-16 border-b border-ink-200">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap size={20} className="text-terracotta" />
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-ink-500">
              Degree
            </span>
          </div>
          <h3 className="heading-md text-ink-900">{education.degree}</h3>
        </div>

        <div className="lg:col-span-8 space-y-6">
          <dl className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <dt className="font-mono text-xs uppercase tracking-[0.15em] text-ink-400 w-40 shrink-0 pt-1">
                Institution
              </dt>
              <dd className="body-base text-ink-800">{education.institution}</dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <dt className="font-mono text-xs uppercase tracking-[0.15em] text-ink-400 w-40 shrink-0 pt-1">
                Status
              </dt>
              <dd className="body-base text-ink-800">{education.status}</dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <dt className="font-mono text-xs uppercase tracking-[0.15em] text-ink-400 w-40 shrink-0 pt-1">
                Expected Graduation
              </dt>
              <dd className="body-base text-ink-800">
                {education.expectedGraduation}
              </dd>
            </div>
          </dl>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-ink-500 mb-4">
              Relevant Subjects
            </h4>
            <div className="flex flex-wrap gap-2">
              {education.subjects.map((subject) => (
                <span key={subject} className="tag">
                  {subject}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certification */}
      <div>
        <h3 className="heading-md text-ink-900 mb-8">Certification.</h3>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-2">
              <Award size={18} className="text-terracotta" />
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-ink-500">
                Certificate
              </span>
            </div>
            <p className="text-lg text-ink-800 font-medium mt-2">
              {certification.title}
            </p>
          </div>

          <div className="lg:col-span-8 space-y-3">
            <dl className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <dt className="font-mono text-xs uppercase tracking-[0.15em] text-ink-400 w-40 shrink-0 pt-1">
                  Issuer
                </dt>
                <dd className="body-base text-ink-800">
                  {certification.issuer}
                </dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <dt className="font-mono text-xs uppercase tracking-[0.15em] text-ink-400 w-40 shrink-0 pt-1">
                  Category
                </dt>
                <dd className="body-base text-ink-800">
                  {certification.category}
                </dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <dt className="font-mono text-xs uppercase tracking-[0.15em] text-ink-400 w-40 shrink-0 pt-1">
                  Credential
                </dt>
                <dd className="body-base text-ink-500 italic">
                  {certification.credential}
                </dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <dt className="font-mono text-xs uppercase tracking-[0.15em] text-ink-400 w-40 shrink-0 pt-1">
                  Status
                </dt>
                <dd>
                  <span className="font-mono text-xs uppercase tracking-[0.12em] border border-ink-200 bg-ink-50 px-3 py-1.5 text-olive-dark">
                    {certification.status}
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </Section>
  );
}
