"use client";

const components = [
  {
    title: "Input",
    slug: "input",
  },
  {
    title: "Nav Bars",
    slug: "nav",
  },
  {
    title: "Search Model",
    slug: "search-model",
  },
  {
    title: "Form",
    slug: "form",
  },
];

import {
  ArrowRight,
  FolderKanban,
} from "lucide-react";
import Link from "next/link";
import { ReactNode, RefObject, useEffect, useRef, useState } from "react";

type filteredType = {
  name: string;
  icon?: ReactNode;
  iconName: string;
  imageSource?: string;
}[];

const defaultresults = [
  { name: "", iconName: "Get Started" },
  { name: "/docs", icon: <ArrowRight />, iconName: "Docs" },
  { name: "/docs/components/", icon: <ArrowRight />, iconName: "Components" },
  { name: "", iconName: "Components" },
  ...components.map((component) => ({
    name: `/docs/components/${component.slug}`,
    icon: <FolderKanban />,
    iconName: component.title,
    imageSource: "",
  })),
];

export default function RootSearchModal({
  open,
  containerRef,
  setOpen,
}: {
  open: boolean;
  containerRef?: RefObject<HTMLDivElement | null>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<filteredType>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [highlightIndex, setHighlightIndex] = useState<number>(-1);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
      inputRef.current?.focus();
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    if (input.trim() === "") {
      setResults([]);
      setHighlightIndex(-1);
    } else {
      const filtered = defaultresults.filter(
        (icon) =>
          icon.name.toLowerCase().includes(input.toLowerCase()) ||
          icon.iconName.toLowerCase().includes(input.toLowerCase())
      );
      setResults(filtered);
      setHighlightIndex(0);
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open, inputRef, input]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (results.length === 0) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setHighlightIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        setHighlightIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
      }

      if (e.key === "Enter" && highlightIndex >= 0) {
        e.preventDefault();

        // If searching -> take from results
        const selected =
          results.length > 0
            ? results[highlightIndex]
            : defaultresults[highlightIndex];

        if (selected) {
          // Find the element in DOM and trigger click
          const el = document.getElementById(`search-item-${highlightIndex}`);
          el?.click(); // simulate click
          setOpen(false);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [results, highlightIndex, open, setOpen]);

  return (
    <>
      {!!open && (
        <div className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-[0.5px] flex items-start justify-center pt-20">
          <div
            ref={containerRef}
            className=" w-[80%] lg:w-[40%] border-4 border-border max-h-[35rem] overflow-y-scroll bg-background rounded-xl overflow-hidden   "
          >
            <form
              role="search"
              aria-label="Site search"
              className=" border-b border-border sticky top-0 bg-secondary "
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="search"
                name="q"
                placeholder="What are you searching for?"
                aria-label="Search input"
                className=" px-5 py-4 w-full font-medium text-muted-foreground bg-transparent text-md  outline-none "
              />
            </form>
            <div
              aria-live="polite"
              className=" py-4 px-4 flex flex-col justify-center  "
            >
              {input.length > 0 ? (
                results.length > 0 ? (
                  results.map((icon, i) => (
                    <Link
                      id={`search-item-${i}`}
                      key={`${icon.name}-${i}-${icon.name}`}
                      href={icon.name}
                      onClick={() => setOpen(false)}
                      className={`text-sm transition-colors ease-in-out cursor-pointer p-2 rounded-lg flex gap-4 items-center
          ${highlightIndex === i ? "bg-accent" : ""}
          hover:bg-accent`}
                    >
                      {icon.icon && (
                        <div className="w-5 h-5 shrink-0 text-secondary-foreground">
                          {icon.icon}
                        </div>
                      )}
                      {icon.imageSource && (
                        <div className="w-6 h-6 shrink-0 border rounded">
                          <img
                            className="w-full h-full shrink-0"
                            src={icon.imageSource}
                            alt={icon.iconName}
                          />
                        </div>
                      )}
                      {icon.iconName}
                    </Link>
                  ))
                ) : (
                  <p className="text-sm">No result found</p>
                )
              ) : (
                defaultresults.map((icon, i) => {
                  if (icon.name === "")
                    return (
                      <div
                        key={i}
                        className="w-full h-6 border-b border-border mx-auto mb-2 mt-4"
                      >
                        {" "}
                        <span className="ml-3">{icon.iconName}</span>
                      </div>
                    );
                  return (
                    <Link
                      id={`search-item-${i}`}
                      key={`${icon.name}-${i}-${icon.name}`}
                      href={icon.name}
                      onClick={() => setOpen(false)}
                      className={`text-sm transition-colors ease-in-out cursor-pointer p-2 rounded-lg flex gap-4 items-center
        ${highlightIndex === i ? "bg-accent" : ""}
        hover:bg-accent`}
                    >
                      {icon.icon && (
                        <div className="w-5 h-5 shrink-0 text-secondary-foreground">
                          {icon.icon}
                        </div>
                      )}
                      {/* {icon.imageSource && (
                        <div className="w-6 h-6 shrink-0 border rounded">
                          <img
                            className="w-full h-full shrink-0"
                            src={icon.imageSource}
                            alt={icon.iconName}
                          />
                        </div>
                      )} */}
                   <p className="text-secondary-foreground">{icon.iconName}</p> 
                    </Link>
                  );
                })
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
