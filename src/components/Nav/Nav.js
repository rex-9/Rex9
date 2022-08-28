import { useState } from 'react';
import style from './Nav.module.scss';

const Nav = () => {
  const [active, setActive] = useState('#Greetings');
  return (
    <>
      <nav className={style.nav}>
        <a href="#Greetings" onClick={() => setActive('#Greetings')} className={active === '#Greetings' ? style.active : style.inactive}>Greetings</a>
        <a href="#Projects" onClick={() => setActive('#Projects')} className={active === '#Projects' ? style.active : style.inactive}>Projects</a>
        <a href="#Testimonials" onClick={() => setActive('#Testimonials')} className={active === '#Testimonials' ? style.active : style.inactive}>Testimonials</a>
        <a href="#Contact" onClick={() => setActive('#Contact')} className={active === '#Contact' ? style.active : style.inactive}>Contact</a>
      </nav>
    </>
  );
};

export default Nav;
