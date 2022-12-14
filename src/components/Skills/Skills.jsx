import style from './Skills.module.scss';

const Skills = () => {
  return (
    <section className={style.skills}>
      <div>
        <h1>Skills</h1>
        <div className={style.container}>
          <article className={style.card}>Div 1</article>
          <article className={style.card}>Div 2</article>
        </div>
      </div>
    </section>
  )
}

export default Skills