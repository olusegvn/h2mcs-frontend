import React from 'react';
import {CenteredBox} from "../mini-components/Box";
import {Poppins700, PoppinsTitle} from "../mini-components/Typography";
import {PlaceholderIcon} from "../mini-components/Icon";
import {styled} from "@mui/material/styles";

const Placeholder = () => {
    return (
        <StyledCenteredBox>
            <PlaceholderIcon icon={'ic:outline-people-alt'}/>
            <Poppins700>Nothing to show</Poppins700>
        </StyledCenteredBox>
    );
};

export default Placeholder;

const StyledCenteredBox = styled(CenteredBox)(({theme}) => ({
    height: '60vh',
    display: 'flex',
    flexDirection: 'column',
    color: theme.palette.grey[100]
}));