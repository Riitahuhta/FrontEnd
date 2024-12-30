import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="bg-black text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Muistiinpano sovellus
        </h1>
        <nav className="flex space-x-4">
          <Link className="hover:underline" to="/">
            Home
          </Link>
          <Link className="hover:underline" to="/add">
            Add
          </Link>
          <Link className="hover:underline" to="/list">
            List
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;