import React from 'react';
import {Stack} from "@mui/material";

type JSXprops = {
    children: JSX.Element[];
}

export const RowStack = ({children}: JSXprops) => {
    return (<Stack direction="row" children={children}/>);
};
