import React from 'react';
import { render, screen } from '@testing-library/react';
import Icon from './Icon';

test('renders learn react link', () => {
  render(<Icon path='' w={24} h={24}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});