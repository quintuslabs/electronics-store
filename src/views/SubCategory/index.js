import React, {Component} from 'react';
import BreadCrum from "../../components/BreadCrum";
import ProductItem from "../../components/Product/ProductItem";
import FilterOptions from "../../components/FilterOptions";
class SubCategory extends Component {
    render() {
        return (
            <div>
                <section className="product-shop spad bg0 p-t-65 p-b-60">
                    <BreadCrum/>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-8 order-2 order-lg-1 produts-sidebar-filter">
                                <FilterOptions/>
                            </div>
                            <div className="col-lg-9 order-1 order-lg-2">
                                <div className="product-list">
                                    <div className="row">
                                        <div className="col-lg-4 col-sm-6">
                                            <ProductItem/>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <ProductItem/>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <ProductItem/>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <ProductItem/>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <ProductItem/>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </section>
            </div>
        );
    }
}

export default SubCategory;
