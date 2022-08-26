/* eslint-disable max-len */

import Testimonial from './Testimonial';
import style from '../scss/Testimonials.module.scss';
import { testimonials } from './data';

const Testimonials = () => (
  <>
    <div className={style.box}>
      <h2>Testimonials</h2>
      <div className={style.cardBox}>
        {
          testimonials.map((testimonial) => <Testimonial key={testimonial.name} link={testimonial.link} name={testimonial.name} recommendation={testimonial.recommendation} />)
        }
      </div>
    </div>
  </>
);

export default Testimonials;
