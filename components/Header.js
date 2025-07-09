import Nav from "./Nav";
import Pentagon from "../icons/Pentagon";

function Header() {
  return (
    <div>
      <header className="h-24 w-full flex items-center justify-between px-6 bg-white">
        <div className="flex w-full pa-2 items-center justify-between">
          <div className="text-gray-900 font-semibold font-Serif text-2xl">
            <img className="img-fluid logo logo-display w-50 h-20" src="https://wordpress.meetmighty.com/cargoton/wp-content/uploads/2021/06/Logo-home-1.svg" alt="cargoton"/>
          </div>
          <div className="flex flex-row items-center gap-4">
            <span className="text-amber-400 font-bold  text-xl">|</span>
            <Nav />
            <button className="px-6 py-2 bg-amber-400 text-white hover:bg-amber-300 transition">
              GET A QUOTE
            </button>
            <button className="px-6 py-2 bg-zinc-800 text-white hover:bg-zinc-500 transition">
              SIGN IN
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
