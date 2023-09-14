import './App.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store/store';
import { ChangeThemeContext, ThemeContext } from './Components/Context/themeContext';
import { ReactNode, useState } from 'react';

export const AppWrapper = ({children} : {children: ReactNode}) => {
    const [theme, setTheme] = useState('light')

    return (
        <ThemeContext.Provider value={theme}>
            <ChangeThemeContext.Provider value={() => {setTheme(theme === 'light' ? 'dark' : 'light')}}>
                <Provider store={store}>
                    <BrowserRouter>
                        {children}
                    </BrowserRouter>
                </Provider>
            </ChangeThemeContext.Provider>
        </ThemeContext.Provider>
    )
}