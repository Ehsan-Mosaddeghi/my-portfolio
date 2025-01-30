import Image from "next/image";
import Link from "next/link";

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
  return (
    <nav className="">
      <div className="container mx-auto flex justify-between items-center py-2">
        <div className="flex items-center gap-6">
          <Image priority src="/logo.png" alt="logo" width={50} height={50} />
          <ul className="flex gap-6">
            {MenuItems.map((item) => (
              <li key={item.id}>
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-6">
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
