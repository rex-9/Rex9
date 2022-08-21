import style from './DisplayCards.module.scss';

import Card from './Card';

import { projects } from './data';

const DisplayCards = () => (
  <>
    <div className={style.displayCards}>
      {
        projects.map((project) => <Card key={project.id} project={project} />)
      }
    </div>
  </>
);

export default DisplayCards;
