import Link from "next/link";

const Links = [
  {
    name: "Get Started",
  },
  {
    name: "Inroduction",
    link: "/docs",
  },
  {
    name: "Components",
    link: "/docs/components",
  },
  {
    name: "Components",
  },
  {
    name: "Input",
    link: "/docs/components/input",
  },
  {
    name: "Nav Bars",
    link: "/docs/components/nav",
  },
  {
    name: "Search Model",
    link: "/docs/components/search-model",
  },
  {
    name: "Form",
    link: "/docs/components/form",
  },
];

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full min-h-[90vh] h-full overflow-x-scroll md:px-16 flex mt-18 gap-6">
      <section className="hidden md:block h-full p-4 min-w-[16%] overflow-x-scroll">
        <div className="flex w-full h-fit flex-col gap-1">
          {Links.map((link, idx) => {
            if (link.link === undefined)
              return (
                <h2 key={idx} className="text-lg font-medium">
                  {link.name}
                </h2>
              );
            return (
              <Link key={idx} href={link.link} className="hover:bg-muted text-secondary-foreground transition-colors ease-in-out px-2 py-2 rounded-md">
                {link.name}
              </Link>
            );
          })}
        </div>
      </section>
      <section className="h-full w-full border-l px-10 border-border ">{children}</section>
      <section className=" hidden md:block h-full min-w-[18%] py-4 ">
        {/* <p className="text-secondary-foreground text-sm">On This Page</p> */}
      </section>
    </div>
  );
}
