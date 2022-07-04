import BrowserAppBar from "./AppBar";
import {styled} from "@mui/material/styles";
import {Stack} from "@mui/material";
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <StyledDiv>
            <BrowserAppBar/>
            <Outlet/>
        </StyledDiv>
    );
}

export default Layout;

const StyledDiv = styled(Stack)(({theme}) => ({
    height: '100vh',
}))

