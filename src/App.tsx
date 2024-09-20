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
  AnimatePresence,
  motion
} from "framer-motion";
import {
  useState,
  useEffect
} from 'react'

const Home = lazy(() => import("@/pages/Home"));

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
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index element={
              <Home />
              } />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </>
  );
}