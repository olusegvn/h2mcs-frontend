import React from 'react';
import {RowStack} from "../mini-components/Stack";
import {Box, Paper, Stack} from "@mui/material";
import {NavigationLinkIcon, StatisticIcon} from "../mini-components/Icon";
import {styled} from "@mui/material/styles";
import {Icon} from "@iconify/react";
import {PoppinsStatName, PoppinsStatValue} from "../mini-components/Typography";

const Statistic = ({name, icon, value, color}: any) => {
    return (
        <RowStack spacing={2}>
            <StyledIconContainer color={color}>
                <StatisticIcon icon={icon}/>
            </StyledIconContainer>
            <StyledStack>
                <PoppinsStatName>{name}</PoppinsStatName>
                <PoppinsStatValue>{value}</PoppinsStatValue>
            </StyledStack>
        </RowStack>
    );
};

export default Statistic;

const StyledIconContainer = styled(Stack)(({theme, color}: any): any => ({
    backgroundColor: `${color}30`,
    color: color,
    height: '4vw',
    width: '4vw',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '15.102px',
    transform: 'matrix(1, 0, 0.01, 1, 0, 0)',
}))

const StyledStack = styled(Stack)(({theme, color}: any): any => ({
    justifyContent: 'space-between',
    display: 'inline',
}))
