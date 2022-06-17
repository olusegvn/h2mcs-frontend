import LoginForm from "./LoginForm";
import LoginBackground from "./LoginBackground";
import {RowStack} from "../../mini-components/Stack";

const Index = (): JSX.Element => {
    return (
        <RowStack>
            <LoginForm/>
            <LoginBackground/>
        </RowStack>
    );
}

export default Index