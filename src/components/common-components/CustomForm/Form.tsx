import React from 'react';
import {Controller, useForm} from "react-hook-form";
import useCustomForm from "./hooks/useCustomForm";
import {styled} from "@mui/material/styles";
import {RowStack} from "../../mini-components/Stack";
import {FormInterface} from "../../../assets/Forms";
import {Grid} from "@mui/material";

export const Form = ({fields, Submit, onSubmit, errors, control,
                         errorString, handleTextChanged, formValues,
                         globalSize, ContainerComponent={RowStack}}: any) => {
    return (
        <form onSubmit={onSubmit}>
            <ContainerComponent spacing={4}>
                {fields?.map(({name, InputComponent, placeholder, label, size=2, ...others}: any) => {
                    size = globalSize ?? size
                    return (
                    <StyledInputContainre size={size}>
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
                    </StyledInputContainre>
                )})}
            <Submit type="submit">Submit</Submit>
            </ContainerComponent>
        </form>
    );
};

const StyledInputContainre = styled((props: any) => <Grid item {...props}/>)(({theme, size})=> ({
    width: `${size * 30}%`,
}));


export default Form;
