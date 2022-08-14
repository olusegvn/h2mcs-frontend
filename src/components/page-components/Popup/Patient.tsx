import React, {useState} from 'react';
import {Stack} from "@mui/material";
import {RowStack} from "../../mini-components/Stack";
import {styled} from "@mui/material/styles";
import { Icon } from '@iconify/react';
import {SquareNavigationActionButton} from "../../common-components/Button";
import TablePopup from "../../common-components/TablePopup";
import {StyledInter500, StyledTextField} from "./Staff";
import { PATIENTSNAVIGATION } from '../../../assets/NaigationList';
import AttachedFile from '../../common-components/AttachedFile';

const PatientPopup = () => {
    const [active, setActive] = useState(PATIENTSNAVIGATION[0].name);
    const [fields, setFields] = useState(PATIENTSNAVIGATION[0].fields);

    const handleNavigationButtonClick = (e: any) => {
        console.log(e.target.name)
        // setFields(e.target.name)
        setActive(e.target.name)
    }
    return (
        <TablePopup>
            <StyledPopupContainer spacing={1}>
                <StyledNavigationStack spacing={3}>
                    {PATIENTSNAVIGATION.map(({fields, name, icon}: any) => (
                        <SquareNavigationActionButton
                          active={name===active}
                          name={name}
                          icon={icon}
                          onClick={() => {setActive(name); setFields(fields)}}
                        />
                    ))}
                </StyledNavigationStack>
                <StyledDetailsContainer spacing={3}>
                    {fields.map(({file, name, value}: any) => (
                        file?
                        <StyledAttachedFile file={file}/>
                        :
                        <StyledTextField disabled={true} label={<StyledInter500>{name}</StyledInter500>} value={value}/>
                    ))}

                </StyledDetailsContainer>
            </StyledPopupContainer>
        </TablePopup>
    );
};

export default PatientPopup;


const StyledPopupContainer = styled(RowStack)(({theme}) => ({
    backgroundColor: '#FBFBFB',
    padding: '3rem 3rem 3rem 1rem',
    filter: 'drop-shadow(-1px 1px 4px rgba(0, 0, 0, 0.25))',
    borderRadius: '1rem',
    width: '40rem',
    justifyContent: 'space-evenly',
}))

const StyledDetailsContainer = styled(Stack)(({theme}) => ({
    backgroundColor: '#FDFCFC',
    padding: '5% 10% 20% 6%',
    borderRadius: '1rem',
    filter: 'drop-shadow(-1px 1px 3px rgba(0, 0, 0, 0.25))',
    width: '100%',
}))

const StyledNavigationStack = styled(Stack)(({theme}) => ({
    backgroundColor: '#FBFBFB',
    juuustifyContent: 'center',
}))


const StyledAttachedFile = (props: any) => (
    <AttachedFile 
    {...props}
    sx={{
        border: '0.5px solid #E8DDFF',
        justifyContent: 'space-between',
        padding: '0px',
    }}
    />
)