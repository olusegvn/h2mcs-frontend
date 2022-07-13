import React, {useState} from 'react';
import AttachFileIcon from "@mui/icons-material/AttachFile";
import {RowStack} from "../mini-components/Stack";
import { Icon } from '@iconify/react';
import {styled} from "@mui/material/styles";
import {Button, Stack} from "@mui/material";
import {Inter300, Inter500} from "../mini-components/Typography";
const FileUpload = ({icon, setFiles, name}: any) => {
	const [isFilePicked, setIsSelected] = useState(false);
    const handleChange = (e: any) => {
        if(e?.target?.files?.length && e?.target?.files?.length> 0){
            console.log(e.target.files[0]['lastModifiedDate']);

            setIsSelected(true);
            const file = e.target.files[0]
            setFiles((prev: any) => [...prev, file]);
        }

    }
    return (
        <>
            <>
                <StyledInput type="file" name={name} id={name} onChange={handleChange}/>
                <StyledLabel htmlFor={name} style={{}}>
                    {icon}
                </StyledLabel>
            </>
        </>
    );
};

export default FileUpload;

const StyledInput = styled('input')(({theme}) => ({
    display: 'none',
}));

const StyledLabel = styled('label')(({theme}) => ({
    cursor: 'pointer',
    alignItems: 'left',
    paddingRight: '2%',
    marginRight: '10% ',
    borderRadius: '.41rem',
    color: theme.palette.text.primary,
    ':hover': {
        color: theme.palette.grey[200],
        // backgroundColor: theme.palette.grey[100],
        transition: 'all 100ms',
        transitionTimingFunction: 'ease-in-out',
    }
}));
