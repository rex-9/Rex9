/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable max-len */

import { PropTypes } from 'prop-types';
import style from '../scss/Card.module.scss';

const Card = (props) => {
  const {
    image, name, techs, brief, live, source,
  } = props.project;
  return (
    <>
      <div className={style.card}>
        <img src={image} alt="" />
        <div className={style.content}>
          <div className={style.name}>{name}</div>
          <div className={style.techsBox}>
            {
              techs.map((tech) => <div key={tech} className={style.tech}>{tech}</div>)
            }
          </div>
          <div className={style.brief}>{brief}</div>
          <div className={style.buttons}>
            <a href={source}>Source</a>
            <a href={live}>Live</a>
          </div>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired, image: PropTypes.string.isRequired, name: PropTypes.string.isRequired, techs: PropTypes.array.isRequired, brief: PropTypes.string.isRequired, live: PropTypes.string.isRequired, source: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
