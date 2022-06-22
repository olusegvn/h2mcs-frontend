import React from 'react';
import {styled} from "@mui/material/styles";
import {Typography} from "@mui/material";
import theme from "../../Theme";

export const Poppings = styled(({fw, s='1rem', ...props}: any) =>
(
    <Typography
        sx={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: s,
            textTransform: 'none',
            fontWeight: fw,
        }}
        {...props}
    />
))();

export const CenteredPoppings = (props: any) => <Poppings
    style={{textAlign: 'center'}}
    {...props}/>;

export const PoppingsTitle = (props: any) => <CenteredPoppings
    sx={{
        textTransform: 'uppercase',
        fontSize: '2.1rem',
        fontWeight: 500,
        color: '#030303',
        lineHeight: '2.5rem'
    }} {...props}/>;

export const PoppinsInputLabel = (props: any) => <Poppings
    sx={{
        paddingLeft: '.4rem',
        fontSize: '.8rem',
        fontWeight: 500,
        color: '#404040',
        // lineHeight: '2.5rem'
    }} {...props}/>;

export const PoppinsErrorInputLabel = (props: any) => <PoppinsInputLabel
    sx={{color: theme.palette.error.main,}} {...props}/>;

export const PoppinsSubtitle = (props: any) => <CenteredPoppings
    sx={{color: '#636364'}}
    fw={400}
    {...props}/>;

export const PoppinsErrorSubtitle = (props: any) => <CenteredPoppings
    sx={{color: theme.palette.error.main}}
    fw={400}
    {...props}/>;

export const PoppinsFootnote = (props: any) => <Poppings
    sx={{
        fontSize: '.8rem',
        fontWeight: 400,
        color: theme.palette.grey[100],
        textAlign: 'center',
    }} {...props}/>;

export const Poppins600 = (props: any) => <Poppings fw={600} {...props}/>;
export const Poppins400 = (props: any) => <Poppings fw={400} {...props}/>;


export const Monserrat = styled(({fw, s='1rem', ...props}: any) =>
(
    <Typography
        sx={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: s,
            textTransform: 'none',
            fontWeight: fw,
        }}
        {...props}
    />
))();

export const Monserrat300 = (props: any) => <Monserrat fw={400} s='.8rem' {...props}/>;
