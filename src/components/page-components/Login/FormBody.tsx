import React, {useState} from 'react';
import {Controller} from "react-hook-form";
import {FormTextField} from "../../common-components/Input";
import {Select} from "../../common-components/Select";
import {SmallSpacedStack} from "../../mini-components/Stack";
import {Poppins400, Poppins600} from "../../mini-components/Typography";
import {styled} from "@mui/material/styles";
import {LargeButton} from "../../common-components/Button";
import {Button} from "@mui/material";

const categoryOptions = [
    {name: 'Something', value: 'Something'},
    {name: 'Something else', value: 'Something else'}
]
const loginOptions = [
    {name: 'Something', value: 'Something'},
    {name: 'Something else', value: 'Something else'}
]

const FormBody = ({control, errorString, errors, handleTextChanged, formValues}: any) => {


    return (
        <>
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
        <Controller control={control} name={'loginAs'} rules={{required: 'Select a category'}} render={({field}) => (
            <Select
                {...field}
                errorString={errorString}
                required={errors.loginAs}
                name={'loginAs'}
                placeholder={'Login As...'}
                value={formValues.loginAs}
                handleTextChanged={handleTextChanged}
                items={categoryOptions}/>
        )}/>
        <Controller control={control} name={'category'} rules={{required: 'Select a category'}} render={({field}) => (
            <Select
                {...field}
                errorString={errorString}
                required={errors.category}
                name={'category'}
                placeholder={'Category...'}
                value={formValues.category}
                handleTextChanged={handleTextChanged}
                items={loginOptions}/>
        )}/>

        <SmallSpacedStack>
            <StyledSignInButton type={'submit'} ><Poppins600>Sign in</Poppins600></StyledSignInButton>
            <StyledTextButton><StyledPoppins400>Forgot password</StyledPoppins400></StyledTextButton>
        </SmallSpacedStack>
        </>
    );
};

export default FormBody;

export const StyledTextButton = styled(Button)(({theme})=> ({width: '90%'}));

export const StyledSignInButton = styled(LargeButton)(({theme}) => ({
    backgroundColor: theme.palette.info.main
}));

const StyledPoppins400 = styled(Poppins400)(({theme})=> ({
    color: theme.palette.secondary.light
}))
