import { ArrowRight, ArrowDown, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/portfolio";
import SmartLink from "./SmartLink";

export default function Hero() {
  return (
    <section
      id="top"
      className="section-padding pt-32 pb-20 md:pt-44 md:pb-32 min-h-screen flex items-center"
    >
      <div className="mx-auto max-w-content w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: text */}
          <div className="lg:col-span-7">
            <p className="section-label mb-8">
              {profile.label}
            </p>

            <h1 className="heading-xl text-ink-900 whitespace-pre-line">
              {profile.heroHeading}
            </h1>

            <p className="body-lg mt-8 max-w-prose-narrow">
              {profile.heroIntro}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a href="#project" className="btn-primary group">
                View My Work
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </a>
              <a href="#contact" className="btn-secondary group">
                Get in Touch
                <ArrowDown
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-y-0.5"
                />
              </a>
            </div>

            <div className="flex items-center gap-5 mt-10">
              <SmartLink
                href={profile.github}
                placeholderText="GitHub"
                className="text-ink-500 hover:text-terracotta transition-colors duration-200"
              >
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </SmartLink>
              <SmartLink
                href={profile.linkedin}
                placeholderText="LinkedIn"
                className="text-ink-500 hover:text-terracotta transition-colors duration-200"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </SmartLink>
            </div>
          </div>

          {/* Right: profile photo */}
          <div className="lg:col-span-5">
            <div className="w-full max-w-[320px] mx-auto lg:mx-0 aspect-[4/5] bg-ink-100 border border-ink-200 p-3 relative">
              <img
                src="/IMG_1766.JPG.jpeg"
                alt="Bhavesh wearing a black suit and sunglasses"
                className="w-full h-full object-cover object-top"
              />

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-terracotta" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-terracotta" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
