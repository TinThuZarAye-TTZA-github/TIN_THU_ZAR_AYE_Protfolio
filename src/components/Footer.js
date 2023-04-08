import '../style/Footer.css';
import { FaPhone, FaMailBulk, FaGithub, FaLinkedin } from 'react-icons/fa';
function Footer() {
  let githubURL = 'https://github.com/TinThuZarAye-TTZA-github';
  let linkedinURL = 'https://www.linkedin.com/in/tin-thu-zar-aye/';
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaPhone size={25} style={{ marginRight: '1rem' }}></FaPhone>
            <p style={{ color: 'black', fontSize: '20px' }}>415-529-8920</p>
          </div>
          <div className='location'>
            <FaMailBulk size={25} style={{ marginRigt: '1rem' }}></FaMailBulk>
            <p style={{ color: 'black', fontSize: '20px', marginLeft: '1rem' }}>
              tinthuzaraye.tin@gmail.com
            </p>
          </div>
        </div>
        <div className='right'>
          <h4 style={{ color: 'black' }}>About me</h4>
          <p style={{ color: 'black', fontSize: '18px' }}>
            My name is Tin Thu Zar Aye. I am a recent graduate with Bachelor's
            in Computer Science from San Francisco State University. My favorite
            programming languages are Java and JavaScript. My favorite library
            for the JavaScript is React and favorite framework for the backend
            is Spring Boot.
          </p>

          <div className='social'>
            <FaGithub
              size={35}
              style={{ color: 'black', marginRight: '1rem' }}
              onClick={() => {
                window.open(githubURL, '_blank');
              }}
            />
            <FaLinkedin
              size={35}
              style={{ color: '#00859c' }}
              onClick={() => {
                window.open(linkedinURL, '_blank');
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
