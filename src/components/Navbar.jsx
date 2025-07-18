import { header } from "../portfolio";
const Navbar = () => {
  return (
    <header className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-6 text-gray-700 w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 w-full flex justify-between items-center font-inter">
        {/* Logo or Title */}
        <h1 className="text-2xl font-bold text-gray-800">{header.title}</h1>

        {/* Optional Navigation or Buttons (you can add here) */}
        {/* <nav className="flex gap-4"> ... </nav> */}
      </div>
    </header>
  );
};

export default Navbar;
