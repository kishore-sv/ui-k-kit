"use client";
import { AlignJustify, Moon, Sun, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { useTheme } from "next-themes";

const Links = [
  {
    href: "#about",
    name: "About",
  },
  {
    href: "#projects",
    name: "Projects",
  },
  {
    href: "#blogs",
    name: "Blogs",
  },
  {
    href: "#contact",
    name: "Contact",
  },
];

export default function ProtfolioNavBar() {
  const [dark, setDark] = useState<boolean>(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const [isScrool, setIsScrool] = useState<boolean>(false);
  const [mobileNav, setMobileNav] = useState<boolean>(false);

  const mobileNavRef = useRef<HTMLElement | null>(null);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setIsScrool(true);
    } else {
      setIsScrool(false);
    }
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileNav &&
        mobileNavRef.current &&
        !mobileNavRef.current.contains(event.target as Node)
      ) {
        setMobileNav(false);
      }
    };

    if (mobileNav) {
      document.body.classList.add("overflow-hidden");
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileNav]);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    // if (dark) {
    //   document.documentElement.classList.remove("dark");
    //   localStorage.setItem("theme", "light");
    // } else {
    //   document.documentElement.classList.add("dark");
    //   localStorage.setItem("theme", "dark");
    // }
    setDark(!dark);
    setTheme(theme === "light" ? "dark" : "light")
  };

  const pathname = usePathname();

  return (
    <AnimatePresence>
      <motion.nav
        whileInView={{
          borderRadius: isScrool ? "50px" : ["40px", "20px", "0px"],
          //   width: isScrool ? "50rem" : "60rem",
          width: isScrool ? "50rem" : "64rem",
          top: isScrool ? "12px" : "0px",
        }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
          delay: 0.1,
        }}
        exit={{
          transition: { duration: 0.3, ease: "easeInOut", delay: 2 },
        }}
        className={`${
          isScrool ? "dark:shadow-custom-dark shadow-custom" : ""
        } z-10  h-14 top-0 inset-x-0
        max-w-[100vw] lg:max-w-[67vw] xl:max-w-2/3 2xl:max-w-[60rem]  md:w-2/3
         mx-auto backdrop-blur-xl bg-neutral-200/60 dark:bg-neutral-800/60 flex justify-between items-center  py-4 px-2`}
      >
        <div className="w-full flex justify-between items-center ">
          <Link href={"/"} className="cursor-pointer group relative ">
            <Image
              width={40}
              height={40}
              src="https://avatars.githubusercontent.com/u/190291807?v=4"
              alt="profile-photo"
              className="rounded-full"
            />
          </Link>
          <button
            onClick={toggleTheme}
            className=" cursor-pointer hover:dark:bg-neutral-700/90 hover:bg-neutral-300/60  rounded-full px-100 lg:p-2 "
          >
            <motion.div
              key={dark ? "sun" : "moon"}
              initial={{ rotate: 0, opacity: 0 }}
              animate={{ rotate: 360, opacity: 1 }}
              exit={{ rotate: -360, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {dark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.div>
          </button>
        </div>

        {/* mobile nav */}

        <button
          onClick={() => setMobileNav(true)}
          className="mx-2 ml-4 lg:hidden "
        >
          <AlignJustify />
        </button>

        {!!mobileNav && (
          <motion.nav
            ref={mobileNavRef}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className=" lg:hidden bg-neutral-200 dark:bg-neutral-800 backdrop-blur-xl px-2  absolute w-[60vw] h-[100vh] top-0 bottom-0 left-[40%]"
          >
            <div className="w-full h-14  flex  justify-end items-center px-2 ">
              <button onClick={() => setMobileNav(false)}>
                <X />
              </button>
            </div>
            <div className=" w-full h-[50%] flex gap-6 flex-col justify-center items-center ">
              {Links.map((lnk, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, filter: "blur(2px)", y: 10 }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    ease: "easeOut",
                    // duration: 0.3,
                    delay: idx * 0.1,
                  }}
                >
                  <Link
                    onClick={() => setMobileNav(false)}
                    className=" animate-nav text-4xl font-bold"
                    href={lnk.href}
                  >
                    {lnk.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}

        <div className=" hidden px-2 lg:flex justify-evenly items-center gap-1  ">
          {Links.map((link, idx) => (
            <Link
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              key={link.name}
              href={link.href}
              className={`cursor-pointer w-full relative  rounded-full p-2`}
            >
              {hovered === idx && (
                <motion.span
                  layoutId="hover"
                  className=" absolute inset-0 w-full h-full bg-neutral-300 dark:bg-neutral-700/90 rounded-full p-2"
                />
              )}
              <span className="relative  z-20 ">{link.name}</span>
              {pathname.startsWith(link.href) && (
                <motion.span
                  layoutId="hover"
                  className="w-full  z-10 right-0 bottom-0 bg-neutral-300 dark:bg-neutral-700/90  absolute h-1  rounded-full"
                />
              )}
            </Link>
          ))}
        </div>
      </motion.nav>
    </AnimatePresence>
  );
}

//${pathname.startsWith(link.href) ? 'bg-neutral-300 dark:bg-neutral-700/90' : ''}

// hover:dark:bg-neutral-700/90 hover:bg-neutral-300/60

//${isScrool ? " w-[85%] rounded-[50px] m-auto top-3  " : "w-[100%] top-0  "}
