import {
  cn
} from '@/lib/utils'
import React from 'react'

type PropsWithChildren = {
  children: React.ReactNode;
  className?: string;
  sectionId: string;
}

export const GlowBackgroundSection = ({
  children, className, sectionId
}: PropsWithChildren) => (
  <section className="relative" id={sectionId}>
    <div
      className={cn(`absolute inset-0 z-0`, className)}
      style={ {
        background: `linear-gradient(120deg, #dbf5ff 40%, #f1fbff 70%, #ffffff 100%)`,
      }}
      />
    <div className="relative z-10 h-full">
      {children}
    </div>
  </section>
);