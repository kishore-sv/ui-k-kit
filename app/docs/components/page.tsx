import Link from "next/link";

export default function ComponentsPage() {
  return (
    <div className=" w-full p-4">
      <h1 className="text-5xl font-bold ">Components</h1>
      <p className=" text-lg mt-3 max-w-lg text-muted-foreground">
        Here you can find all the components available in the library. We are
        working on adding more components.
      </p>
      <div className=" w-full grid grid-cols-1 md:grid-cols-3 mt-3 px-4 space-x-2 space-y-3">
        <Link
          href="/docs/components/accordion"
          className=" text-lg font-medium text-primary py-2 hover:underline underline-offset-2 "
        >
          Accordion
        </Link>
         <Link
          href="/docs/components/accordion"
          className=" text-lg font-medium text-primary py-2 hover:underline underline-offset-2 "
        >
          Alret
        </Link>
         <Link
         href="/docs/components/accordion"
          className=" text-lg font-medium text-primary py-2 hover:underline underline-offset-2 "
        >
          Search Model
        </Link>
         <Link
          href="/docs/components/accordion"
          className=" text-lg font-medium text-primary py-2 hover:underline underline-offset-2 "
        >
          Terminal
        </Link>
         <Link
         href="/docs/components/accordion"
          className=" text-lg font-medium text-primary py-2 hover:underline underline-offset-2 "
        >
          Somthing
        </Link>
      </div>
    </div>
  );
}
