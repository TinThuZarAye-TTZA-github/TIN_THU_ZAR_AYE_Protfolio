import '../style/ContactMe.css';
import { FaGithub, FaLinkedin, FaMailBulk, FaPhone, FaRegUser } from 'react-icons/fa';
import EmailForm from './EmailForm';
import NavBar from './NavBar';

function ContactMe() {
    let githubURL = 'https://github.com/TinThuZarAye-TTZA-github';
    let linkedinURL = 'https://www.linkedin.com/in/tin-thu-zar-aye/';

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
          <FaPhone size={20} style={{ marginRight: '1rem', marginBottom : "20px" }} />
          <p>415-529-8920</p>
        </div>
        <div>
          <h4 style={{
            fontSize: "1.5rem", 
            color : "#2271b1", 
            textAlign : "center",
            marginTop: "20px", 
            marginBottom : "20px", 
            }} >

            About Me
          </h4>
          <p style={{
            color : 'black', 
            textAlign : "center", 
            marginBottom : "20px",
            }}>

              My name is Tin Thu Zar Aye.
            I graduated with Bachelor's in Computer Science from San Francisco State University
            and I am currently pursing Master's of Science in Artificial Intelligence at San Jose State University.</p>

          <p style={{color: "black", textAlign:"center"}}>
            I am passionate about Software Development and continuously learning new technologies including AI-powered Web Development.
            My curiosity extends into Artificial Intelligence and Machine Learning where I explore how these technologies can transform the way we build,
            optimize and personalize web applications. I am eager to apply AI-driven approachs to create smarter, scalable and innovative solutions
            that improve user experience and deliver meaningful impact.
          </p>
            
            

         <div
         
         style ={{

            display:"flex",
            justifyContent : "center",
            flexDirection: "row",
            alignItem: "center",
            gap: "2rem",
            marginTop: "3rem"
          }}>

          

          <FaGithub 
         size={35}
        style={{color: "black" , justifyContent: "center"}}
        onClick={() => {
          window.open(githubURL, '_blank')
        }}
         ></FaGithub>
            
         <FaLinkedin
         size={35}
         style={{color: "#0072B1"}}
         onClick={() => {
          window.open(linkedinURL, '_blank')
         }}
         >
          
         </FaLinkedin>

         </div>

         
         
         
        </div>
      </div>
      {/* <div>
        <EmailForm />
      </div> */}
    </div>
  );
}

export default ContactMe;
