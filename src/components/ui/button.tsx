import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-500 ease-luxury focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90 rounded-md",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 rounded-md",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground rounded-md",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 rounded-md",
        ghost: "hover:bg-accent/10 hover:text-accent rounded-md",
        link: "text-primary underline-offset-4 hover:underline",
        // Luxury variants for Raevia
        luxury:
          "bg-transparent border border-foreground/30 text-foreground tracking-[0.2em] uppercase text-xs hover:bg-foreground hover:text-background hover:border-foreground",
        "luxury-gold":
          "bg-transparent border border-accent/50 text-accent tracking-[0.2em] uppercase text-xs hover:bg-accent hover:text-accent-foreground hover:border-accent",
        "luxury-filled":
          "bg-foreground text-background tracking-[0.2em] uppercase text-xs hover:bg-foreground/90",
        "luxury-subtle":
          "bg-transparent text-foreground/70 tracking-wide uppercase text-xs hover:text-foreground underline-offset-8 hover:underline decoration-accent/50",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        // Luxury sizes
        luxury: "h-12 px-8 py-3",
        "luxury-lg": "h-14 px-12 py-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
