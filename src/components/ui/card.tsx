'use client'

import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        'backdrop-blur-sm rounded-xl border border-b-white shadow-2xl',
        className
      )}
    >
      {children}
    </div>
  )
}