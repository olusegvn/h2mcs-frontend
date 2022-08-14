import React, {useRef} from 'react';
import {RowStack} from "../../mini-components/Stack";
import {Poppins400, Poppins600, PoppinsChartHeader, PoppinsNavLink} from "../../mini-components/Typography";
import {styled} from "@mui/material/styles";
import {Button, Divider, Stack} from "@mui/material";


const profileOptions = [
    {name: 'Last 2 Months'},
    {name: 'Last 3 Months'},
]

const DeathSex = () => {
    return (
        <StyledRootContainer>
            <StyledPoppin600>Deaths By Sex</StyledPoppin600>
        </StyledRootContainer>
    );
};

export default DeathSex;

export const StyledPoppin600 = ({...others}: any) => (
    <Poppins600 sx={{color: '#262626'}} s={'1rem'} {...others} />
);

const StyledRootContainer = styled(Stack)(({theme}) => ({
    border: '3px solid #E8EAED',
    padding: '7%',
    borderRadius: 20,
}))


