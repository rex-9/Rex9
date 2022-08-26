import style from '../scss/Cards.module.scss';

import Card from './Card';

import { projects } from './data';

const Cards = () => (
  <>
    <h1 className={style.myRecentWorks}>My Recent Works</h1>
    <div className={style.cards}>
      {
        projects.map((project) => <Card key={project.id} project={project} />)
      }
    </div>
  </>
);

export default Cards;
