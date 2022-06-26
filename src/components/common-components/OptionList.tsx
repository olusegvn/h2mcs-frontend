import React from 'react';
import {styled} from "@mui/material/styles";
import {Button, Stack} from "@mui/material";
import {MonserratListOption} from "../mini-components/Typography";
import {severityObject} from "../../assets/Severity";
import {Circle} from "./Circle";

export interface option {
    name: string,
    action?: (props: any) => any;
    severity?: number
    value?: string,
}
export interface optionListProps {
    items: option[],
    OptionButton: any,
    OptionsContainer?: any,
    selectAction?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    parentButtonRef?: React.RefObject<HTMLButtonElement>,
    parentName?: string,
    onChange?: any,
}

export const OptionList = ({onChange, parentButtonRef, parentName, items, selectAction, OptionButton=StyledOptionButton, OptionsContainer=StyledOptionsContainer}: optionListProps) => {
    return (
        <OptionsContainer sx={{width: parentButtonRef?.current?.clientWidth}} >
            {items.map(({name, value, action, severity}: option, index) => {
                action = action || selectAction

                // manually creating event because default one is unreliable
                const event = {target: {name: parentName, value}};
                return (
                    <OptionButton
                        name={parentName}
                        value={value}
                        key={index}
                        onClick={() => {onChange(event);return action? action(event):null}}>
                        <MonserratListOption>{name}</MonserratListOption>
                        {severity && <Circle color={severityObject[severity]}/>}
                    </OptionButton>
                );
            })}

        </OptionsContainer>
    );
};


export const StyledOptionsContainer = styled(Stack)(({theme, }) => ({
    filter:'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
}));


export const StyledOptionButton = styled(Button)(({theme, }) => ({
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: '#FDFCFC',
    color: theme.palette.grey[300],
    justifyContent: 'space-between',
    borderRadius: '0px',
    padding: '.5rem 1rem .5rem .7rem',
    width: '120%',
    "&:hover": {
        backgroundColor: theme.palette.common.white,
        alignItems: 'center',
      },
}));


