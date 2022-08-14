import {FormTextField} from "../components/common-components/Input";
import {option} from "../components/common-components/OptionList";
import {ActionButton} from "../components/common-components/Button";
import React from "react";
import MUISelect from "../components/common-components/MUISelect";
import {SpacedStack} from "../components/mini-components/Stack";
import {StyledSignInButton} from "../components/page-components/Login/FormBody";
import {Select} from "../components/common-components/Select";

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


export const registerForm: FormInterface = {
    fields: [
        {
            name: 'First name',
            rules: {required: 'Fill in Field'},
            InputComponent: FormTextField,
            placeholder: "Enter your First name",
            label: 'First name',
            size: 3
        },
        {
            name: 'Last name',
            rules: {required: 'Fill in Field'},
            InputComponent: FormTextField,
            placeholder: "Enter your Last name",
            label: 'Last name',
            size: 3
        },
        {
            name: 'Username',
            rules: {required: 'Fill in Field'},
            InputComponent: FormTextField,
            placeholder: "Enter your Username",
            label: 'Username',
            size: 3
        },
        {
            name: 'Password',
            rules: {required: 'Fill in Field'},
            InputComponent: FormTextField,
            placeholder: "Enter your Password",
            label: 'Password',
            size: 3
        },
        {
            name: 'loginAs2',
            rules: {required: 'select login'},
            InputComponent: Select,
            placeholder: "Register as...",
            label: 'Register as',
            items: [
                {name: 'CMD', value: 'CMD'},
                // {name: 'Something else', value: 'Something else'}
            ]
        },
        // {
        //     name: 'loginAs3',
        //     rules: {required: 'select login'},
        //     InputComponent: MUISelect,
        //     placeholder: "Login as...",
        //     label: 'Login as',
        //     items: [
        //         {name: 'Something', value: 'Something'},
        //         {name: 'Something else', value: 'Something else'}
        //     ]
        // },

    ],

    Submit: StyledSignInButton,
    ContainerComponent: SpacedStack,

}
