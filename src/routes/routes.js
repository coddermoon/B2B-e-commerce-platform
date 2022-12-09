import Main from "../Layout/Main";
import Products from "../Pages/Products/Products";

const { createBrowserRouter } = require("react-router-dom");

const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main/>

    },{
        path:'/products',
        element: <Products/>
    }
])

export default routes