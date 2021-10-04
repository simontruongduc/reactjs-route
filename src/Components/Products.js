import {useRouteMatch,NavLink, Route} from "react-router-dom";
import Product from "./Product";

function Products() {
    var products = [
        {
            id: 1,
            name: "iphone x",
            price: "123"
        },
        {
            id: 2,
            name: "iphone xs",
            price: "123"
        },
        {
            id: 3,
            name: "iphone xs max",
            price: "123"
        },
    ];

    var match = useRouteMatch();

    var res = products.map((product, index) => {
        return (
            <NavLink to={`${match.url}/${product.id}`} key={index}>
                <li className="list-group-item">
                    {product.id}-{product.name}-{product.price}
                </li>
            </NavLink>
            )
    })

    return (
        <div className="container">
            <h1>List Product</h1>
            <div className="row">
                <ul className="list-group">
                    {res}
                </ul>
            </div>
            <div className="row">
                <Route path="products/:id" exact component={Product}/>
            </div>
        </div>
    );
}

export default Products;
