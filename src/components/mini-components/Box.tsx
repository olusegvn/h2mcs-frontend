import React from 'react';
import {Box} from "@mui/material";

export const FlexGrowBox = (props: any): JSX.Element => <Box  {...props} style={{ flexGrow: 1, display: 'flex' }}/>

export const CenteredBox = (props: any) => {
    return (<FlexGrowBox
                 height={'96vh'}
                 alignItems="center"
                 justifyContent="center"
                 {...props}
        />
    );
}