/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable max-len */

import { PropTypes } from 'prop-types';
import style from './Project.module.scss';

const Project = (props) => {
  const {
    image, name, techs, heading, live, source,
  } = props.project;

  const breakTheLine = (string) => {
    const arr = string.split(' ');
    const half = arr.length / 2;
    let firstHalfNo = '';
    if (half >= 2.5) {
      if (!Number.isInteger(half)) {
        firstHalfNo = half - 0.5;
      } else {
        firstHalfNo = half;
      }
    }
    const firstHalf = arr.slice(0, firstHalfNo).join(' ');
    const secondHalf = arr.slice(firstHalfNo, arr.length).join(' ');
    return (
      <>
        <div>{firstHalf}</div>
        <br />
        <div>{secondHalf}</div>
      </>
    );
  };

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
          <div className={style.heading}>{breakTheLine(heading)}</div>
          <div className={style.buttons}>
            <a className={style.more} href={source} target="_blank" rel="noopener noreferrer">Source</a>
            <a className={style.more} href={live} target="_blank" rel="noopener noreferrer">Live</a>
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
