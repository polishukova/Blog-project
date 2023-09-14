import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { activateUser } from "../Server/auth"

export const Activate = () => {
    const { uid, token } = useParams();

    useEffect(() => {
    uid && token && activateUser({uid, token})
}, [uid, token])

    return (
    <p>Activate</p>
    )
}