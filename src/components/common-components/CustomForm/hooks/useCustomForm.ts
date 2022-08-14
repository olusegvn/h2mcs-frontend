import React, {useState} from "react";
import {useForm} from "react-hook-form";


export default function useCustomForm({fields}: any){
    const initialFormValues: any = {}
    const [formValues, setFormValues] = useState(initialFormValues);
    const [errorString, setErrorString] = useState();
    const {control, handleSubmit, formState:{errors}} = useForm();

    fields?.forEach((item: any) => {initialFormValues[item.name] = ""})
    const handleTextChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormValues((prevValues: any )=> ({...prevValues, [name]: value}))
        return value;
    }

    return {
        formValues,
        errorString,
        handleTextChanged,
        handleSubmit,
        errors,
        control,
        setErrorString,

    }

}

