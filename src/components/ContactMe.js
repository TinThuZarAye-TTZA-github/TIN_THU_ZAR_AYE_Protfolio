import '../style/ContactMe.css';
import { FaMailBulk, FaPhone, FaRegUser } from 'react-icons/fa';
import EmailForm from './EmailForm';
import NavBar from './NavBar';

function ContactMe() {
  return (
    <div>
      <NavBar />
      <header className='aboutme-header'>Contact Information</header>
      <div className='contact-me'>
        <div className='location-contact'>
          <FaRegUser size={20} style={{ marginRight: '1rem' }}></FaRegUser>
          <p>Tin Thu Zar Aye</p>
        </div>
        <div className='location-contact'>
          <FaMailBulk size={20} style={{ marginRight: '1rem' }} />
          <p>tinthuzaraye.tin@gmail.com</p>
        </div>
        <div className='location-contact'>
          <FaPhone size={20} style={{ marginRight: '1rem' }} />
          <p>415-529-8920</p>
        </div>
      </div>
      <div>
        <EmailForm />
      </div>
    </div>
  );
}

export default ContactMe;
