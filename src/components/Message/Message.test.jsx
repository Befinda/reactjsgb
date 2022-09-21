import { Message } from './Message';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/react';

import '@testing-library/jest-dom';

describe('Message', () => {
  let messages = [];
  it('render component', () => {
    render(<Message messages={messages} />);
  });
  it('element li should be 2', () => {
    messages = [
      {
        author: 'USER',
        value: 'Hello',
      },
      {
        author: 'USER',
        value: 'World',
      },
    ];
    render(<Message messages={messages} />);
    expect(screen.getAllByTestId('itemlist')).toHaveLength(2);
  });
  it('li.className = bot', () => {
    messages = [
      {
        author: 'USER',
        value: 'Hello',
      },
      {
        author: 'BOT',
        value: "I'm BOT",
      },
    ];
    render(<Message messages={messages} />);
    expect(screen.getAllByTestId('itemlist')[1]).toHaveClass('bot');
  });
});
