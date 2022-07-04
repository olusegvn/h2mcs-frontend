import React from 'react';
import {styled} from "@mui/material/styles";
import {Monserrat700, PoppinsPageTitle} from "../../mini-components/Typography";
import {RowStack} from "../../mini-components/Stack";
import {ActionButton} from "../../common-components/Button";
import { Icon } from '@iconify/react';

const BrowserHeader = ({name}: {name?: string}) => {
    return (
        <StyledDiv>
            <PoppinsPageTitle>{name}</PoppinsPageTitle>
            <StyledActionButton>
                <Icon  icon="fluent:add-12-filled" />
                <Monserrat700>Add</Monserrat700>
            </StyledActionButton>
        </StyledDiv>
    );
};

export default BrowserHeader;

const StyledDiv = styled(RowStack)(({theme}) => ({
    background: 'inherit',
    marginLeft: '15.3%',
    marginRight: '3%',
    height: '6%',
    paddingTop: '.5%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
}));

const StyledIcon = styled(RowStack)(({theme}) => ({
    height: 25,
}));

const StyledActionButton = (props: any) => <ActionButton
    sx={{
        marginBottom: '1%',
        width: '8%',
        minWidth: '5rem',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }}
    {...props}/>

