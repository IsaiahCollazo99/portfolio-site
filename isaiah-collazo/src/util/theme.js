import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#00478B',
        light: '#007DA3',
        dark: '#032BA3'
      },
      secondary: {
        main: '#089992',
        light: '#0BE6DB',
        dark: '#068079'
      }
    }
});

export default theme;