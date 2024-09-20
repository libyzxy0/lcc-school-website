import {
  Button
} from "@/components/ui/button"
import {
  useState
} from 'react'
import reactLogo from '@/assets/react.svg'
import {
  HeartHandshake, 
  BookOpen
} from 'lucide-react'
import {
  cn
} from '@/lib/utils'
import React from 'react'
import {
  Link
} from 'react-router-dom'
import {
  EmbeddedVideo
} from '@/components/EmbeddedVideo'
import {
  GlowBackgroundSection
} from '@/components/GlowBackgroundSection'
import {
  Navbar
} from '@/components/Navbar'
import {
  AnimatePresence,
  motion
} from "framer-motion";
import {
  LifeLccCourousel
} from '@/components/LifeLccCourousel'

export default function Landing() {
  const [count,
    setCount] = useState(0);
  return (
    <>
      <Navbar />
      <GlowBackgroundSection sectionId="hero">
        <AnimatePresence mode="wait">
          <motion.div
            initial={ { opacity: 0, y: 20 }}
            animate={ { opacity: 1, y: 0 }}
            exit={ { opacity: 0, y: -20 }}
            transition={ { duration: 0.5 }}
            >
            <div className="h-screen flex items-center justify-center pt-20 md:pt-0 px-5 md:px-12">
              <div className="w-full flex flex-col md:flex-row md:space-x-12 items-center">
                <div className="flex-1 space-y-6">
                  <h2 className="font-playfair font-bold text-3xl md:text-4xl leading-normal">
                    Changing{" "}
                    <span className="bg-gradient-to-r from-[#007aff] to-transparent bg-[length:100%_3px] bg-left-bottom bg-no-repeat pb-1">
                      Lives{" "}
                    </span>
                    for the{" "}
                    <span className="bg-gradient-to-r from-[#007aff] to-transparent bg-[length:100%_3px] bg-left-bottom bg-no-repeat pb-1">
                      Better{" "}
                    </span>
                    You
                  </h2>

                  <p className="text-[16px]">
                    La Concepcion College is a non-sectarian private higher education institution with a young nucleus of rich academic, cultural, and athletic achievements. We offer programs from Preschool, Elementary, Junior High School, Senior High School, Vocational, and College courses, located in the heart of the fast-growing City of San Jose del Monte, Bulacan, Philippines.
                  </p>
                  <div className="flex space-x-5">
                    <Link to="/products">
                      <Button className="bg-[#007aff] hover:bg-[#007aff]/90 font-medium" size="lg">
                        About Us
                      </Button>
                    </Link>
                    <Button className="bg-transparent border-2 hover:bg-[#007aff] hover:text-white font-medium border-[#007aff]" variant="outline" size="lg">
                      Enroll Now
                    </Button>
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
      <section id="lifeinlcc" className="py-16 w-full">
        <div className="mx-6 md:mx-10">
          <div className="flex flex-row items-center space-x-2 bg-gradient-to-r from-[#007aff] to-transparent bg-[length:100%_3px] bg-left-bottom bg-no-repeat pb-1 w-fit">
            <HeartHandshake />
            <h1 className="text-2xl font-bold">Life at LCC</h1>
          </div>


          <div className="mt-8">
            <LifeLccCourousel />
          </div>
        </div>
      </section>
      <GlowBackgroundSection sectionId="hero" className="w-full">
        <div className="mx-6 md:mx-10 py-16">
          <div className="flex flex-row items-center space-x-2 bg-gradient-to-r from-[#007aff] to-transparent bg-[length:100%_3px] bg-left-bottom bg-no-repeat pb-1 w-fit">
            <BookOpen className="text-[#007aff]" />
            <h1 className="text-2xl font-bold">LCC Programs</h1>
          </div>


          <div className="mt-8 flex flex-col md:flex-row justify-center md:justify-start">
            
          </div>
        </div>
      </GlowBackgroundSection>
    </>
  )
}