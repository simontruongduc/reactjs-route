import {Route, Switch} from 'react-router-dom';
import Home from "../Components/Home";
import About from "../Components/About"
import Contact from "../Components/Contact";
import NotFount from "../Components/NotFount";
import Products from "../Components/Products";

function Routes() {
    const routes = [
        {
            path: '/',
            exact: true,
            main: () => <Home/>
        },
        {
            path: '/about',
            exact: false,
            main: () => <About/>
        },
        {
            path: '/contact',
            exact: false,
            main: () => <Contact/>
        },
        {
            path: '/products',
            exact: false,
            main: () => <Products/>
        },
        {
            path: '',
            exact: false,
            main: () => <NotFount/>
        }
    ]

    var invoke = (routes) => {
        return routes.map((route, index) => {
            return (
                <Route key={index}
                       path={route.path}
                       exact={route.exact}
                       component={route.main}/>
            )
        })

    }
    return (
        <Switch>
            {invoke(routes)}
        </Switch>
    );
}

export default Routes;
