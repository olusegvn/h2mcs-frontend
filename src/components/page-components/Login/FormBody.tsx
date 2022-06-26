import React, {useState} from 'react';
import {Controller} from "react-hook-form";
import {FormTextField} from "../../common-components/Input";
import {Select, StyledSelectOptionButton} from "../../common-components/Select";
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

const FormBody = ({control, errorString, errors}: any) => {
    const initialFormValues = {
        username: "",
        password: "",
        category: "",
        loginAs: ""
    }
    const [formValues, setFormValues] = useState(initialFormValues);
    const handleTextChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormValues({...formValues, [name]: value})
        return value;
    }
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
                onSelect={handleTextChanged}
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
                onSelect={handleTextChanged}
                items={loginOptions}/>
        )}/>

        <SmallSpacedStack>
            <StyledSignInButton type={'submit'}><Poppins600>Sign in</Poppins600></StyledSignInButton>
            <StyledTextButton><StyledPoppins400>Forgot password</StyledPoppins400></StyledTextButton>
        </SmallSpacedStack>
        </>
    );
};

export default FormBody;

const StyledSignInButton = styled((props: any) => <LargeButton {...props}/>
)(({theme}) => ({backgroundColor: theme.palette.info.main}));

const StyledTextButton = styled(Button)(({theme})=> ({
    width: '90%'
}));

const StyledPoppins400 = styled((props: any) => <Poppins400
    sx={{color: '#48AAF1'}}
    {...props}/>)
();