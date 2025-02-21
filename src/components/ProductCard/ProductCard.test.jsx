import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';
import { describe, it, expect } from 'vitest';
import { formatPrice } from '../../utils/format';

// Mock Product Data
const mockProduct = {
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  title: 'Fjallraven - Foldsack No. 1 Backpack',
  price: 109.95,
  rating: {
    rate: 3.9,
    count: 120,
  },
};

describe('ProductCard Component', () => {
  it('renders the product title', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
  });

  it('renders the formatted price', () => {
    render(<ProductCard product={mockProduct} />);
    expect(
      screen.getByText(`$${formatPrice(mockProduct.price)}`),
    ).toBeInTheDocument();
  });

  it('renders the product image with correct alt text', () => {
    render(<ProductCard product={mockProduct} />);
    const img = screen.getByRole('img', { name: mockProduct.title });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', mockProduct.image);
    expect(img).toHaveAttribute('alt', mockProduct.title);
  });

  it('renders the rating correctly', () => {
    render(<ProductCard product={mockProduct} />);
    expect(
      screen.getByText(
        `${mockProduct.rating.rate}/5 from ${mockProduct.rating.count} reviews`,
      ),
    ).toBeInTheDocument();
  });
});
