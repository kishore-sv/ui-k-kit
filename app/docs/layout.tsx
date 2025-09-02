export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full min-h-[90vh] h-fit overflow-x-scroll md:px-16 flex  gap-6">
      <section className="hidden md:block h-full p-4 min-w-[20%] border-r border-border overflow-x-scroll">
        <p className="text-secondary-foreground text-sm">On This Page links</p>
      </section>
      <section className="h-full w-full ">{children}</section>
      <section className=" hidden md:block h-full min-w-[18%] py-4 ">
        <p className="text-secondary-foreground text-sm">On This Page</p>
      </section>
    </div>
  );
}
