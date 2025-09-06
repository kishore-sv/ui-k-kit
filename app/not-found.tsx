import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className=" w-screen h-[80vh] p-10 bg-background text-foreground flex justify-center items-center flex-col ">
      <h2 className=" text-5xl font-bold ">Not Found</h2>
      <p className=" text-lg mt-4 text-muted-foreground text-shadow-muted ">
        Could not find requested resource
      </p>
      <Link
        href="/"
        className=" cursor-pointer mt-3 flex gap-2 items-center justify-center font-medium px-4 py-2 rounded-md bg-primary hover:bg-primary/80 transition-colors ease-in-out text-primary-foreground "
      >
        <ArrowLeft /> Return Back
      </Link>
    </div>
  );
}
