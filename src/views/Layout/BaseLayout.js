import React, { Component } from "react";
import Header from "../../components/Header/NavBar";
import Carousal from "../../components/Carousal";
import Category from "../../components/Category";

class BaseLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillMount() {
        window.scrollTo(0, 0);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = (event) => {
        if (window.scrollY >= 40) {
            this.setState({ active: true });
        } else {
            this.setState({ active: false });
        }
    };

    render() {
        return (
            <div className="main-container">
                <div className="wrapper">

                    <div className="layout-Container">
                        <Header
                            active={this.state.active}
                            cartdetails={JSON.parse(localStorage.getItem("CartDetails"))}
                        />

                        {this.props.children}
                    </div>


                </div>
            </div>
        );
    }
}

export default BaseLayout;
