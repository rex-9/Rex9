/* eslint-disable max-len */
import style from '../scss/Catchphrase.module.scss';
import downArrow from '../assets/design/down-arrow.svg';

const Catchphrase = () => (
  <>
    <div className={style.phrase}>
      <p>Greetings, Champion...</p>
      <p>This is Rex9, spiritual Full-Stack Developer. ✨</p>
      <p>Rex9 can offer you attractive websites with maximum quality within the shortest time. 😎</p>
    </div>
    <div className={style.arrowBox}>
      <img className={style.downArrow} src={downArrow} alt="" />
    </div>
  </>
);

export default Catchphrase;
