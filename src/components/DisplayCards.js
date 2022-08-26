import style from '../scss/DisplayCards.module.scss';

import Card from './Card';

import { projects } from './data';

const DisplayCards = () => (
  <>
    <h1 className={style.myRecentWorks}>My Recent Works</h1>
    <div className={style.displayCards}>
      {
        projects.map((project) => <Card key={project.id} project={project} />)
      }
    </div>
  </>
);

export default DisplayCards;
