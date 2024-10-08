import React, {useRef, useState} from 'react';
import {styled} from "@mui/material/styles";
import {Monserrat700, Poppins, PoppinsPageTitle} from "../../mini-components/Typography";
import {RowStack} from "../../mini-components/Stack";
import {ActionButton} from "../../common-components/Button";
import { Icon } from '@iconify/react';
import {OptionList} from "../../common-components/OptionList";
import Popup from "reactjs-popup";
import {StyledSelectOptionButton, StyledSelectOptionsContainer} from "../../common-components/Select";
import {PopupActions} from "reactjs-popup/dist/types";
import {Button, Grid, Modal, Stack, Typography} from "@mui/material";
import {form, adminRegistrationForm, doctorRegistrationForm} from "../../../assets/Forms";
import Form from "../../common-components/CustomForm/Form";
import register from "../Register";
import useCustomForm from "../../common-components/CustomForm/hooks/useCustomForm";
import {useRegisterForm} from "../Register/hooks/useRegisterForm";
import RegisterModal from "../../common-components/RegisterModal";

const addOptions = [
    {name: 'doctor', value: 'doctor'},
    {name: 'consultation', value: 'consultation'}
]

const BrowserHeader = ({name}: {name?: string}) => {
    const selectPopupRef = useRef<PopupActions>(null);
    const selectButtonRef = useRef<HTMLButtonElement>(null);
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const handleClose = () => {setModalOpen(false);};
    const selectAction = (e: any) => {selectPopupRef?.current?.close();setModalOpen(true)}
    const {Submit, fields, ContainerComponent, globalSize} = doctorRegistrationForm
    const {errorString, setErrorString, errors, formValues, handleSubmit, ...rest} = useCustomForm({fields})
    const {onSubmit} = useRegisterForm({formValues, setErrorString, handleSubmit})

    return (
        <StyledDiv>
            <Modal
                key={name}
                keepMounted
                open={modalOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <StyledModalContainer>
                    <Form
                        onSubmit={onSubmit}
                        ContainerComponent={ContainerComponent}
                        Submit={Submit}
                        fields={fields}
                        errors={errors}
                        formValues={formValues}
                        globalSize={globalSize}
                        {...rest}
                    />
                </StyledModalContainer>
            </Modal>
            <PoppinsPageTitle>{name}</PoppinsPageTitle>
            <Popup
                ref={selectPopupRef}
                trigger={
                <div>
                    <StyledActionButton ref={selectButtonRef}>
                        <Icon  icon="fluent:add-12-filled" />
                        <Monserrat700>Add</Monserrat700>
                    </StyledActionButton>
                    <div>

                    </div>
                </div>}
            >
                <OptionList
                    OptionButton={StyledSelectOptionButton}
                    selectAction={selectAction}
                    OptionsContainer={StyledSelectOptionsContainer}
                    items={addOptions}
                    parentName={name}
                    parentButtonRef={selectButtonRef}
                />
            </Popup>
        </StyledDiv>
    );
};

export default BrowserHeader;

const StyledDiv = styled(RowStack)(({theme}) => ({
    background: 'inherit',
    marginLeft: '15.3%',
    marginRight: '3%',
    paddingTop: '.5%',
    justifyContent: 'space-between',
}));

const StyledModalContainer = styled(Grid)(({theme}) => ({
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'transparent',
    zIndex: '0',
    width: '70vw',
}));

const StyledActionButton = (props: any) => <ActionButton
    sx={{
        marginBottom: '1%',
        width: '8%',
        minWidth: '5rem',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }}
    {...props}/>

