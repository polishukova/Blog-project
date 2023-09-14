import { useContext } from 'react'
import { ThemeContext } from '../Context/themeContext'
import './Title.css'

type Props = {text: string}

export const Title = ({text}: Props) => {
    const theme = useContext(ThemeContext)

    return <h1 className={theme === 'light' ? 'titleDark' : 'titleLight'}>{text}</h1>
}