import Link from "next/link";

export default function Home() {
  return (
    <div className=" w-screen bg-background ">
      <div className=" w-full h-fit px-2 py-3 md:h-100 flex flex-col justify-center items-center ">
        <Link href="https://x.com/kishore_sv_7" className=" bg-muted py-1 px-3 rounded-2xl font-medium hover:bg-muted/60 transition-colors ease-in-out text-sm ">Follow along on Twitter</Link>
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
            target="_blank"
            className="cursor-pointer font-medium px-6 py-2 rounded-md border border-border hover:bg-accent transition-colors ease-in-out "
          >
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}
