import React from 'react';
import {Box, Select} from "@mui/material";
import {selectProps} from "./Select";
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import {styled} from "@mui/material/styles";
import FormControl from '@mui/material/FormControl';
import {Icon} from "@iconify/react";
import warningIcon from "@iconify/icons-emojione-v1/warning";
import {RowStack} from "../mini-components/Stack";

const MUISelect = ({placeholder, value, name, onChange, handleTextChanged, errorString, required, items}: any) => {
    return (
        <StyledRowStack>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{placeholder}</InputLabel>
            <StyledSelect
                name={name}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                label={placeholder}
                error={required || Boolean(errorString)}
                onChange={(e: any) => {onChange(e.target.value); handleTextChanged(e)}}
            >
              {items.map(({value, name}: any) => (
                    <MenuItem value={value}>{name}</MenuItem>
                ))}
            </StyledSelect>

          </FormControl>
          {required && <Icon icon={warningIcon} height={25}/>}
        </StyledRowStack>
    );
};

export default MUISelect;

const StyledSelect = styled(Select)(({theme})=> ({
    width: '90%',
}));
const StyledRowStack = styled(RowStack)(({theme})=> ({
    alignItems: 'center',
}));