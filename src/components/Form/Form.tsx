import React, { FC, useState } from 'react';
import { Message } from 'src/types';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
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
    // document.getElementById<HTMLInputElement>("outlined-basic").autoFocus = true;
  };

  return (
    <form onSubmit={handleSubmit} className={style.formmes}>
      <div className={style.wrap}>
        <TextField
          margin="normal"
          id="outlined-basic"
          label="Ваше сообщение"
          variant="outlined"
          defaultValue="Small"
          size="small"
          value={value}
          data-testid="input"
          autoFocus
          onChange={(e) => setValue(e.target.value)}
          className={style.formmesInput}
        />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          disabled={!value}
          data-testid="button"
          // className={style.formmesbtn}
          type="submit"
          size="small"
        >
          Отправить
        </Button>
      </div>
    </form>
  );
};
