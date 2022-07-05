import {FormTextField} from "../components/common-components/Input";
import {Select} from "../components/common-components/Select";
import {option} from "../components/common-components/OptionList";
import {ActionButton} from "../components/common-components/Button";

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
            name: 'loginAs',
            rules: {required: 'select login'},
            InputComponent: Select,
            placeholder: "Login as...",
            label: 'Login as',
            half: true,
            items: [
                {name: 'Something', value: 'Something'},
                {name: 'Something else', value: 'Something else'}
            ]
        },

    ],
    Submit: ActionButton,
    onSubmit: () => {},

}