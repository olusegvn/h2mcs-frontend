import React from 'react';
import {Grid} from "@mui/material";

export const HalfGridItem = (props: any) => {
    return <Grid item xs={12} sm={12} md={6} lg={6} {...props}/>;
};

export const TwoThirdGridItem = (props: any) => {
    return <Grid item xs={12} sm={12} md={10} lg={9.5} xl={8} {...props}/>;
};
