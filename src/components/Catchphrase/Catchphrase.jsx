/* eslint-disable max-len */
import style from './Catchphrase.module.scss';
import { profiles } from '../../data';

const Catchphrase = () => (
  <>
    <div className={style.phrase}>
      <p>Greetings, Champion...</p>
      <p>This is Rex9, the Spiritual Full-Stack Developer. ✨</p>
      <p>I can help you build attractive websites with maximum quality within the shortest time. 😎</p>
    </div>
    <div className={style.profiles}>
      {
        profiles.map((profile) => <a key={profile.platform} className={style.profile} href={profile.link} target="_blank" rel="noopener noreferrer"><img className={style.profileImg} src={profile.logo} alt={profile.platform} /></a>)
      }
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
