import React from 'react';
import {PopupContainer, StyledInter500, StyledTextField} from "./Staff";

const PatientPersonalDetails = () => {
    return (
        <PopupContainer spacing={4}>
            <StyledTextField disabled={true} label={<StyledInter500>Name</StyledInter500>} value={'Jane Doe'}/>
            <StyledTextField disabled={true} label={<StyledInter500>Name</StyledInter500>} value={'Jane Doe'}/>
            <StyledTextField disabled={true} label={<StyledInter500>Name</StyledInter500>} value={'Jane Doe'}/>
            <StyledTextField disabled={true} label={<StyledInter500>Name</StyledInter500>} value={'Jane Doe'}/>
            <StyledTextField disabled={true} label={<StyledInter500>Name</StyledInter500>} value={'Jane Doe'}/>
        </PopupContainer>
    );
};

export default PatientPersonalDetails;
