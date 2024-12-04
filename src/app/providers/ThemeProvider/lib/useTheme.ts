import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
import {useContext} from "react";


interface UseThemeResult {
    changeTheme: () => void;
    theme: Theme
}



export function useTheme(): UseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);

    const changeTheme = () => {
        const newTheme = theme === Theme.Normal ? Theme.Dark : Theme.Normal;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }

    return {theme, changeTheme} as UseThemeResult;
}