import React from 'react';
import {styled} from "@mui/material/styles";
import {Monserrat600, PoppinsPageTitle} from "../../mini-components/Typography";
import {RowStack} from "../../mini-components/Stack";
import {ActionButton} from "../../common-components/Button";

const BrowserHeader = () => {
    return (
        <StyledDiv>
            <PoppinsPageTitle>Patients</PoppinsPageTitle>
            <StyledActionButton><Monserrat600>Add Session</Monserrat600></StyledActionButton>
        </StyledDiv>
    );
};

export default BrowserHeader;

const StyledDiv = styled(RowStack)(({theme}) => ({
    background: 'inherit',
    marginLeft: '16.5%',
    marginRight: '3%',
    height: '6%',
    paddingTop: '.5%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
}));

const StyledActionButton = (props: any) => <ActionButton sx={{marginBottom: '1%'}} {...props}/>

