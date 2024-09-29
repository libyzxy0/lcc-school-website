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
          <section className="pt-16" id="college">
            <div className="mt-8 mx-6 md:mx-10">
              <div className="flex flex-row items-center space-x-2 bg-gradient-to-r from-[#007aff] to-transparent bg-[length:100%_3px] bg-left-bottom bg-no-repeat pb-1 w-fit">
                <h1 className="text-3xl md:text-3xl font-bold">College Students</h1>
              </div>
              <p className="text-gray-800 font-bold mt-5">
                Admission Requirements
              </p>
            </div>

            <div className="mx-6 md:mx-10 mt-8 space-y-3 text-gray-800">
              <p>
                A student who graduated from the secondary level education or its equivalent from schools and institutions duly approved by the Department of Education shall be eligible for admission to any degree and non-degree programs. However, a student who has not completed the secondary level, but who have qualified in the PEPT and ALS, etc. may be eligible for admission.
              </p>
              <p>
                The following requirements must be submitted to the Registrar’s Office before admission to any academic program, however, LCC reserves the right to ask additional admission requirements not stipulated on this section if deemed necessary. LCC can also refuse admission of students whose behavior or academic standing is at variance with the school’s philosophy.
              </p>
              
              <p>
                All credentials submitted for enrollment become part of La Concepcion College’s records and cannot be withdrawn after registration.
              </p>

              <div className="w-full pt-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5">

                <div>
                  <div className="flex flex-row items-center space-x-2 bg-gradient-to-r from-[#007aff] to-transparent bg-[length:100%_3px] bg-left-bottom bg-no-repeat pb-1 w-fit">
                    <h1 className="text-xl font-bold text-[#007aff]">1.</h1>
                    <h1 className="text-xl md:text-2xl font-bold">New (Incoming Freshmen)</h1>
                  </div>
                  <ul className="mt-6 list-disc mx-8 text-[15px] space-y-2">
                    <li>Original High School SF 9 / Form 138 (Report Card)</li>
                    <li>Original High School SF 10 / Form 137 (Permanent Record)</li>
                    <li>Original Certificate of Good Moral Character</li>
                    <li>
                      Photocopy of PSA / NSO issued Birth Certificate
                    </li>
                    <li>
                      Career Examination
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-row items-center space-x-2 bg-gradient-to-r from-[#007aff] to-transparent bg-[length:100%_3px] bg-left-bottom bg-no-repeat pb-1 w-fit">
                    <h1 className="text-xl font-bold text-[#007aff]">2.</h1>
                    <h1 className="text-xl md:text-2xl font-bold">Old or Continuing</h1>
                  </div>

                  <ul className="mt-6 list-disc mx-8 text-[15px] space-y-2">
                    <li>Report of Rating (Class cards)</li>
                    <li>Updated Student Directory Form</li>
                  </ul>

                </div>


                <div>
                  <div className="flex flex-row items-center space-x-2 bg-gradient-to-r from-[#007aff] to-transparent bg-[length:100%_3px] bg-left-bottom bg-no-repeat pb-1 w-fit">
                    <h1 className="text-xl font-bold text-[#007aff]">3.</h1>
                    <h1 className="text-xl md:text-2xl font-bold">Transferee</h1>
                  </div>
                  <h2 className="mt-3 font-semibold">Students Taken College Courses in other college or university</h2>

                  <ul className="mt-6 list-disc mx-8 text-[15px] space-y-2">
                    <li>Certificate of Eligibility to Transfer (Honorable Dismissal)</li>
                    <li>Proof of grades, with the course title and credit units</li>
                    <li>Original Transcript of Records</li>
                    <li>Certificate of Good Moral Character</li>
                    <li>Photocopy of PSA / NSO issued Birth Certificate</li>
                    <li>Career Examination</li>
                  </ul>
                </div>
                
                
                <div>
                  <div className="flex flex-row items-center space-x-2 bg-gradient-to-r from-[#007aff] to-transparent bg-[length:100%_3px] bg-left-bottom bg-no-repeat pb-1 w-fit">
                    <h1 className="text-xl font-bold text-[#007aff]">4.</h1>
                    <h1 className="text-xl md:text-2xl font-bold">ALS or PEPT Passers</h1>
                  </div>

                  <ul className="mt-6 list-disc mx-8 text-[15px] space-y-2">
                    <li>Original Certificate of Rating with remarks promoted to college level</li>
                    <li>Certificate of Good Moral Character</li>
                    <li>Photocopy of PSA / NSO issued Birth Certificate</li>
                    <li>Career Examination</li>
                  </ul>
                </div>
                
                
                <div>
                  <div className="flex flex-row items-center space-x-2 bg-gradient-to-r from-[#007aff] to-transparent bg-[length:100%_3px] bg-left-bottom bg-no-repeat pb-1 w-fit">
                    <h1 className="text-xl font-bold text-[#007aff]">5.</h1>
                    <h1 className="text-xl md:text-2xl font-bold">Certificate in Teaching Profession or Unit Earners</h1>
                  </div>

                  <ul className="mt-6 list-disc mx-8 text-[15px] space-y-2">
                    <li>Photocopy of TOR with the date of Graduation</li>
                    <li>Copy of PRC License (if applicable)</li>
                    <li>Photocopy of PSA / NSO issued Birth Certificate</li>
                    <li>Career Examination</li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex flex-row items-center space-x-2 bg-gradient-to-r from-[#007aff] to-transparent bg-[length:100%_3px] bg-left-bottom bg-no-repeat pb-1 w-fit">
                    <h1 className="text-xl font-bold text-[#007aff]">6.</h1>
                    <h1 className="text-xl md:text-2xl font-bold">Cross Enrollee</h1>
                  </div>

                  <ul className="mt-6 list-disc mx-8 text-[15px] space-y-2">
                    <li>Permit to cross-enroll from the mother institution</li>
                    <li>Letter of intent to study in LCC</li>
                    <li>Certificate of Good Moral Character</li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex flex-row items-center space-x-2 bg-gradient-to-r from-[#007aff] to-transparent bg-[length:100%_3px] bg-left-bottom bg-no-repeat pb-1 w-fit">
                    <h1 className="text-xl font-bold text-[#007aff]">7.</h1>
                    <h1 className="text-xl md:text-2xl font-bold">TESDA Courses</h1>
                  </div>

                  <ul className="mt-6 list-disc mx-8 text-[15px] space-y-2">
                    <li>Photocopy of HS Report Card, SF 10 / Form 137, or Diploma</li>
                    <li>If college level, photocopy of TOR / Diploma</li>
                    <li>If ALS graduate, photocopy of COR</li>
                    <li>Photocopy of PSA / NSO issued Birth Certificate</li>
                  </ul>
                </div>
                
                
                <div>
                  <div className="flex flex-row items-center space-x-2 bg-gradient-to-r from-[#007aff] to-transparent bg-[length:100%_3px] bg-left-bottom bg-no-repeat pb-1 w-fit">
                    <h1 className="text-xl font-bold text-[#007aff]">8.</h1>
                    <h1 className="text-xl md:text-2xl font-bold">Foreign Students with Scholastic Records from Foreign School</h1>
                  </div>

                  <ul className="mt-6 list-disc mx-8 text-[15px] space-y-2">
                    <li>Transcript of Records/Scholastic Records duly authenticated by the Philippine
Foreign Service Post (PFSP) located in the student applicant’s country of origin or
legal residence</li>
                    <li>Photocopy of the student’s passport showing date and place of birth and birth
certificate or it’s equivalent duly authenticated by the PFSP</li>
                    <li>Student Visa or  SSP to be applied by the LCC Bureau of Immigration representative</li>
                  </ul>
                  <h2 className="mt-6 font-semibold"><b className="bg-[#007aff] px-2 px-1 rounded text-white">Note</b>{" "}Student Visa and Special Study Permit (SSP) from the Bureau of Immigration shall not
be required of the spouses and unmarried dependent children below 21 years old of
aliens under the following categories:</h2>
                  <ul className="mt-6 list-disc mx-8 text-[15px] space-y-2">
                    <li>
                      Permanent foreign residents
                    </li>
                    <li>Aliens with valid working permits under Section 9(d), 9(g) and 47(a) (2) of the
Philippine Immigration Act of 1940, as amended</li>
                    <li>Personnel of foreign diplomatic and consular missions residing in the Philippines
and their dependents</li>
                    <li>Holders of Special Investor’s Resident Visa (SIRV) and Special Retiree’s Resident Visa
(SRRV)</li>
                    <li>Foreign students coming to the Philippines with 47(a)(2) visas issued pursuant to
existing laws, e.g. PD 2021</li>
                  </ul>
                  
                </div>

                <div>
                  <div className="flex flex-row items-center space-x-2 bg-gradient-to-r from-[#007aff] to-transparent bg-[length:100%_3px] bg-left-bottom bg-no-repeat pb-1 w-fit">
                    <Star className="text-[#007aff]" />
                    <h1 className="text-xl md:text-2xl font-bold">Additional Requirements</h1>
                  </div>

                  <ul className="mt-6 list-disc mx-8 text-[15px] space-y-2">
                    <li>4 Pieces Latest 2×2 picture in white background (with name) Last, Given, Initial</li>
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
                A student who withdraws enrolment before or after the beginning of classes must submit a written request stating a valid reason for the withdrawal. Attachment of documents that support the reason will be necessary if it applies. An exit interview shall only be done after being cleared with accountabilities.
              </p>
              <p className="text-gray-800 font-bold mt-5 font-playfair">
                Section 100. Refund and Other Charges, CHED Memorandum Order 40, s. 2008
              </p>

              <p className="font-playfair text-[15px] mt-6 text-center tracking-wide">
                “Withdrawal of enrolment is highly discouraged by the institution, may it be Authorized Withdrawal, Unauthorized Withdrawal, LOA, and AWOL. A student who registers and enrolls for a specific semester is expected to finish and complete the whole term duly enrolled.”
              </p>

              <p className="text-gray-800 mt-5">
                On the basis of the rules for Private Higher Educational Institutions (Section 100. Refund and Other Charges, CHED Memorandum Order 40, s. 2008) LCC adopts its own rules and regulations in cases of Refund & Other Charges for Withdrawal of Enrolment:
              </p>

              <ul className="mt-6 list-disc mx-8 text-[15px] space-y-2">
                <li>A student who withdraws enrolment before or after the beginning of classes must submit a written request stating a valid reason for the withdrawal. Attachment of documents that support the reason will be necessary if it applies.</li>
                <li>There will be no refund or transfer on the Registration and Miscellaneous Fees of the student.</li>
                <li>A student who withdraws before the start of classes and who has already paid the pertinent school fees in full or installment will be charged with full pertinent fees in Registration and Miscellaneous Fees. The remaining fees for the tuition, laboratory and other fees will be refunded if paid in full cash basis.</li>
                <li>A student who withdraws within the first week of classes and who has already paid the pertinent school fees in full or installment will be charged 25% of the prescribed fee during the semester including Registration and Miscellaneous Fee, tuition, laboratory and other fees regardless whether the student attended classes or not. The remaining 75% of the said fees will be refunded if paid in full cash basis.</li>
                <li>A student who withdraws within the second week of classes and who has already paid the pertinent tuition and other school fees in full or installment will be charged 50% of the prescribed fee during the semester including Registration and Miscellaneous Fee, tuition, laboratory and other fees regardless whether the student attended classes or not. The remaining 50% of the said fees will be refunded if paid in full cash basis.</li>
                <li>A student who withdraws after the second week of classes and who has already paid the pertinent tuition and other school fees in full or installment will be charged for all or 100% of the school prescribed fee during the semester including Registration and Miscellaneous Fee, tuition, laboratory and other fees regardless whether the student attended classes or not. No refund shall be made.</li>
                <li>When no written notification is made, the student is considered AWOL (Absence Without Leave). The student will be charged for all or 100% the prescribed fee during the semester including Registration and Miscellaneous Fee, tuition, laboratory and other fees regardless whether the student attended classes or not. No refund shall be made.</li>
              </ul>
            </div>
          </section>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}