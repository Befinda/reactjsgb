import { App } from './App';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom';

describe('App', () => {
  it('render component', () => {
    render(<App />);
  });

  it('send user message', async () => {
    render(<App />);

    const input = screen.getByTestId('input');
    await userEvent.type(input, 'Hello,world');

    const btn = screen.getByTestId('button');
    await userEvent.click(btn);

    expect(screen.getAllByTestId('itemlist')).toHaveLength(1);
  });

  it('bot answer', async () => {
    render(<App />);

    const input = screen.getByTestId('input');
    await userEvent.type(input, 'Hello,world');

    const btn = screen.getByTestId('button');
    await userEvent.click(btn);

    expect(
      await screen.findByText(/I'm BOT/, undefined, { timeout: 1500 })
    ).toBeInTheDocument();
  });
});
