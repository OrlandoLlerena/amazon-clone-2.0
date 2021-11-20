import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header className="sticky top-0 z-50">
      {/* main navbar */}
      {/* Icon section */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex item-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/* searchbar section*/}
        <div className="hidden sm:flex h-10 items-center rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 ">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* shop section */}
        <div className="text-white">
          <div>
            <p>Hello Orlando Llerena</p>
            <p>Account & Lists</p>
          </div>
          <div>
            <p>More things here</p>
          </div>
          <div>
            <p>cart info here </p>
          </div>
        </div>
      </div>

      {/* secondary navbar */}
      <div></div>
    </header>
  );
}

export default Header;
