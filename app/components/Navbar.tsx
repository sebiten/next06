import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export const links = [
  { href: "/", text: "Inicio", target: "_parent" },
  {
    href: "/abelardo",
    text: "¿Quien es Abelardo ? ",
    target: "_self",
  },
  {
    href: "/favorites",
    text: "Favoritos ",
    target: "_self",
  },
  // {
  //   href: "/",
  //   text: "Redactar Post",
  // },
  {
    href: "/servicios",
    text: "Servicios",
  },
  {
    href: "https://www.instagram.com/abelardo.blog/",
    icon: <FaInstagram size={22} />,
    target: "_blank",
  },
];
export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-8 sticky top-0 drop-shadow-xl z-10">
      <div className="w-full 3xl:w-6/12 xl:w-6/12 prose-xl mx-auto flex justify-between flex-col sm:flex-row ">
        <div className="text-xl font-bold text-white grid place-content-center mb-2 md:mb-0 ">
          <Link
            target="_parent"
            href="/"
            className="text-center text-yellow-500 font-bold uppercase no-underline"
          >
            Abelardo
            <span className="text-white font-normal">Blog</span>
          </Link>
        </div>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-sm lg:text-5xl">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-white no-underline text-xs uppercase m-auto hover:text-yellow-200"
              target={link.target || ""}
            >
              {link.icon ? link.icon : link.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
