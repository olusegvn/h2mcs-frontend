import React from 'react';
import CustomTabs from "../../common-components/Tabs";
import BrowserHeader from "./BrowserHeader";
import Drawer from "./Drawer";
import {styled} from "@mui/material/styles";
import {Stack} from "@mui/material";
import {RowStack} from "../../mini-components/Stack";
import Box from "@mui/material/Box";

const BrowserBody = ({name, icon, Component}: {name: string, icon: string, Component: any}) => {
    return (
        <>
        <BrowserHeader name={name}/>
        <StyledRowStack>
            <Drawer name={name}/>
            <StyledChidrenContainer>
                <StyledBrowserBodyContainer id={'scrollDiv'}>
                    <Component icon={icon} />
                </StyledBrowserBodyContainer>
            </StyledChidrenContainer>
        </StyledRowStack>
        </>
    );
};

export default BrowserBody;

const StyledChidrenContainer = styled(Stack)(({theme}) => ({
    width: '100%'
}))

const StyledRowStack = styled(RowStack)(({theme}) => ({
    height: '90%',
}))
const StyledBrowserBodyContainer = styled(Box)(({theme}) => ({
    borderRadius: '1.2rem',
    backgroundColor: 'white',
    border: '3px solid #E8EAED',
    flexGrow: 1,
    maxHeight: '89%',
    marginRight: '2%',
    padding: '4% 3% 0%',
    overflow: 'auto',
    height: "100%",
      '&::-webkit-scrollbar': {
        width: '0.4rem',
          borderRadius: '.5rem',

      },
      '&::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
        webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',

      },
      '&::-webkit-scrollbar-thumb': {
        // backgroundColor: 'rgba(0,0,0,.1)',
        outline: '1px solid slategrey',
          borderRadius: '.5rem',
          backgroundColor: theme.palette.divider
      }
}));