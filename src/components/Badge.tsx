import { type ReactNode } from "react";

type BadgeVariant = "amber" | "teal" | "gray" | "green" | "red" | "blue";
type BadgeSize = "xs" | "sm" | "md" | "lg";

type BadgeProps = {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
};

const variantStyles: Record<BadgeVariant, string> = {
  amber: "bg-amber-400/10 text-amber-400 border-amber-400/20",
  teal: "bg-teal-400/10 text-teal-400 border-teal-400/20",
  gray: "bg-gray-400/10 text-gray-400 border-gray-400/20",
  green: "bg-green-400/10 text-green-400 border-green-400/20",
  red: "bg-red-400/10 text-red-400 border-red-400/20",
  blue: "bg-blue-400/10 text-blue-400 border-blue-400/20",
};

const sizeStyles: Record<BadgeSize, string> = {
  xs: "px-3 py-1 text-xs",
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

function Badge({
  children,
  variant = "amber",
  size = "sm",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`
        rounded-full font-semibold border
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `
        .trim()
        .replace(/\s+/g, " ")}
    >
      {children}
    </span>
  );
}

export default Badge;
