"use client"
import Image from "next/image";
import ScrollLink from "./ui/scroll-link";
import { Url } from "next/dist/shared/lib/router/router";
function NavButton({ label, section }: { label: string; section:string}) {
  return (
    <ScrollLink className="btn" href={section} >
      {label}
    </ScrollLink>
    // <button className="h-auto w-auto text-black hover:font-medium px-2 border-1 shadow-md rounded-md font-sans">
    //   {label}
    // </button>
  );
}
export function Navbar() {
  return (
    <div className="flex h-12 md:h-16 w-screen border-b shadow-md justify-center text-sm md:text-xl md:justify-around bg-slate-100/35">
      <div className="flex">
        <div className="flex items-center overflow-hidden">
          <Image
            className="rounded-full"
            src="/logo.png"
            alt="logo"
            width={60}
            height={8}
          />
          <div className="text-bold m-2 text-2xl text-slate-600 font-extrabold font-sans text-transparent bg-clip-text bg-gradient-to-t from-blue-900 to-blue-200 hover:bg-gradient-to-r">
            ArtificialMinds
          </div>
        </div>
      </div>
      <div className="justify-center items-center gap-1 hidden md:inline-flex">
        <NavButton label="Course" section="#course"></NavButton>
        {/* <NavButton label="About Us"></NavButton>
        <NavButton label="Contact"></NavButton> */}
      </div>
    </div>
  );
}
