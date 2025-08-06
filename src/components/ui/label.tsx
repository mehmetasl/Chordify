"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

// @radix-ui/react-label bağımlılığını kaldırmak için bu bileşeni standart HTML <label> elemanını kullanacak şekilde güncelledim.
// Bu, projenize yeni bir paket eklemeden shadcn/ui'nin stilini ve işlevselliğini korur.
const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...props}
  />
))
Label.displayName = "Label"

export { Label }
