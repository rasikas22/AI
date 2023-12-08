import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('renders counter component', () => {
  render(<Counter />);
});

test('increment button increments count', () => {
  const { getByText } = render(<Counter />);
  const incrementButton = getByText('Increment');
  const countDisplay = getByText(/Count: 0/);

  fireEvent.click(incrementButton);

  expect(countDisplay).toHaveTextContent('Count: 1');
});

test('decrement button decrements count', () => {
  const { getByText } = render(<Counter />);
  const decrementButton = getByText('Decrement');
  const countDisplay = getByText(/Count: 0/);

  fireEvent.click(decrementButton);

  expect(countDisplay).toHaveTextContent('Count: -1');
});

test('reset button resets count', () => {
  const { getByText } = render(<Counter />);
  const resetButton = getByText('Reset');
  const countDisplay = getByText(/Count: 0/);

  fireEvent.click(resetButton);

  expect(countDisplay).toHaveTextContent('Count: 0');
});