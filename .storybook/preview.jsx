// import { MyThemeProvider } from '../src/styles/MyThemeProvider';
import { StyledThemeProvider } from '../src/styles/styled-theme-provider';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <StyledThemeProvider>
      <Story />
    </StyledThemeProvider>
  ),
];
