import React from 'react';
import {Box} from "@mui/material";

export const CenteredBox = (props: any) => {
    return (<Box style={{ flexGrow: 1 }}
                 height={'96vh'}
                 display={'flex'}
                 alignItems="center"
                 justifyContent="center"
                 {...props}
        />
    );
}