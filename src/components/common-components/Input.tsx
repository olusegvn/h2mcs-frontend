import React from 'react';
import {styled} from "@mui/material/styles";
import InputBase from '@mui/material/InputBase';

export const FormTextField = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    borderRadius: '.5rem',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.07)',
    minHeight: '2rem',
    border: `1px solid rgba(0, 0, 0, 0.25)`,
    fontSize: '1rem',
    fontFamily: "'Poppins', sans-serif",
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    '&:focus': {
      borderRadius: '.5rem',
      borderColor: theme.palette.success.light,
      boxShadow: `0px 0px 0px 2px rgba(29, 201, 160, 0.2)`,
    },
  },
}));
