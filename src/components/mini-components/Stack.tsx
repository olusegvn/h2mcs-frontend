import React from 'react';
import {Stack} from "@mui/material";

type JSXprops = {
    children: JSX.Element[] | JSX.Element;
}

export const SpacedStack = (props: any) => {
    return (<Stack spacing={5} {...props}/>);
};

export const SmallSpacedStack = (props: any) => {
    return (<Stack spacing={2} {...props}/>);
};

export const RowStack = (props: any) => {
    return (<Stack direction={'row'} {...props}/>);
};
