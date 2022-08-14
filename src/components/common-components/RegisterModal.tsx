import React from 'react';
import {styled} from "@mui/material/styles";
import {Box, Button, Divider, Grid} from "@mui/material";
import {Monserrat600} from "../mini-components/Typography";
import theme from "../../Theme";

const RegisterModal = ({children, name='Register'}: any) => {
    return (
        <>
        <StyledBox><StyledMonserrat600>{name}</StyledMonserrat600></StyledBox>
        <StyledChildrenContainer>
            {children}
        </StyledChildrenContainer>
        </>
    );
};

export default RegisterModal;

const StyledChildrenContainer = styled((props: any) => <Grid container spacing={4} {...props}/>)
(({theme})=> ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    boxShadow: '0px 1px 11px 1px rgba(0, 0, 0, 0.07)',
    borderRadius: '8px 8px 0px 0px',
    padding: '8% 4% 2% 0%',
    backgroundColor: 'white',
    height: '90vh',
    scrollBehavior: 'smooth',
    overflow: 'scroll',
    '&::-webkit-scrollbar': {
        // display: 'none',
        width: '0.4rem',
        borderRadius: '.5rem',
    },
    '&::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
        webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',

    },
    '&::-webkit-scrollbar-thumb': {
        border: 'none',
        // backgroundColor: 'rgba(0,0,0,.1)',
        outline: '1px solid slategrey',
        borderRadius: '.5rem',
        backgroundColor: '#D9D9D9'
    }

}))
const StyledBox = styled(Button)
(({theme})=> ({
    justifyContent: "flex-start",
    position: 'absolute',
    padding: '1.5% 1% 1% .5%',
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    borderRadius: 0,
}))

const StyledMonserrat600 = styled(Monserrat600)
(({theme})=> ({
    color: theme.palette.primary.main,
    fontSize: 15,
}))
const StyledRootContainer = styled(Box)
(({theme})=> ({

    borderBottom: `10px solid black`
}))
