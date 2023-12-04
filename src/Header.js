import { Link } from 'react-router-dom';
import './Header.css';
import Logo from './images/Logo.png'


function Header() {
  return (
    <header>
      <Link to="/" id="logo"><img src={Logo} width="100px" height="auto" alt="logo" /></Link>
      <h1 id="Title">kingdom newlands wiki</h1>
      <nav className='navbar'id='navbar'>
        <Link to="/">Home</Link>
        <Link to="/enemies">Enemies</Link>
        <Link to="/mounts">Mounts</Link>
        <Link to="/units">Units</Link>
        <Link to="/buildings">Buildings</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
