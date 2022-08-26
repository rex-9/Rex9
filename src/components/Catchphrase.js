/* eslint-disable max-len */
import style from '../scss/Catchphrase.module.scss';
import github from '../assets/design/github.svg';
import linkedin from '../assets/design/linkedin.svg';
import medium from '../assets/design/medium.svg';
import angellist from '../assets/design/angellist.svg';
import twitter from '../assets/design/twitter.svg';
import facebook from '../assets/design/facebook.svg';

const Catchphrase = () => (
  <>
    <div className={style.phrase}>
      <p>Greetings, Champion...</p>
      <p>This is Rex9, spiritual Full-Stack Developer. ✨</p>
      <p>I can help you build attractive websites with maximum quality within the shortest time. 😎</p>
    </div>
    <div className={style.profiles}>
      <a className={style.profile} href="https://github.com/rex-9"><img src={github} alt="github" /></a>
      <a className={style.profile} href="https://linkedin.com/in/rex9"><img src={linkedin} alt="linkedin" /></a>
      <a className={style.profile} href="https://medium.com/@rex9"><img src={medium} alt="medium" /></a>
      <a className={style.profile} href="https://angel.co/u/rex9"><img src={angellist} alt="angellist" /></a>
      <a className={style.profile} href="https://twitter.com/htetnaing0814"><img src={twitter} alt="twitter" /></a>
      <a className={style.profile} href="https://facebook.com/htetnaing0814"><img src={facebook} alt="facebook" /></a>
    </div>
    <div className={style.downArrow}>
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="40" height="40" rx="20" fill="transparent" />
        <path fillRule="evenodd" clipRule="evenodd" d="M14.2929 17.2929C14.6834 16.9024 15.3166 16.9024 15.7071 17.2929L21 22.5858L26.2929 17.2929C26.6834 16.9024 27.3166 16.9024 27.7071 17.2929C28.0976 17.6834 28.0976 18.3166 27.7071 18.7071L21.7071 24.7071C21.3166 25.0976 20.6834 25.0976 20.2929 24.7071L14.2929 18.7071C13.9024 18.3166 13.9024 17.6834 14.2929 17.2929Z" fill="#03e9f4" />
        <rect x="1" y="1" width="40" height="40" rx="20" stroke="#03e9f4" />
      </svg>
    </div>
  </>
);

export default Catchphrase;
