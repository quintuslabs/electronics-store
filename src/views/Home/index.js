import React, {Component} from 'react';
import Carousal from "../../components/Carousal";
import Category from "../../components/Category";
import FlatBanner from "../../components/FlatBanner";
import Services from "../../components/Services";
import Footer from "../../components/Footer";
import RecentlyAdded from "../Product/RecentlyAdded";
import DealOfWeek from "../../components/DealOfWeek";
import PopularProduct from "../Product/PopularProduct";
class Home extends Component {
    render() {
        return (
            <div className="d-flex flex-col">
                <Carousal/>
                <Category/>
                <FlatBanner/>
                <RecentlyAdded/>
                <DealOfWeek/>
                <PopularProduct/>
                <Services/>
                <Footer/>
            </div>
        );
    }
}

export default Home;
