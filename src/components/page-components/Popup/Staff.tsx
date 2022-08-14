import React, {useRef} from 'react';
import {Button, IconButton, Stack, TextField} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Popup from "reactjs-popup";
import {PopupActions} from "reactjs-popup/dist/types";
import {styled} from "@mui/material/styles";
import {Inter300, Inter500} from "../../mini-components/Typography";
import {RowStack} from "../../mini-components/Stack";
import TablePopup from "../../common-components/TablePopup";

const StaffPopup = () => {
    return (
        <div>
            <TablePopup>
                <PopupContainer spacing={4}>
                    <StyledTextField disabled={true} label={<StyledInter500>Name</StyledInter500>} value={'Jane Doe'}/>
                    <StyledTextField disabled={true} label={<StyledInter500>Name</StyledInter500>} value={'Jane Doe'}/>
                    <StyledTextField disabled={true} label={<StyledInter500>Name</StyledInter500>} value={'Jane Doe'}/>
                    <StyledTextField disabled={true} label={<StyledInter500>Name</StyledInter500>} value={'Jane Doe'}/>
                    <StyledTextField disabled={true} label={<StyledInter500>Name</StyledInter500>} value={'Jane Doe'}/>
                    <StyledRowStack spacing={3}>
                        <StyledButton>Make M.R.O</StyledButton>
                        <StyledButton color={'primary'}>Suspend</StyledButton>
                        <StyledButton color={'secondary'}>Dismiss</StyledButton>
                    </StyledRowStack>
                </PopupContainer>
            </TablePopup>
        </div>
    );
};

export default StaffPopup;

export const PopupContainer = styled(Stack)(({theme})=> ({
    backgroundColor: '#FDFCFC',
    padding: '3rem',

}));

export const StyledTextField = (props: any) => (
    <TextField
        {...props}
        inputProps={{
            border: '0.1px solid #E8DDFF',

        }}
        sx={{
            background: '#FFFFFF',
            // border: '0.1px solid #E8DDFF',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            border: 'none',
            borderRadius: '10px',
            color: 'blue',
        }}
        />
)

export const StyledInter500 = styled(Inter500)(({theme}) => ({
    fontSize: '1rem',
    color: 'black',
}))

const StyledInter300 = styled(Inter300)(({theme}) => ({
    fontSize: '1rem',
    color: '#676464',
}))
export const StyledRowStack = styled(RowStack)(({theme}) => ({
    fontSize: '1rem',
    color: '#676464',
}))
export const StyledButton = styled((props: any) => (
    <Button
        {...props}
        variant={'contained'}
        sx={{
            textTransform: 'none',
        }}
        />
))(({theme, color}) => ({
    backgroundColor: theme.palette[color]?.main || '#78B7F1',

}))