import projects from '../data/projects'
import './Projects.css'

function Projects() {
  return (
    <div className="Projects">
      <h1>My Projects</h1>
      {projects.map((project) =>
        <div className="Projects__Item">
          <img alt={`${project.name} screenshot`} src={project.imageUrl} width={160} height={90} className="Projects__Image"/>
          <div>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            {project.link && <a href={project.link} target="_blank">See this project live</a>}
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects
