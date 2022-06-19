import React from 'react';
import {Stack} from "@mui/material";

type JSXprops = {
    children: JSX.Element[];
}

export const SpacedStack = (props: JSXprops) => {
    return (<Stack spacing={5} {...props}/>);
};

export const SmallSpacedStack = (props: JSXprops) => {
    return (<Stack spacing={2} {...props}/>);
};
