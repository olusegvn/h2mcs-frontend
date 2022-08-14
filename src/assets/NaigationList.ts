import BrowserBody from "../components/page-components/Browser/BrowserBody";
import {Button} from "@mui/material";
import CustomTabs from "../components/common-components/Tabs";
import {Circle} from "../components/common-components/Circle";
import Overview from "../components/page-components/Overview";

export interface NavigationListItem{
    name: string,
    icon: string,
    Component?: any,
    componentProps?: object,
}

export const NavigationList = [
    {
        name: 'Overview',
        icon: 'bi:grid-1x2',
        Component: BrowserBody,
        componentProps: {Component: Overview}
    },
    {
        name: 'Patients',
        icon: 'ic:outline-people-alt',
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
        name: 'Surgeries',
        icon: 'ph:face-mask',
        Component: BrowserBody,
        componentProps: {Component: CustomTabs}
    },
    {
        name: 'Staff',
        icon: 'ic:outline-people-alt',
        Component: BrowserBody,
        componentProps: {Component: CustomTabs}
    },
    ]


export const PATIENTSNAVIGATION = [
    {
        name: 'Personal',
        icon: 'bi:person-fill',
        fields: [
            {
                name: 'Name',
                value: 'Jane Doe'
            },
            {
                name: 'Address',
                value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut'
            },
            {
                name: 'Age',
                value: '19'
            },
            {
                name: 'Phone Number',
                value: '090xxxxxxxx'
            },
            {
                name: 'Admission Date',
                value: '23/03/2022'
            }
        ]
    },
    {
        name: 'Bed Number',
        icon: 'icon-park-outline:hospital-bed',
        fields: [
            {
                name: 'Ward',
                value: '6'
            },
            {
                name: 'Room',
                value: '15'
            },
            {
                name: 'Bed',
                value: '19'
            }
        ]
    },
    {
        name: 'Lab',
        icon: 'medical-icon:i-cath-lab',
        fields: [
            {
                file: {
                    name: "Attached Patients Lab results",
                    lastModifiedDate: '12/21/2022'
                }

            },
            {file: {
                name: "Attached Patients Lab results",
                lastModifiedDate: '12/21/2022'
            }},
            {file: {
                name: "Attached Patients Lab results",
                lastModifiedDate: '12/21/2022'
            }},
            {file: {
                name: "Attached Patients Lab results",
                lastModifiedDate: '12/21/2022'
            }},
        ]
    }
]

