import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';
import styles from './Header.module.css';

vi.mock('../CartCounter/CartCounter', () => ({
  default: ({ itemCount }) => <div data-testid="cart-counter">{itemCount}</div>,
}));

describe('Header Component', () => {
  test('renders the logo link pointing to homepage', () => {
    render(
      <MemoryRouter>
        <Header itemCount={0} />
      </MemoryRouter>,
    );

    const logoLink = screen.getByRole('link', { name: 'The Shop' });
    expect(logoLink).toHaveAttribute('href', '/');
  });

  test('renders navigation links for Home and Shop', () => {
    render(
      <MemoryRouter>
        <Header itemCount={0} />
      </MemoryRouter>,
    );

    const homeLink = screen.getByRole('link', { name: 'Home' });
    const shopLink = screen.getByRole('link', { name: 'Shop' });

    expect(homeLink).toHaveAttribute('href', '/');
    expect(shopLink).toHaveAttribute('href', '/shop');
  });

  test('applies active class to Home link when on homepage', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header itemCount={0} />
      </MemoryRouter>,
    );

    const homeLink = screen.getByRole('link', { name: 'Home' });
    const shopLink = screen.getByRole('link', { name: 'Shop' });

    expect(homeLink).toHaveClass(styles.active);
    expect(shopLink).not.toHaveClass(styles.active);
  });

  test('applies active class to Shop link when on shop page', () => {
    render(
      <MemoryRouter initialEntries={['/shop']}>
        <Header itemCount={0} />
      </MemoryRouter>,
    );

    const homeLink = screen.getByRole('link', { name: 'Home' });
    const shopLink = screen.getByRole('link', { name: 'Shop' });

    expect(shopLink).toHaveClass(styles.active);
    expect(homeLink).not.toHaveClass(styles.active);
  });

  test('passes itemCount prop to CartCounter', () => {
    const itemCount = 5;
    render(
      <MemoryRouter>
        <Header itemCount={itemCount} />
      </MemoryRouter>,
    );

    const cartCounter = screen.getByTestId('cart-counter');
    expect(cartCounter.textContent).toBe(itemCount.toString());
  });
});
