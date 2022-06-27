import React from 'react';
import {styled} from "@mui/material/styles";

const BrowserBody = () => {
    return (
        <StyledBrowserBodyContainer>
            Browser
        </StyledBrowserBodyContainer>
    );
};

export default BrowserBody;

const StyledBrowserBodyContainer = styled('div')(({theme}) => ({
    borderRadius: '1.5rem',
    maxHeight: '93%',
    backgroundColor: 'white',
    flexGrow: 1,
    marginRight: '2%',
}));