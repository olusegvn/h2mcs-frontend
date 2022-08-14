import styled from "@emotion/styled";
import { Icon } from "@iconify/react";
import { Button, Stack } from "@mui/material";
import { RowStack } from "../mini-components/Stack";
import { Inter300, Inter500 } from "../mini-components/Typography";

const AttachedFile = ({file, ...rest}: any) => {
    let datePrintOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' } as any;
    const {name, lastModifiedDate} = file;
    const truncate: (str: string, n: number)=> string = (str, n) => {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	};

    return (
            <StyledAttachedDocumentContainer {...rest}>
                <StyledPdfIcon height={'50'} icon="ant-design:file-pdf-outlined"/>
                <Stack>
                    <Inter500>{truncate(name, 20) }</Inter500>
                    <Inter300>{new Date(lastModifiedDate).toLocaleString("en-US", datePrintOptions)}</Inter300>

                </Stack>
            </StyledAttachedDocumentContainer>

    );
};

export default AttachedFile;


const StyledAttachedDocumentContainer = styled(Button)(({theme}) => ({
    borderRadius: '.8rem',
    backgroundColor: 'white',
    paddingRight: '10%',
    margin: "0%",
    color: 'inherit',
    alignItems: 'center',
    textAlign: 'left',
    // width: '40%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'
    
}));

const StyledPdfIcon = styled(Icon)(({theme}) => ({
    padding: '.5rem'
}));
