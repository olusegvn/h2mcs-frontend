import {Grid} from "@mui/material";
import {styled} from "@mui/material/styles";
import loginBackground from '../../assets/images/login-backgrond.png'
import {HalfGridItem, TwoThirdGridItem} from "../mini-components/Grid";
import {CenteredFlexGrowBox} from "../mini-components/Box";
import React from "react";
import {PoppinsFootnote} from "../mini-components/Typography";

const SignInContainer = ({children}: any): JSX.Element => {
    return (
        <>
        <StyledMainContainer>
            <StyledFormContainer>
                <StyledInputsContainer>
                    <TwoThirdGridItem>
                        {children}
                    </TwoThirdGridItem>
                </StyledInputsContainer>
                <PoppinsFootnote>Powered by nHub Nigeria</PoppinsFootnote>
            </StyledFormContainer>
        </StyledMainContainer>
        </>
    );
}

export default SignInContainer

const StyledMainContainer = styled((props: any) => <Grid container {...props} />)
(({theme}) => ({
    backgroundImage: `linear-gradient(90deg, #FDFDFD 50%, 
        rgba(238, 238, 238, 0.62) 59.47%, 
        rgba(235, 235, 235, 0.533788) 70.08%, 
        rgba(217, 217, 217, 0) 100%),
        url(${loginBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
}));

const StyledInputsContainer = styled((props: any) => <CenteredFlexGrowBox
    sx={{paddingRight: '9%', paddingLeft: '7%', height:'98vh'}}
    {...props}
/>)();


const StyledFormContainer = styled((props: any) => <HalfGridItem
    style={{backgroundColor: '#fff'}} {...props}/>)();

