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
            <h4>Backend</h4>
            <div className={style.skills}>
              {
                skills.backend.map(backend => <a href={backend.url} target="_blank" className={style.skill}>{backend.name}</a>)
              }
            </div>
          </article>
          <article className={style.card}>
            <h4>Mobile</h4>
            <div className={style.skills}>
              {
                skills.mobile.map(mobile => <a href={mobile.url} target="_blank" className={style.skill}>{mobile.name}</a>)
              }
            </div>
          </article>
          <article className={style.card}>
            <h4>Tools</h4>
            <div className={style.skills}>
              {
                skills.tools.map(tool => <a href={tool.url} target="_blank" className={style.skill}>{tool.name}</a>)
              }
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Skills