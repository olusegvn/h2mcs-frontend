import BrowserAppBar from "./AppBar";
import Drawer from "./Drawer";
import {styled} from "@mui/material/styles";
import BrowserHeader from "./BrowserHeader";
import {RowStack} from "../../mini-components/Stack";
import {Stack} from "@mui/material";

const Layout = ({children}: {children: JSX.Element[]| JSX.Element }): JSX.Element => {
    return (
        <StyledDiv>
            <BrowserAppBar/>
            <BrowserHeader/>
            <StyledRowStack>
                <Drawer/>
                <StyledChidrenContainer>{children}</StyledChidrenContainer>
            </StyledRowStack>
        </StyledDiv>
    );
}

export default Layout;

const StyledDiv = styled(Stack)(({theme}) => ({
    height: '100vh',
}))

const StyledChidrenContainer = styled(Stack)(({theme}) => ({
    width: '100%'
}))

const StyledRowStack = styled(RowStack)(({theme}) => ({
    height: '100%',
}))