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
  GlowBackgroundSection
} from '@/components/GlowBackgroundSection'
import {
  Navbar
} from '@/components/Navbar'
import {
  motion
} from "framer-motion";
import {
  LifeLccCourousel
} from '@/components/LifeLccCourousel'
import {
  HeroSection
} from '@/section/HeroSection'
import {
  CardWhyLCC
} from '@/components/CardWhyLCC'

function LifeAtLCC() {
  return (
    <section id="lifeatlcc" className="py-16 w-full">
      <motion.div
        initial={ { opacity: 0, y: 20 }}
        whileInView={ { opacity: 1, y: 0 }}
        viewport={ { once: true }}
        transition={ { duration: 1 }}
        >
        <div className="mx-6 md:mx-10">
          <div className="flex flex-row items-center space-x-2 bg-gradient-to-r from-[#007aff] to-transparent bg-[length:100%_3px] bg-left-bottom bg-no-repeat pb-1 w-fit">
            <HeartHandshake className="text-[#007aff]" />
            <h1 className="text-2xl font-bold">Life at LCC</h1>
          </div>
          <div className="mt-8">
            <LifeLccCourousel />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function Programs() {
  return (
    <GlowBackgroundSection sectionId="programs" className="w-full">
      <div className="mx-6 md:mx-10 py-16">
        <div className="flex flex-row items-center space-x-2 bg-gradient-to-r from-[#007aff] to-transparent bg-[length:100%_3px] bg-left-bottom bg-no-repeat pb-1 w-fit">
          <BookOpen className="text-[#007aff]" />
          <h1 className="text-2xl text-white font-bold">LCC Programs</h1>
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
  )
}

function WhyLCC() {
  return (
    <section id="whylcc" className="py-16 w-full">
      <div className="mx-6 md:mx-10">

        <div className="flex flex-row items-center space-x-2 bg-gradient-to-r from-[#007aff] to-transparent bg-[length:100%_3px] bg-left-bottom bg-no-repeat pb-1 w-fit">
          <CircleHelpIcon className="text-[#007aff]" />
          <h1 className="text-2xl font-bold">Why choose LCC?</h1>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">

          <CardWhyLCC icon={<BookOpenText className=" h-8 w-8" />} title="Quality Education" description="La Concepcion College ensures that the quality of education is good." />
          <CardWhyLCC icon={<Snowflake className="h-8 w-8" />} title="Air-Conditioned Classrooms" description="Fully Air-Conditioned Classrooms for Basic Education Department for all LCC Campuses." />
          <CardWhyLCC
            icon={<HeartHandshake className="h-8 w-8" />}
            title="Supportive Community"
            description="At La Concepcion College, we foster a nurturing environment where students, faculty, and families collaborate to ensure every student's success."
            />

          <CardWhyLCC icon={<CircleHelpIcon className="h-8 w-8" />} title="Lorem Ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          <CardWhyLCC icon={<CircleHelpIcon className="h-8 w-8" />} title="Lorem Ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

        </div>
      </div>
    </section>
  )
}

export default function Landing() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <LifeAtLCC />
      <Programs />
      <WhyLCC />
    </>
  )
}