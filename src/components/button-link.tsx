import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary" | "light";
};

export function ButtonLink({
  className = "",
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  const variants = {
    primary:
      "bg-brand text-white hover:bg-brand-dark shadow-lg shadow-blue-700/20",
    secondary:
      "border border-line bg-white text-foreground hover:border-brand hover:text-brand",
    light:
      "border border-white/30 bg-white/10 text-white hover:bg-white hover:text-foreground",
  };

  return (
    <Link
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold transition duration-200 hover:-translate-y-0.5 ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
