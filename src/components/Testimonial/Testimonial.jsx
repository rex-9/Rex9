import PropTypes from 'prop-types';
import style from './Testimonial.module.scss';

const Testimonial = (props) => {
  const { link, name, recommendation } = props;

  return (
    <>
      <div className={style.box}>
        <a href={link}>
          <div className={style.name}>{name}</div>
          <div className={style.recommendation}>{recommendation}</div>
        </a>
      </div>
    </>
  );
};

Testimonial.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  recommendation: PropTypes.string.isRequired,
};

export default Testimonial;
