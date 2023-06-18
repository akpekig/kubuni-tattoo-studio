import Logo from "../icons/logo.svg";
import Image from "next/image";
import Link from "next/link";
import Circle from "../icons/circle.svg";

export default function Home() {
  return (
    <main className="flex min-h-[95%] flex-wrap justify-between px-0 lg:pl-24 text-secondary">
      <div className="flex w-1/2 flex-grow flex-col items-center px-24 pb-12">
        <Logo className="h-auto w-full" aria-hidden="true" />
        <h1 className="sr-only">Kubuni</h1>
        <h2 className="-mt-8 text-6xl leading-none">
          Tattoo studio
        </h2>
        <Link
          href="/contact"
          className="mt-auto rounded-3xl border border-secondary bg-secondary px-8 py-1 font-medium uppercase text-tertiary hover:bg-transparent hover:text-secondary focus-visible:bg-transparent focus-visible:text-secondary motion-safe:transition-colors"
        >
          Let&apos;s chat
        </Link>
        <p className="mt-4 w-1/2 text-center">
          Get in touch to book your next tattoo with us
        </p>
      </div>
      <div className="relative min-h-[50vh] w-full overflow-hidden lg:min-h-[89vh] lg:w-1/2">
        <Circle className="absolute h-auto w-full lg:-top-32" />
        <Image
          src="/home-hero.png"
          alt="Black man facing away with his tattooed arms outstretched"
          width="640"
          height="750"
          className="absolute inset-y-0 -right-16 w-auto mix-blend-hard-light grayscale lg:h-full"
        />
      </div>
    </main>
  );
}
