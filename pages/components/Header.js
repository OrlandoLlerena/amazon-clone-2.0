import Image from "next/image";

function Header() {
  return (
    <header>
      {/* main navbar */}
      {/* Amazon - Icon */}
      <div className="flex items-center bg-amazon_blue p-1 py-2 flex-grow">
        <div className="mt-2 flex item-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* serchbar */}
        <div>
          <input type="text" />
        </div>
      </div>

      {/* secondary navbar */}

      <div>
        <h1>Im the header</h1>
      </div>
    </header>
  );
}

export default Header;
