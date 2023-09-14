import { useState } from "react"
import './Authorization.css'
import { Title } from "../Title/Title"
import { Link } from "react-router-dom"

type Props = {
    onAuth: (login: string, password: string) => void
}

export const Authorization = ({ onAuth }: Props) => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    return <>
        <Title text="Sign In"/>
        <div className="authWrapper">
            <input className="authInput" type='text' placeholder="Your Name" value={login} onChange={(e) => { setLogin(e.currentTarget.value) }} />
            <input className="authInput" type='password' placeholder="Your Password" value={password} onChange={(e) => { setPassword(e.currentTarget.value) }} />
            <button className="authButton" onClick={() => onAuth(login, password)}>Authorization</button>
            <Link to='/Reg' className="authButton">Sign up</Link>
        </div>
    </>
}
