import { FC, useState } from 'react';
import { store } from 'src/store';
import { useDispatch, useSelector } from 'react-redux';
import { toggleProfile, changeName } from 'src/store/profile/actions';
import { ProfileState } from 'src/store/profile/reducer';

export const Profile: FC = () => {
  const dispatch = useDispatch();
  const name = useSelector((state: ProfileState) => state.name);
  const visible = useSelector((state: ProfileState) => state.visible);
  const [value, setValue] = useState('');

  return (
    <>
      <h2>Profile page</h2>
      <p>name: {name}</p>
      <label>
        visible: <input type="checkbox" checked={visible} />
      </label>
      <button onClick={() => dispatch(toggleProfile())}>change visible</button>
      <br />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch(changeName(value))}>change name</button>
    </>
  );
};
