"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function GlobalNavbar() {
  const pathName = usePathname();

  function isActiveNavBar(pathName: string, href: string) {
    return pathName === href;
  }

  return (
    <nav className="z-20 navigation flex items-center bg-no-repeat overflow-hidden justify-between px-4 fixed bg-black w-full">
      <div className="branding ">
        <Link href={"/"}>
          <Image src="/img/logo.png" width={152} height={32} alt="" />
        </Link>
      </div>

      <div className="navigation flex py-5 items-center">
        <div className="flex flex-row pr-5 mr-5  items-center h-[40px] border-neutral-300 border-r-[2px] border-opacity-50 text-sm">
          {/* {!isActiveNavBar(pathName, "/") && (
            <Link href="/" className="link px-5">
              Home
            </Link>
          )} */}

          <Link
            href="/blog"
            className="ml-2 link px-2 text-white hover:text-gray-300 transition md:text-lg"
          >
            Blog
          </Link>

          <Link
            href="/rovers"
            className="link px-2 text-white hover:text-gray-300 transition md:text-lg"
          >
            Rovers
          </Link>

          <Link
            href="/team"
            className="link px-2 text-white hover:text-gray-300 transition md:text-lg"
          >
            Team
          </Link>
         
          {/* <Link
            href="/vision"
            className="link px-3 text-white hover:text-gray-300 transition"
          >
            Vision
          </Link>
          <Link
            href="/project"
            className="link px-3 text-white hover:text-gray-300 transition"
          >
            Projects
          </Link>
          <Link
            href="/research"
            className="link px-3 text-white hover:text-gray-300 transition"
          >
            Research
          </Link> */}
        </div>

        <div className="flex">
          <Link
            href="https://docs.google.com/forms/d/18p0IscHi-b1JlCndJS_oB25pDUC4HvPRKsqbAO6_Jgc/edit?usp=drivesdk"
            className="sponsor-nav_button px-2 bg-orange-500 hover:bg-orange-600 hover:text-white transition rounded-md py-2 md:text-lg"
          >
            Become Sponsor
          </Link>
        </div>
      </div>
    </nav>
  );
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, className }) => (
  <Link
    href={href}
    className={`text-white hover:text-gray-300 transition ${className}`}
  >
    {children}
  </Link>
);
