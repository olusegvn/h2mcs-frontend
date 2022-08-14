import React from 'react';
import {styled} from "@mui/material/styles";
import {Button} from "@mui/material";
import {Inter500, PoppinsNavLink} from "../mini-components/Typography";
import {NavigationLinkIcon} from "../mini-components/Icon";
import theme from "../../Theme";
import { Icon } from '@iconify/react';
import {Link} from "react-router-dom";

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

export const FormActionButton = styled((props: any) => {
    return (
        <Button
            variant={'contained'}
            style={{
                boxShadow: 'none',
                filter: 'none',
                borderRadius: '2rem',
                textTransform: 'none',
                padding: '.5rem .7rem',
                margin: '2rem',
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
            }}
            {...props}
        />
    );
})();

export const NavigationLinkButton = ({icon, name, active}: {name: string, icon: string, active?: any}) => {
    return (
        <StyledNavigationLinkButton component={Link}  to={`/${name}`} active={active}>
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

export const SquareNavigationActionButton = ({icon, name, ...others}: any) => (
    <StyledSquareNavigationIconButton name={name} {...others}>
        <Icon icon={icon} height={45}/>
        <Inter500>{name}</Inter500>
    </StyledSquareNavigationIconButton>
);


const StyledSquareNavigationIconButton = ({active, ...props}: any) => <Button sx={{
    color:active? theme.palette.primary.main: theme.palette.text.primary,
    height: '5.3rem',
    width: '8rem',
    flexDirection: 'column',
    justifyContent: 'space-between',
}} {...props}/>