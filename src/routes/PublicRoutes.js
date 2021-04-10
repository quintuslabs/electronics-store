import React from "react";
import { Redirect } from "react-router-dom";
// Layout Types
import BaseLayout from "../views/Layout/BaseLayout";

// Route Views
import Home from "../views/Home";
import Category from "../views/Category";
import Cart from "../views/Cart";
import SubCategory from "../views/SubCategory";
import SingleProduct from "../views/Product/SingleProduct";

var PublicRoutes = [
    {
        path: "/",
        exact: true,
        layout: BaseLayout,
        component: Home,
    },

    {
        path: "/home",
        layout: BaseLayout,
        component: () => <Redirect to="/" />,
    },
    {
        path: "/store/:category",
        layout: BaseLayout,
        component: Category,
    },
    {
        path: "/category/:category/:sub_category",
        layout: BaseLayout,
        component: SubCategory,
    },

    {
        path: "/stores/:category_name/:sub_category_name/:product_name",
        layout: BaseLayout,
        component: SingleProduct,
    },

    {
        path: "/cart/checkout",
        layout: BaseLayout,
        component: Cart,
    },
];

export default PublicRoutes;
