import {
  Routes,
  Route
} from "react-router-dom";
import {
  Footer
} from '@/components/Footer'

import Home from "@/pages/Home";
import About from "@/pages/About";
import AdmissionsBasic from "@/pages/Admissions/BasicEdReq";
import AdmissionsCollege from "@/pages/Admissions/CollegeEdReq";
import Programs from "@/pages/Programs";
import Enrollment from "@/pages/Admissions/Enrollment";
import Tuitions from "@/pages/Admissions/TuitionFee";
import Contact from "@/pages/Contact";

export default function App() {
  return (
    <>
      <Routes>
        <Route index element={
          <Home />
          } />
        <Route path="about" element={
          <About />
          } />
        <Route path="/admissions/basic/requirements" element={
          <AdmissionsBasic />
          } />
        <Route path="/admissions/college/requirements" element={
          <AdmissionsCollege />
          } />
        <Route path="/programs" element={
          <Programs />
          } />
        <Route path="/admissions/online-enrollment" element={
          <Enrollment />
          } />
        <Route path="/admissions/tuition-fee" element={
          <Tuitions />
          } />
        <Route path="/contact" element={
          <Contact />
          } />
      </Routes>
      <Footer />
    </>
  );
}