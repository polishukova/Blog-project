import { useContext } from "react"
import { ThemeContext } from "../Context/themeContext"
import './ThemeButton.css'
import { ReactComponent as Sun } from './sun.svg';
import { ReactComponent as Moon } from './moon.svg';

type Props = { changeThemeClick: () => void }

export const ThemeButton = ({ changeThemeClick }: Props) => {
    const theme = useContext(ThemeContext)

    return <button className='changeThemeButton' onClick={changeThemeClick}>
        {theme === 'light' ? <Moon /> : <Sun />}
    </button>
}