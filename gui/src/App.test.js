import { render, screen } from '@testing-library/react';
import App from './App';

test('render header of main page', () => {
  render(<App />);
  const linkElement = screen.getByText(/This is pocket board/);
  expect(linkElement).toBeInTheDocument();
});
