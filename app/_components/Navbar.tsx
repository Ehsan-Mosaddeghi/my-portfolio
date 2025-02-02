"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuItems = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Contact",
    link: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="border-b sticky top-0 z-50 backdrop-blur-md ">
      <BlurFade delay={0.25} inView>
        <div className=" max-w-[90rem] mx-auto flex justify-between items-center px-4 py-2">
          <div className="flex items-center gap-6">
            <Image priority src="/logo.png" alt="logo" width={50} height={50} />
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
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </div>
        </div>
      </BlurFade>
    </nav>
  );
};

export default Navbar;
