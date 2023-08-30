import projects from '../data/projects'

function Projects() {
  return (
    <>
      <h1>My Projects</h1>
      {projects.map((project) =>
        <div>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <img alt={`${project.name} screenshot`} src={project.imageUrl} />
          {project.link && <a href={project.link} target="_blank">See this project live</a>}
        </div>
      )}
    </>
  )
}

export default Projects
