import { render, screen } from '@testing-library/react';
import App from './App';

test('renders customer signup form', () => {
  render(<App />);
  const linkElement = screen.getByText(/Customer sign up form/i);
  expect(linkElement).toBeInTheDocument();
});

