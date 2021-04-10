import React, {Component} from 'react';
import BreadCrum from "../../components/BreadCrum";
import ProductItem from "../../components/Product/ProductItem";
import FilterOptions from "../../components/FilterOptions";
import ProductSlider from "../../components/ProductSlider";
class Category extends Component {
    render() {
        return (
            <div>
                <section className="product-shop spad bg-gray p-t-65 p-b-60">
                    <BreadCrum/>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-8 order-2 order-lg-1 produts-sidebar-filter">
                               <FilterOptions/>
                            </div>
                            <div className="col-lg-9 order-1 order-lg-2">

                                <div className="product-list">
                                    <ProductSlider/>
                                    <ProductSlider/>
                                    <ProductSlider/>
                                    <ProductSlider/>
                                </div>

                            </div>

                        </div>
                    </div>

                </section>
            </div>
        );
    }
}

export default Category;
