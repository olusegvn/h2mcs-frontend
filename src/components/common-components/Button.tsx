import React from 'react';
import {styled} from "@mui/material/styles";
import {Button} from "@mui/material";
import {selectUnstyledClasses} from "@mui/base/SelectUnstyled";
import {PoppinsNavLink} from "../mini-components/Typography";

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

export const NavLinkButton = ({active, text, ...others}: any) => {
    return (
        <Button {...others}>
            <PoppinsNavLink active={active}>
                {text}
            </PoppinsNavLink>
        </Button>
    );
};



