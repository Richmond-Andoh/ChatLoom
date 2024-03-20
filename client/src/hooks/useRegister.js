import { useState } from "react"
import toast from "react-hot-toast";

const useRegister = () => {
    const [ loading, setLoading ] = useState(false);

    const register = async({fullName, username, password, confirmPassword, selectedGender}) => {
        const success = handleInputErrors({fullName, username, password, confirmPassword, selectedGender})
        if(!success) return;

        setLoading(true);

        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({fullName, username, password, confirmPassword, selectedGender})
            })

            const data = await res.json();
            console.log(data);

        } catch (error) {
            toast.error(error.message)
        }

        finally{
            setLoading(false)
        }
    }


    return { loading, register }
};

export default useRegister;

function handleInputErrors({fullName, username, password, confirmPassword, selectedGender}){
    if(!fullName || !username || !password || !confirmPassword || !selectedGender){
       toast.error("All fields must be filled");
       return false;
    };

    if(password !== confirmPassword){
        toast.error("Passwords do not match");
        return false;
    };

    if(password.length < 8){
        toast.error("Password should be at least eight in length and above")
    };

    return true;
};