import { useNavigate } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const navigate = useNavigate();

  return (
    <nav className='navbar'>
      <ul>
        <li>
          <button onClick={() => navigate('/')}>Home</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('about')}>About</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('services')}>Our Services</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('contact')}>Contact Us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
