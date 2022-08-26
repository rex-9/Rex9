import style from '../scss/Form.module.scss';
import github from '../assets/design/github.svg';
import linkedin from '../assets/design/linkedin.svg';
import medium from '../assets/design/medium.svg';
import angellist from '../assets/design/angellist.svg';
import twitter from '../assets/design/twitter.svg';
import facebook from '../assets/design/facebook.svg';

const Form = () => (
  <>
    <div className={style.form}>
      <div className={style.contactText}>
        I&apos;m always interested in hearing
        about new projects,
        <br />
        {' '}
        so if you&apos;d
        like to chat, please kindly get in touch with me.
      </div>
      <div className={style.contactForm}>
        <h2>Keep in Touch</h2>
        <form action="https://formspree.io/f/moqrrpoj" method="post" id="contact" name="contact">
          <div className={style.userBox}>
            <input type="text" name="name" placeholder="Kindly enter your Full Name" required />
          </div>
          <div className={style.userBox}>
            <input type="text" name="email" placeholder="Kindly enter your Email" required />
          </div>
          <div className={style.userBox}>
            <textarea type="text" name="details" placeholder="How can I kindly help you?" required />
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
    <div className={style.divider} />
    <div className={style.profiles}>
      <a className={style.profile} href="https://github.com/rex-9"><img src={github} alt="github" /></a>
      <a className={style.profile} href="https://linkedin.com/in/rex9"><img src={linkedin} alt="linkedin" /></a>
      <a className={style.profile} href="https://medium.com/@rex9"><img src={medium} alt="medium" /></a>
      <a className={style.profile} href="https://angel.co/u/rex9"><img src={angellist} alt="angellist" /></a>
      <a className={style.profile} href="https://twitter.com/htetnaing0814"><img src={twitter} alt="twitter" /></a>
      <a className={style.profile} href="https://facebook.com/htetnaing0814"><img src={facebook} alt="facebook" /></a>
    </div>
  </>
);

export default Form;
