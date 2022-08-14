import React from 'react';
import {PoppinsSubtitle, PoppingsTitle, PoppinsErrorSubtitle} from "../../mini-components/Typography";
import {Stack} from "@mui/material";
import { Icon } from '@iconify/react';
import warningIcon from '@iconify/icons-emojione-v1/warning';

interface FormHeaderProps{
    errorString?: string,
    validationErrors?: object,
}

const FormHeader = ({errorString, validationErrors}: FormHeaderProps) => {
    let error;
    if(Object.keys(validationErrors||{}).length > 0){
        error=Object.values(validationErrors|| {})[0].message
    }
    if(errorString)
        error = errorString;
    return (
        <Stack>
          <PoppingsTitle>Welcome</PoppingsTitle>
          <PoppinsSubtitle>Welcome! Please enter your details.</PoppinsSubtitle>
          <PoppinsErrorSubtitle color={'error'}>
              {error &&
              <Stack direction={'row'} spacing={1} justifyContent={'center'} alignItems={'center'}>
                <Icon icon={warningIcon} />
                <div>{error}</div>
              </Stack>}
          </PoppinsErrorSubtitle>
        </Stack>
    );
};

export default FormHeader;
