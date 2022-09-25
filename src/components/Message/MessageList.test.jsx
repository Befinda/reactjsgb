import { MessageList } from './MessageList';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/react';

import '@testing-library/jest-dom';

describe('MessageList', () => {
  let messages = [];
  it('render component', () => {
    render(<MessageList messages={messages} />);
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
    render(<MessageList messages={messages} />);
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
    render(<MessageList messages={messages} />);
    expect(screen.getAllByTestId('itemlist')[1]).toHaveClass('bot');
  });
});
