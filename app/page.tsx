"use client";
import { FileUpload } from "@/components/myComponents/file-upload";
import Link from "next/link";
import { InputWithMessage } from "./docs/components/input/page";
import ProtfolioNavBar from "@/components/myComponents/protfolio-nav";
import SearchModal from "@/components/myComponents/search-model";
import { ReactNode, useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  Github,
  HomeIcon,
  LinkedinIcon,
  Search,
} from "lucide-react";
import ContactForm from "@/components/myComponents/contact-form";

export default function Home() {
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
    <div className=" w-screen bg-background min-h-screen mt-18 ">
      <div className=" w-full h-full px-2 py-3 md:h-100 flex flex-col justify-center items-center ">
        <Link
          target="X"
          href="https://x.com/kishore_sv_7"
          className=" bg-muted py-1 px-3 rounded-2xl font-medium hover:bg-muted/60 transition-colors ease-in-out text-sm "
        >
          Follow along on Twitter
        </Link>
        <h1 className=" md:text-shadow-xs md:text-shadow-muted-foreground max-w-4xl mt-4 text-center text-5xl font-bold tracking-tighter ">
          The Foundation for your Design System
        </h1>
        <p className="text-shadow-sm text-shadow-muted max-w-3xl mt-4 text-lg text-muted-foreground text-center ">
          A set of beautifully designed components that you can customize,
          extend, and build on. Start here then make it your own. Open Source.
          Open Code.
        </p>
        <div className=" flex items-center justify-center gap-4 h-fit mt-6 ">
          <Link
            href="/docs/components"
            className=" cursor-pointer font-medium px-4 py-2 rounded-md bg-primary hover:bg-primary/80 transition-colors ease-in-out text-primary-foreground "
          >
            Get Started
          </Link>
          <Link
            href="https://github.com/kishore-sv/ui-k-kit"
            target="Github"
            className="cursor-pointer font-medium px-6 py-2 rounded-md border border-border hover:bg-accent transition-colors ease-in-out "
          >
            GitHub
          </Link>
        </div>
      </div>
      <section className=" w-full px-20 py-4 mt-4 flex justify-center items-center  ">
        <div className=" w-full grid grid-cols-3 px-20 py-4 gap-3 ">
          <div className="border rounded-xl border-border col-span-1 h-80 w-auto flex flex-col justify-center items-center">
            <InputWithMessage />
          </div>
          <div className="border rounded-xl border-border col-span-2 h-80 w-auto flex flex-col justify-center items-center">
            <ProtfolioNavBar />
          </div>
          <div className="border rounded-xl border-border col-span-2 h-40 w-auto flex flex-col justify-center items-center">
            <div
              ref={inputRef}
              onClick={() => setOpen(true)}
              className="w-[30%] h-10 flex gap-2 justify-center items-center border border-border rounded-md "
            >
              <p className="text-sm text-muted-foreground">
                This is search model...
              </p>
              <div className="flex gap-1 items-center">
                <Search className="w-4 h-4 text-neutral-700 dark:text-neutral-400" />
                <div className=" hidden md:block bg-neutral-100 dark:bg-neutral-800 rounded-sm shadow-inner text-sm ">
                  ⌘K
                </div>
              </div>
            </div>
            <p className="mt-2 text-sm text-secondary-foreground">
              Click on the above input
            </p>
            {!!open && (
              <SearchModal
                containerRef={containerRef}
                open={open}
                setOpen={setOpen}
              />
            )}
          </div>
          <div className="border  rounded-xl border-border col-span-1 h-40 pt-4 w-auto flex flex-col  items-center">
            <p>Tooltips</p>
            <div className="mt-6 w-full justify-evenly flex items-center gap-3">
              <Tooltip icon={<Github />} tipName={"Github"} />
              <Tooltip icon={<LinkedinIcon />} tipName={"Linkedin"} />
              <Tooltip
                icon={
                  <button className="border border-border rounded-md cursor-pointer px-2 py-1">
                    Hello
                  </button>
                }
                tipName={"This is button"}
              />
              <Tooltip icon={<HomeIcon />} tipName={"Home"} />
              <Tooltip icon={<ArrowLeft />} tipName={"Back"} />
            </div>
          </div>

          <div className="border gap-4 rounded-xl border-border col-span-2 h-155 pt-4 w-auto flex flex-col justify-center items-center">
            <FileUpload />
          </div>
          <div className="border rounded-xl border-border col-span-1 h-fit pt-4 w-auto flex flex-col justify-center items-center">
            <ContactForm />
          </div>
          <div className="border gap-2 py-3 rounded-xl border-border col-span-1 col-end-3 h-fit pt-4 w-auto flex flex-col justify-center items-center">
            <RetroButton name="Retro Button" />
            <RetroButton2 name="Don`t Click me" />
            <ToggleTool />
          </div>
        </div>
      </section>
    </div>
  );
}

const RetroButton = ({ name }: { name: string }) => {
  return (
    <button
      className="relative px-5 md:px-[50px] py-[13px] text-base font-extralight tracking-[1px] border border-black dark:border-neutral-300 text-neutral-900 cursor-pointer bg-transparent select-none outline-none after:content-[''] after:absolute after:top-[7px] after:left-[7px] after:w-full after:h-full after:bg-[#ffe54c] dark:after:bg-yellow-600 after:-z-10 after:transition-all after:duration-200 hover:after:top-0 hover:after:left-0"
      role="button"
    >
      {name}
    </button>
  );
};

const RetroButton2 = ({ name }: { name: string }) => {
  return (
    <button
      className="relative flex items-center justify-center h-[48px] px-[25px] md:px-[40px] max-w-full text-base leading-6 font-sans text-[#111] bg-[#fee6e3] border-2 border-[#111] dark:border-neutral-600 rounded-[8px] cursor-pointer select-none text-center no-underline touch-manipulation after:content-[''] after:absolute after:top-[-2px] after:left-0 after:w-full after:h-[48px] after:bg-[#111] dark:after:bg-neutral-600 after:rounded-[8px] after:z-[-1] after:transform after:translate-x-[8px] after:translate-y-[8px] after:transition-transform after:duration-200 after:ease-out hover:after:translate-x-0 hover:after:translate-y-0 hover:outline-none active:bg-[#ffdeda] active:outline-none"
      role="button"
    >
      {name}
    </button>
  );
};

const ToggleTool = () => {
  return (
    <div className="relative w-[30px] h-[20px]">
      <input
        type="checkbox"
        className="peer appearance-none w-full h-full bg-[#dfe1e4] rounded-[72px] m-0 relative transition-all duration-[100ms] ease-out cursor-default hover:bg-[#c9cbcd] checked:bg-green-500 checked:hover:bg-green-600"
      />
      <span className="pointer-events-none absolute left-[3px] top-[3px] w-[14px] h-[14px] rounded-full bg-white transition-all duration-[100ms] ease-out peer-checked:left-[13px]"></span>
    </div>
  );
};

type TooltipProps = {
  icon: ReactNode;
  link?: string;
  className?: string;
  tipName: string;
  target?: boolean;
};

const Tooltip = ({
  icon,
  link,
  className,
  tipName,
  target = true,
}: TooltipProps) => {
  return (
    <div className="flex gap-4 font-mono">
      <div className="text-center">
        <a
          href={link || "#"}
          target={target ? "_blank" : "_self"}
          className={` ${className} relative inline-flex w-10 h-10 items-center justify-center group`}
        >
          {icon}
          <span
            className="
              absolute bottom-full left-1/2 -translate-x-1/2 mb-3
              px-3 py-1 rounded bg-neutral-300 dark:text-neutral-200 dark:bg-neutral-800 text-sm font-semibold
              opacity-0 invisible translate-y-2
              group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
              transition-all duration-200 ease-in-out
              pointer-events-none
            "
          >
            {tipName}
            <span
              className="
                absolute left-1/2 top-full -translate-x-1/2
                border-x-4 border-x-transparent border-t-4 border-t-neutral-300 dark:border-t-neutral-800
              "
            ></span>
          </span>
        </a>
      </div>
    </div>
  );
};
