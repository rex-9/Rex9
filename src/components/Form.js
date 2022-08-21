import { useState } from 'react';
import style from './Form.module.scss';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changeDetails = (e) => {
    setDetails(e.target.value);
  };
  return (
    <>
      <div className={style.form}>
        <div className={style.contactBox}>
          <h2>Keep in Touch</h2>
          <form action="https://formspree.io/f/moqrrpoj" method="post" id="contact" name="contact">
            <div className={style.userBox}>
              <input type="text" name="name" placeholder="Enter your Full Name" value={name} onChange={changeName} required="" />
            </div>
            <div className={style.userBox}>
              <input type="text" name="email" placeholder="Enter your Email" value={email} onChange={changeEmail} required="" />
            </div>
            <div className={style.userBox}>
              <textarea type="text" name="details" placeholder="What can Rex9 help you?" value={details} onChange={changeDetails} required="" />
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
    </>
  );
};

export default Form;
