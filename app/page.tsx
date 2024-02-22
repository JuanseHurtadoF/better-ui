import Form from "@/components/ui/form";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-2 pt-24">
      <div className="mb-10 relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/logos/logo-black.svg"
          alt="Next.js Logo"
          width={240}
          height={60}
          priority
        />
      </div>
      <div className="z-10 max-w-xl w-full items-center justify-center font-mono text-sm lg:flex flex-col">
        <p className="text-center flex w-full justify-center border-b mb-6 border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit static w-auto  rounded-xl border bg-gray-200 p-4 dark:bg-zinc-800/30">
          An open source library for building scalable applications.
          <br></br>
          Built with Tailwind CSS.
        </p>
      </div>
      <div className="max-w-xl w-full">
        <p className="text-4xl font-semibold text-center leading-[2.8rem] mb-10">
          From concept to code,<br></br> faster than ever.
        </p>

        <Form />
        <p className="mt-6 text-center text-sm flex justify-center font-mono">
          Launch Date: March 31st / 23
        </p>
      </div>
      <div className="z-10 max-w-xl w-full items-center justify-center font-mono text-sm lg:flex"></div>
    </main>
  );
}
