import * as React from "react"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const getRandomStartPosition = () => {
  // Smaller range for quicker travel distance
  const randomX = Math.floor(Math.random() * 60 - 30)
  const randomY = Math.floor(Math.random() * 60 - 30)
  return { x: randomX, y: randomY }
}

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const startPosition = React.useMemo(() => getRandomStartPosition(), [])
  
  const fadeUpVariants = {
    hidden: { 
      opacity: 0, 
      x: startPosition.x,
      y: startPosition.y,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,  // Faster duration
        ease: [0.23, 1, 0.32, 1], // Custom cubic bezier for snappier feel
        opacity: { duration: 0.2 } // Fade in even faster
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate="visible"
      variants={fadeUpVariants}
      className={cn(
        "relative rounded-xl border bg-black/50 backdrop-blur-lg shadow-lg p-4 text-card-foreground md:p-6",
        className
      )}
      {...props}
    />
  )
})
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 pb-4", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "flex flex-row items-center gap-2 text-sm font-semibold leading-none tracking-tight text-neutral-600 dark:text-neutral-400 md:text-base md:font-medium",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-semibold md:text-lg", className)}
    {...props}
  />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "mt-auto flex items-center pt-0 text-xs md:text-sm",
      className
    )}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
