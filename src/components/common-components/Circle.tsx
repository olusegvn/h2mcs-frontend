import React from 'react';
import {styled} from "@mui/material/styles";

export const Circle = styled('div')(({theme, color}) => ({
    height:'15px',
    width:'15px',
    borderRadius: '50%',
    backgroundColor: color || theme.palette.error.main ,
    alignRight: 1,
}));

export const BadgeCircle = styled(Circle)(({theme}) => ({
    border: '2px solid #fff',
    marginTop: '-2px',
    marginLeft: '-17px',
}));

