import {
  Navbar
} from '@/components/Navbar'
import {
  AnimatePresence,
  motion
} from "framer-motion";
import {
  Star,
  MessageSquareWarning
} from 'lucide-react'

export default function AdmissionsRequirementsBasic() {
  return (
    <div>
      <Navbar className="bg-white border-b border-gray-200" />
      <AnimatePresence>
        <motion.div
          initial={ { opacity: 0,
            y: 20 }}
          animate={ { opacity: 1,
            y: 0 }}
          exit={ { opacity: 0,
            y: -20 }}
          transition={ { duration: 0.5 }}
          >
          <section className="pt-16" id="basic">
            <div className="mt-8 mx-6 md:mx-10">
              <div className="flex flex-row items-center space-x-2 bg-gradient-to-r from-[#007aff] to-transparent bg-[length:100%_3px] bg-left-bottom bg-no-repeat pb-1 w-fit">
                <h1 className="text-3xl md:text-3xl font-bold">Basic Education</h1>
              </div>
              <p className="text-gray-800 font-bold mt-5">
                Admission Requirements
              </p>
            </div>

            <div className="mx-6 md:mx-10 mt-8 space-y-3 text-gray-800">
              <p>
                LCC reserves the right to ask additional admission requirements not stipulated on this section if deemed necessary. LCC can also refuse admission of students whose behavior or academic standing is at variance with the school’s philosophy.
              </p>
              <p>
                All credentials submitted for enrollment become part of La Concepcion College’s records and cannot be withdrawn after registration.
              </p>

              <div className="w-full pt-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5">

                <div>
                  <div className="flex flex-row items-center space-x-2 bg-gradient-to-r from-[#007aff] to-transparent bg-[length:100%_3px] bg-left-bottom bg-no-repeat pb-1 w-fit">
                    <h1 className="text-xl font-bold text-[#007aff]">1.</h1>
                    <h1 className="text-xl md:text-2xl font-bold">New or Transferee</h1>
                  </div>
                  <h2 className="mt-3 font-semibold">Pre-Kindergarten, Elementary, Junior HS, and Senior HS</h2>

                  <ul className="mt-6 list-disc mx-8 text-[15px] space-y-2">
                    <li>Original SF 9 / Form 138 or Report Card</li>
                    <li>Original SF 10 / Form 137 or Permanent Record</li>
                    <li>Original Certificate of Good Moral Character</li>
                    <li>
                      If JHS ESC grantee must include: School ESC I.D. Number and ESC Student I.D. Number
                    </li>
                    <li>
                      ESC Certificate (if from JHS / SHS ESC Private school)
                    </li>
                    <li>
                      QVR Certificate (if SHS OVAP Applicant)
                    </li>
                    <li>
                      Photocopy of NSO / PSA issued Birth Certificate
                    </li>
                    <li>
                      4 Pieces Latest 2×2 picture in white background (with name) Last, Given, Initial
                    </li>
                    <li>
                      Entrance Examination (if applicable)
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-row items-center space-x-2 bg-gradient-to-r from-[#007aff] to-transparent bg-[length:100%_3px] bg-left-bottom bg-no-repeat pb-1 w-fit">
                    <h1 className="text-xl font-bold text-[#007aff]">2.</h1>
                    <h1 className="text-xl md:text-2xl font-bold">Old or Continuing</h1>
                  </div>
                  <h2 className="mt-3 font-semibold">Pre-Kindergarten, Elementary, Junior HS, and Senior HS</h2>

                  <ul className="mt-6 list-disc mx-8 text-[15px] space-y-2">
                    <li>Original SF 9 / Form 138 or Report Card</li>
                    <li>Previous LCC I.D. Card</li>
                    <li>Clearance</li>
                  </ul>

                </div>


                <div>
                  <div className="flex flex-row items-center space-x-2 bg-gradient-to-r from-[#007aff] to-transparent bg-[length:100%_3px] bg-left-bottom bg-no-repeat pb-1 w-fit">
                    <h1 className="text-xl font-bold text-[#007aff]">3.</h1>
                    <h1 className="text-xl md:text-2xl font-bold">Foreign Students</h1>
                  </div>
                  <h2 className="mt-3 font-semibold">Pre-Kindergarten, Elementary, Junior HS, and Senior HS</h2>
                  <p className="mt-3 text-gray-700">
                    The admission of Alien Students is subjected to the regulation of the Department of Education and the Bureau of Immigration
                  </p>

                  <ul className="mt-6 list-disc mx-8 text-[15px] space-y-2">
                    <li>Original SF 9 / Form 138 or Report Card</li>
                    <li>Original SF 10 / Form 137 or Permanent Record</li>
                    <li>Original Certificate of Good Moral Character</li>
                    <li>
                      If JHS ESC grantee must include: School ESC I.D. Number and ESC Student I.D. Number
                    </li>
                    <li>
                      ESC Certificate (if from JHS / SHS ESC Private school)
                    </li>
                    <li>
                      QVR Certificate (if SHS OVAP Applicant)
                    </li>
                    <li>
                      Photocopy of NSO / PSA issued Birth Certificate
                    </li>
                    <li>
                      4 Pieces Latest 2×2 picture in white background (with name) Last, Given, Initial
                    </li>
                    <li>
                      Entrance Examination (if applicable)
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-row items-center space-x-2 bg-gradient-to-r from-[#007aff] to-transparent bg-[length:100%_3px] bg-left-bottom bg-no-repeat pb-1 w-fit">
                    <Star className="text-[#007aff]" />
                    <h1 className="text-xl md:text-2xl font-bold">Additional Requirements</h1>
                  </div>
                  <h2 className="mt-3 font-semibold">This is for New Students/Transferee and Foreign Students</h2>

                  <ul className="mt-6 list-disc mx-8 text-[15px] space-y-2">
                    <li>3 Pieces Long brown envelope</li>
                    <li>2 Piece Long folder</li>
                    <li>3 Piece Long plastic envelope</li>
                  </ul>

                </div>

              </div>
            </div>
          </section>
          <section className="py-16" id="withdrawal">
            <div className="mt-8 mx-6 md:mx-10">
              <div className="flex flex-row items-center space-x-2 bg-gradient-to-r from-[#007aff] to-transparent bg-[length:100%_3px] bg-left-bottom bg-no-repeat pb-1 w-fit">
                <MessageSquareWarning className="text-[#007aff]" />
                <h1 className="text-2xl md:text-3xl font-bold">Withdrawal of Registration</h1>
              </div>
              <p className="text-gray-800 mt-5">
                A pupil or student who withdraws enrolment before or after the beginning of classes must submit a written request stating a valid reason for the withdrawal. Attachment of documents that support the reason will be necessary if it applies. An exit interview shall only be done after being cleared with accountabilities.
              </p>
              <p className="text-gray-800 font-bold mt-5 font-playfair">
                Rules on Refund for Students with Authorized Withdrawal are governed by the Law for Private Schools (Section No.66, s 1992 Manual of Regulation for Private Schools, 8th Edition 1992)
              </p>

              <p className="font-playfair text-[15px] mt-6 text-center tracking-wide">
                “Tuition Charges: A student who transfer or otherwise withdraws, in writing, within two weeks after the beginning of classes and who has already paid the pertinent tuition and other school fees in full or for any length of time longer than one month may be charged ten percent (10%) of the total amount due for the term if he withdraws within the first week of classes, or twenty percent (20%) if within the second week of classes, regardless of whether or not he has actually attended classes. The student may be charged all the school fees in full if he withdraws anytime after the second week of classes. However, if the transfer or withdrawal is due to a justifiable reason, the student shall be charged the pertinent fees only up to and including the last month of attendance.”
              </p>

              <p className="text-gray-800 mt-5">
                On the basis of the foregoing rules, LCC adopts the following policies:
              </p>

              <ul className="mt-6 list-disc mx-8 text-[15px] space-y-2">
                <li>The full Registration and Miscellaneous Fees shall be charged if the pupil or student withdraws prior to the opening of classes;</li>
                <li>There will be no refund or transfer for the Registration and Miscellaneous Fee;</li>
                <li>Whether the pupil or student attended classes or not 10% of the total prescribed fee will be charged and deducted from the refund when the application for withdrawal is within the 1st week of regular classes, and 20% if within the second week of classes and there is no refund on tuition fee and 100% of the total tuition and other fees will be charged on the respective bills if withdrawal is after more than the second week of classes.</li>
                <li>When no written notification is made, the student is considered dropped, and charged in full for the entire school year, regardless of actual attendance.</li>
              </ul>
            </div>
          </section>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}