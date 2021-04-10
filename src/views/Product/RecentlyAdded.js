import React, {Component} from 'react';
import {FiHeart, FiMaximize2} from "react-icons/fi";
import ProductItem from "../../components/Product/ProductItem";
class RecentlyAdded extends Component {
    render() {
        return (
            <div>
                <div className="container mt-5 mb-5">
                    <div className="d-flex flex-column justify-content-center text-center m-5">
                        <h3>Recently Added</h3>
                        <div className="bar"></div>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                          <ProductItem/>
                        </div>
                         <div className="col-lg-3 col-md-4 col-sm-6">
                          <ProductItem/>
                        </div>
                         <div className="col-lg-3 col-md-4 col-sm-6">
                          <ProductItem/>
                        </div>
                         <div className="col-lg-3 col-md-4 col-sm-6">
                          <ProductItem/>
                        </div>
                         <div className="col-lg-3 col-md-4 col-sm-6">
                          <ProductItem/>
                        </div>
                         <div className="col-lg-3 col-md-4 col-sm-6">
                          <ProductItem/>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default RecentlyAdded;
