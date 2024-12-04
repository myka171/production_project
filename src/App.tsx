import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {Suspense} from "react";
import {useTheme} from "./theme/useTheme";
import {ClassNames} from "./helpers/classNames/classNames";




const App = () => {
    const {theme, changeTheme} = useTheme();

  return (
    <div className={ClassNames('app', {}, [theme])} >
        <Link to={'/'}> Главная</Link>
        <Link to={'/about'}> О нас</Link>
        <button onClick={changeTheme}>Изменить тему</button>
        <Suspense fallback={<div>Загрузка...</div>}>
            <Routes>
                <Route path={'/about'} element={<AboutPageAsync/>}/>
                <Route path={'/'} element={<MainPageAsync/>}/>
            </Routes>
        </Suspense>
    </div>
  );
};

export default App;