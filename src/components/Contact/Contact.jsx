/* eslint-disable max-len */

import style from './Contact.module.scss';
import { profiles } from '../../data';
import Rex9 from '../../assets/projects/Rex9.pdf';

const Contact = () => (
  <>
    <section id="Contact">
      <div className={style.contact}>
        <div className={style.contactText}>
          I&apos;m always interested in hearing
          about new projects,
          <br />
          {' '}
          so if you&apos;d
          like to chat, please kindly get in touch with me.
          <br />
          <div className={style.resumeBox}>
            <div className={style.resume}>
              <span />
              <span />
              <span />
              <span />
              <a href={Rex9} download>Download my Resume 📄</a>
            </div>
          </div>
        </div>
        <div className={style.contactForm}>
          <h2>Keep in Touch</h2>
          <form action="https://formspree.io/f/moqrrpoj" method="post" id="contact" name="contact" target="_blank" rel="noopener noreferrer">
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
        {
          profiles.map((profile) => <a key={profile.platform} className={style.profile} href={profile.link} target="_blank" rel="noopener noreferrer"><img className={style.profileImg} src={profile.logo} alt={profile.platform} /></a>)
        }
      </div>
    </section>
  </>
);

export default Contact;
