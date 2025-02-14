import { MessageCircleMore } from "lucide-react";
import Image from "next/image";

const contacts = [
  {
    link: "https://www.linkedin.com/in/ehsan-mosaddeghi-a54732307/",
    icon: "linkedIn",
  },
  {
    link: "https://github.com/Ehsan-Mosaddeghi",
    icon: "github",
  },
  {
    link: "http://t.me/EhsanHpy",
    icon: "telegram",
  },
  {
    link: "https://www.instagram.com/ehsan.hpy/",
    icon: "instagram",
  },
  {
    link: "https://discordapp.com/users/814819452309733406",
    icon: "discord",
  },
  {
    link: "https://mail.google.com/mail/u/0/?fs=1&to=xdehsanxd@gmail.com&su=Hello&body=I+want+to+contact+you&tf=cm",
    icon: "mail",
  },
];

const Contact = ({ type = "base" }: { type?: "footer" | "base" }) => {
  return (
    <>
      {type === "base" && (
        <div className="col-span-2 border rounded-lg bg-background border-border">
          <p className="text-lg flex gap-2 pt-3 pl-4 w-full">
            <MessageCircleMore /> Contact Me
          </p>
          <div className="grid grid-cols-3 gap-4 py-10 px-24 group">
            {contacts.map((contact) => (
              <a
                key={contact.link}
                href={contact.link}
                target="_blank"
                rel="noreferrer"
                className="group-hover:animate-pulse  relative cursor-pointer w-16 h-16 duration-300 hover:!opacity-100 hover:scale-105"
              >
                <Image src={`${contact.icon}.svg`} fill alt="asd" className="aspect-square dark:invert" />
              </a>
            ))}
          </div>
        </div>
      )}
      {type === "footer" && (
        <div className="flex items-center justify-center gap-4 py-10 px-24 group">
          {contacts.map((contact) => (
            <a
              key={contact.link}
              href={contact.link}
              target="_blank"
              rel="noreferrer"
              className="relative cursor-pointer w-12 h-12 duration-300 hover:-translate-y-1"
            >
              <Image src={`${contact.icon}.svg`} fill alt="asd" className="aspect-square rounded-xl" />
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Contact;
