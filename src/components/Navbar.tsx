import React, {
  useEffect,
  useState
} from 'react';
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import {
  Link
} from 'react-router-dom';
import {
  motion,
  AnimatePresence
} from 'framer-motion';
import logo from '@/assets/lcc.png'
import {
  cn
} from '@/lib/utils'
import ScrollToSection from '@/components/ScrollToSection'
import {
  useLocation
} from 'react-router-dom'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

function LinkItemExpandable({
  className, to, children, name
}: {
  className?: string; to: string; children: React.ReactNode; name: string;
}) {
  const [isCollapse,
    setCollapse] = useState(false)
  return (
    <li className={cn(`${isCollapse ? 'pb-2': 'pb-0'}`, className)}>
      <div className="relative flex flex-row items-center justify-between">
        <Link to={to} className="text-gray-700 hover:text-blue-500 hover:underline">
          {name}
        </Link>
        <button onClick={() => setCollapse(!isCollapse)}>
          {isCollapse ? <ChevronUp className="text-gray-600" />: <ChevronDown className="text-gray-600" />}
        </button>
      </div>
      <AnimatePresence>
        {isCollapse && (
          <motion.div
            initial={ { opacity: 0, x: -15 }}
            animate={ { opacity: 1, x: 0 }}
            transition={ { duration: 0.1 }}
            >
            <ul className="bg-gray-100 flex flex-col space-y-4 p-4 mt-5 rounded-lg text-sm">
              {children}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

function LinkItemPopoverExpand({
  className, to, children, name
}: {
  className?: string; to: string; children: React.ReactNode; name: string;
}) {
  return (
    <li className={cn("flex flex-row items-center justify-between space-x-1", className)}>
      <Link className="hover:underline hover:cursor-pointer hover:text-[#007aff]" to={to}>{name}</Link>
      <Popover>
        <PopoverTrigger><ChevronDown /></PopoverTrigger>
        <PopoverContent className="flex flex-col space-y-4 p-4 mt-5 rounded-lg text-sm list-none inline-block w-fit">
          {children}
        </PopoverContent>
      </Popover>
    </li>
  )
}


export function Navbar({
  className
}: {
  className?: string
}) {
  const location = useLocation()
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
      <ScrollToSection />
      <nav className={cn(`fixed top-0 left-0 right-0 h-16 flex justify-between items-center z-40 px-7 md:px-20 transition-all duration-200 ${!open ? (isHeroVisible ? 'bg-transparent': 'bg-white'): 'bg-white'}`, className)}>
        <Link to="https://laconcepcioncollege.com" className="flex items-center space-x-2 justify-center flex-row">
          <img src={logo} alt="La Concepcion College Logo" className="w-10 h-10" />
        <h1 className="font-playfair font-bold text-[#007aff] text-xl">La Concepcion College</h1>
      </Link>

      <div className="flex items-center md:hidden">
        <button
          className={`${location.pathname == "/" ? open || !isHeroVisible ? 'text-gray-800': 'text-white': 'text-gray-800'} flex items-center space-x-1 hover:text-[#007aff]`}
          onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" />: <Menu className="h-5 w-5" />}
        </button>
      </div>

      <ul className={`hidden md:flex flex-row items-center space-x-6 ${location.pathname == "/" ? isHeroVisible ? 'text-gray-200': 'text-gray-800': 'text-gray-800' }`}>
        <li>
          <Link className="hover:underline hover:cursor-pointer hover:text-[#007aff]" to="/">Home</Link>
        </li>
        <LinkItemPopoverExpand name="About Us" to="/about/#about">
          <li>
            <Link to="/about/#vision-mission" className="text-gray-700 hover:text-blue-500 hover:underline">
              Vision & Mission
            </Link>
          </li>
          <li>
            <Link to="/about/#lcc-hymm" className="text-gray-700 hover:text-blue-500 hover:underline">
              LCC Hymm
            </Link>
          </li>
          <li>
            <Link to="/about/#lcc-yell" className="text-gray-700 hover:text-blue-500 hover:underline">
              LCC Yell
            </Link>
          </li>
        </LinkItemPopoverExpand>
        <li>
          <Link className="hover:underline hover:cursor-pointer hover:text-[#007aff]" to="/programs">Programs</Link>
        </li>
        <LinkItemPopoverExpand name="Admissions" to="/admissions">
          <li>
            <Link to="/admissions/online-enrollment" className="text-gray-700 hover:text-blue-500 hover:underline">
              Online Enrollment
            </Link>
          </li>
          <li>
            <Link to="/admissions/basic/requirements/#basic" className="text-gray-700 hover:text-blue-500 hover:underline">
              Basic Education
            </Link>
          </li>
          <li>
            <Link to="/admissions/college/requirements/#college" className="text-gray-700 hover:text-blue-500 hover:underline">
              College Students
            </Link>
          </li>
          <li>
            <Link to="/admissions/tuition-fee" className="text-gray-700 hover:text-blue-500 hover:underline">
              Tuition Fee
            </Link>
          </li>
        </LinkItemPopoverExpand>
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
              initial={ { opacity: 0, y: -15 }}
              animate={ { opacity: 1, y: 0 }}
              transition={ { duration: 0.2 }}
              >
              <div className="z-30 w-full bg-white border-t border-gray-200 mt-16 py-5 px-6 block md:hidden">
                <ul className="flex flex-col space-y-4">
                  <li>
                    <Link to="/#hero" className="text-gray-700 hover:text-blue-500 hover:underline">
                      Home
                    </Link>
                  </li>

                  <LinkItemExpandable to="/about/#about" name="About">
                    <li>
                      <Link to="/about/#vision-mission" className="text-gray-700 hover:text-blue-500 hover:underline">
                        Vision & Mission
                      </Link>
                    </li>
                    <li>
                      <Link to="/about/#lcc-hymm" className="text-gray-700 hover:text-blue-500 hover:underline">
                        LCC Hymm
                      </Link>
                    </li>
                    <li>
                      <Link to="/about/#lcc-yell" className="text-gray-700 hover:text-blue-500 hover:underline">
                        LCC Yell
                      </Link>
                    </li>
                  </LinkItemExpandable>

                  <li className="relative flex flex-row items-center justify-between">
                    <Link to="/programs" className="text-gray-700 hover:text-blue-500 hover:underline">
                      Programs
                    </Link>
                  </li>


                  <LinkItemExpandable to="/admissions" name="Admissions">
                    <li>
                      <Link to="/admissions/online-enrollment" className="text-gray-700 hover:text-blue-500 hover:underline">
                        Online Enrollment
                      </Link>
                    </li>
                    <li>
                      <Link to="/admissions/basic/requirements/#basic" className="text-gray-700 hover:text-blue-500 hover:underline">
                        Basic Education
                      </Link>
                    </li>
                    <li>
                      <Link to="/admissions/college/requirements/#college" className="text-gray-700 hover:text-blue-500 hover:underline">
                        College Students
                      </Link>
                    </li>
                    <li>
                      <Link to="/admissions/tuition-fee" className="text-gray-700 hover:text-blue-500 hover:underline">
                        Tuition Fee
                      </Link>
                    </li>
                  </LinkItemExpandable>

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