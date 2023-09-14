import { Link } from 'react-router-dom';
import { User } from '../User/User';
import './Menu.css'

type Props = {
    username: string | null
}

export const Menu = ({ username }: Props) => {

    if (username) {
        return (
            <div className='menu'>
                <div>
                    <User/>
                    <Link className='linkButton' to=''>Home</Link>
                    <Link className='linkButton' to=''>Add Post</Link>
                </div>
                <div>
                    <Link className='linkButtonDark' to='/Auth'>Log Out</Link>
                </div>
            </div>
        )
    }
    else return (
        <div className='menu'>
            <div>
                    <Link className='linkButton' to=''>Home</Link>
                </div>
                <div>
                    <Link className='linkButtonDark' to='/Auth'>Sign In</Link>
                </div>
        </div>
    )
}