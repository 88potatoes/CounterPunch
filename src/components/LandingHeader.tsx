import { cn } from "@/lib/utils"

interface LandingHeaderProps {
  title: string
  subtitle?: string
}

export function LandingHeader({ title, subtitle }: LandingHeaderProps) {
  return (
    <div className="text-center mt-3 mb-10">
      <h1 className={cn(
        "text-4xl font-extrabold tracking-tight lg:text-5xl",
        "bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
      )}>
        {title}
      </h1>
      {subtitle && (
        <p className="text-xl text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  )
}