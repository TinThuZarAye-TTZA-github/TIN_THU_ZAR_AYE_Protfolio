import '../style/HeroImage.css';
import backgroundImage from '../assets/background-image.png';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import TechStack from './TechStack';
function HeroImage() {
  const resumeURL =
    'https://drive.google.com/file/d/1W4XsPC7eoS3jXSTgxCcNDShfbOaphqzx/view?usp=drive_link';
  return (
    <div className='hero'>
      <NavBar />
      <div className='mask'>
        <img className='into-img' src={backgroundImage} alt='photo1' />
      </div>
      <div className='content'>
        <h1>Tin Thu Zar Aye</h1>
        <h2>Junior Software Engineer</h2>
        <div>
          <Link className='btn' to={resumeURL} target='_blank' download>
            Resume
          </Link>
          <Link src='' to='/project' className='btn'>
            Project
          </Link>
          <Link to='/contact' className='btn'>
            Contact
          </Link>
        </div>
      </div>
      <br />
      <div>
        <TechStack />
      </div>
    </div>
  );
}
export default HeroImage;
