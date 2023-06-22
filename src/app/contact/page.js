import Transition from "../components/transition";

export default function Contact({ searchParams }) {
  const TextArea = () => {
    return ["Arthur", "Cheri", "Gabriel"].includes(searchParams?.artist) ? (
      <textarea
        className="col-span-full row-span-6"
        defaultValue={
          ["Arthur", "Cheri", "Gabriel"].includes(searchParams?.artist) &&
          `Now I really want a tattoo! I'd like to book ${searchParams?.artist} as my artist.`
        }
      />
    ) : (
      <textarea
        className="col-span-full row-span-6"
        placeholder="I want to know..."
      />
    );
  };
  return (
    <Transition>
      <main className="flex min-h-[95vh] flex-col items-center gap-8 bg-secondary p-12 text-tertiary lg:flex-row lg:justify-between lg:px-44 lg:py-24">
        <div>
          <h2 className="text-6xl uppercase leading-none text-primary">
            Get in touch
          </h2>
          <p className="mt-8">Let&apos;s talk</p>
        </div>
        <form className="grid w-3/4 grid-rows-5 gap-4 lg:w-1/2 lg:grid-cols-2 lg:grid-rows-4">
          <label className="sr-only">Name</label>
          <input
            type="text"
            className="col-span-full"
            placeholder="Mhoselty C"
          />
          <label className="sr-only">Email</label>
          <input
            type="text"
            className="lg:col-start-1"
            placeholder="address@domain.com"
          />
          <label className="sr-only">Number</label>
          <input
            type="text"
            className="lg:col-start-2"
            placeholder="0123456789"
          />
          <label className="sr-only">Message</label>
          <TextArea />
          <button type="submit" className="pill pill-light mx-auto lg:ml-[85%]">
            Send
          </button>
        </form>
      </main>
    </Transition>
  );
}
