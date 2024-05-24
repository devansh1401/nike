import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import React, {useState} from "react";

const Nav = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className={`flex-1 flex justify-center items-center gap-16 ${showMenu ? '' : 'hidden'} max-lg:hidden`}>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-monts errat leading-normal text-lg text-slate-grey"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block" onClick={toggleMenu}>
            <img src={hamburger} 
                 alt="hamburger" 
                 width={25}
                 height={25}   
                 />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
