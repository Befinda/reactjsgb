import { Message } from './Message';
// import { fireEvent } from '@testing-library/react';
import { render } from '@testing-library/react';
// import { screen } from '@testing-library/react';

import '@testing-library/jest-dom';

describe('Message', () => {
  const messages = [];
  it('render component', () => {
    render(<Message messages={messages} />);
  });
});
