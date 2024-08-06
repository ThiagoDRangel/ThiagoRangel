import { Link } from 'react-router-dom';
import './styles.css';

function HeaderMenu() {

  return (
    <div className="header-menu">
      <header>
        <nav>
          <ul className="">
            <li className="menu-item">
              <Link to="/home" className="icon">HOME</Link>
            </li>
            <li className="menu-item">
              <Link to="profile" className="icon">ABOUT</Link>
            </li>
            <li className="menu-item">
              <Link to="frontend" className="icon">FRONTEND</Link>
            </li>
            <li className="menu-item">
              <Link to="backend" className="icon">BACKEND</Link>
            </li>
            <li className="menu-item text-color">
              <a href="https://github.com/ThiagoDRangel" target="_blank" className="icon">GITHUB</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default HeaderMenu;
