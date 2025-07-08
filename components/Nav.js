import ArrowDown from "../icons/ArrowDown";

function Nav() {
  const navLinkClass =
    "flex items-center gap-1 text-gray-900 font-semibold font-Serif hover:text-gray-400";

  return (
    <div>
      <nav className="flex gap-4">
        <a href="#" className={navLinkClass}>
          <span className="flex items-center gap-1">
            HOME <ArrowDown className="ml-2" />
          </span>
        </a>
        <a href="#" className={navLinkClass}>
          <span className="flex items-center gap-1">
            PAGES <ArrowDown className="ml-2" />
          </span>
        </a>
        <a href="#" className={navLinkClass}>
          TRAKING
        </a>
        <a href="#" className={navLinkClass}>
          <span className="flex items-center gap-1">
            SERVICES <ArrowDown className="ml-2" />
          </span>
        </a>
        <a href="#" className={navLinkClass}>
          <span className="flex items-center gap-1">
            BLOG <ArrowDown className="ml-2" />
          </span>
        </a>
      </nav>
    </div>
  );
}

export default Nav;
