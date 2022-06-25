import React, {useState} from 'react';
import {CenteredBox} from "../../mini-components/Box";
import {TwoThirdGridItem} from "../../mini-components/Grid";
import {styled} from "@mui/material/styles";
import {PoppinsFootnote,} from "../../mini-components/Typography";
import { SpacedStack} from "../../mini-components/Stack";
import { useForm } from "react-hook-form";
import FormHeader from "./FormHeader";
import FormBody from "./FormBody";

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
                <FormBody
                    control={control}
                    errorString={errorString}
                    errors={errors}
                    handleTextChanged={handleTextChanged}
                />
            </SpacedStack>
          </form>
        </TwoThirdGridItem>
      </StyledFormContainer>
      <PoppinsFootnote>Powered by nHub Nigeria</PoppinsFootnote>
      </>
    );
};

export default LoginForm;

const StyledFormContainer = styled((props: any) => <CenteredBox
    sx={{paddingRight: '9%', paddingLeft: '7%'}}
    {...props}
/>)();
