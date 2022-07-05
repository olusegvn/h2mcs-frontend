import React, {useRef, useState} from 'react';
import {Box, Button} from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {styled} from "@mui/material/styles";
import {Monserrat600, PoppinsNavLink} from "../mini-components/Typography";
import {CustomizedTables} from "./Table";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Popup from "reactjs-popup";


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CustomTabs: () => JSX.Element = () => {
    const [value, setValue] = React.useState(0);
    function TabPanel(props: TabPanelProps) {
      const { children, value, index, ...other } = props;
      return (
        <div role="tabpanel" hidden={value !== index} {...other} >
          {value === index && (children)}
        </div>
      );
    }

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
      };
    const [selected, setSelected] = React.useState<Date>();

    const ref = useRef(null);

    return (
        <StyledTabsContainer>
            <StyledBox>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <StyledTab label={<Monserrat600>Today</Monserrat600>}/>
                    <StyledTab label={<Monserrat600>Tomorrow</Monserrat600>}/>
                    <StyledTab ref={ref} label={
                        <Popup
                            ref={ref}
                            trigger={<Button color={'inherit'}>
                                        <Monserrat600>Date</Monserrat600>
                                        <KeyboardArrowDownIcon/>
                                     </Button>}
                        >
                            <DayPicker
                                  mode="single"
                                  selected={selected}
                                  onSelect={setSelected}
                                  footer={""+selected}
                                />
                        </Popup>
                    }/>
                </Tabs>
            </StyledBox>
            <TabPanel value={value} index={0}>
                <CustomizedTables />
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Something
            </TabPanel>
        </StyledTabsContainer>
    );
};

export default CustomTabs;

const StyledTabsContainer = styled(Box)(({theme}) => ({
    boxShadow: '0px 1px 11px 1px rgba(0, 0, 0, 0.07)',
    borderRadius: '8px 8px 0px 0px',
}));

const StyledTab = styled(Tab)(({theme}) => ({
    textTransform: 'none',
}));

const StyledBox = styled(Box)(({theme}) => ({
    padding: '1%',
}));
