"use client";
import { FileUpload } from "@/components/myComponents/file-upload";
import { cn } from "@/lib/utils";
import { ChangeEvent, useState } from "react";

export default function Accordion() {
  const [toggleView, setToggleView] = useState<"preview" | "code">("preview");

  const defaultCode = `const Input = () => {
  const isLoading = true;
  return (
    <div className="w-fit">
      <label className="block text-sm font-medium mb-1">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        disabled={isLoading}
        className={cn(
          isLoading
            ? "!bg-white !border-neutral-200 dark:!border-neutral-800 text-neutral-300 cursor-no-drop dark:!bg-neutral-950 dark:!text-neutral-500"
            : "",
          "w-full shadow transition-transform ease-in-out rounded-md border px-3 py-2 bg-neutral-50 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700"
        )}
        placeholder="john@example.com"
      />
    </div>
  );
};
`;

  const disabledCode = `const InputDisabled = () => {
  const isLoading = true;
  return (
    <div className="w-fit">
      <label className="block text-sm font-medium mb-1">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        disabled={isLoading}
        className={cn(
          isLoading
            ? "!bg-white !border-neutral-200 dark:!border-neutral-800 text-neutral-300 cursor-no-drop dark:!bg-neutral-950 dark:!text-neutral-500"
            : "",
          "w-full focus:outline-none focus:ring-1 focus:ring-neutral-400 shadow transition-transform ease-in-out rounded-md border px-3 py-2 bg-neutral-50 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700"
        )}
        placeholder="john@example.com"
      />
    </div>
  );
};`;

  const inputWithMessageCode = `const InputWithMessage = () => {
  return (
    <div className="w-fit">
      <label className="block text-sm font-medium mb-1">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        className={cn(
          "w-full focus:outline-none focus:ring-1 focus:ring-neutral-400 shadow transition-transform ease-in-out rounded-md border px-3 py-2 bg-neutral-50 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700"
        )}
        placeholder="john@example.com"
      />
      <p className="mt-2 text-sm max-w-xs text-wrap">
        This is sample message and you need to accept terms and conditions.
      </p>
    </div>
  );
};`;
  return (
    <div className="w-full p-4">
      <h1 className=" text-4xl font-bold text-primary">Input</h1>
      <p className="mt-3 text-secondary-foreground">
        Displays a form input field or a component that looks like an input
        field.
      </p>

      <div className="w-full mt-4">
        <div className="w-full h-fit py-1 px-2 flex gap-2">
          <button
            onClick={() => setToggleView("preview")}
            className={cn(
              " transition-colors ease-in-out cursor-pointer hover:bg-accent rounded-md px-2 py-1 text-lg font-semibold",
              toggleView === "preview"
                ? "text-secondary-foreground"
                : "text-muted-foreground"
            )}
          >
            Preview
          </button>
          <button
            onClick={() => setToggleView("code")}
            className={cn(
              "text-muted-foreground transition-colors ease-in-out cursor-pointer hover:bg-accent rounded-md px-2 py-1 text-lg font-semibold",
              toggleView === "code"
                ? "text-secondary-foreground"
                : "text-muted-foreground"
            )}
          >
            Code
          </button>
        </div>
        <div className="w-full px-2 ">
          <div className="w-full max-w-2xl overflow-x-scroll min-h-100 h-fit rounded-xl border border-border flex justify-center items-center ">
            {toggleView === "preview" ? (
              <Input />
            ) : (
              <pre className=" w-full overflow-x-scroll whitespace-pre-wrap px-2 py-3 text-lg font-medium ">
                {defaultCode}
              </pre>
            )}
          </div>
        </div>
      </div>

       <CodeBlock
        title="Input File"
        code={inputWithMessageCode}
        component={<FileUpload />}
      />

      <CodeBlock
        title="Disabled"
        code={disabledCode}
        component={<InputDisabled />}
      />
      <CodeBlock
        title="Input With Message"
        code={inputWithMessageCode}
        component={<InputWithMessage />}
      />

    </div>
  );
}

const CodeBlock = ({
  title,
  code,
  component,
}: {
  title: string;
  code: string;
  component: React.ReactNode;
}) => {
  const [toggleView, setToggleView] = useState<"preview" | "code">("preview");

  return (
    <div className="w-full mt-10">
      <h2 className="text-xl font-bold my-4">{title}</h2>
      <div className="w-full h-fit py-1 px-2 flex gap-2">
        <button
          onClick={() => setToggleView("preview")}
          className={cn(
            " transition-colors ease-in-out cursor-pointer hover:bg-accent rounded-md px-2 py-1 text-lg font-semibold",
            toggleView === "preview"
              ? "text-secondary-foreground"
              : "text-muted-foreground"
          )}
        >
          Preview
        </button>
        <button
          onClick={() => setToggleView("code")}
          className={cn(
            "text-muted-foreground transition-colors ease-in-out cursor-pointer hover:bg-accent rounded-md px-2 py-1 text-lg font-semibold",
            toggleView === "code"
              ? "text-secondary-foreground"
              : "text-muted-foreground"
          )}
        >
          Code
        </button>
      </div>
      <div className="w-full px-2 ">
        <div className="w-full max-w-2xl overflow-x-scroll min-h-100 h-fit rounded-xl border border-border flex justify-center items-center ">
          {toggleView === "preview" ? (
            component
          ) : (
            <pre className=" overflow-y-scroll max-h-140 h-max w-full overflow-x-scroll whitespace-pre-wrap px-2 py-3 text-lg font-medium ">
              {code}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
};

const Input = () => {
  return (
    <div className="w-fit">
      <label className="block text-sm font-medium mb-1">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        className={cn(
          "w-full focus:outline-none focus:ring-1 focus:ring-neutral-400 shadow transition-transform ease-in-out rounded-md border px-3 py-2 bg-neutral-50 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700"
        )}
        placeholder="john@example.com"
      />
    </div>
  );
};

const InputWithMessage = () => {
  return (
    <div className="w-fit">
      <label className="block text-sm font-medium mb-1">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        className={cn(
          "w-full focus:outline-none focus:ring-1 focus:ring-neutral-400 shadow transition-transform ease-in-out rounded-md border px-3 py-2 bg-neutral-50 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700"
        )}
        placeholder="john@example.com"
      />
      <p className="mt-2 text-sm max-w-xs text-wrap">
        This is sample message and you need to accept terms and conditions.
      </p>
    </div>
  );
};

const InputDisabled = () => {
  const isLoading = true;
  return (
    <div className="w-fit">
      <label className="block text-sm font-medium mb-1">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        disabled={isLoading}
        className={cn(
          isLoading
            ? "!bg-white !border-neutral-200 dark:!border-neutral-800 text-neutral-300 cursor-no-drop dark:!bg-neutral-950 dark:!text-neutral-500"
            : "",
          "w-full focus:outline-none focus:ring-1 focus:ring-neutral-400 shadow transition-transform ease-in-out rounded-md border px-3 py-2 bg-neutral-50 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700"
        )}
        placeholder="john@example.com"
      />
    </div>
  );
};


// const InputFile=()=>{
//     const [file, setFile] = useState<File | null>(null);

//    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setFile(e.target.files?.[0] ?? null);
//   };
//   return(

//   )
// }