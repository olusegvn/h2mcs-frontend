import React, {useState} from 'react';
import {Grid} from "@mui/material";
import {HalfGridItem} from "../mini-components/Grid";
import {Controller, useForm} from "react-hook-form";
import {FormField, FormInterface} from "../../assets/Forms";

export const Form = ({fields, Submit, onSubmit}: FormInterface) => {
    const initialFormValues: any = {}
    const [formValues, setFormValues] = useState(initialFormValues);
    const [errorString, setErrorString] = useState();
    const {control, handleSubmit, formState:{errors}} = useForm();

    fields?.forEach((item) => {initialFormValues[item.name] = ""})
    const handleTextChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormValues({...formValues, [name]: value})
        return value;
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid direction={'row'} spacing={4} container>
                {fields?.map(({name, InputComponent, placeholder, label, ...others}) => (
                    <HalfGridItem>
                        <Controller control={control} name={name} {...others} render={({field}) => (
                            <InputComponent
                                {...field}
                                {...others}
                                required={errors[name]}
                                name={name}
                                label={label}
                                value={formValues[name]}
                                errorString={errorString}
                                handleTextChanged={handleTextChanged}
                                placeholder={placeholder}
                            />)}
                            />
                    </HalfGridItem>
                ))}
            </Grid>
            <Submit type="submit">Submit</Submit>
        </form>
    );
};

export default Form;
