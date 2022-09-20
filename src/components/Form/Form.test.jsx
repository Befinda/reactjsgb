import { Form } from './Form';
import { fireEvent } from '@testing-library/react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

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
    // const input = screen.getByTestId('input');
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(input).toBeInTheDocument();
    expect(input.value).toBe('new value');
  });
  it('input change with userevent', async () => {
    //  const input = screen.getByTestId('input');
    await userEvent.type(input, 'second value');
    expect(input).toBeInTheDocument();
    expect(input.value).toBe('second value');
  });
  it('button click with fireEvent', () => {
    // const input = screen.getByTestId('input');
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(input.value).toBe('new value');

    // const btn = screen.getByTestId('button');
    fireEvent.click(btn);
    expect(addMessage).toHaveBeenCalledTimes(1);
  });
  it('button enable if input value != "" ', () => {
    // const input = screen.getByTestId('input');
    // const btn = screen.getByTestId('button');
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(btn).not.toBeDisabled();
  });
  //   it('snapshot', () => {
  //     const { asFragment } = render(<Form addMessage={addMessage} />);
  //     expect(asFragment()).toMatchSnapshot();
  //   });
});
