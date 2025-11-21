import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders landing page', () => {
    render(<App />);
    expect(screen.getByText(/Conectando o/i)).toBeInTheDocument();
    expect(screen.getByText(/Futuro do Design/i)).toBeInTheDocument();
  });
});
