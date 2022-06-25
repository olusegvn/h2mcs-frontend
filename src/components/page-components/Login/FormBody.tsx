import React from 'react';
import {Controller} from "react-hook-form";
import {FormTextField} from "../../common-components/Input";
import {Select, SelectStyledButton} from "../../common-components/Select";
import {SmallSpacedStack} from "../../mini-components/Stack";
import {Poppins400, Poppins600} from "../../mini-components/Typography";
import {styled} from "@mui/material/styles";
import {LargeButton} from "../../common-components/Button";
import {Button} from "@mui/material";

const FormBody = ({control, errorString, errors, handleTextChanged}: any) => {
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
        <Select RootButton={SelectStyledButton} items={[ 'Index As...', 'Something' , 'Something else',]}/>
        <Select RootButton={SelectStyledButton} items={[ 'Category...', 'Something' , 'Something else',]}/>
        <SmallSpacedStack>
            <StyledSignInButton type={'submit'}><Poppins600>Sign in</Poppins600></StyledSignInButton>
            <StyledSecondaryTextButton><Poppins400>Forgot password</Poppins400></StyledSecondaryTextButton>
        </SmallSpacedStack>
        </>
    );
};

export default FormBody;

const StyledSignInButton = styled((props: any) => <LargeButton {...props}/>
)(({theme}) => ({backgroundColor: theme.palette.info.main}));

const StyledSecondaryTextButton = (props: any) => <Button color={'secondary'} {...props}/>
