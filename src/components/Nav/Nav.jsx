import { useState } from 'react';
import style from './Nav.module.scss';
import menu from '../../assets/design/menu.svg';
import cancel from '../../assets/design/cancel.png';

const Nav = () => {
  const [active, setActive] = useState('#Greetings');
  const [menuState, setMenu] = useState(false);

  const mobileNavClick = (section) => {
    setActive(section);
    setMenu(false);
  };

  return (
    <>
      <section className={style.nav} style={menuState === false ? { height: '70px' } : { height: 'auto' }}>
        <nav className={style.desktopNav}>
          <a href="#Greetings" onClick={() => setActive('#Greetings')} className={active === '#Greetings' ? style.active : style.inactive}>Greetings</a>
          <a href="#Skills" onClick={() => setActive('#Skills')} className={active === '#Skills' ? style.active : style.inactive}>Skills</a>
          <a href="#Projects" onClick={() => setActive('#Projects')} className={active === '#Projects' ? style.active : style.inactive}>Projects</a>
          <a href="#Testimonials" onClick={() => setActive('#Testimonials')} className={active === '#Testimonials' ? style.active : style.inactive}>Testimonials</a>
          <a href="#Contact" onClick={() => setActive('#Contact')} className={active === '#Contact' ? style.active : style.inactive}>Contact</a>
        </nav>
        <nav className={style.mobileNav} style={menuState === false ? { justifyContent: 'end', height: '70px' } : { justifyContent: 'space-around', height: 'auto' }}>
          <button onClick={() => setMenu(!menuState)} type="button">
            <img style={menuState === false ? { display: 'block' } : { display: 'none' }} src={menu} alt="menu" />
          </button>
          <div style={menuState === true ? { display: 'block' } : { display: 'none' }}>
            <div className={style.menu}>
              <a href="#Greetings" onClick={() => mobileNavClick('#Greetings')} className={active === '#Greetings' ? style.active : style.inactive}>Greetings</a>
              <a href="#Projects" onClick={() => mobileNavClick('#Projects')} className={active === '#Projects' ? style.active : style.inactive}>Projects</a>
              <a href="#Testimonials" onClick={() => mobileNavClick('#Testimonials')} className={active === '#Testimonials' ? style.active : style.inactive}>Testimonials</a>
              <a href="#Contact" onClick={() => mobileNavClick('#Contact')} className={active === '#Contact' ? style.active : style.inactive}>Contact</a>
            </div>
          </div>
          <button onClick={() => setMenu(!menuState)} type="button">
            <img className={style.cancel} style={menuState === true ? { display: 'block' } : { display: 'none' }} src={cancel} alt="cancel" />
          </button>
        </nav>
      </section>
    </>
  );
};

export default Nav;
