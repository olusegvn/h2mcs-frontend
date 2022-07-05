import BrowserBody from "../components/page-components/Browser/BrowserBody";
import {Button} from "@mui/material";
import CustomTabs from "../components/common-components/Tabs";

export interface NavigationListItem{
    name: string,
    icon: string,
    Component?: any,
    componentProps?: object,
}

export const NavigationList = [
        {
            name: 'Surgeries',
            icon: 'ph:face-mask',
            Component: BrowserBody,
            componentProps: {Component: CustomTabs}
        },
        {
            name: 'Prescriptions',
            icon: 'uil:prescription-bottle',
            Component: BrowserBody,
            componentProps: {Component: CustomTabs}
        },
        {
            name: 'Patients',
            icon: 'ic:outline-people-alt',
            Component: BrowserBody,
            componentProps: {Component: CustomTabs}
        },
    ]


