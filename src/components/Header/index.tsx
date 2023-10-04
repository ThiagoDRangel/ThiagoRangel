import { Link } from 'react-router-dom';
import HeaderMenu from '../HeaderMenu';
import avatar from '../../assets/images/avatar.png';
import './styles.css';

function Header() {
  return (
    <header className="header-container">
      <div><img src={avatar} alt="profile" /></div>
      <HeaderMenu />
    </header>
  );
}

export default Header;
