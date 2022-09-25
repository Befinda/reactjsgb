import React, { FC, useState } from 'react';
import { Message } from 'src/types';

import style from './Form.module.css';

interface FormProps {
  addMessage: (msg: Message) => void;
}

export const Form: FC<FormProps> = ({ addMessage }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
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
          data-testid="input"
        />
        <button
          className={style.formmesBtn}
          type="submit"
          disabled={!value}
          data-testid="button"
        >
          Отправить
        </button>
      </div>
    </form>
  );
};
