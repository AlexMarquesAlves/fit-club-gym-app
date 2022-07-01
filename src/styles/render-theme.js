import { render } from '@testing-library/react';
import { StyledThemeProvider } from './styled-theme-provider';

export const renderTheme = (children) => {
  return render(<StyledThemeProvider>{children}</StyledThemeProvider>);
};
