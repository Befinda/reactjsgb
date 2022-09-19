import { useState } from 'react';

import style from './Form.module.css';

export const Form = ({ addMessage }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addMessage({
      author: 'USER',
      value,
    });
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className={style.formmes}>
      <div className={style.wrap}>
        <input
          className={style.formmesInput}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className={hover? style.formmesBtnhover : style.formmesBtn} type="submit" disabled={!value}>
          Отправить
        </button>
      </div>
    </form>
  );
};
