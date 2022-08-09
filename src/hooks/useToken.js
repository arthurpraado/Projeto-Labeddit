import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToLoginPage } from "../routes/coordinator"

const useToken = () => {
    const navigate = useNavigate()
    const isLoggedIn = localStorage.token !== undefined
    useEffect(() => {
        if (!isLoggedIn) {
            console.log("redireciona para o login")
            goToLoginPage(navigate)
        }
    }, [isLoggedIn])
   
}

export default useToken