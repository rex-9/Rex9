import { skills } from '../../data';
import style from './Skills.module.scss';

const Skills = () => {
  return (
    <section className={style.container}>
      <div>
        <h1>Skills</h1>
        <div className={style.box}>
          <article className={style.card}>
            <h4>Languages</h4>
            <div className={style.skills}>
              {
                skills.languages.map(skill => <p className={style.skill}>{skill}</p>)
              }
            </div>
          </article>
          <article className={style.card}>
            <h4>Frontend</h4>
            <div className={style.skills}>
              {
                skills.frontend.map(skill => <p className={style.skill}>{skill}</p>)
              }
            </div>
          </article>
          <article className={style.card}>
            <h4>Full-Stack</h4>
            <div className={style.skills}>
              {
                skills.fullstack.map(skill => <p className={style.skill}>{skill}</p>)
              }
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Skills