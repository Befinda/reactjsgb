import { FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const navigate = [
  {
    name: 'Main',
    path: '/',
  },
  {
    name: 'Profile',
    path: '/profile',
  },
  {
    name: 'Chats',
    path: '/chats',
  },
];

export const Header: FC = () => {
  return (
    <>
      <header>
        <ul>
          {navigate.map((item, idx) => (
            <li key={idx}>
              <NavLink
                to={item.path}
                style={({ isActive }) => ({
                  color: isActive ? 'green' : 'blue',
                })}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
