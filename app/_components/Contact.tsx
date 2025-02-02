import Image from "next/image";

const contacts = [
  {
    link: "https://www.linkedin.com/in/ehsan-mosaddeghi-a54732307/",
    icon: "linkedIn",
  },
  {
    link: "https://github.com/Ehsan-hpy",
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

const Contact = () => {
  return (
    <div className="col-span-2 border rounded-lg">
      <p className="text-lg mt-3 mx-6">Contact Me</p>
      <div className="grid grid-cols-3 place-content-center gap-4 py-10 px-24  justify-items-center  group">
        {contacts.map((contact) => (
          <a
            key={contact.link}
            href={contact.link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 group-hover:animate-pulse duration-300 hover:!opacity-100 hover:scale-110"
          >
            <Image src={`${contact.icon}.svg`} width={70} height={70} alt="asd" className="aspect-square" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
