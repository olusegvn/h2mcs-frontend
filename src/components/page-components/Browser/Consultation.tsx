import React, {useRef, useState} from 'react';
import {styled} from "@mui/material/styles";
import Popup from "reactjs-popup";
import { IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {PopupActions} from "reactjs-popup/dist/types";
import {RowStack} from "../../mini-components/Stack";
import {NavigationLinkIcon} from "../../mini-components/Icon";
import AttachFileIcon from '@mui/icons-material/AttachFile';

const Consultation = () => {
    const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
    const selectPopupRef = useRef<PopupActions>(null);

    const changeHandler = (event: any) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

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
                <StyledP>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Alias blanditiis fuga fugit, in nesciunt sapiente voluptate?
                Aliquam, consequuntur delectus error in molestias, nisi nostrum
                porro, quasi quod reiciendis vel vero?</StyledP>
                <RowStack spacing={3}>
                    <input type="file" name="file" onChange={changeHandler} /><IconButton><AttachFileIcon/></IconButton>
                    <IconButton><NavigationLinkIcon icon={'uil:prescription-bottle'}/></IconButton>
                </RowStack>
            </StyledPopupContainer>
        </Popup>

    );
};

export default Consultation;

const StyledPopupContainer = styled('div')(({theme}) => ({
    padding: '5rem',
    backgroundColor: 'white',
    borderRadius: '.5rem',
    borderColor: theme.palette.success.light,
    boxShadow: `0px 0px 0px 2px rgba(29, 201, 160, 0.2)`,
}));

const StyledP = styled('p')(({theme}) => ({
    width: '35rem',
}));
