import Proptypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global-styles';
import { theme } from './theme';

export const StyledThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

StyledThemeProvider.propTypes = {
  children: Proptypes.node.isRequired,
};
