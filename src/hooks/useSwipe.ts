import { useCallback } from 'react'

interface UseSwipeOptions {
  onSwipeLeft: () => void
  onSwipeRight: () => void
  threshold?: number
}

export function useSwipe({ onSwipeLeft, onSwipeRight, threshold = 50 }: UseSwipeOptions) {
  const handleSwipeStart = useCallback(
    (event: React.TouchEvent | React.MouseEvent) => {
      const startX = 'touches' in event ? event.touches[0].clientX : event.clientX

      const handleMove = (e: TouchEvent | MouseEvent) => {
        const currentX = 'touches' in e ? (e as TouchEvent).touches[0].clientX : (e as MouseEvent).clientX
        const diff = startX - currentX

        if (Math.abs(diff) > threshold) {
          if (diff > 0) onSwipeLeft()
          else onSwipeRight()
          cleanup()
        }
      }

      const cleanup = () => {
        document.removeEventListener('touchmove', handleMove)
        document.removeEventListener('touchend', cleanup)
        document.removeEventListener('mousemove', handleMove)
        document.removeEventListener('mouseup', cleanup)
      }

      document.addEventListener('touchmove', handleMove)
      document.addEventListener('touchend', cleanup)
      document.addEventListener('mousemove', handleMove)
      document.addEventListener('mouseup', cleanup)
    },
    [onSwipeLeft, onSwipeRight, threshold]
  )

  return { handleSwipeStart }
}