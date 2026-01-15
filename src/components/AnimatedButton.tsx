import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { Button } from "@/components/ui/button"
interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
export default function AnimatedButton({ children, ...props }: AnimatedButtonProps) {
  return (
    <Button
      className="relative overflow-hidden hover:scale-105 transition-all duration-300 shadow-lg rounded-xl px-6 py-3"
      style={{
        background: `linear-gradient(45deg, var(--color-gradient-from), var(--color-gradient-via), var(--color-gradient-to))`,
        color: 'var(--color-primary-foreground)'
      }}
      {...props}
    >
      <span className="z-10 relative">{children}</span>
      <span className="absolute inset-0 bg-white opacity-0 hover:opacity-10 rounded-xl transition-all duration-300" />
    </Button>
  );
}