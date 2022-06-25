import React, {useRef} from 'react';
import AppBar from '@mui/material/AppBar';
import logo from '../../../assets/images/H2MCS-logo.png'
import {Badge, Button, Toolbar} from "@mui/material";
import {styled} from "@mui/material/styles";
import {PoppinsNavLink, PoppinsPageTitle} from "../../mini-components/Typography";
import {FlexGrowBox} from "../../mini-components/Box";
import Search from "../../common-components/Search";
import IconButton from '@mui/material/IconButton';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {BadgeCircle} from "../../common-components/Circle";
import theme from "../../../Theme";
import avatar from '../../../assets/images/avatar.png'
import {Avatar} from "../../mini-components/Avatar";
import Popup from "reactjs-popup";
import {PopupActions} from "reactjs-popup/dist/types";
import {OptionList} from "../../common-components/OptionList";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const profileOptions = [
    {name: 'view profile', action:()=>{console.log('a')}},
    {name: 'logout'}
]

const notificationItems = [
    {name: 'Something', severity:1},
    {name: 'Something', severity:2},
    {name: 'Something', severity:3},
    {name: 'Something', severity:4}
]

const BrowserAppBar = () => {
    const ref = useRef<PopupActions>(null);
    return (
        <StyledAppBar elevation={0}>
            <StyledToolbar>
                <img src={logo} height={40}/>
                <PoppinsPageTitle>H2MCS</PoppinsPageTitle>
                <StyledSearchContainer>
                    <Search/>
                </StyledSearchContainer>
                <Popup
                    ref={ref}
                    trigger={<StyledIconButton>
                                <Badge components={{Badge: ()=>
                                    <BadgeCircle
                                        color={theme.palette.error.main}/>}}
                                        badgeContent>
                                    <StyledNotificationsNoneIcon/>
                                </Badge>
                            </StyledIconButton>}
                >
                    <OptionList items={notificationItems}/>
                </Popup>
                <Avatar src={avatar}/>
                <Popup
                    ref={ref}
                    trigger={<Button color={'secondary'}>
                                <PoppinsNavLink>Jane Doe</PoppinsNavLink>
                                <KeyboardArrowDownIcon/>
                             </Button>}
                >
                    <OptionList items={profileOptions}/>
                </Popup>
            </StyledToolbar>
        </StyledAppBar>
    );
};

const StyledAppBar = styled(AppBar)(({theme}) => ({
    backgroundColor: 'white',
    borderBottom: '3px solid',
    borderColor: '#E9EAED',
    position: 'static'
}));

const StyledNotificationsNoneIcon = styled(NotificationsNoneIcon)(({theme}) => ({
    fontSize: 30,
}));

const StyledSearchContainer = styled(FlexGrowBox)(({theme}) => ({
    paddingLeft: '10%',
}));

const StyledIconButton = styled(IconButton)(({theme}) => ({
    marginLeft: '2%',
    marginRight: '2%'
}));

const StyledToolbar = styled(Toolbar)(({theme}) => ({
    marginRight: '1.5%'
}));

export default BrowserAppBar;
