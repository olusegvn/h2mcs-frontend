import React, {ChangeEvent} from 'react';
import {styled} from "@mui/material/styles";
import InputBase from '@mui/material/InputBase';
import {PoppinsErrorInputLabel, PoppinsInputLabel} from "../mini-components/Typography";
import {Stack} from "@mui/material";
import theme from "../../Theme";
import warningIcon from "@iconify/icons-emojione-v1/warning";
import {Icon} from "@iconify/react";
import {SmallSpacedStack} from "../mini-components/Stack";

export interface FormTextFieldProps {
  name: string;
  value: string;
  errorString?: string;
  placeholder: string;
  handleTextChanged: (event: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  required?: boolean;
  onChange: any;
}

export const FormTextField = ({name, errorString,
                                handleTextChanged, onChange, required,
                                value, placeholder, label,
                                ...others}: FormTextFieldProps) => {
  const LabelComponent = required || errorString ? PoppinsErrorInputLabel: PoppinsInputLabel;
  const border = `1px solid ${required || errorString? theme.palette.error.light : theme.palette.grey[700]}`
  return (
      <Stack>
        <LabelComponent>{label}</LabelComponent>
        <SmallSpacedStack direction={'row'} alignItems={'center'}>
          <StyledFormTextField
              name={name}
              value={value}
              onChange={(e: any) => {onChange(e.target.value); handleTextChanged(e)}}
              placeholder={placeholder}
              sx={{border: border, borderRadius: '.5rem',}}
              {...others}
          />
          {required && <Icon icon={warningIcon} height={25}/>}
        </SmallSpacedStack>
      </Stack>
  );

}

const StyledFormTextField = styled(InputBase)(({ theme }) => ({
    width: '90%',
  '& .MuiInputBase-input': {
    boxShadow: `0px 4px 10px rgba(0, 0, 0, 0.07)`,
    minHeight: '2rem',
    fontSize: '1rem',
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 300,
    // color: theme.palette.grey[200],
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&::placeholder': {
      // color: theme.palette.grey[700],
    },
    '&:focus': {
        border: 'none',
      borderRadius: '.5rem',
      borderColor: theme.palette.success.light,
      boxShadow: `0px 0px 0px 2px rgba(29, 201, 160, 0.2)`,
    },
  },
}));


