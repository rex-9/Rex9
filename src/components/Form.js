/* eslint-disable jsx-a11y/label-has-associated-control */

import form from './Form.module.scss';

const Form = () => (
  <>
    <div className={form.form}>
      <div className={form.contactBox}>
        <h2>Contact Rex9</h2>
        <form action="https://formspree.io/f/moqrrpoj" method="post" id="contact" name="contact">
          <div className={form.userBox}>
            <input type="text" name="name" required="" />
            <label>Full Name</label>
          </div>
          <div className={form.userBox}>
            <input type="password" name="email" required="" />
            <label>Email</label>
          </div>
          <div className={form.userBox}>
            <textarea type="password" name="details" required="" />
            <label>Details</label>
          </div>
          <button type="submit">
            <span />
            <span />
            <span />
            <span />
            Submit
          </button>
        </form>
      </div>
    </div>
  </>
);

export default Form;
