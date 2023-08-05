/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable max-len */

import { PropTypes } from 'prop-types';
import style from './Project.module.scss';

const Project = (props) => {
  const {
    image, name, techs, details, live, source,
  } = props.project;

  return (
    <>
      <div className={style.project}>
        <img src={image} alt="" />
        <div className={style.content}>
          <div className={style.name}>{name}</div>
          <div className={style.techsBox}>
            {
              techs.map((tech) => <div key={tech} className={style.tech}>{tech}</div>)
            }
          </div>
          <div className={style.details}>{details.map((detail) => <p>{detail}</p>)}</div>
          <div className={style.buttons}>
            <a className={source ? style.more : style.disabled} href={source} target="_blank" rel="noopener noreferrer">Source</a>
            <a className={live ? style.more : style.disabled} href={live} target="_blank" rel="noopener noreferrer">Live</a>
          </div>
        </div>
      </div>
    </>
  );
};

Project.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired, image: PropTypes.string.isRequired, name: PropTypes.string.isRequired, techs: PropTypes.array.isRequired, heading: PropTypes.string.isRequired, live: PropTypes.string.isRequired, source: PropTypes.string.isRequired,
  }).isRequired,
};

export default Project;
