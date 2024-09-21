import {
  Navbar
} from '@/components/Navbar'
import {
  AnimatePresence,
  motion
} from "framer-motion";
import {
  EmbeddedVideoAbout,
  EmbeddedVideoLCCHymm
} from '@/components/EmbeddedVideo'

export default function About() {
  return (
    <>
      <Navbar className="bg-white" />
      <AnimatePresence mode="wait">
        <motion.div
          initial={ { opacity: 0,
            y: 20 }}
          animate={ { opacity: 1,
            y: 0 }}
          exit={ { opacity: 0,
            y: -20 }}
          transition={ { duration: 0.5 }}
          >
          <section id="about" className="pt-16">
            <div className="mt-8 mx-6 md:mx-12">
              <div className="flex flex-row items-center space-x-2 bg-gradient-to-r from-[#007aff] to-transparent bg-[length:100%_3px] bg-left-bottom bg-no-repeat pb-1 w-fit">
                <h1 className="text-2xl md:text-3xl font-bold">About La Concepcion College</h1>
              </div>
            </div>

            <div className="px-5 md:px-12 flex flex-row mt-5">
              <div className="w-full flex flex-col md:flex-row md:space-x-12 items-center">

                <div className="mt-8 md:mt-0 flex-1 space-y-6">
                  <p className="md:text-lg">
                    La Concepcion College is a non-sectarian private higher education institution with a young nucleus of rich academic, cultural, and athletic achievements. We offer programs from Preschool, Elementary, Junior High School, Senior High School, Vocational, and College courses, located in the heart of the fast-growing City of San Jose del Monte, Bulacan, Philippines.
                  </p>

                </div>
                <div className="flex-1 mt-10 md:mt-0 w-full">
                  <EmbeddedVideoAbout className="rounded-lg" />
                </div>
              </div>
            </div>
          </section>
          <section className="mx-6 md:mx-12 pt-16" id="vision-mission">
            <div className="mt-8">
              <div className="flex flex-row items-center space-x-2 bg-gradient-to-r from-[#007aff] to-transparent bg-[length:100%_3px] bg-left-bottom bg-no-repeat pb-1 w-fit">
                <h1 className="text-2xl md:text-3xl font-bold">Vision & Mission Statement</h1>
              </div>
            </div>

            <div className="mt-8 w-full flex flex-col md:flex-row md:space-x-12">
              <div className="flex-1 flex-col space-y-4">
                <p>
                  La Concepcion College envisions herself to be one of the forefront educational institutions that serves as catalyst of change for the holistic development of the community, the country, and the ASEAN region.
                </p>
                <p className="mt-5 md:mt-0">
                  Inspired by the motherly care and ideals of Mary Immaculate Conception and guided by the core values that befits a true LCCian, LCC dedicates herself in the pursuit of her purpose of inspiring her students and stakeholders to be in their fullest potential by cultivating minds, capturing hearts, and changing lives to become better individuals of the society.
                </p>
              </div>
              <div className="flex-1 mt-8 md:mt-0">
                <p className="md:text-xl mb-5 font-semibold">
                  Because LCC aims to:
                </p>
                <h1 className="font-bold text-[#007aff] font-playfair text-3xl md:text-5xl">“ Change Lives for the Better YOU. ”</h1>
              </div>
            </div>

          </section>
          <section className="mx-6 md:mx-12 pt-16" id="core-values">
            <div className="mt-8">
              <div className="flex flex-row items-center space-x-2 bg-gradient-to-r from-[#007aff] to-transparent bg-[length:100%_3px] bg-left-bottom bg-no-repeat pb-1 w-fit">
                <h1 className="text-2xl md:text-3xl font-bold">Core Values</h1>
              </div>
            </div>

            <div className="mt-8 w-full flex flex-col md:flex-row md:space-x-12">
              <div className="flex-1 flex-col space-y-4">
                <p>
                  A true LCCian's is Characterized by:
                </p>
                <h1 className="font-bold text-[#007aff] font-playfair text-2xl md:text-4xl">“ Leadership ”</h1>
                <h1 className="font-bold text-[#007aff] font-playfair text-2xl md:text-4xl">“ Competitiveness ”</h1>
                <h1 className="font-bold text-[#007aff] font-playfair text-2xl md:text-4xl">“ Culture of Excellence ”</h1>
              </div>
            </div>
          </section>
          
      <section className="mx-6 py-12 md:py-16" id="lcc-hymm">
  <div className="mt-8">
    <div className="flex flex-row items-center space-x-2 bg-gradient-to-r from-[#007aff] to-transparent bg-[length:100%_3px] bg-left-bottom bg-no-repeat pb-1 w-fit">
      <h1 className="text-xl md:text-3xl font-bold">LCC Hymm</h1>
    </div>
  </div>

  <div className="mt-8 w-full flex flex-col md:flex-row md:space-x-8">
    <div className="flex-1 flex-col space-y-4">
      <EmbeddedVideoLCCHymm className="rounded-lg" />
    </div>

    <div className="flex-1 pt-5">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h2 className="font-semibold text-lg md:text-xl">Verse 1:</h2>
          <p className="text-left text-sm md:text-base">
            We lead, we compete, we excel<br />
            We are proud LCCians, proud LCCians!<br />
            Forward we march, we all yell<br />
            We are proud LCCians, proud LCCians!<br />
            Guided with a motherly care<br />
            LCC mark we bear
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg md:text-xl">Chorus 1:</h2>
          <p className="text-left text-sm md:text-base">
            We praise you and salute you<br />
            Forever we say, ‘Thank you.’<br />
            For keeping your torch aflame<br />
            While we stride heads up high<br />
            Taking pride in your name
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg md:text-xl">Chorus 2:</h2>
          <p className="text-left text-sm md:text-base">
            Dear LCC, Alma Mater<br />
            You raise us to be better<br />
            Your thrust is to serve us all<br />
            Molding us to be bright so<br />
            We’re here standing tall
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg md:text-xl">Bridge:</h2>
          <p className="text-left text-sm md:text-base">
            We uphold your core values<br />
            All we learned will be of use
          </p>
        </div>

        <div className="col-span-2">
          <h2 className="font-semibold text-lg md:text-xl">Coda:</h2>
          <p className="text-left text-sm md:text-base">
            LCC brings out the best in you<br />
            Changing lives for the better you.<br />
            (repeat Coda 2x)
          </p>
        </div>
      </div>
    </div>
  </div>
</section>



          
        </motion.div>
      </AnimatePresence>
    </>
  )
}