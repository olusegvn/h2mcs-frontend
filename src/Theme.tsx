import { createTheme } from '@mui/material/styles'
const theme = createTheme({
  palette: {
    primary: { main: '#D7024E' },
    secondary: {main: '#48AAF1'},
    success: { light: '#1DC9A0', main: '#1DC9A0' },
    info: { main: '#EA454C' },
    divider: '#ced4da',
    text: {
      primary: '#20243D',
      secondary: '#717274',
    },
    grey: {
      100: '#A3AFB8',
      500: '#1B1E22',
    }
  },
})
export default theme
