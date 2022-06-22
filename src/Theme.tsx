import { createTheme } from '@mui/material/styles'
const theme = createTheme({
  palette: {
    primary: { main: '#D7024E' },
    secondary: {main: '#48AAF1'},
    success: { light: '#1DC9A0', main: '#1DC9A0' },
    info: { main: '#EA454C' },
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
      100: '#A3AFB8',
      200: '#636364',
      400: 'rgba(27,30,34,0.78)',
      500: '#1B1E22',
      700: '#00000040',
    }
  },
})
export default theme
