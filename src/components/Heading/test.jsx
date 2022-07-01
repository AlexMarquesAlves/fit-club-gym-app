import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import { Heading } from '.';

it('should render Heading with text Hello YouTube', () => {
  render(<Heading>Heading</Heading>);
  // renderTheme(<Heading>Heading</Heading>);
  const heading = screen.getByRole('heading', { name: /Heading/ });
  expect(heading).toBeInTheDocument();
  expect(heading).toMatchSnapshot();
});
