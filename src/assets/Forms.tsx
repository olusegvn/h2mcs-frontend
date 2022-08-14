import {FormTextField} from "../components/common-components/Input";
import {option} from "../components/common-components/OptionList";
import {ActionButton, FormActionButton} from "../components/common-components/Button";
import React from "react";
import MUISelect from "../components/common-components/MUISelect";
import {RowStack, SpacedStack} from "../components/mini-components/Stack";
import {StyledSignInButton} from "../components/page-components/Login/FormBody";
import {Select} from "../components/common-components/Select";
import register from "../components/page-components/Register";
import {Grid, TextField} from "@mui/material";
import RegisterModal from "../components/common-components/RegisterModal";
import {MUITextField} from "../components/common-components/MUIInput";

export interface FormField {
    name: string,
    rules: object,
    InputComponent: any,
    placeholder: string,
    label: string,
    size?: number,
    items?: option[],
}

export interface FormInterface{
    fields: FormField[],
    onSubmit?: any,
    Submit?: any,
    formDirection?: string,
    ContainerComponent?: any,
}

const Input = () => (
    <select className="form-control">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
    </select>
)
//
// const handleEmailValidation = (email: any) => {
//     console.log("ValidateEmail was called with", email);
//
//     const isValid = isValidEmail(email);
//
//     const validityChanged =
//         (errors.email && isValid) || (!errors.email && !isValid);
//     if (validityChanged) {
//         console.log("Fire tracker with", isValid ? "Valid" : "Invalid");
//     }
//
//     return isValid;
// };

export const form: FormInterface = {
    fields: [
        {
            name: 'username',
            rules: {required: 'Fill in Field'},
            InputComponent: FormTextField,
            placeholder: "Enter your username",
            label: 'Username',
        },
        {
            name: 'username',
            rules: {required: 'Fill in Field'},
            InputComponent: FormTextField,
            placeholder: "Enter your username",
            label: 'Username'
        },
        {
            name: 'loginAs2',
            rules: {required: 'select login'},
            InputComponent: MUISelect,
            placeholder: "Login as...",
            label: 'Login as',
            items: [
                {name: 'Something', value: 'Something'},
                {name: 'Something else', value: 'Something else'}
            ]
        }

    ],
    Submit: ActionButton,
    onSubmit: () => {},

}

export const registerFields = [
        {
            name: 'firstName',
            rules: {required: 'Fill in Field'},
            InputComponent: FormTextField,
            placeholder: "Enter your First name",
            label: 'First name',
            size: 3
        },
        {
            name: 'middleName',
            rules: {required: 'Fill in Field'},
            InputComponent: FormTextField,
            placeholder: "Enter your Middle name",
            label: 'Middle name',
            size: 3
        },
        {
            name: 'lastName',
            rules: {required: 'Fill in Field'},
            InputComponent: FormTextField,
            placeholder: "Enter your Last name",
            label: 'Last name',
            size: 3
        },
        {
            name: 'email',
            rules: {required: 'Fill in Field'},
            InputComponent: FormTextField,
            placeholder: "Enter your Email Address",
            label: 'Email',
            size: 3
        },
        {
            name: 'password',
            rules: {required: 'Fill in Field'},
            InputComponent: FormTextField,
            placeholder: "Enter your Password",
            label: 'Password',
            size: 3
        },

    ]

const registerComponents = {
    Submit: StyledSignInButton,
    ContainerComponent: SpacedStack,
}

export const adminRegistrationForm: FormInterface = {
    fields: [
        ...registerFields,
        {
            name: 'licenseId',
            rules: {required: 'Fill in Field'},
            InputComponent: FormTextField,
            placeholder: "Enter your License Identification Numbers",
            label: 'license Id',
            size: 3
        },

        {
            name: 'registerAs',
            rules: {required: 'select login'},
            InputComponent: Select,
            placeholder: "Register as...",
            label: 'Register as',
            items: [
                {name: 'CMD', value: 'CMD'},
                {name: 'MRO', value: 'MRO'}
            ]
        },
    ],
    ...registerComponents
}


export const doctorRegistrationForm = {
    fields: [
        {
            name: 'firstName',
            rules: {required: 'Fill in Field'},
            InputComponent: MUITextField,
            placeholder: "Enter your First name",
            label: 'First name',
            size: 3
        },
        {
            name: 'middleName',
            rules: {required: 'Fill in Field'},
            InputComponent: MUITextField,
            placeholder: "Enter your Middle name",
            label: 'Middle name',
            size: 3
        },
        {
            name: 'lastName',
            rules: {required: 'Fill in Field'},
            InputComponent: MUITextField,
            placeholder: "Enter your Last name",
            label: 'Last name',
            size: 3
        },
        {
            name: 'email',
            rules: {required: 'Fill in Field'},
            InputComponent: MUITextField,
            placeholder: "Enter your Email Address",
            label: 'Email',
            size: 3
        },
        {
            name: 'password',
            rules: {required: 'Fill in Field'},
            InputComponent: MUITextField,
            placeholder: "Enter your Password",
            label: 'Password',
            size: 3
        },
        {
            name: 'licenseNumbers',
            rules: {required: 'Fill in Field'},
            InputComponent: MUITextField,
            placeholder: "Enter your License Identification",
            label: 'license Id',
            size: 1
        },
        {
            name: 'gender',
            rules: {required: 'select login'},
            InputComponent: MUISelect,
            placeholder: "Register as...",
            label: 'Register as',
            items: [
                {name: 'male', value: 'male'},
                {name: 'female', value: 'female'}
            ]
        },
        {
            name: 'phoneNumber',
            rules: {required: 'Fill in Field'},
            InputComponent: MUITextField,
            placeholder: "Enter your Phone number",
            label: 'Phone Number',
            size: 1
        },
        {
            name: 'dob',
            rules: {required: 'Fill in Field'},
            InputComponent: MUITextField,
            placeholder: "Enter your Date of Birth",
            label: 'Date of Birth',
            size: 3
        },
        {
            name: 'address',
            rules: {required: 'Fill in Field'},
            InputComponent: MUITextField,
            placeholder: "Enter your Address",
            label: 'Address',
            size: 1
        },
        {
            name: 'center',
            rules: {required: 'Fill in Field'},
            InputComponent: MUITextField,
            placeholder: "Enter your Center",
            label: 'Center',
            size: 1
        },
        {
            name: 'designation',
            rules: {required: 'Fill in Field'},
            InputComponent: MUITextField,
            placeholder: "Enter your Designation",
            label: 'Designation',
            size: 1
        },
        {
            name: 'firstName',
            rules: {required: 'Fill in Field'},
            InputComponent: MUITextField,
            placeholder: "Enter your First name",
            label: 'First name',
            size: 3
        },
        {
            name: 'middleName',
            rules: {required: 'Fill in Field'},
            InputComponent: MUITextField,
            placeholder: "Enter your Middle name",
            label: 'Middle name',
            size: 3
        },
        {
            name: 'lastName',
            rules: {required: 'Fill in Field'},
            InputComponent: MUITextField,
            placeholder: "Enter your Last name",
            label: 'Last name',
            size: 3
        },
        {
            name: 'email',
            rules: {required: 'Fill in Field'},
            InputComponent: MUITextField,
            placeholder: "Enter your Email Address",
            label: 'Email',
            size: 3
        },
        {
            name: 'password',
            rules: {required: 'Fill in Field'},
            InputComponent: MUITextField,
            placeholder: "Enter your Password",
            label: 'Password',
            size: 3
        },
        {
            name: 'licenseNumbers',
            rules: {required: 'Fill in Field'},
            InputComponent: MUITextField,
            placeholder: "Enter your License Identification",
            label: 'license Id',
            size: 1
        },
        {
            name: 'gender',
            rules: {required: 'select login'},
            InputComponent: MUISelect,
            placeholder: "Register as...",
            label: 'Register as',
            items: [
                {name: 'male', value: 'male'},
                {name: 'female', value: 'female'}
            ]
        },
        {
            name: 'phoneNumber',
            rules: {required: 'Fill in Field'},
            InputComponent: MUITextField,
            placeholder: "Enter your Phone number",
            label: 'Phone Number',
            size: 1
        },
        {
            name: 'dob',
            rules: {required: 'Fill in Field'},
            InputComponent: MUITextField,
            placeholder: "Enter your Date of Birth",
            label: 'Date of Birth',
            size: 3
        },
        {
            name: 'address',
            rules: {required: 'Fill in Field'},
            InputComponent: MUITextField,
            placeholder: "Enter your Address",
            label: 'Address',
            size: 1
        },
        {
            name: 'center',
            rules: {required: 'Fill in Field'},
            InputComponent: MUITextField,
            placeholder: "Enter your Center",
            label: 'Center',
            size: 1
        },
        {
            name: 'designation',
            rules: {required: 'Fill in Field'},
            InputComponent: MUITextField,
            placeholder: "Enter your Designation",
            label: 'Designation',
            size: 1
        },
    ],
    globalSize: 1.6,
    Submit: FormActionButton,
    ContainerComponent: RegisterModal,
}