import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "../../lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "default" | "outline" | "ghost" | "link" | "secondary"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Base classes
    let classes = "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    
    // Variant classes
    if (variant === "default") classes += " bg-safari-primary text-white hover:bg-safari-dark"
    else if (variant === "outline") classes += " border border-safari-primary text-safari-primary hover:bg-safari-primary hover:text-white"
    else if (variant === "secondary") classes += " bg-safari-earth text-white hover:bg-safari-earth/90"
    else if (variant === "ghost") classes += " hover:bg-safari-primary/10 text-safari-dark hover:text-safari-primary"
    else if (variant === "link") classes += " text-safari-primary underline-offset-4 hover:underline"

    // Size classes
    if (size === "default") classes += " h-11 px-6 py-2"
    else if (size === "sm") classes += " h-9 rounded-sm px-3"
    else if (size === "lg") classes += " h-14 rounded-sm px-8 text-base"
    else if (size === "icon") classes += " h-10 w-10"

    return (
      <Comp
        className={cn(classes, className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
