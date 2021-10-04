import {Link, Route} from "react-router-dom";

function Menu() {
    const MenuLink = ({label, to, activeOnlyWhenExact}) => {
        return (
            <Route path={to} exact={activeOnlyWhenExact} children={({match}) => {
                var active = match ? "active" : "";
                return (
                    <li className={`my-link ${active}`}>
                        <Link to={to} className="my-link">{label}</Link>
                    </li>
                )
            }}/>
        )
    }
    const menus = [
        {
            lable: 'Home',
            to: '/',
            exact: true,
        },
        {
            lable: 'About',
            to: '/about',
            exact: false,
        },
        {
            lable: 'Contact',
            to: '/contact',
            exact: false,
        },
        {
            lable: 'Products',
            to: '/products',
            exact: false,
        }
    ]
    var showMenus = (menus) => {
        let res = menus.map((link, index) => {
            return (<MenuLink key={index}
                              label={link.lable}
                              to={link.to}
                              activeOnlyWhenExact={link.exact}
            />)
        })
        return res;
    }
    return (
        <nav className="navbar navbar-inverse">
            <ul className="nav navbar-nav">
                {showMenus(menus)}
            </ul>
        </nav>
    );
}

export default Menu;
