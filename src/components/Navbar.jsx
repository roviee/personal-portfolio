import { header } from "../portfolio";
const Navbar = () => {
  return (
    <header className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-6 w-full bg-white dark:bg-[#23283e]  text-gray-700 dark:text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 w-full flex justify-between items-center font-inter">
        {/* Logo or Title */}
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          {header.title}
        </h1>

        {/* Optional Navigation or Buttons */}
        {/* <nav className="flex gap-4"> ... </nav> */}
      </div>
    </header>
  );
};

export default Navbar;
