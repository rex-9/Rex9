import style from './Projects.module.scss';

import Card from '../Project/Project';

import { projects } from '../../data';

const Projects = () => (
  <>
    <section id="Projects">
      <h1 className={style.myRecentWorks}>My Recent Works</h1>
      <div className={style.projects}>
        {
          projects.map((project) => <Card key={project.id} project={project} />)
        }
      </div>
    </section>
  </>
);

export default Projects;
