import '../style/ProjectComponent.css';
import Card from './Card';
import NavBar from './NavBar';
function ProjectComponent() {
  return (
    <div>
      <NavBar />
      <header className='header-project'>Projects</header>
      <Card />
    </div>
  );
}

export default ProjectComponent;
