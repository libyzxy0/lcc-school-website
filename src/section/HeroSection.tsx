import {
  AnimatePresence,
  motion
} from "framer-motion";
import {
  GlowBackgroundSection
} from '@/components/GlowBackgroundSection'
import {
  EmbeddedVideo
} from '@/components/EmbeddedVideo'
import {
  Link
} from 'react-router-dom'

import { TypewriterEffect } from "@/components/ui/typewriter-effect";
 
const tagLineWords = [
  {
    text: "Changing", 
    className: "text-white"
  }, 
  {
    text: "Lives", 
    className: "text-[#3495ff]"
  }, 
  {
    text: "for", 
    className: "text-white"
  }, 
  {
    text: "the", 
    className: "text-white"
  }, 
  {
    text: "Better", 
    className: "text-[#3495ff]"
  }, 
  {
    text: "You", 
    className: "text-white"
  }
]

function LCCTagline() {
  return (
    <TypewriterEffect words={tagLineWords} className="text-left font-playfair font-bold text-3xl md:text-4xl leading-normal" />
  )
}

export function HeroSection() {
  return (
    <GlowBackgroundSection sectionId="hero">
      <AnimatePresence mode="wait">
        <motion.div
          initial={ { opacity: 0, y: 20 }}
          animate={ { opacity: 1, y: 0 }}
          exit={ { opacity: 0, y: -20 }}
          transition={ { duration: 0.5 }}
          >
          <div className="h-auto md:h-screen pt-20 pb-16 flex items-center justify-center pt-28 md:pt-0 px-5 md:px-12 flex flex-row">
            <div className="w-full flex flex-col md:flex-row md:space-x-12 items-center">

              <div className="flex-1 space-y-7">
                <LCCTagline />

                <p className="text-[16px] text-gray-100">
                  La Concepcion College is a non-sectarian private higher education institution with a young nucleus of rich academic, cultural, and athletic achievements. We offer programs from Preschool, Elementary, Junior High School, Senior High School, Vocational, and College courses, located in the heart of the fast-growing City of San Jose del Monte, Bulacan, Philippines.
                </p>
                <div className="flex space-x-5">
                  <Link to="/about">
                    <button
                      className="relative inline-block text-sm font-medium text-white group focus:outline-none focus:ring"
                      >
                      <span className="absolute inset-0 border border-[#007aff] rounded group-active:border-[#007aff]"></span>
                      <span className="flex items-center gap-3 px-8 rounded font-semibold py-3 transition-transform bg-[#007aff] border border-[#007aff] active:border-[#007aff] active:bg-[#007aff] -translate-y-1 -translate-x-1 group-hover:translate-x-0 group-hover:translate-y-0">
                        About Us
                      </span>
                    </button>

                  </Link>
                  <Link to="#">
                    <button
                      className="relative inline-block text-sm font-medium text-white group focus:outline-none focus:ring"
                      >
                      <span className="absolute inset-0 border border-[#007aff] rounded group-active:border-[#007aff]"></span>
                      <span className="flex items-center gap-3 px-8 rounded font-semibold py-3 transition-transform bg-[#007aff] border border-[#007aff] active:border-[#007aff] active:bg-[#007aff] group-hover:-translate-x-1 group-hover:-translate-y-1">
                        Enroll Now
                      </span>
                    </button>
                  </Link>

                </div>
              </div>

              <div className="flex-1 mt-10 md:mt-0 w-full">
                <EmbeddedVideo className="rounded-lg" />
              </div>

            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </GlowBackgroundSection>
  )
}