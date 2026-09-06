import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "secondary-light" | "ghost" | "whatsapp";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-accent text-white font-bold hover:bg-accent-dark transition-colors",
  secondary:
    "bg-transparent text-ink font-bold border-[1.5px] border-ink hover:bg-ink hover:text-white transition-colors",
  "secondary-light":
    "bg-transparent text-white font-bold border-[1.5px] border-white hover:bg-white hover:text-ink transition-colors",
  ghost:
    "bg-paper text-ink font-semibold border border-line hover:border-ink transition-colors",
  whatsapp:
    "bg-transparent text-[#25D366] font-bold border-[1.5px] border-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  href,
  ...rest
}: CommonProps & { href?: string } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const base = "inline-flex items-center justify-center rounded-[3px] px-6 py-3 text-sm";
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
