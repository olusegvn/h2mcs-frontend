import SignInContainer from "../../common-components/SignInContainer";
import Form from "../../common-components/CustomForm/Form";
import {form, registerForm} from "../../../assets/Forms";
import {SpacedStack} from "../../mini-components/Stack";
import FormHeader from "../Login/FormHeader";
import React from "react";
import {styled} from "@mui/material/styles";
import {Button} from "@mui/material";
import {Poppins400} from "../../mini-components/Typography";
import {Link} from "react-router-dom";
import {ROUTES} from "../../../assets/consts";
import {useRegisterForm} from "./hooks/useRegisterForm";
import useCustomForm from "../../common-components/CustomForm/hooks/useCustomForm";

const Register = (): JSX.Element => {
    const {onSubmit} = useRegisterForm()
    const {errorString, errors} = useCustomForm({...registerForm})
    return (
        <SignInContainer>
            <SpacedStack>
                <FormHeader errorString={errorString} validationErrors={errors}/>
                <Form onSubmit={onSubmit} {...registerForm} />
                <StyledLink to={ROUTES.LOGIN}><StyledTextButton><StyledPoppins400>Sign in</StyledPoppins400></StyledTextButton></StyledLink>
            </SpacedStack>
        </SignInContainer>
    );
}

export default Register

export const StyledTextButton = styled(Button)(({theme})=> ({ width: '90%'}));

const StyledPoppins400 = styled(Poppins400)(({theme})=> ({
    color: theme.palette.secondary.light,
}))
const StyledLink = styled(Link)(({theme})=> ({
    textDecoration: 'none',
}))
