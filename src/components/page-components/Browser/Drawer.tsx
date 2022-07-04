import React from 'react';
import {styled} from "@mui/material/styles";
import {Stack} from "@mui/material";
import {NavigationList, NavigationListItem} from "../../../assets/NaigationList";
import {NavigationLinkButton} from "../../common-components/Button";

const Drawer = ({name}: {name: string}) => {
    return (
        <StyledDrawer>
            <Stack>
                {NavigationList.map((item: NavigationListItem) => (
                    <NavigationLinkButton active={name===item.name} {...item}/>
                ))}
            </Stack>
            <Stack>
                <StyledNavigationLinkButton name={'logout'} icon={"ri:logout-circle-line"}/>
            </Stack>
        </StyledDrawer>
    );
};

export default Drawer;

const StyledDrawer = styled(Stack)(({theme}) => ({
    width: '16%',
    height: '95%',
    justifyContent: 'space-between',
}));

const StyledNavigationLinkButton = styled(NavigationLinkButton)(({theme}) => ({
    minWeight: '5rem',
}));
