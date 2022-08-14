import config, {resolveError} from "./config";
import axios from "axios";

export const registerMRO = (data: any) =>
    axios
        .post(`${config.apiUrl}/mro/register`, data, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
        .then((res: any) => {
            return res.data
        })
        .catch((error: any) => resolveError(error))