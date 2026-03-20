'use client'

import { cn } from '@/lib/utils'

interface SkeletonProps {
  className?: string
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-xl bg-neutral-200 dark:bg-neutral-800',
        className
      )}
    />
  )
}

export function SkillCardSkeleton() {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-sm space-y-4">
      <div className="flex items-center gap-3">
        <Skeleton className="w-12 h-12 rounded-full" />
        <Skeleton className="h-5 w-24" />
      </div>
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <div className="flex items-center gap-3">
        <Skeleton className="flex-1 h-2 rounded-full" />
        <Skeleton className="h-4 w-10" />
      </div>
    </div>
  )
}

export function ProjectCardSkeleton() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <Skeleton className="h-7 w-24 rounded-full" />
        <Skeleton className="h-7 w-16 rounded-full" />
      </div>
      <Skeleton className="aspect-square w-full rounded-2xl" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-5 w-28" />
    </div>
  )
}