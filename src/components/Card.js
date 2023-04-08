import '../style/ProjectCard.css';
import CardData from './CardData';
import ProjectCard from './ProjectCard';

function Card() {
  return (
    <div className='work-container'>
      <div className='project-container'>
        {CardData.map((val, idx) => {
          return (
            <ProjectCard
              key={idx}
              imagesrc={val.imagesrc}
              title={val.title}
              text={val.text}
              techStack={val.techStack}
              demo={val.demo}
              github={val.github}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Card;
