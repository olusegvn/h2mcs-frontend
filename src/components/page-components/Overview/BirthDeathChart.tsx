import React, {useRef} from 'react';
import {RowStack} from "../../mini-components/Stack";
import {Poppins400, Poppins600, PoppinsChartHeader, PoppinsNavLink} from "../../mini-components/Typography";
import {styled} from "@mui/material/styles";
import {Button, Divider, Stack} from "@mui/material";
import { Icon } from '@iconify/react';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {OptionList, StyledOptionButton} from "../../common-components/OptionList";
import Popup from "reactjs-popup";

const profileOptions = [
    {name: 'Last 2 Months'},
    {name: 'Last 3 Months'},
]

const BirthDeathChart = () => {
    return (
        <StyledRootContainer>
            <StyledContainer>
                <StyledRowStack>
                    <StyledPoppin600>STATISTICS</StyledPoppin600>
                    <Icon height={'1.5rem'} color="#bdbdbd" icon="dashicons:info" />
                </StyledRowStack>
                <PoppinsChartHeader>BIRTH AND DEATH RATES</PoppinsChartHeader>
                <Popup
                    trigger={
                    <StyledPopupButton color={'secondary'}>
                        <Poppins400 s={13}>Last 1 Months</Poppins400>
                        <KeyboardArrowDownIcon/>
                    </StyledPopupButton>}
                >
                    <OptionList OptionButton={StyledOptionButton} items={profileOptions}/>
                </Popup>
            </StyledContainer>
            <Divider/>
        </StyledRootContainer>
    );
};

export default BirthDeathChart;

export const StyledPoppin600 = ({...others}: any) => (
    <Poppins600 sx={{color: '#828282'}} s={'1rem'} {...others} />
);

const StyledContainer = styled(Stack)(({theme}) => ({
    padding: '5%',
}))
const StyledRootContainer = styled(Stack)(({theme}) => ({
    border: '3px solid #E8EAED',
    borderRadius: 20,
}))

const StyledPopupButton = styled(Button)(({theme}) => ({
    width: '25%',
    padding: 0,
    margin: 0,
    justifyContent: 'flex-start',
}))
const StyledRowStack = styled(RowStack)(({theme}) => ({
    justifyContent: 'space-between',
}))

