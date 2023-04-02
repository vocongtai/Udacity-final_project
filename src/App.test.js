import { render, screen } from '@testing-library/react';
import App from '../src/Components/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/start code/i);
  expect(linkElement).toBeInTheDocument();
});
