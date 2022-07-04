import {styled} from "@mui/material/styles";
import React from "react";


export const Avatar = styled((props: any) => (
    <img alt={'avatar'} {...props} />
))(({ theme, small }) => ({
    width: small? '2rem': '3rem',


}));