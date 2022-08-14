import React from 'react';
import {styled} from "@mui/material/styles";
import Statistic from "../../common-components/Statistic";
import {RowStack} from "../../mini-components/Stack";
import theme from "../../../Theme";
import {Grid} from "@mui/material";
import {TwoThirdGridItem} from "../../mini-components/Grid";
import BirthDeathChart from "./BirthDeathChart";
import PatientActivity from "./PatientActivity";
import DeathSex from "./DeathSex";

const statistics: any = [
    {
        name: 'Patients',
        value: 250,
        icon: 'mi:users',
        color: theme.palette.primary.main
    },
    {
        name: 'Doctors',
        value: 15,
        icon: 'fa6-solid:user-doctor',
        color: theme.palette.success.dark
    },
    {
        name: 'Nurses',
        value: 33,
        icon: 'la:user-nurse',
        color: theme.palette.info.light
    },
    {
        name: 'Pharmacists',
        value: 9,
        icon: 'material-symbols:local-pharmacy-outline',
        color: theme.palette.secondary.dark
    },
    {
        name: 'Lab Scientists',
        value: 25,
        icon: 'ps:lab',
        color: theme.palette.secondary[900]
    },

]

const GeneralStatistics = () => {
    return (
        <Grid container>
            <StyledStatisticsContainer spacing={5}>
                {statistics.map((stat: any) => (<Statistic {...stat}/>))}
            </StyledStatisticsContainer>
            <TwoThirdGridItem>
                <BirthDeathChart/>
                <PatientActivity/>
            </TwoThirdGridItem>
            <Grid item xs={6} sm={4}>
                <DeathSex/>
            </Grid>

        </Grid>
    );
};

export default GeneralStatistics;

const StyledStatisticsContainer = styled(RowStack)(({ theme })=> ({
    padding: '3%',
    boxShadow: '0px 0.5px 6px rgba(0, 0, 0, 0.12)',
    borderRadius: 21,
    width: '100%',
}))

