import Link from "next/link";
import Search from "./Search";


export default function Nav() {
  return (
    <nav className="flex flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto">
        <Search/>
      
      <Link href="/about">
        <a className="mx-5 cursor-pointer hover:text-indigo-300">
          Login
        </a>
      </Link>
    </nav>
  );
}
