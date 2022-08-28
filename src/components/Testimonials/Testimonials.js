/* eslint-disable max-len */

import Testimonial from '../Testimonial/Testimonial';
import style from './Testimonials.module.scss';
import { testimonials } from '../../data';

const Testimonials = () => (
  <>
    <section id="Testimonials" className={style.box}>
      <h2>Testimonials</h2>
      <div className={style.cardBox}>
        {
          testimonials.map((testimonial) => <Testimonial key={testimonial.name} link={testimonial.link} name={testimonial.name} recommendation={testimonial.recommendation} />)
        }
      </div>
    </section>
  </>
);

export default Testimonials;
