"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DarkModeToggle from "./DarkModeToggle";
import BurgerMenu from "./BurgerMenu";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const MenuItems = [
  {
    id: 1,
    name: "Projects",
    link: "/projects",
  },
  {
    id: 2,
    name: "About me",
    link: "/about-me",
  },
  {
    id: 3,
    name: "Contact me",
    link: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const MyPortal = (children: React.ReactNode) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    if (!mounted) return null; // Avoid rendering on the server

    return createPortal(children, document.body);
  };
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <nav className="border-b border-border bg-transparent sticky top-0 z-50 backdrop-blur-xl shadow-md dark:shadow-secondary h-[75px] ">
      <BlurFade delay={0.25}>
        <div className="max-w-[90rem] mx-auto flex justify-between items-center px-4 py-4">
          <div className="flex items-center gap-4 md:gap-6">
            <Link
              href="/"
              className="text-xl md:text-3xl relative font-semibold before:absolute before:block before:w-1/4 before:h-[3px] before:top-0 before:right-0 before:bg-primary after:block after:w-1/4 after:h-[3px] after:absolute after:bottom-0 after:left-0 after:bg-primary hover:before:w-full hover:after:w-full after:duration-300 before:duration-300"
            >
              EHSAN
            </Link>
            <ul className="md:flex gap-4 md:gap-6 hidden">
              {MenuItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    className={`${
                      pathname === item.link ? "bg-zinc-200 dark:bg-zinc-700" : ""
                    } px-2 py-1 rounded hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:text-background duration-300`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-6">
            <DarkModeToggle />
            <BurgerMenu isMenuOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
          </div>
        </div>
      </BlurFade>
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed w-full h-svh top-[60px] inset-0 bg-gray-700/50 dark:bg-gray-900/50 z-40"
        ></div>
      )}

      {MyPortal(
        <>
          <div
            className={` z-50 transform transition-transform duration-300 fixed top-[60px] pt-10 right-0 h-full w-[250px] bg-secondary  ${
              isMenuOpen ? "translate-x-0" : "translate-x-full "
            }`}
          >
            <ul className="flex flex-col gap-4 p-4">
              {MenuItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    onClick={() => setIsMenuOpen(false)}
                    className={`${
                      pathname === item.link ? "bg-zinc-200 dark:bg-zinc-700" : ""
                    } p-2 rounded hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:text-background duration-300 flex flex-col items-center `}
                  >
                    {item.name}
                    <div className="block w-[80%] h-[3px]  bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
