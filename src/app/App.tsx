import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {useTheme} from "app/providers/ThemeProvider";
import {ClassNames} from "shared/lib/classNames/classNames";
import {AboutPage} from 'pages/AboutPage';
import {MainPage} from "pages/MainPage";




const App = () => {
    const {theme, changeTheme} = useTheme();

  return (
    <div className={ClassNames('app', {}, [theme])} >
        <Link to={'/'}> Главная</Link>
        <Link to={'/about'}> О нас</Link>
        <button onClick={changeTheme}>Изменить тему</button>
        <Suspense fallback={<div>Загрузка...</div>}>
            <Routes>
                <Route path={'/about'} element={<AboutPage/>}/>
                <Route path={'/'} element={<MainPage/>}/>
            </Routes>
        </Suspense>
    </div>
  );
};

export default App;