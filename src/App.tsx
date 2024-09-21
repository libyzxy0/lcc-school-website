import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import {
  Suspense,
  lazy
} from "react";
import {
  useState,
  useEffect
} from 'react'

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));

export default function App() {
  const [isFirstMount,
    setIsFirstMount] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (isFirstMount) {
      setIsFirstMount(false);
    }
  },
    [isFirstMount]);

  return (
    <>
      <Suspense>
          <Routes location={location} key={location.pathname}>
            <Route index element={
              <Home />
              } />
            <Route path="about" element={
                <About />
              } />
          </Routes>
      </Suspense>
    </>
  );
}