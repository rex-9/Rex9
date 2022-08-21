/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */

import PropTypes from 'prop-types';
import style from './Card.module.scss';

const Card = (props) => {
  const {
    image, name, techs, brief, detail, live, source,
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
  project: PropTypes.isRequired,
};

export default Card;
