"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import ContactForm from "@/components/myComponents/contact-form";

export default function FormPage() {
  const [toggleView, setToggleView] = useState<"preview" | "code">("preview");

  const defaultCode = `const Form = () => {
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

  return (
    <div className="w-full p-4">
      <h1 className=" text-4xl font-bold text-primary">Input</h1>
      <p className="mt-3 text-secondary-foreground">
        Displays a form with input fields.
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
          <div className="w-full max-w-2xl overflow-x-scroll min-h-100 h-fit rounded-xl border border-border flex flex-col px-10 py-4 justify-center items-center ">
            {toggleView === "preview" ? (
              <ContactForm />
            ) : (
              <pre className=" w-full overflow-x-scroll whitespace-pre-wrap px-2 py-3 text-lg font-medium ">
                {defaultCode}
              </pre>
            )}
          </div>
        </div>
      </div>

      {/* <CodeBlock
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
      /> */}
    </div>
  );
}
