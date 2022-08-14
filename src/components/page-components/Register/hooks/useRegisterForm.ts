import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {CMD, ROUTES} from "../../../../assets/consts";
import {registerCMD} from "../../../../endpoints/cmd";
import {registerMRO} from "../../../../endpoints/mro";

export function useRegisterForm({handleSubmit, formValues, setErrorString}: any){
    const navigate = useNavigate()
    const registerFunction = formValues.registerAs === CMD? registerCMD : registerMRO
    const submitFunction = async () => {
        console.log(formValues)
        try {
            const result = await registerFunction(formValues)
        }catch (err) {setErrorString(err)}
        navigate(ROUTES.LOGIN)
    }
    return {onSubmit: handleSubmit(submitFunction)}
}