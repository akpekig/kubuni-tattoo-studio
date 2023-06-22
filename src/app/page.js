import Logo from "../icons/logo.svg";
import Image from "next/image";
import Link from "next/link";
import Circle from "../icons/circle.svg";
import Transition from "./components/transition";

export default function Home() {
  return (
    <Transition>
      <main className="content-wrapper justify-between px-0 text-secondary lg:pl-24">
        <div className="flex w-1/2 flex-grow flex-col items-center px-24 pb-12">
          <Logo className="h-auto w-full" aria-hidden="true" />
          <h1 className="sr-only">Kubuni</h1>
          <h2 className="-mt-8 text-6xl leading-none">Tattoo studio</h2>
          <Link href="/contact" className="pill pill-dark mt-auto">
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
    </Transition>
  );
}
