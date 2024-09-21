import {
  Button
} from "@/components/ui/button"
import {
  HeartHandshake,
  BookOpen,
  BookOpenText,
  Snowflake, 
  CircleHelpIcon
} from 'lucide-react'
import {
  ProgramItem
} from '@/components/ProgramItem'
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
            <div className="h-auto md:h-screen pt-20 pb-16 flex items-center justify-center pt-28 md:pt-0 px-5 md:px-12 flex flex-row">
              <div className="w-full flex flex-col md:flex-row md:space-x-12 items-center">

                <div className="flex-1 space-y-7">
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
                    <Link to="/about">
                      <Button className="bg-[#007aff] hover:bg-[#007aff]/90 font-bold" size="lg">
                        About Us
                      </Button>
                    </Link>
                    <Button className="bg-transparent border-2 hover:bg-[#007aff] hover:text-white font-bold border-[#007aff]" variant="outline" size="lg">
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
      <section id="lifeatlcc" className="py-16 w-full">
        <div className="mx-6 md:mx-10">
          <div className="flex flex-row items-center space-x-2 bg-gradient-to-r from-[#007aff] to-transparent bg-[length:100%_3px] bg-left-bottom bg-no-repeat pb-1 w-fit">
            <HeartHandshake className="text-[#007aff]" />
            <h1 className="text-2xl font-bold">Life at LCC</h1>
          </div>


          <div className="mt-8">
            <LifeLccCourousel />
          </div>
        </div>
      </section>
      <GlowBackgroundSection sectionId="programs" className="w-full">
        <div className="mx-6 md:mx-10 py-16">
          <div className="flex flex-row items-center space-x-2 bg-gradient-to-r from-[#007aff] to-transparent bg-[length:100%_3px] bg-left-bottom bg-no-repeat pb-1 w-fit">
            <BookOpen className="text-[#007aff]" />
            <h1 className="text-2xl font-bold">LCC Programs</h1>
          </div>


          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <ProgramItem
              link={"/admissions/elementary"}
              imageUrl={"https://laconcepcioncollege.com/wp-content/uploads/2010/12/dsc2600.jpg?w=597"}
              title="Elementary"
              description="La Concepcion College offers Elementary program. Click to see more."
              />
            <ProgramItem
              link={"/admissions/jhs"}
              imageUrl={"https://laconcepcioncollege.com/wp-content/uploads/2018/05/screen-shot-2018-05-08-at-12-17-57-am.png"}
              title="Junior High School"
              description="La Concepcion College offers Junior High School program. Click to see more."
              />
            <ProgramItem
              link={"/admissions/shs"}
              imageUrl={"https://laconcepcioncollege.com/wp-content/uploads/2018/05/screen-shot-2018-05-08-at-12-11-06-am.png"}
              title="Senior High School"
              description="La Concepcion College offers Senior High School program. Click to see more."
              />
            <ProgramItem
              link={"/admissions/college"}
              imageUrl={"https://laconcepcioncollege.com/wp-content/uploads/2019/02/51505776_1480013142131800_3282817205695152128_n.jpg"}
              title="College Programs"
              description="La Concepcion College offers college programs. Click to see more."
              />


          </div>
        </div>
      </GlowBackgroundSection>
      <section id="whylcc" className="py-16 w-full">
        <div className="mx-6 md:mx-10">
          <div className="flex flex-row items-center space-x-2 bg-gradient-to-r from-[#007aff] to-transparent bg-[length:100%_3px] bg-left-bottom bg-no-repeat pb-1 w-fit">
            <CircleHelpIcon className="text-[#007aff]" />
            <h1 className="text-2xl font-bold">Why choose LCC?</h1>
          </div>


          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            
            <div className="flex flex-row space-x-3">
              <div className="bg-gray-100 p-3 rounded-lg h-fit">
                <BookOpenText className="text-[#007aff] h-8 w-8" />
              </div>
              <div>
                <h1 className="text-xl text-[#007aff] font-bold">Quality Education</h1>
                <p className="text-sm">La Concepcion College ensures that the quality of education is good.</p>
              </div>
            </div>
            <div className="flex flex-row space-x-3">
              <div className="bg-gray-100 p-3 rounded-lg h-fit">
                <Snowflake className="text-[#007aff] h-8 w-8" />
              </div>
              <div>
                <h1 className="text-xl text-[#007aff] font-bold">Air-Conditioned Classrooms</h1>
                <p className="text-sm">Fully Air-Conditioned Classrooms for Basic Education Department for all LCC Campuses.</p>
              </div>
            </div>
            
          </div>
          
        </div>
      </section>
    </>
  )
}