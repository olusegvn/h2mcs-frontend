import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../../../assets/consts";

export function useRegisterForm(){
    const navigate = useNavigate()
    const onSubmit = () => {
        navigate(ROUTES.LOGIN)
    }
    return {onSubmit}
}