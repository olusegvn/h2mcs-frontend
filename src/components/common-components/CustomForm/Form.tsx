import React from 'react';
import {Controller} from "react-hook-form";
import useCustomForm from "./hooks/useCustomForm";
import {styled} from "@mui/material/styles";
import {RowStack} from "../../mini-components/Stack";
import {FormInterface} from "../../../assets/Forms";

export const Form = ({fields, Submit, onSubmit, ContainerComponent={RowStack}}: FormInterface) => {
    const {errors, control, errorString, handleTextChanged, formValues, handleSubmit} = useCustomForm({fields})
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ContainerComponent spacing={4}>
                {fields?.map(({name, InputComponent, placeholder, label, size=2, ...others}) => (
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
                ))}
            <Submit type="submit">Submit</Submit>
            </ContainerComponent>
        </form>
    );
};

const StyledInputContainre = styled('div')<any>(({theme, size})=> ({
    width: `${size * 30}%`,
}));


export default Form;
