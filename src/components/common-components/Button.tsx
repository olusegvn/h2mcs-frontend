import React from 'react';
import {styled} from "@mui/material/styles";
import {Button} from "@mui/material";

const LargeButton = styled((props: any) => {
    return (
        <Button
            variant={'contained'}
            style={{
                minWidth: '100%',
                borderRadius: '.5rem',
                minHeight: '3.2rem'
        }}
            {...props}
        />
    );
})();

export default LargeButton;
