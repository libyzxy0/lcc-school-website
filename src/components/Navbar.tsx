import {
  useEffect,
  useState
} from 'react';
import {
  Menu,
  X,
  ChevronDown
} from 'lucide-react';
import {
  Link
} from 'react-router-dom';
import {
  motion,
  AnimatePresence
} from 'framer-motion';
import logo from '@/assets/lcc.png'

export function Navbar() {
  const [open,
    setOpen] = useState(false);
  const [isHeroVisible,
    setIsHeroVisible] = useState(true);

  useEffect(() => {
    const heroSection = document.getElementById('hero');
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.8,
      }
    );

    observer.observe(heroSection);

    return () => {
      observer.disconnect();
    };
  },
    []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 h-16 flex justify-between items-center z-40 px-7 md:px-20 transition-colors duration-200 ${!open ? (isHeroVisible ? 'bg-transparent': 'bg-white backdrop-filter backdrop-blur-md bg-opacity-30'): 'bg-white border-b-[1.5px] border-gray-200'}`}>
        <div className="flex items-center space-x-2 justify-center flex-row">
          <img src={logo} alt="La Concepcion College Logo" className="w-10 h-10" />
        <h1 className="font-playfair font-bold text-[#007aff] text-xl">La Concepcion College</h1>
      </div>

      <div className="flex items-center md:hidden">
        <button
          className="text-gray-950 flex items-center space-x-1 hover:text-[#007aff]"
          onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" />: <Menu className="h-5 w-5" />}
        </button>
      </div>

      <ul className="hidden md:flex flex-row items-center space-x-6">
        <li>
          <Link className="hover:underline hover:cursor-pointer hover:text-[#007aff]" to="/">Home</Link>
        </li>
        <li>
          <Link className="hover:underline hover:cursor-pointer hover:text-[#007aff]" to="/about">About Us</Link>
        </li>
        <li>
          <Link className="hover:underline hover:cursor-pointer hover:text-[#007aff]" to="/about">Academics</Link>
        </li>
        <li>
          <Link className="hover:underline hover:cursor-pointer hover:text-[#007aff]" to="/about">Admissions</Link>
        </li>
        <li>
          <Link className="hover:underline hover:cursor-pointer hover:text-[#007aff]" to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
    {open && (
      <div className="z-30 w-full fixed top-0">
        <AnimatePresence>
          {open && (
            <motion.div
              initial={ { opacity: 0, x: -15 }}
              animate={ { opacity: 1, x: 0 }}
              transition={ { duration: 0.2 }}
              >
              <div className="z-30 w-full bg-white mt-16 py-5 px-6 block md:hidden">
                <ul className="flex flex-col space-y-4">
                  <li>
                    <Link to="/" className="text-gray-700 hover:text-blue-500 hover:underline">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-gray-700 hover:text-blue-500 hover:underline">
                      About Us
                    </Link>
                  </li>
                  <li className="relative flex flex-row items-center justify-between">
                    <Link to="/academics" className="text-gray-700 hover:text-blue-500 hover:underline">
                      Academics
                    </Link>
                    <button>
                      <ChevronDown className="text-gray-600" />
                    </button>
                  </li>
                  <li className="relative flex flex-row items-center justify-between">
                    <Link to="/admissions" className="text-gray-700 hover:text-blue-500 hover:underline">
                      Admissions
                    </Link>
                    <button>
                      <ChevronDown className="text-gray-600" />
                    </button>
                  </li>
                  <li>
                    <Link to="/contact" className="text-gray-700 hover:text-blue-500 hover:underline">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )}
  </>
);
}