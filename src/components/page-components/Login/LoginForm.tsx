import React, {useState} from 'react';
import {CenteredFlexGrowBox} from "../../mini-components/Box";
import {TwoThirdGridItem} from "../../mini-components/Grid";
import {styled} from "@mui/material/styles";
import {PoppinsFootnote,} from "../../mini-components/Typography";
import { SpacedStack} from "../../mini-components/Stack";
import { useForm } from "react-hook-form";
import FormHeader from "./FormHeader";
import FormBody from "./FormBody";

const LoginForm = () => {
    const [errorString, setErrorString] = useState();
    const {control, handleSubmit, formState:{errors}} = useForm();
    const onSubmit = () => {};
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

const StyledFormContainer = styled((props: any) => <CenteredFlexGrowBox
    sx={{paddingRight: '9%', paddingLeft: '7%', height:'96vh'}}
    {...props}
/>)();
