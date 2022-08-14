import React from 'react';
import {Box, Select} from "@mui/material";
import {selectProps} from "./Select";
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import {styled} from "@mui/material/styles";
import FormControl from '@mui/material/FormControl';

const MUISelect = ({placeholder, value, name, handleTextChanged, items}: selectProps) => {
    return (
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{placeholder}</InputLabel>
            <StyledSelect
                name={name}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                label={placeholder}
                onChange={handleTextChanged}
            >
              {items.map(({value, name}) => (
                    <MenuItem value={value}>{name}</MenuItem>
                ))}
            </StyledSelect>
          </FormControl>
        </Box>
    );
};

export default MUISelect;

const StyledSelect = styled(Select)(({theme})=> ({
    width: '90%',
}));