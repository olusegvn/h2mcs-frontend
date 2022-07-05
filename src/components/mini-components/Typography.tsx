import React from 'react';
import {styled} from "@mui/material/styles";
import {Typography} from "@mui/material";
import theme from "../../Theme";

export const Poppins = styled(({fw=300, s='1rem', ...props}: any) =>
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

export const CenteredPoppings = (props: any) => <Poppins
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

export const PoppinsInputLabel = (props: any) => <Poppins
    sx={{
        paddingLeft: '.4rem',
        fontSize: '.8rem',
        fontWeight: 500,
        color: '#404040',
    }} {...props}/>;

export const PoppinsErrorInputLabel = (props: any) => <PoppinsInputLabel
    sx={{color: theme.palette.error.main,}} {...props}/>;

export const PoppinsTitle = (props: any) => <Poppins
    color='text.primary'
    sx={{
        paddingLeft: '.8rem',
        fontSize: '1.6rem',
        fontWeight: 500,
    }} {...props}/>;

export const PoppinsPageTitle = (props: any) => <Poppins
    sx={{
        fontSize: '1.7rem',
        fontWeight: 700,
        color: theme.palette.text.primary,
    }} {...props}/>;

export const PoppinsSubtitle = (props: any) => <CenteredPoppings
    sx={{color: '#636364'}}
    fw={400}
    {...props}/>;

export const PoppinsErrorSubtitle = (props: any) => <CenteredPoppings
    sx={{color: theme.palette.error.main}}
    fw={400}
    {...props}/>;

export const PoppinsFootnote = (props: any) => <Poppins
    sx={{
        fontSize: '.8rem',
        fontWeight: 400,
        color: theme.palette.grey[100],
        textAlign: 'center',
    }} {...props}/>;

export const Poppins600 = (props: any) => <Poppins
    sx={{color: '#fff'}}
    fw={600}
    {...props}/>;

export const PoppinsNavLink = ({...others}: any) => (
    <Poppins600 sx={{color: 'inherit'}} s={'1.1vw'} {...others} />
);



export const Poppins400 = (props: any) => <Poppins fw={400} {...props}/>;
export const Poppins700 = (props: any) => <Poppins fw={700} s={'2.5rem'} {...props}/>;


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

export const Monserrat400 = (props: any) => <Monserrat fw={400} s='.8rem' {...props}/>;
export const MonserratListOption = (props: any) => <Monserrat fw={400} s='.8rem' {...props}/>;
export const Monserrat600 = (props: any) => <Monserrat fw={600} s='.8rem' {...props}/>;
export const Monserrat700 = (props: any) => <Monserrat fw={700} s='.8rem' {...props}/>;

export const MonserratTableHeader = styled(Monserrat600)(({theme}) => ({
    color: '#1B1E22'
}));

export const MonserratTableData = styled(Monserrat400)(({theme}) => ({
    color: theme.palette.text.secondary,
    paddingLeft: '7%',
}));
