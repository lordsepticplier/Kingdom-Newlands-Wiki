import { Link } from 'react-router-dom';
import './Footer.css';
import Logo from './images/Logo.png'
import youtube from './images/youtube.png'
import discord from './images/discord.jpg'
import twitch from './images/twitch.png'
import phone from './images/phone.png'
import mail from './images/mail.png'

function Footer() {
  return (
    <footer>
      <ul>
			<li class="footer_logo">
        <Link to="/"><img src={Logo} width="100px" height="auto" alt="logo"/></Link>
			</li>
			<div class="footer_email">kingdom@gmail.com<img src={mail} width="25px" height="auto" alt="logo"/></div>
			<div class="footer_phone">64-21-6629-932<img src={phone} width="25px" height="auto" alt="logo"/></div>
			<li class="footer_contact">
				<button><img src={youtube} width="25px" height="auto" alt="logo"/></button>
				<button><img src={discord} width="25px" height="auto" alt="logo"/></button>
				<button><img src={twitch} width="25px" height="auto" alt="logo"/></button>
				<Link to="/Contact">Contact</Link>
			</li>
		  </ul>
    </footer>
  );
}

export default Footer;
