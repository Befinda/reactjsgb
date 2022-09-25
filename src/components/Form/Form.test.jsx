import { Form } from './Form';
import { fireEvent } from '@testing-library/react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { DOMElement } from 'react';

describe('Form', () => {
  const addMessage = jest.fn();
  let input, btn;
  beforeEach(() => {
    render(<Form addMessage={addMessage} />);
    input = screen.getByTestId('input');
    btn = screen.getByTestId('button');
  });

  // it('render component', () => {
  //   render(<Form addMessage={addMessage} />);
  // });
  it('input change with fireevent', () => {
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(input).toBeInTheDocument();
    expect(input.value).toBe('new value');
  });
  it('input change with userevent', async () => {
    await userEvent.type(input, 'second value');
    expect(input).toBeInTheDocument();
    expect(input.value).toBe('second value');
  });
  it('button click with fireEvent', () => {
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(input.value).toBe('new value');

    fireEvent.click(btn);
    expect(addMessage).toHaveBeenCalledTimes(1);
  });
  it('button enable if input value != "" ', () => {
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(btn).not.toBeDisabled();
  });
  it('addMessage with arg USER, input.value', () => {
    fireEvent.change(input, { target: { value: 'new value' } });
    fireEvent.submit(btn);
    expect(addMessage).toHaveBeenCalledWith({
      author: 'USER',
      value: 'new value',
    });
  });
  //   it('snapshot', () => {
  //     const { asFragment } = render(<Form addMessage={addMessage} />);
  //     expect(asFragment()).toMatchSnapshot();
  //   });
});
