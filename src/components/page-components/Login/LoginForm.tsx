import React, {useState} from 'react';
import {CenteredBox} from "../../mini-components/Box";
import LargeButton from "../../common-components/Button";
import {TwoThirdGridItem} from "../../mini-components/Grid";
import {styled} from "@mui/material/styles";
import {Poppins400,Poppins600, PoppinsFootnote,} from "../../mini-components/Typography";
import {SmallSpacedStack, SpacedStack} from "../../mini-components/Stack";
import {Button, Stack} from "@mui/material";
import {FormTextField} from "../../common-components/Input";
import {Select, SelectStyledButton} from "../../common-components/Select";
import { useForm, Controller } from "react-hook-form";
import FormHeader from "./FormHeader";

const LoginForm = () => {
    const initialFormValues = {
        username: "",
        password: "",
        category: ""
    }
    const [formValues, setFormValues] = useState(initialFormValues);
    const [errorString, setErrorString] = useState();
    const {control, handleSubmit, formState:{errors}} = useForm();
    const handleTextChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormValues({...formValues, [name]: value})
        return value;
    }
    const onSubmit = () => console.log(formValues);
    return (
      <>
      <StyledFormContainer>
        <TwoThirdGridItem>
          <form onSubmit={handleSubmit(onSubmit)}>
            <SpacedStack>
                <FormHeader errorString={errorString} validationErrors={errors}/>
                  <Controller control={control} name={'username'} rules={{required: 'Fill in field'}} render={({field}) => (
                    <FormTextField
                        {...field} required={errors.username}
                        errorString={errorString} label={'Username'}
                        handleTextChanged={handleTextChanged}
                        placeholder={'Enter your username'}
                    />)}
                    />
                  <Controller control={control} name={'password'} rules={{required: 'Fill in field'}} render={({field}) => (
                    <FormTextField
                        {...field} required={errors.password}
                        errorString={errorString} label={'Password'}
                        handleTextChanged={handleTextChanged}
                        placeholder={'password'}
                    />)}
                  />
                <Select RootButton={SelectStyledButton} items={[ 'Index As...', 'Something' , 'Something else',]}/>
                <Select RootButton={SelectStyledButton} items={[ 'Category...', 'Something' , 'Something else',]}/>
                <SmallSpacedStack>
                    <StyledSignInButton type={'submit'}><Poppins600>Sign in</Poppins600></StyledSignInButton>
                    <StyledSecondaryTextButton><Poppins400>Forgot password</Poppins400></StyledSecondaryTextButton>
                </SmallSpacedStack>
            </SpacedStack>
          </form>
        </TwoThirdGridItem>
      </StyledFormContainer>
      <PoppinsFootnote>Powered by nHub Nigeria</PoppinsFootnote>
      </>
    );
};

export default LoginForm;

const StyledSignInButton = styled((props: any) => <LargeButton {...props}/>
)(({theme}) => ({backgroundColor: theme.palette.info.main}));

const StyledSecondaryTextButton = styled((props: any) => <Button {...props}/>
)(({theme}) => ({color: theme.palette.secondary.main}));

const StyledFormContainer = styled((props: any) => <CenteredBox
    style={{paddingRight: '15%', paddingLeft: '7%'}} {...props}/>)();
