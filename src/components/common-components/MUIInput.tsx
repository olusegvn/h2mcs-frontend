import React, {ChangeEvent, memo} from 'react';
import {Stack, TextField} from "@mui/material";
import warningIcon from "@iconify/icons-emojione-v1/warning";
import {Icon} from "@iconify/react";
import {RowStack, SmallSpacedStack} from "../mini-components/Stack";
import {styled} from "@mui/material/styles";

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

export const MUITextField = ({name, errorString,
                                  handleTextChanged, onChange, required,
                                  placeholder, label, value,
                                  ...others}: FormTextFieldProps) => {
    return (
        <RowStack style={{alignItems: 'center'}} spacing={2}>
            <StyledTextField
                id={name}
                name={name}
                label={placeholder}
                variant={'outlined'}
                defaultValue={placeholder}
                error={required || Boolean(errorString)}
                value={value}
                onChange={(e: any) =>{onChange(e.target.value); handleTextChanged(e)}}
                sx={{width: "90%"}}
                {...others}
            />
            {required && <Icon icon={warningIcon} height={25}/>}
        </RowStack>
    );

}

const StyledTextField = styled(TextField)(({ theme }) => ({
    // '& label.Mui-focused': {
    //     color: '#262626',
    //     fontFamily: "'Inter', sans-serif",
    //     fontWeight: 500,
    // },
    '& label': {
        fontFamily: "'Inter', sans-serif",
        fontWeight: 500,
        color: '#262626'
    },
    '& .MuiOutlinedInput-root': {
            fontSize: 12,
            color: '#676464',
        '& fieldset': {
            border: '0.5px solid #E8DDFF',
            borderRadius: 10,
        },
        '&:hover fieldset': {
            borderColor: '#676464',
        },
        '&.Mui-focused fieldset': {
            border: '0.5px solid #676464',
        },
    },
}))

export default memo(MUITextField)
