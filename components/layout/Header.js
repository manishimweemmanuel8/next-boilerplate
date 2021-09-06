import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="bg-white-100 text-gray-900 shadow w-full">
      <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0">
            <Image
              src="/images/logo.png"
              width={40}
              height={40}
              alt="logo"
            />
            <span className="ml-3 text-xl">Event Finder</span>
          </a>
        </Link>

        <Nav />
      </div>
    </header>
  );
}
