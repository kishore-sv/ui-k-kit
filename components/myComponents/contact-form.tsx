"use client";
import { Info, Loader2 } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState({
    username: false,
    email: false,
    message: false,
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const maxChar = 500;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      username: formValues.username.trim() === "",
      email: formValues.email.trim() === "",
      message: formValues.message.trim() === "",
    };

    setError(newErrors);

    if (Object.values(newErrors).some(Boolean)) return;

    try {
      setIsLoading(true);
      //   const json = JSON.stringify({
      //     name: formValues.username,
      //     email: formValues.email,
      //     message: formValues.message,
      //     access_key:process.env.NEXT_PUBLIC_WEB3_ACCESS_KEY,
      //   });
      //   const response = await fetch("https://api.web3forms.com/submit", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //       Accept: "application/json",
      //     },
      //     body: json,
      //   });
      //   const result = await response.json();
      //   if (result.success) {
      //     toast.success("Sent successfully. Thanks for your message", { position: "top-center" });
      //   }
      //   else {
      //     console.log(result)
      //     toast.error(`${result.message}`, {
      //       position: "top-center",
      //     });
      //   }
    } catch (error) {
      console.log(error, "in catch");
      //   toast.error(
      //     "Something went wrong while sending the message, please try again.",
      //     { position: "top-center" }
      //   );
    } finally {
      setIsLoading(false);
      setFormValues({ username: "", email: "", message: "" });
    }
  };

  return (
    <>
      <div className="mb-5 px-2 ">
        <h1
          className="text-3xl text-neutral-900 dark:text-neutral-200 font-bold"
        >
          Contact Me
        </h1>

        {/* <div
          className="flex gap-3 ml-2 mt-3 items-center"
        >
          <Link
            href="mailto:kishorevphs@gmail.com"
            target="_blank"
            className="relative  group cursor-pointer "
          >
            <Mail className="h-7 w-7 opacity-[.4] hover:opacity-[.9] group " />
            <span className=" absolute hidden group-hover:block px-2 py-1 opacity-[.5] lg:-left-2 bg-neutral-300 dark:bg-neutral-600 rounded-lg top-7 ">
              kishorevphs@gmail.com
            </span>
          </Link>
          <Link
            target="_blank"
            href={"https://github.com/kishore-sv"}
            className="opacity-[.4] hover:opacity-[.9] "
          >
            <Github size={28} />
          </Link>
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/kishore-sv-3253b9365/"}
            className="opacity-[.4] hover:opacity-[.9] "
          >
            <Linkedin size={28} />
          </Link>
          <Link
            target="_blank"
            href={"https://x.com/KISHORE_SV_7"}
            className="opacity-[.4] hover:opacity-[.9] "
          >
            <XIcon className="h-7 w-7" />
          </Link>
        </div> */}
      </div>

      <div className="flex justify-center items-center w-full h-full bg-neutral-100 text-neutral-900 dark:bg-neutral-800/5 dark:text-neutral-200 rounded-md  ">
        <div className="w-[98vw] md:w-[45vw] lg:w-[40vw] 2xl:w-[20vw] min-h-[100vh] lg:min-h-[70vh] flex flex-col items-center gap-15 py-4 px-6   z-20  lg:rounded-xl  lg:border-1 dark:border-neutral-700/50 border-neutral-300/50">
          <form
            onSubmit={handleSubmit}
            className=" w-full py-2 px-3 flex flex-col gap-5 "
          >
            <div className="flex flex-col gap-1  ">
              <label htmlFor="name" className="text-lg font-medium">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Jone Done"
                name="name"
                disabled={isLoading}
                value={formValues.username}
                onChange={(e) => {
                  setError({ ...error, username: false });
                  setFormValues({ ...formValues, username: e.target.value });
                }}
                className={` ${
                  !!error.username ? "outline  outline-red-400 " : ""
                }  autofill:bg-gray-700/30 bg-neutral-200 dark:placeholder:text-neutral-500  dark:bg-neutral-800 placeholder:text-md text-md p-2 rounded-md outline-none outline-offset-0 focus:outline-[1px] focus:outline-neutral-400/50 shadow-custom dark:shadow-custom-dark  `}
              />
            </div>

            <div className="flex flex-col gap-1  ">
              <label htmlFor="email" className="text-lg font-medium">
                Email
              </label>
              <input
                type="email"
                placeholder="ex@example.com"
                name="email"
                disabled={isLoading}
                value={formValues.email}
                onChange={(e) => {
                  setError({ ...error, email: false });
                  setFormValues({ ...formValues, email: e.target.value });
                }}
                className={`${
                  error.email ? "outline  outline-red-400" : ""
                } dark:placeholder:text-neutral-500   autofill:bg-gray-700/30 bg-neutral-200  dark:bg-neutral-800 placeholder:text-md text-md p-2 rounded-md outline-none outline-offset-0 focus:outline-[1px] focus:outline-neutral-400/50 shadow-custom dark:shadow-custom-dark `}
              />
            </div>

            <div className="flex flex-col gap-1  ">
              <label htmlFor="message" className="text-lg font-medium">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Hi bro, I want to ask ..."
                name="message"
                disabled={isLoading}
                value={formValues.message}
                onChange={(e) => {
                  setError({ ...error, message: false });
                  if (e.target.value.length <= maxChar) {
                    setFormValues({ ...formValues, message: e.target.value });
                  }
                }}
                className={` ${
                  !!error.message ? "outline  outline-red-400" : ""
                } dark:placeholder:text-neutral-500  resize-none  autofill:bg-gray-700/30 bg-neutral-200  dark:bg-neutral-800 placeholder:text-md text-md p-2 rounded-md outline-none outline-offset-0 focus:outline-[1px] focus:outline-neutral-400/50 shadow-custom dark:shadow-custom-dark `}
              />
              <div className="w-full flex justify-between items-center mt-1 ">
                {!!(error.email || error.message || error.username) && (
                  <p className="text-sm font-light flex justify-center items-center gap-1 text-red-400 capitalize ml-1 ">
                    <Info size={16} /> Please fill all the above fields
                  </p>
                )}
                <p className="text-sm text-neutral-400">
                  {formValues.message.length}/{maxChar} characters
                </p>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className=" 
                        shadow-[inset_0_2px_4px_rgba(0,0,0,0.12)] 
    dark:shadow-[inset_0_2px_4px_rgba(255,255,255,0.08)]
                         w-full mt-3 font-semibold hover:bg-neutral-200 dark:hover:bg-neutral-700 bg-neutral-300 dark:bg-neutral-800 cursor-pointer  py-2 px-3 flex justify-center items-center gap-1 rounded-lg "
            >
              {isLoading ? (
                <Loader2 className=" animate-spin " />
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
