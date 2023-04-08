import '../style/NavBar.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';
function NavBar() {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const changeColor = () => {
    if (window.scrollY >= 1) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  let githubURL = 'https://github.com/TinThuZarAye-TTZA-github';
  let linkedinURL = 'https://www.linkedin.com/in/tin-thu-zar-aye/';
  window.addEventListener('scroll', changeColor);

  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <Link to='/'>
        <h1>Tin Thu Zar Aye</h1>
      </Link>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to='/home'>Home</Link>
        </li>
        <li>
          <Link to='/project'>Project</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <FaGithub
            size={35}
            style={{ color: 'white' }}
            onClick={() => {
              window.open(githubURL, '_blank');
            }}
          />
        </li>
        <li>
          <FaLinkedin
            size={35}
            style={{ color: 'white' }}
            onClick={() => {
              window.open(linkedinURL, '_blank');
            }}
          />
        </li>
      </ul>
      <div className='hamburger' onClick={handleClick}>
        {!click ? (
          <FaBars size={20} style={{ color: 'white' }} />
        ) : (
          <FaTimes size={20} style={{ color: 'white' }} />
        )}
      </div>
    </div>
  );
}

export default NavBar;
