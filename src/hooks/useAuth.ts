import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPermissoions } from "../Slices/permissions";

export const useAuth = () => {
    const navigate = useNavigate();
    const permissions = useSelector(getPermissoions);
    useEffect(() => {
        if (permissions.length < 1) {
            navigate('/');
        }
    }, [permissions]);
    return true;

}