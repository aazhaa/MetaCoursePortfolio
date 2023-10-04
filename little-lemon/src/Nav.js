import {Link} from "react-router-dom";
import './stylesheet.css';

function Nav({ location }) {
  const navStyle = location === 'header' ? 'header-nav-style' : 'footer-nav-style';

  return (
    <nav className={navStyle}>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>About</Link></li>
        <li><Link to='/'>Menu</Link></li>
        <li><Link to='/'>Reservations</Link></li>
        <li><Link to='/'>Order</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
