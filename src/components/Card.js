/* eslint-disable react/destructuring-assignment */

import PropTypes from 'prop-types';
import style from './Card.module.scss';

const Card = (props) => {
  const {
    image, name, techs, detail, live, source,
  } = props.project;
  return (
    <>
      <div className={style.card}>
        <img src={image} alt="" />
        <div className={style.content}>
          <div>{name}</div>
          {
            techs.map((tech) => <div key={tech}>{tech}</div>)
          }
          <div>{detail}</div>
          <a href={source}>Source</a>
          <a href={live}>Live</a>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  project: PropTypes.isRequired,
};

export default Card;
