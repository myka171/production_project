import classNames from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss"
import {useTheme} from "app/providers/ThemeProvider";
import LightIcon from "shared/assets/icons/theme-light.svg"
import DarkIcon from "shared/assets/icons/theme-dark.svg"
import Button, {ThemeButton} from "shared/ui/Button/ui/Button";


interface ThemeSwitcherProps {
    className?: string
}


const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, changeTheme} = useTheme();

    console.log(theme === 'normal' ? LightIcon : DarkIcon)
    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={changeTheme}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
        >{theme === 'normal' ? <LightIcon /> : <DarkIcon />}</Button>
    )
}

export default ThemeSwitcher