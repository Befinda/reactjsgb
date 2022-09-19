import { Form } from './Form';
import { render } from '@testing-library/react';
// import { screen}  from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Form', () => {
  const addMessage = () => {
    return {
      author: 'USER',
      value: 'Hello',
    };
  };
  it('render component', () => {
    render(<Form addMessage={addMessage} />);
  });
  it('snapshot', () => {
    const { asFragment } = render(<Form addMessage={addMessage} />);
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <form
          class="formmes"
        >
          <div
            class="wrap"
          >
            <input
              class="formmesInput"
              type="text"
              value=""
            />
            <button
              class="formmesBtn"
              disabled=""
              type="submit"
            >
              Отправить
            </button>
          </div>
        </form>
      </DocumentFragment>
    `);
  });
});
