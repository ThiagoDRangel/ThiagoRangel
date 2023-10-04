import { useState } from 'react';
import './styles.css';

function HeaderMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header-menu">
      <header>
        <nav>
          <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </div>
          <ul className={`menu ${menuOpen ? 'open' : ''}`}>
            <li><a href="/">HOME</a></li>
            <li><a href="/sobre">ABOUT</a></li>
            <li><a href="/contato">FRONTEND</a></li>
            <li><a href="/contato">BACKEND</a></li>
            <li className="text-color"><a href="/contato">GITHUB</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default HeaderMenu;
