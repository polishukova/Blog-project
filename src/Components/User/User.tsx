import { useEffect, useState } from 'react';
import './User.css'
import { ReactComponent as UserIcon } from './userIcon.svg';
import { Profile, getProfile } from '../../Server/auth';

export const User = () => {
    const [user, setUser] = useState<Profile>()

    useEffect(() => {getProfile().then(user => setUser(user))}, [])

    if (user) {
        // const nameSurnameArr = user.username.split(' ');
        // const userInitials = (nameSurnameArr[0][0] + nameSurnameArr[1][0]).toUpperCase();
        return <div>
            <div className='user'>
                <p className='userInitials'></p>
                <p className='userName'>{user.username}</p>
            </div>
        </div>
    }
    else
        return <div>
            <div className='userNoAuth'>
                <UserIcon/>
            </div>
        </div>

}