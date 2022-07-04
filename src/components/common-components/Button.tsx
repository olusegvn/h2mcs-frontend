import React from 'react';
import {styled} from "@mui/material/styles";
import {Button} from "@mui/material";
import { Icon } from '@iconify/react';
import {PoppinsNavLink} from "../mini-components/Typography";
import NavigationLinkIcon from "../mini-components/Icon";
import theme from "../../Theme";

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

export const ActionButton = styled((props: any) => {
    return (
        <Button
            variant={'contained'}
            style={{
                boxShadow: 'none',
                filter: 'none',
                borderRadius: '2rem',
                textTransform: 'none',
                padding: '.5rem .7rem',
            }}check for substring js

            {...props}
        />
    );
})();

export const NavigationLinkButton = ({icon, name, active}: {name: string, icon: string, active?: any}) => {
    return (
        <StyledNavigationLinkButton active={active} href={`/${name}`}>
            <NavigationLinkIcon icon={icon}/>
            <PoppinsNavLink>{name}</PoppinsNavLink>
        </StyledNavigationLinkButton>
    );
}

const StyledNavigationLinkButton = ({active, ...props}: any) => <Button sx={{
    color:active? theme.palette.primary.main: theme.palette.text.primary,
    justifyContent: 'flex-start',
    // alignItems: 'flex-start',
    height: '3.5rem',
}} {...props}/>

