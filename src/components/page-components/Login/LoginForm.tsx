import React, {useState} from 'react';
import {CenteredFlexGrowBox} from "../../mini-components/Box";
import {TwoThirdGridItem} from "../../mini-components/Grid";
import {styled} from "@mui/material/styles";
import {PoppinsFootnote,} from "../../mini-components/Typography";
import { SpacedStack} from "../../mini-components/Stack";
import { useForm } from "react-hook-form";
import FormHeader from "./FormHeader";
import FormBody from "./FormBody";
import { getPermissoions, setPermissions } from '../../../Slices/permissions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import SignInContainer from "../../common-components/SignInContainer";


const LoginForm = () => {
    const initialFormValues = {
      username: "",
      password: "",
      category: "",
      loginAs: ""
    }
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const [errorString, setErrorString] = useState<any>();
    const {control, handleSubmit, formState:{errors}} = useForm();
    const [formValues, setFormValues] = useState(initialFormValues);
    const handleTextChanged = (event: any) => {
        const {name, value} = event.target;
        setFormValues({...formValues, [name]: value})
        return value;
    }
    const onSubmit = () => {
        console.log(formValues)
      if(formValues.username !== "janedoe"){
        return setErrorString('invalid login details')
      }
      dispatch(setPermissions(['name', 'surgeries']));
      navigate('/overview')
    };
    return (
      <SignInContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <SpacedStack>
                <FormHeader errorString={errorString} validationErrors={errors}/>
                <FormBody
                    formValues={formValues}
                    handleTextChanged={handleTextChanged}
                    control={control}
                    errorString={errorString}
                    errors={errors}
                />
            </SpacedStack>
          </form>

      </SignInContainer>
    );
};

export default LoginForm;

