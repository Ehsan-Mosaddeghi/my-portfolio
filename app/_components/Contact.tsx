import { MessageCircleMore } from "lucide-react";
import Image from "next/image";

const contacts = [
  {
    link: "https://www.linkedin.com/in/ehsan-mosaddeghi-a54732307/",
    icon: "linkedIn",
    name: "LinkedIn",
  },
  {
    link: "https://github.com/Ehsan-Mosaddeghi",
    icon: "github",
    name: "GitHub",
  },
  {
    link: "http://t.me/EhsanHpy",
    icon: "telegram",
    name: "Telegram",
  },
  {
    link: "https://www.instagram.com/ehsan.hpy/",
    icon: "instagram",
    name: "Instagram",
  },
  {
    link: "https://discordapp.com/users/814819452309733406",
    icon: "discord",
    name: "Discord",
  },
  {
    link: "https://mail.google.com/mail/u/0/?fs=1&to=ehsan.frontdev@gmail.com&su=Hello&body=I+want+to+contact+you&tf=cm",
    icon: "mail",
    name: "Email",
  },
];

const Contact = ({ type = "base" }: { type?: "footer" | "base" }) => {
  return (
    <>
      {type === "base" && (
        <div className="col-span-2 border rounded-lg space-y-6 md:space-y-10 bg-background border-border">
          <p className="text-lg flex gap-2 pt-3 pl-4 w-full">
            <MessageCircleMore /> Contact Me
          </p>
          <div className="grid grid-cols-3 justify-items-center gap-y-8 text-center pb-8 px-10 ">
            {contacts.map((contact) => (
              <a
                key={contact.link}
                href={contact.link}
                target="_blank"
                rel="noreferrer"
                className="relative flex flex-col gap-1 items-center cursor-pointer w-12 h-12 duration-300 hover:!opacity-100 hover:shadow-lg hover:bg-stone-300 dark:hover:bg-stone-800 p-1 rounded-md group"
              >
                <img
                  src={`/${contact.icon}.svg`}
                  alt={contact.icon}
                  className="aspect-square dark:invert w-full transition-transform duration-200 group-hover:rotate-12"
                />
                <span className="opacity-70 ">{contact.name}</span>
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
