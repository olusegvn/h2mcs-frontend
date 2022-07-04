import React, {useRef} from 'react';
import AppBar from '@mui/material/AppBar';
import logo from '../../../assets/images/H2MCS-logo.png'
import {Badge, Button, Toolbar} from "@mui/material";
import {styled} from "@mui/material/styles";
import {PoppinsNavLink, PoppinsTitle} from "../../mini-components/Typography";
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
import {OptionList, StyledOptionButton} from "../../common-components/OptionList";
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
            <Toolbar>
                <img src={logo} height={40}/>
                <PoppinsTitle>H2MCS</PoppinsTitle>
                <StyledSearchContainer>
                    <Search/>
                </StyledSearchContainer>
                <Popup
                    ref={ref}
                    trigger={<StyledIconButton>
                        <Badge components={{Badge: ()=><BadgeCircle color={theme.palette.error.main}/>}}>
                            <StyledNotificationsNoneIcon/>
                        </Badge>
                    </StyledIconButton>}
                >
                    <OptionList OptionButton={StyledOptionButton} items={notificationItems}/>
                </Popup>
                <Avatar src={avatar}/>
                <Popup
                    ref={ref}
                    trigger={<Button color={'secondary'}>
                                <PoppinsNavLink>Jane Doe</PoppinsNavLink>
                                <KeyboardArrowDownIcon/>
                             </Button>}
                >
                    <OptionList OptionButton={StyledOptionButton} items={profileOptions}/>
                </Popup>
            </Toolbar>
        </StyledAppBar>
    );
};

const StyledAppBar = styled(AppBar)(({theme}) => ({
    backgroundColor: 'white',
    borderBottom: '3px solid',
    borderColor: '#E9EAED',
    position: 'static',
    paddingRight: '2%',
    zIndex: '0',
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


export default BrowserAppBar;
