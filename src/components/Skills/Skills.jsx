import { skills } from '../../data';
import style from './Skills.module.scss';

const Skills = () => {
  return (
    <section id="Skills" className={style.container}>
      <div>
        <h1>Skills</h1>
        <div className={style.box}>
          <article className={style.card}>
            <h4>Languages</h4>
            <div className={style.skills}>
              {
                skills.languages.map(language => <a href={language.url} target="_blank" className={style.skill}>{language.name}</a>)
              }
            </div>
          </article>
          <article className={style.card}>
            <h4>Frontend</h4>
            <div className={style.skills}>
              {
                skills.frontend.map(frontend => <a href={frontend.url} target="_blank" className={style.skill}>{frontend.name}</a>)
              }
            </div>
          </article>
          <article className={style.card}>
            <h4>Full-Stack</h4>
            <div className={style.skills}>
              {
                skills.fullstack.map(fullstack => <a href={fullstack.url} target="_blank" className={style.skill}>{fullstack.name}</a>)
              }
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Skills