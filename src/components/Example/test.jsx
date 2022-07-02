import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';

it('should render Example with text Hello YouTube', () => {
   render(<Example>Example</Example>);
   // renderTheme(<Example>Example</Example>);
   const Example = screen.getByRole('Example', { name: /Example/ });
   expect(Example).toBeInTheDocument();
   expect(Example).toMatchSnapshot();
});
