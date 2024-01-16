import style from './Projects.module.scss';

import Card from '../Project/Project';

import { projects } from '../../data';

const Projects = () => {
  const sortedProjects = projects.sort((a, b) => b.id - a.id);

  return (
  <>
    <section id="Projects">
      <h1 className={style.myRecentWorks}>My Recent Works</h1>
      <div className={style.projects}>
        {
          sortedProjects.map((project) => <Card key={project.id} project={project} />)
        }
      </div>
    </section>
  </>
)};

export default Projects;
