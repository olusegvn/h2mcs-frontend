import LoginForm from "./LoginForm";
import {Grid} from "@mui/material";
import {HalfGridItem} from "../../mini-components/Grid";
import {styled} from "@mui/material/styles";
import loginBackground from '../../../assets/login-backgrond.png'

const Login = (): JSX.Element => {
    return (
        <StyledMainContainer>
            <StyledFormContainer><LoginForm/></StyledFormContainer>
        </StyledMainContainer>
    );
}

export default Login

const StyledMainContainer = styled((props: any) => <Grid container {...props} />)
(({theme}) => ({
    height: '100vh',
    backgroundImage: `linear-gradient(90deg, #FDFDFD 50%, 
        rgba(238, 238, 238, 0.62) 59.47%, 
        rgba(235, 235, 235, 0.533788) 70.08%, 
        rgba(217, 217, 217, 0) 100%),
        url(${loginBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
}));

const StyledFormContainer = styled((props: any) => <HalfGridItem
    style={{backgroundColor: '#fff'}} {...props}/>)();

