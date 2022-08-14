import React from 'react';
import {IconButton} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Popup from "reactjs-popup";

const TablePopup = (props: any) => {
    return (
        <Popup
            position="bottom right"
            nested
            {...props}
            trigger={<div><IconButton><MoreVertIcon/></IconButton></div>}
        />
    );
};

export default TablePopup;
