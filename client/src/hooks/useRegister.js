import { useState } from "react"
import toast from "react-hot-toast";

const useRegister = () => {
    const [ loading, setLoading ] = useState(false);

    const register = async({fullname, username, password, confirmPassword, gender}) => {
        const success = handleInputErrors({fullname, username, password, confirmPassword, gender})
        if(!success) return;

        setLoading(true);

        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({fullname, username, password, confirmPassword, gender})
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

function handleInputErrors({fullname, username, password, confirmPassword, gender}){
    if(!fullname || !username || !password || !confirmPassword || !gender){
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