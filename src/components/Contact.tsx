import { useState, type ChangeEvent, type FormEvent } from "react";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import Section from "./Section";
import SmartLink from "./SmartLink";
import { profile } from "@/data/portfolio";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface Web3FormsResponse {
  success: boolean;
  message?: string;
}

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "48d2f1c5-05a3-484b-8d7e-253d1fb128e2";

export default function Contact() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [formMessageType, setFormMessageType] = useState<"success" | "error" | "">("");
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!values.name.trim()) nextErrors.name = "Please enter your name.";
    if (!values.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!values.message.trim()) {
      nextErrors.message = "Please enter a message.";
    } else if (values.message.trim().length < 10) {
      nextErrors.message = "Message should be at least 10 characters.";
    }
    return nextErrors;
  };

  const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    setFormMessage("");
    setFormMessageType("");

    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: values.name.trim(),
          email: values.email.trim(),
          subject: `Portfolio contact from ${values.name.trim()}`,
          message: values.message.trim(),
        }),
      });

      const result: unknown = await response.json();
      const submission = result as Partial<Web3FormsResponse>;

      if (!response.ok || submission.success !== true) {
        throw new Error(
          typeof submission.message === "string"
            ? submission.message
            : "Your message could not be sent. Please try again."
        );
      }

      setValues({ name: "", email: "", message: "" });
      setFormMessage("Your message was sent successfully. Thank you for reaching out.");
      setFormMessageType("success");
    } catch (error) {
      setFormMessage(
        error instanceof Error && error.message
          ? error.message
          : "Your message could not be sent. Please try again."
      );
      setFormMessageType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange =
    (field: keyof typeof values) =>
    (ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: ev.target.value }));
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
      if (formMessageType) {
        setFormMessage("");
        setFormMessageType("");
      }
    };

  return (
    <Section id="contact" label="06 — Contact">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 id="contact-heading" className="heading-lg text-ink-900 mb-6">
            Have an opportunity or idea?
          </h2>
          <p className="body-lg max-w-prose-narrow mb-10">
            {profile.contactIntro}
          </p>

          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <Mail size={17} className="text-terracotta shrink-0" />
              <SmartLink
                href={profile.email ? `mailto:${profile.email}` : ""}
                placeholderText="Email — to be added"
                className="text-sm text-ink-700 hover:text-terracotta transition-colors"
              >
                {profile.email || "Email — to be added"}
              </SmartLink>
            </li>
            <li className="flex items-center gap-3">
              <Github size={17} className="text-terracotta shrink-0" />
              <SmartLink
                href={profile.github}
                placeholderText="GitHub — to be added"
                className="text-sm text-ink-700 hover:text-terracotta transition-colors"
              >
                GitHub
              </SmartLink>
            </li>
            <li className="flex items-center gap-3">
              <Linkedin size={17} className="text-terracotta shrink-0" />
              <SmartLink
                href={profile.linkedin}
                placeholderText="LinkedIn — to be added"
                className="text-sm text-ink-700 hover:text-terracotta transition-colors"
              >
                LinkedIn
              </SmartLink>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={17} className="text-terracotta shrink-0" />
              <span className="text-sm text-ink-700">{profile.location}</span>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block font-mono text-xs uppercase tracking-[0.15em] text-ink-500 mb-2"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                value={values.name}
                onChange={handleChange("name")}
                className="w-full bg-ink-50 border border-ink-200 px-4 py-3 text-sm text-ink-800 transition-colors focus:border-terracotta focus:outline-none"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-sm text-terracotta mt-1.5">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block font-mono text-xs uppercase tracking-[0.15em] text-ink-500 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={values.email}
                onChange={handleChange("email")}
                className="w-full bg-ink-50 border border-ink-200 px-4 py-3 text-sm text-ink-800 transition-colors focus:border-terracotta focus:outline-none"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-sm text-terracotta mt-1.5">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block font-mono text-xs uppercase tracking-[0.15em] text-ink-500 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={values.message}
                onChange={handleChange("message")}
                className="w-full bg-ink-50 border border-ink-200 px-4 py-3 text-sm text-ink-800 transition-colors focus:border-terracotta focus:outline-none resize-none"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="text-sm text-terracotta mt-1.5">
                  {errors.message}
                </p>
              )}
            </div>

            {formMessage && (
              <p
                className={`text-sm ${
                  formMessageType === "success" ? "text-olive-dark" : "text-terracotta"
                }`}
                role="status"
                aria-live="polite"
              >
                {formMessage}
              </p>
            )}

            <button
              type="submit"
              className="btn-primary w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-60"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}
