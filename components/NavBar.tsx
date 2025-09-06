"use client";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import RootSearchModal from "./RootSearchModel";

export default function NavBar() {
  const { setTheme, theme } = useTheme();

  const [open, setOpen] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      console.log("command+k");
      const isMac = navigator.platform.toUpperCase().includes("MAC");
      const cmdOrCtrl = isMac ? e.metaKey : e.ctrlKey;
      if (cmdOrCtrl && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
        setTimeout(() => inputRef.current?.focus(), 0);
      }

      if (e.key === "Escape") setOpen(false);
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKey);
    window.addEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className=" w-screen z-[999] overflow-hidden fixed top-0 h-18 lg:px-14 px-2 py-3 bg-background border-b border-border flex items-center justify-between">
      <section className="w-fit h-full flex items-center ">
        <MobileDropdown />
        <Link
          href="/"
          title="K-Kit"
          className="hidden lg:w-fit lg:h-[90%] md:flex  items-center transition-colors ease-in-out hover:bg-accent p-1 rounded-md "
        >
          <Image
            width="50"
            height="50"
            loading="lazy"
            src="/logo.svg"
            alt="K-Kit"
            className="h-full w-full object-cover"
          />
        </Link>
        <div className=" hidden h-full w-fit md:flex items-center justify-evenly gap-4 ml-10">
          <Link
            href="/docs"
            title="Docs"
            className="py-1 font-medium cursor-pointer px-2 transition-colors ease-in-out rounded-md hover:bg-accent"
          >
            Docs
          </Link>
          <Link
            href="/docs/components"
            title="Components"
            className="py-1 font-medium cursor-pointer px-2 transition-colors ease-in-out rounded-md hover:bg-accent"
          >
            Components
          </Link>
        </div>
      </section>
      <section className="w-fit h-full flex items-center gap-2 lg:gap-6">
        <div
          ref={inputRef}
          onClick={() => setOpen(true)}
          className=" h-8 w-50 lg:w-60 rounded-md p-2 border border-border flex items-center justify-between "
        >
          <span className="text-muted-foreground text-xs">
            Search Documentation...
          </span>
          <div className="text-[10px] px-1 text-muted-foreground shadow-2xs shadow-secondary py-0.5 rounded-[5px] gap-1 flex items-center justify-center border border-border ">
            <span>⌘</span>
            <span>K</span>
          </div>
        </div>
        {!!open && (
          <RootSearchModal
            containerRef={containerRef}
            open={open}
            setOpen={setOpen}
          />
        )}
        <Link
          target="Github"
          href="https://github.com/kishore-sv/ui-k-kit"
          title="github-k-kit"
          className=" p-1 rounded-md transition-colors ease-in-out hover:bg-accent "
        >
          <GithubIcon />
        </Link>

        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          title="toggle-theme"
          className={cn(
            "p-2  rounded-md transition-colors cursor-pointer ease-in-out hover:bg-accent "
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4.5"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
            <path d="M12 3l0 18"></path>
            <path d="M12 9l4.65 -4.65"></path>
            <path d="M12 14.3l7.37 -7.37"></path>
            <path d="M12 19.6l8.85 -8.85"></path>
          </svg>
        </button>
      </section>
    </nav>
  );
}

const GithubIcon = () => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      className="size-6"
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  );
};

export function MobileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative md:hidden" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
      >
        <span
          className={cn(
            "absolute w-6 h-0.5 bg-foreground rounded transition-all duration-300",
            isOpen ? "rotate-45" : "-translate-y-1.5"
          )}
        />
        <span
          className={cn(
            "absolute w-6 h-0.5 bg-foreground rounded transition-all duration-300",
            isOpen ? "-rotate-45" : "translate-y-1.5"
          )}
        />
      </button>

      {isOpen && (
        <div className="fixed left-0 mt-2 w-60 bg-popover rounded-lg shadow-lg z-50">
          <nav className="flex flex-col gap-2 px-4 py-2 text-sm font-medium">
            <Link
              href="/"
              title="K-Kit"
              onClick={() => setIsOpen(false)}
              className="w-fit h-[90%] flex  items-center transition-colors ease-in-out hover:bg-accent p-1 rounded-md "
            >
              <Image
                width="50"
                height={50}
                loading="lazy"
                src="/logo.svg"
                alt="K-Kit"
                className="h-full w-full object-cover"
              />
            </Link>
            <Link
              href="/docs"
              title="Docs"
              onClick={() => setIsOpen(false)}
              className="py-1 font-medium cursor-pointer px-2"
            >
              Docs
            </Link>
            <Link
              href="/docs/components"
              title="Components"
              onClick={() => setIsOpen(false)}
              className="py-1 font-medium cursor-pointer px-2"
            >
              Components
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}

//  https://tx.shadcn.com/docs
//  https://tx.shadcn.com/
