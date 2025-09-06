import { GithubIcon } from "lucide-react";
import Link from "next/link";

export default function Footer(){
    return(
         <div className="flex items-center justify-center border-t border-border w-full pt-2 pb-4 gap-4 bg-background">
              <Link
                href="https://github.com/kishore-sv"
                target="Github"
                className=" opacity-50 hover:opacity-[1] flex justify-center items-center gap-1 transition-opacity ease-in-out  "
              >
                <GithubIcon className=" w-[1.2rem] h-[1.2rem] shrink-0" />
                <span>@kishore-sv</span>
              </Link>

              <Link
                href="https://x.com/kishore_sv_7"
                target="X"
                className=" opacity-50 hover:opacity-[1] flex justify-center items-center gap-1 transition-opacity ease-in-out  "
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
                <span>@kishore_sv_7</span>
              </Link>
            </div>
    )
}