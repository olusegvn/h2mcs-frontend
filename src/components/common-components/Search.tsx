import React from 'react';
import {styled, alpha} from "@mui/material/styles";
import { Icon } from '@iconify/react';
import InputBase from "@mui/material/InputBase";
const Search = () => {
    return (
        <StyledSearch>
            <StyledSearchIconWrapper>
                <Icon icon="akar-icons:search" color="#A6A6A6" />
            </StyledSearchIconWrapper>
            <StyledStyledInputBase
              placeholder="Search with patient id…"
              inputProps={{ 'aria-label': 'search' }}
            />
        </StyledSearch>
    );
};

export default Search;

const StyledSearch = styled('div')(({ theme }) => ({

  position: 'relative',
  borderRadius: '25px',
  backgroundColor: '#F9F9F9',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '25rem',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const StyledSearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledStyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.text.primary,
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    fontWeight: 300,
    fontFamily: "'Poppins', sans-serif",
    [theme.breakpoints.up('sm')]: {
      width: '20rem',
      '&:focus': {
        width: '25rem',
      },
    },
  },
}));
