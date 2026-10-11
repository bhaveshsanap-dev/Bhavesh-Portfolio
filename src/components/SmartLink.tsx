interface SmartLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  placeholderText?: string;
  external?: boolean;
}

/**
 * Renders a real anchor link when href is provided.
 * When href is empty, renders a dashed placeholder indicating
 * the link needs to be configured.
 */
export default function SmartLink({
  href,
  children,
  className = "",
  placeholderText,
  external = true,
}: SmartLinkProps) {
  if (!href) {
    return (
      <span className={`placeholder-link ${className}`} title="This link needs to be configured. Edit src/data/portfolio.ts">
        {placeholderText || children}
      </span>
    );
  }

  return (
    <a
      href={href}
      className={className}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
