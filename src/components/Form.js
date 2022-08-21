import style from './Form.module.scss';

const Form = () => (
  <>
    <div className={style.form}>
      <div className={style.contactBox}>
        <h2>Keep in Touch</h2>
        <form action="https://formspree.io/f/moqrrpoj" method="post" id="contact" name="contact">
          <div className={style.userBox}>
            <input type="text" name="name" placeholder="Enter your Full Name" required />
          </div>
          <div className={style.userBox}>
            <input type="text" name="email" placeholder="Enter your Email" required />
          </div>
          <div className={style.userBox}>
            <textarea type="text" name="details" placeholder="What can Rex9 help you?" required />
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
