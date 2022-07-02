import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';

it('should render Example with text Hello YouTube', () => {
   render(<Heading />);

   const Heading = screen.getByRole('Heading', { name: /Heading/ });
   expect(Heading).toBeInTheDocument();
   expect(Heading).toMatchSnapshot();
});
