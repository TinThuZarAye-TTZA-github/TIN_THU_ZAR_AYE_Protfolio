import '../style/ProjectCard.css';
import { NavLink } from 'react-router-dom';

function ProjectCard(props) {
  return (
    <div className='project-card'>
      <img src={props.imagesrc} alt='' />
      <h2 className='project-title'>{props.title}</h2>
      <div className='project-details'>
        <p className='project-paragraph'>{props.text}</p>

        <p className='project-techStack'>
          <h3>Technologies</h3>
          {props.techStack}
        </p>

        <div className='proejct-btn'>
          <NavLink to={props.github} className='btn-project' target='_blank'>
            Github
          </NavLink>
          <NavLink to={props.demo} className='btn-project' target='_blank'>
            Demo
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
