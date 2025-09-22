import {
  FaAngular,
  FaCss3,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
} from 'react-icons/fa';
import { SiMongodb, SiMysql, SiSpring } from 'react-icons/si';
import '../style/TechStack.css';
function TechStack() {
  return (
    <div className='techStack'>
      <h1 className='techStack-h1'>Skills</h1>
      <p className='techStack-p'>
        Java
        <FaJava size={30} style={{ marginRight: '3rem' }} />
        JavaScript
        <FaJs size={30} style={{ marginRight: '3rem' }} />
        Python
        <FaPython size={30} style={{marginRight : '3rem'}}/>
        HTML
        <FaHtml5 size={30} style={{ marginRight: '3rem' }} />
        CSS
        <FaCss3 size={30} style={{ marginRight: '3rem' }} />
        React
        <FaReact size={30} style={{ marginRight: '3rem' }} />
        Angular
        <FaAngular size={30} style={{ marginRight: '3rem' }} />
        Node.js
        <FaNodeJs size={30} style={{ marginRight: '3rem' }} />
        Express.js Spring-Boot
        <SiSpring size={30} style={{ marginRight: '3rem' }} />
        SQL
        <SiMysql size={30} style={{ marginRight: '3rem' }} />
        MongoDB
        <SiMongodb size={30} style={{ marginRight: '3rem' }} />
      </p>
    </div>
  );
}
export default TechStack;
