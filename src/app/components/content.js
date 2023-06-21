"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Circle from "../../icons/circle.svg";
import Caret from "../../icons/caret.svg";

function ImageElement({ src, alt = "", clip, dark, circlePosition }) {
  return clip ? (
    <div
      className={`absolute inset-1/2 aspect-square w-[35rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cover ${
        dark
          ? "bg-secondary bg-blend-luminosity"
          : "bg-primary bg-blend-multiply"
      }`}
      style={{ backgroundImage: `url(${src})` }}
      role="presentation"
      aria-label={alt}
    />
  ) : (
    <>
      <Circle
        className={`absolute h-auto w-full ${circlePosition}`}
        aria-hidden="true"
      />
      <Image
        src={src}
        alt={alt}
        width="640"
        height="750"
        className="absolute inset-y-0 h-auto w-full object-cover mix-blend-hard-light grayscale lg:h-full"
      />
    </>
  );
}

export default function Content({
  blendCirclePosition = "inset-y-0",
  src,
  alt = "",
  clip = false,
  imageAfter = false,
  paragraphs,
  end = false,
  dark = false,
  heading,
  children,
}) {
  /**
   * Component for text content with image. Use the children prop to add visual heading with icon.
   */
  const sectionRef = useRef();
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    /**
     * Scroll to next section on click.
     */
    let target = sectionRef.current?.nextElementSibling;
    if (scroll && typeof window !== undefined) {
      if (!target) {
        /* Scroll back to top on click in last section */
        target = document.querySelector("header");
      }
      target.scrollIntoView({ behavior: "smooth" });
    }
    return (
      /* Reset scroll */
      setScroll(false)
    );
  }, [scroll]);
  return (
    <section
      className={`flex min-h-[95%] flex-wrap justify-between px-0 ${
        dark ? "bg-secondary text-tertiary" : "text-secondary"
      }`}
      ref={sectionRef}
    >
      <div
        className={`relative min-h-[50vh] w-full overflow-hidden lg:min-h-[89vh] lg:w-1/2 ${
          imageAfter && "order-last"
        }`}
      >
        <ImageElement
          circlePosition={blendCirclePosition}
          src={src}
          alt={alt}
          clip={clip}
        />
      </div>
      <div className="flex w-1/2 flex-grow flex-col items-center px-24 py-12">
        <h2 className="sr-only">{heading}</h2>
        <h2 className="text-6xl uppercase leading-none" aria-hidden="true">
          {children}
        </h2>
        {paragraphs.map((item, index) => (
          <p
            key={`section${index}`}
            className={index === paragraphs.length - 1 ? "my-8" : "mt-8"}
          >
            {item}
          </p>
        ))}
        {end ? (
          <button className="w-12 text-primary" onClick={() => setScroll(true)}>
            <Caret className="fill-current" aria-hidden="true" />
            <span className="text-primary">Back to top</span>
          </button>
        ) : (
          <button
            className="w-12 text-primary motion-safe:animate-bounce"
            onClick={() => setScroll(true)}
          >
            <span className="sr-only">Go down</span>
            <Caret className="rotate-180 fill-current" aria-hidden="true" />
          </button>
        )}
      </div>
    </section>
  );
}
