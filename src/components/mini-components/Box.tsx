import React from 'react';
import {Box} from "@mui/material";

export const FlexGrowBox = (props: any): JSX.Element => <Box  {...props} style={{ display: 'flex' }}/>

export const CenteredFlexGrowBox = (props: any) => {
    return (<FlexGrowBox
                sx={{
                    flexGrow: 1,
                }}
                 alignItems="center"
                 justifyContent="center"
                 {...props}
        />
    );
}

export const CenteredBox = (props: any) => {
    return (<FlexGrowBox
                 alignItems="center"
                 justifyContent="center"
                 {...props}
        />
    );
}