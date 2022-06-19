import React, {useState} from 'react';
import {CenteredBox} from "../../mini-components/Box";
import LargeButton from "../../common-components/Button";
import {TwoThirdGridItem} from "../../mini-components/Grid";
import {styled} from "@mui/material/styles";
import {
    Poppings400,
    Poppings600, PoppingsFootnote,
    PoppingsInputLabel,
    PoppingsSubtitle,
    PoppingsTitle
} from "../../mini-components/Typography";
import {SmallSpacedStack, SpacedStack} from "../../mini-components/Stack";
import {Button, Stack, TextField} from "@mui/material";
import {FormTextField} from "../../common-components/Input";
import {Select, SelectStyledButton} from "../../common-components/Select";

const LoginForm = () => {
    const [username, setUsername] = useState<string>()
    const [password, setPassword] = useState<string>()
    const [category, setcategory] = useState<string>()
    return (
        <>
      <FormContainer>
        <TwoThirdGridItem>
          <SpacedStack>
            <Stack>
              <PoppingsTitle>Welcome</PoppingsTitle>
              <PoppingsSubtitle>Welcome! Please enter your details.</PoppingsSubtitle>
            </Stack>
            <Stack>
              <PoppingsInputLabel>Username</PoppingsInputLabel>
              <FormTextField placeholder="Enter your username"/>
            </Stack>
            <Stack>
              <PoppingsInputLabel>Password</PoppingsInputLabel>
              <FormTextField placeholder="password"/>
            </Stack>
            <Select RootButton={SelectStyledButton}
                    items={[ 'Login As...', 'Something' , 'Something else',]}
            />
            <Select RootButton={SelectStyledButton}
                    items={[ 'Category...', 'Something' , 'Something else',]}
            />
            <SmallSpacedStack>
                <SignInButton><Poppings600>Sign in</Poppings600></SignInButton>
                <SecondaryTextButton><Poppings400>Forgot password</Poppings400></SecondaryTextButton>
            </SmallSpacedStack>
          </SpacedStack>
        </TwoThirdGridItem>
      </FormContainer>
      <PoppingsFootnote>Powered by nHub Nigeria</PoppingsFootnote>
      </>
    );
};

export default LoginForm;

const SignInButton = styled((props: any) => <LargeButton {...props}/>
)(({theme}) => ({backgroundColor: theme.palette.info.main}));

const SecondaryTextButton = styled((props: any) => <Button {...props}/>
)(({theme}) => ({color: theme.palette.secondary.main}));

const FormContainer = styled((props: any) => <CenteredBox
    style={{paddingRight: '15%', paddingLeft: '7%'}} {...props}/>)();
