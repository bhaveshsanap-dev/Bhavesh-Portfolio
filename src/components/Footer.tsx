import { ArrowUp, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/portfolio";
import SmartLink from "./SmartLink";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-padding border-t border-ink-200 py-12 bg-ink-50">
      <div className="mx-auto max-w-content">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="font-mono text-lg font-semibold text-ink-900">
              {profile.monogram}
            </span>
            <span className="text-sm text-ink-500">
              Made with care by Bhavesh.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <SmartLink
              href={profile.github}
              placeholderText="GitHub"
              className="text-ink-500 hover:text-terracotta transition-colors"
            >
              <Github size={18} />
              <span className="sr-only">GitHub</span>
            </SmartLink>

            <SmartLink
              href={profile.linkedin}
              placeholderText="LinkedIn"
              className="text-ink-500 hover:text-terracotta transition-colors"
            >
              <Linkedin size={18} />
              <span className="sr-only">LinkedIn</span>
            </SmartLink>

            <a
              href="#top"
              className="inline-flex items-center gap-1.5 text-sm text-ink-600 hover:text-terracotta transition-colors"
            >
              Back to top
              <ArrowUp size={14} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-ink-200">
          <p className="text-xs text-ink-400 font-mono">
            © {year} Bhavesh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
