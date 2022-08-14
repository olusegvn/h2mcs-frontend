import { createTheme } from '@mui/material/styles'
const theme: any = createTheme({
  palette: {
    primary: {  main: '#D7024E' },
    secondary: {light: '#48AAF1', main: '#20243D', dark: '#1A55AF', 900: '#5843BE'},
    common: {white: '#E9EAED'},
    success: { light: '#1DC9A0', main: '#1DC9A0', dark: '#427A0A' },
    info: { light: '#FA5F1C', main: '#EA454C' },
    warning: { main: '#EA454C' },
    divider: '#ECECECFF',
    error: {
      main: '#E36363',
      light: '#E3636341'
    },
    text: {
      primary: '#20243D',
      secondary: '#717274',
    },
    grey: {
      100: '#E9E9E9',
      200: '#636364',
      300: '#333333',
      400: 'rgba(27,30,34,0.78)',
      500: '#1B1E22',
      700: '#00000040',
    }
  },
})
export default theme
