import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <div className="relative ">
      <div className="container mx-auto flex items-center justify-center md:justify-end">
        <div className="relative text-gray-600 w-72">
          <form>
            <input
              type="search"
              name="search"
              id="search"
              className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none w-72 "
              placeholder="Search Events..."
            />

            <FaSearch className="absolute top-0 right-0 text-black mt-3 mr-4" />
          </form>
        </div>
      </div>
    </div>
  );
}
