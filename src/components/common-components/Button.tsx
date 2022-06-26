import React from 'react';
import {styled} from "@mui/material/styles";
import {Button} from "@mui/material";

export const LargeButton = styled((props: any) => {
    return (
        <Button
            variant={'contained'}
            style={{
                width: '90%',
                borderRadius: '.5rem',
                minHeight: '3.2rem'
            }}
            {...props}
        />
    );
})();





