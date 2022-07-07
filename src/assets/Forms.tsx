import {FormTextField} from "../components/common-components/Input";
import {option} from "../components/common-components/OptionList";
import {ActionButton} from "../components/common-components/Button";
import React from "react";
import MUISelect from "../components/common-components/MUISelect";
import {Select} from "../components/common-components/Select";

export interface FormField {
    name: string,
    rules: object,
    InputComponent: (props: any)=> JSX.Element,
    placeholder: string,
    label: string,
    half?: boolean,
    items?: option[]
}

export interface FormInterface{
    fields: FormField[],
    onSubmit: any,
    Submit?: any,
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
            label: 'Username'
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
        },
        {
            name: 'loginAs3',
            rules: {required: 'select login'},
            InputComponent: MUISelect,
            placeholder: "Login as...",
            label: 'Login as',
            items: [
                {name: 'Something', value: 'Something'},
                {name: 'Something else', value: 'Something else'}
            ]
        },

    ],
    Submit: ActionButton,
    onSubmit: () => {},

}
