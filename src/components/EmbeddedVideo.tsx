import { cn } from '@/lib/utils'

export function EmbeddedVideo({ className }: { className?: string }) {
  return (
    <iframe className={cn("w-full h-60 md:h-72 lg:h-80", className)} width="560" height="315" src="https://www.youtube.com/embed/FExleRL6hRQ?si=I0kcKSFLHyU3dkxe" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  )
}