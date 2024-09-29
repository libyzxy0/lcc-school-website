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
  <div className="relative">
    <div
      className={cn(`absolute inset-0 z-0`, className)}
      style={{
        backgroundImage: `url('/lcc-bg.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
    <div
      className="absolute inset-0 z-10 bg-[#007aff] bg-opacity-30"
    />
    <div
      className="absolute inset-0 z-10 bg-[#000000] bg-opacity-50"
    />
    <section className="relative h-full z-20" id={sectionId}>
      {children}
    </section>
  </div>
);
