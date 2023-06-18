"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import LogoInverted from "../../icons/logo-inverted.svg";
import CloseIcon from "../../icons/close.svg";
import MenuIcon from "../../icons/menu.svg";

function useWindowWidth() {
  /**
   * React hook to get window width
   */
  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      /* Get width only in browser */
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        if (windowWidth !== window.innerWidth) {
          setWindowWidth(window.innerWidth);
        }
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    } else {
      return false;
    }
  }, [windowWidth]);
  return windowWidth;
}
export default function Header() {
  const [mobileDisplay, setMobileDisplay] = useState(false);
  const windowWidth = useWindowWidth();
  const pathname = usePathname();
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Artists",
      link: "/artists",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  useEffect(() => {
    document
      .querySelector("body")
      .classList.toggle("overflow-hidden", mobileDisplay && windowWidth < 1024);
  }, [mobileDisplay, windowWidth]);
  return (
    <header className="flex h-[5%] w-full flex-wrap items-center justify-between gap-4 overflow-hidden bg-secondary px-4 lg:flex-nowrap lg:px-32">
      <LogoInverted
        className={`h-auto w-24 ${
          pathname === "/" && windowWidth >= 1024 && "invisible"
        }`}
      />
      <button
        className={`h-16 w-16 lg:hidden ${
          mobileDisplay
            ? "text-primary"
            : "text-tertiary hover:text-primary focus-visible:text-primary"
        }`}
        onClick={() => setMobileDisplay(!mobileDisplay)}
      >
        {mobileDisplay ? (
          <>
            <span className="sr-only">Close menu</span>
            <CloseIcon aria-hidden="true" />
          </>
        ) : (
          <>
            <span className="sr-only">Open menu</span>
            <MenuIcon aria-hidden="true" />
          </>
        )}
      </button>
      <nav
        className={`fixed bottom-0 top-24 w-screen bg-secondary lg:relative lg:inset-0 lg:h-auto lg:w-auto lg:bg-transparent ${
          mobileDisplay ? "left-0 motion-safe:animate-slide-right" : "left-full"
        }`}
        aria-label="Primary"
        aria-hidden={windowWidth < 1024 && !mobileDisplay}
      >
        <ul className="flex flex-col gap-12 px-8 py-8 lg:flex-row lg:p-0">
          {links.map((item, index) => {
            const isActive = pathname.startsWith(item.link);
            return (
              <li key={`link${index}`}>
                <Link
                  href={item.link}
                  className={`font-normal uppercase ${
                    isActive
                      ? "text-primary"
                      : "text-tertiary hover:text-primary focus-visible:text-primary motion-safe:transition-colors"
                  }`}
                  tabIndex={windowWidth < 1024 && !mobileDisplay ? -1 : 0}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
