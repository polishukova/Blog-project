import { Routes, Route, useNavigate, Link } from "react-router-dom"
import { Authorization } from "../Authorization/Authorization"
import { RenderOnePost } from "../Post/OnePost"
import { Registration } from "../Registration/Registration"
import { AllTabs } from '../Tabs/AllTabs'
import { User, checkUser, regUser, saveTokens } from "../../Server/auth"
import { Activate } from "../Activate"
import { LoadPost } from "../Post/LoadPost"

type Props = {setUser: (newUser: any) => void
}


export const Navigation = ({setUser}: Props) => {

    const navigate = useNavigate()

    const addUser = (username: string, password: string, email: string) => {

        const newUser: User = {
            username: username,
            password: password,
            email: email
        }

        regUser(newUser)
    }

    const navigateFromUser = async (email: string, password: string) => {
        const tokens = await checkUser({email, password})
        saveTokens(tokens)
        
        if (tokens) {
            navigate('/Posts')
        }
        else alert('Wrong data')
    }

    return <div>
        <Routes>
            <Route path='reg' element={<Registration onReg={addUser} />} />
            <Route path='auth' element={<Authorization onAuth={navigateFromUser} />} />
            <Route path='posts/*'>
                <Route index element={<AllTabs/>} />
                <Route path=':postId' element={<RenderOnePost />} />
            </Route>
            <Route path='//activate/:uid/:token' element={<Activate/>}/>
            <Route path='onload' element={<LoadPost />} />
        </Routes>
        <Link to='onload'>Load Post</Link>
    </div>
}