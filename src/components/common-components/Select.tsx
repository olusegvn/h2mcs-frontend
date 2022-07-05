import React, {useEffect, useRef, useState} from 'react';
import {Button, Paper, Stack} from "@mui/material";
import Popup from "reactjs-popup";
import {option, OptionList} from "./OptionList";
import {Poppins} from "../mini-components/Typography";
import {styled} from "@mui/material/styles";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import {PopupActions} from "reactjs-popup/dist/types";
import theme from "../../Theme";
import {Icon} from "@iconify/react";
import warningIcon from "@iconify/icons-emojione-v1/warning";
import {SmallSpacedStack} from "../mini-components/Stack";

interface selectProps {
    items: option[],
    handleTextChanged: (e: React.ChangeEvent<HTMLInputElement>)=> string,
    value: string,
    name: string,
    placeholder?: string,
    required?: object| string| boolean,
    errorString?: string,
    half?: any
}

export const Select = ({errorString, half, items, required, placeholder, value, handleTextChanged, name, ...others}: selectProps) => {
    const selectPopupRef = useRef<PopupActions>(null);
    const selectButtonRef = useRef<HTMLButtonElement>(null);
    const border = `1px solid ${required || errorString? theme.palette.error.light : theme.palette.grey[700]}`
    const onOptionSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        selectPopupRef?.current?.close();
        handleTextChanged(e);
    }
    return (
        <SmallSpacedStack direction={'row'} alignItems={'center'}>
        <Popup
            ref={selectPopupRef}
            trigger={
            <StyledTriggerContainer half={half}>
                <StyledSelectButton ref={selectButtonRef} sx={{border: border,}}>
                <Poppins >{ value ||placeholder}</Poppins>
                <KeyboardDoubleArrowDownIcon/>
                </StyledSelectButton>
            </StyledTriggerContainer>}
        >
            <OptionList
                OptionButton={StyledSelectOptionButton}
                selectAction={onOptionSelect}
                OptionsContainer={StyledSelectOptionsContainer}
                items={items}
                parentName={name}
                parentButtonRef={selectButtonRef}
                {...others}/>
        </Popup>
        {required && <Icon icon={warningIcon} height={25}/>}
       </SmallSpacedStack>

    );
};

const StyledTriggerContainer = styled('div')<any>(({theme, half})=> ({
    width: half? '50%': '90%',
}));

const StyledSelectButton = styled(Button)(({theme}) => ({
    justifyContent: 'space-between',
    height: '3.5rem',
    color: theme.palette.grey[200],
    width: '100%',
    filter: 'drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25))',
    border: '1px solid rgba(0, 0, 0, 0.25)',
    borderRadius: '.5rem',
    "&:hover": {
        backgroundColor: theme.palette.common.white,
        boxShadow: 'none',
        filter: 'none',
        border: 'none'
    }
}));


export const StyledSelectOptionsContainer = styled(Stack)(({theme, }) => ({
    padding: '.4rem 0px',
    backgroundColor: '#FDFCFC',
    borderRadius: '1rem',
    filter: 'drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.1))',
    width: '16.5vw'
}));

export const StyledSelectOptionButton = styled(Button)(({theme,}) => ({
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: '#FDFCFC',
    color: theme.palette.grey[300],
    justifyContent: 'space-between',
    borderRadius: '0px',
    padding: '.5rem 1rem .5rem .7rem',
    height: '2.5rem',
    width: '100%',
    "&:hover": {
        backgroundColor: theme.palette.common.white,
        alignItems: 'center',
    },
    '&:last-of-type': {
        borderBottom: 'none',
    },
}));