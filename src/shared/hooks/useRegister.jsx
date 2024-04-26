import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { register as RegisterRequest } from '../../services';

import toast from 'react-hot-toast';

export const useRegister = () => {

    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const register = async (username, email, password) => {
        
        setIsLoading(true)

        const response = await RegisterRequest({
            username,
            email,
            password
        })

        setIsLoading(false)

        if (response.error) {
            
            return toast.error(response.e?.response.data || 'Occurio un error al registrar un usuario, intente de nuevo')

        }

        const { userDetails } = response.data
        
        localStorage.setItem('user', JSON.stringify(userDetails))

        navigate('/')

    }

    return {
        register,
        isLoading
    }

}