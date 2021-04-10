import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import { registerNav } from "../modules/Navigation";
import PageNotFound from "../views/PageNotFound";
import HomeRoutes from "./PublicRoutes";



export default class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Router ref={registerNav}>
                    <Switch>
                        {HomeRoutes.map((homeRoute, index) => {
                            return (
                                <Route
                                    key={index}
                                    path={homeRoute.path}
                                    exact={homeRoute.exact}
                                    component={(props) => {
                                        return (
                                            <homeRoute.layout {...props}>
                                                <homeRoute.component {...props} />
                                            </homeRoute.layout>
                                        );
                                    }}
                                />
                            );
                        })}

                        <Route Redirect to="/PageNotFound" exact component={PageNotFound} />
                    </Switch>
                </Router>
            </div>
        );
    }
}
