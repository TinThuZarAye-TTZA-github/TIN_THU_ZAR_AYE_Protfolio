
import {
  FaAngular,
  FaCss3,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
} from 'react-icons/fa';

import {
  SiMongodb,
  SiMysql,
  SiSpring,
  SiPostgresql,
  SiExpress,
  SiTypescript,
  SiPostman,
  SiTensorflow,
} from 'react-icons/si';

import '../style/TechStack.css';

function TechStack() {
  const skills = [
    { name: 'Java', icon: <FaJava /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3 /> },
    { name: 'React', icon: <FaReact /> },

    { name: 'Angular', icon: <FaAngular /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Express.js', icon: <SiExpress /> },
    { name: 'Spring Boot', icon: <SiSpring /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'MongoDB', icon: <SiMongodb /> },

    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'Postman', icon: <SiPostman /> },
    { name: 'TensorFlow', icon: <SiTensorflow /> },

    { name: 'REST APIs', icon: null },
    { name: 'Spring Security', icon: null },
    { name: 'NLP', icon: null },
  ];

  return (
    <section className="techStack" id="skills">
      <h1 className="techStack-h1">Skills</h1>

      <div className="techStack-grid">
        {skills.map((skill) => (
          <div className="techStack-item" key={skill.name}>
            <span>{skill.name}</span>
            {skill.icon && (
              <span className="techStack-icon">
                {skill.icon}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
