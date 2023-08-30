import Project from '../models/Project'
import photoViewer from '../assets/photo-viewer.png'
import busboard from '../assets/busboard.png'
import marsMission from '../assets/mars-mission.png'

const projects: Project[] = [
  {
    name: "Photo Viewer",
    description: <>I created a React photo viewer application using images from Pexels. I learnt about React hooks such as <code>useState</code> and <code>useEffect</code>.</>,
    imageUrl: photoViewer,
  },
  {
    name: "Busboard",
    description: <>I created a React + TypeScript bus times application using the TfL API and the postcodes.io API. I learnt about making web requests using <code>fetch</code>.</>,
    imageUrl: busboard,
  },
  {
    name: "Mars Mission",
    description: "I worked as part of a team to create a React + TypeScript application designed to get young people interested in space. We used various Nasa APIs. I learnt about collaboration using Git.",
    imageUrl: marsMission,
    link: "https://techswitch-learners.github.io/mars-mission-2023-aug/",
  }
]

export default projects
