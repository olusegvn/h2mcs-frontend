import React from 'react';
import {styled} from "@mui/material/styles";
import {Stack} from "@mui/material";
import {NavigationList, NavigationListItem} from "../../../assets/NaigationList";
import {NavigationLinkButton} from "../../common-components/Button";

const Drawer = () => {
    return (
        <StyledDrawer>
            {NavigationList['doctor'].map((item: NavigationListItem) => (
                <NavigationLinkButton {...item}/>
            ))}
        </StyledDrawer>
    );
};

export default Drawer;

const StyledDrawer = styled((props: any) => <Stack direction={'column'} {...props} />)(({theme}) => ({
    // float: 'left',
    width: '18%',
    height: '95%',
}));