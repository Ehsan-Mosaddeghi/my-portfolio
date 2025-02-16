"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DarkModeToggle from "./DarkModeToggle";

const MenuItems = [
  {
    id: 2,
    name: "Projects",
    link: "/projects",
  },
  {
    id: 3,
    name: "About me",
    link: "/about-me",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="border-b border-border sticky top-0 z-50 backdrop-blur-xl ">
      <BlurFade delay={0.25} inView>
        <div className=" max-w-[90rem] mx-auto flex justify-between items-center px-4 py-2">
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-xl md:text-3xl relative font-semibold before:absolute before:block before:w-1/4 before:h-[3px] before:top-0 before:right-0 before:bg-primary after:block after:w-1/4 after:h-[3px] after:absolute after:bottom-0 after:left-0 after:bg-primary hover:before:w-full hover:after:w-full after:duration-300 before:duration-300"
            >
              EHSAN
            </Link>
            <ul className="flex gap-6">
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
          </div>
        </div>
      </BlurFade>
    </nav>
  );
};

export default Navbar;
