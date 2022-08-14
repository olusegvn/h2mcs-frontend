import React, {useRef, useState} from 'react';
import {styled} from "@mui/material/styles";
import Popup from "reactjs-popup";
import {Button, IconButton, Stack, TextField} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {PopupActions} from "reactjs-popup/dist/types";
import {RowStack} from "../../mini-components/Stack";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import FileUpload from "../../common-components/FileUpload";
import {
    Inter300,
    Inter500,
    Monserrat700,
    Poppins700
} from "../../mini-components/Typography";
import { Icon } from '@iconify/react';
import {ActionButton} from "../../common-components/Button";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import theme from "../../../Theme";
import AttachedFile from '../../common-components/AttachedFile';

const Consultation = () => {
    let canEdit = true;
    const [files, setFiles] = useState([]);
    const [prescription, setPrescription] = useState();
    const [comment, setComment] = useState("");
    const selectPopupRef = useRef<PopupActions>(null);

    return (
        <Popup
            position="bottom right"
            nested
            ref={selectPopupRef}
            trigger={
                <div>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            }
        >
            <StyledPopupContainer>
                {comment?
                <>
                <StyledTextField disabled={!canEdit} value={comment} onChange={(e: any)=> setComment(e.target.value)} rows={3} maxRows={4-Number(canEdit)}  label="comment"/>
                <StyledTextField disabled={!canEdit} value={prescription} onChange={(e: any)=> setPrescription(e.target.value)} rows={2} maxRows={3-Number(canEdit)}  label="Prescription" />
                <StyledAttachRowStack>
                    {files.map((file: any) => (
                        <AttachedFile file={file}/>
                    ))}
                </StyledAttachRowStack>

                    {canEdit &&
                        <StyledFooterRowStack>
                            <StyledAttachIconRowStack>
                                <FileUpload setFiles={setFiles} icon={<StyledAttachFileIcon/>} name="fileUpload"/>
                            </StyledAttachIconRowStack>
                            <StyledActionButton><Monserrat700>Save</Monserrat700></StyledActionButton>
                        </StyledFooterRowStack>
                    }
                </>
                    :
                <StyledNothingContainer>
                    <Poppins700>Nothing to show</Poppins700>
                    <IconButton onClick={()=> setComment(' ')} ><StyledAddCircleIcon /></IconButton>
                </StyledNothingContainer>
                    }
            </StyledPopupContainer>
        </Popup>


    );
};

export default Consultation;

const StyledPopupContainer = styled(Stack)(({theme}) => ({
    padding: '3rem',
    backgroundColor: '#FBFBFB',
    borderRadius: '.5rem',
    borderColor: theme.palette.success.light,
    boxShadow: `0px 0px 0px 2px rgba(29, 201, 160, 0.2)`,
    justifyContent: 'space-between',
}));


const StyledAttachIconRowStack = styled(RowStack)(({theme}) => ({
    alignItems: 'center',
}));

const StyledFooterRowStack = styled(RowStack)(({theme}) => ({
    justifyContent: 'space-between',
    alignItems: 'flex-end',
}));

const StyledActionButton = styled(ActionButton)(({theme}) => ({
    width: '7rem',
    height: '2.5rem',
}));


const StyledAttachFileIcon = styled((props: any) => (
    <AttachFileIcon
        sx={{
            fontSize: '2.1rem',
        }}
        {...props}
    />
))()


const StyledAttachedDocumentContainer = styled(Button)(({theme}) => ({
    borderRadius: '2rem',
    backgroundColor: 'white',
    paddingRight: '10%',
    margin: "0%",
    color: 'inherit',
    alignItems: 'center',
    textAlign: 'left',
    // width: '40%',
    display: 'flex',
    flexDirection: 'row'
}));

const StyledAttachRowStack = styled(RowStack)(({theme}) => ({
    flexWrap: 'wrap',
    paddingBottom: '2rem',
}));
const StyledTextField = styled((props: any) => (
    <TextField
        {...props}
        multiline
        color={'secondary'}
        variant={'outlined'}
        sx={{
            border: 'none',
            paddingBottom: '1rem',
            width: '45rem',
            '& .MuiInputBase-input': {
                lineHeight: '3rem',
                minHeight: '2rem',
                fontSize: '1rem',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                // color: theme.palette.grey[200],
                padding: '10px 26px 10px 12px',
                transition: theme.transitions.create(['border-color', 'box-shadow']),
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
            },

        }}
    />
))();

const StyledNothingContainer = styled(RowStack)(({theme}) => ({
    color: theme.palette.grey[100],
    alignItems: 'center'
}));
const StyledAddCircleIcon = styled(AddCircleIcon)(({theme}) => ({
    color: theme.palette.primary.main,
    fontSize: '4rem',
}));
