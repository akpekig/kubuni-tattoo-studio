import Transition from "../components/transition";
import Link from "next/link";

function Artist({ name, src, description }) {
  return (
    <article className="flex-[1_0_25%]">
      <div
        className="-mb-16 aspect-square h-1/2 max-h-64 rounded-full bg-secondary bg-cover bg-blend-luminosity mix-blend-exclusion"
        style={{ backgroundImage: `url(${src})` }}
        aria-hidden="true"
      />
      <h2 className="text-6xl leading-none">{name}</h2>
      <p className="my-8 w-3/4 whitespace-pre-wrap">{description}</p>
      <Link
        href={{
          pathname: "/contact",
          query: `artist=${name}`,
        }}
        className="pill pill-light"
      >
        Book
      </Link>
    </article>
  );
}
export default function Artists() {
  const bios = [
    {
      name: "Arthur",
      src: "/arthur.png",
      description: `From an early age, Arthur discovered the profound impact of art and found their true calling in the world of tattoos. Through intricate designs and meticulous execution, Arthur creates pieces that authentically reflect individuality and narratives.`,
    },
    {
      name: "Cheri",
      src: "/cheri.png",
      description: `As a fashion-forward artist, Cheri understands the importance of personal style and collaborates closely with clients to bring their tattoo ideas to life. Xe believes that tattoos are a form of wearable art, and xe works tirelessly to ensure that each piece is a reflection of their client's unique personality and story.`,
    },
    {
      name: "Gabriel",
      src: "/gabriel.jpeg",
      description: `In addition to their expertise in tattoo artistry, Gabriel's connection to the divine realm influences divinself creative process. Div find inspiration in scripture, prophecy, and hymns, infusing these elements into their designs. Div's goal is to create tattoos that evoke a sense of holiness and reverence, serving as reminders of the divine within each individual.`,
    },
  ];
  return (
    <Transition>
      <main className="content-wrapper flex-col justify-between gap-8 bg-secondary p-12 text-tertiary lg:flex-row lg:px-44 lg:py-24">
        {bios.map((item, index) => (
          <Artist
            key={`artist${index}`}
            name={item.name}
            src={item.src}
            description={item.description}
          />
        ))}
      </main>
    </Transition>
  );
}
