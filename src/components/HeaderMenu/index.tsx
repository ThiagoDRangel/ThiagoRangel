import { useState } from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/home">
              <li className="icon">HOME</li>
            </Link>
            <Link to="profile">
              <li className="icon">ABOUT</li>
            </Link>
            <Link to="frontend">
              <li className="icon">FRONTEND</li>
            </Link>
            <Link to="backend">
              <li className="icon">BACKEND</li>
            </Link>
            <li className="text-color">
              <a href="https://github.com/ThiagoDRangel" target="_blank" className="icon">GITHUB</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default HeaderMenu;
