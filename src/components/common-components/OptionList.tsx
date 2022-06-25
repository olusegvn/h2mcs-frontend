import React from 'react';
import {styled} from "@mui/material/styles";
import {Button, Stack} from "@mui/material";
import {MonserratListOption} from "../mini-components/Typography";
import {RowStack} from "../mini-components/Stack";
import {severityObject} from "../../assets/Severity";
import {Circle} from "./Circle";

interface option {
    name: string,
    action?: (props: any) => any;
    severity?: number
}
interface optionListProps {
    items: option[]
}

export const OptionList = ({items}: optionListProps) => {
    return (
        <StyledOptionsContainer>
            {items.map(({name, action, severity}: option) => (
                <StyledOptionButton onClick={action}>
                    <MonserratListOption>{name}</MonserratListOption>
                    {severity && <Circle color={severityObject[severity]}/>}
                </StyledOptionButton>
            ))}

        </StyledOptionsContainer>
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

