import React, {Component} from 'react';
import {FiHeart, FiMaximize2} from "react-icons/fi";

class ProductItem extends Component {
    render() {
        return (
            <div className="product-item">
                <div className="pi-pic">
                    <a href="/stores/electronics/telivision/sony" target="_blank">

                    <img src="https://5.imimg.com/data5/HI/TN/MY-37513498/lg-double-door-refrigerator-500x500.jpg"
                         alt=""/></a>
                    <div className="icon">
                        <i className="icon_heart_alt"></i>
                    </div>
                    <ul>
                        <li className="w-icon active"><a href="#"><FiHeart/></a></li>
                        <li className="quick-view"><a href="#">+ Add To Cart</a></li>
                        <li className="w-icon"><a href="#"><FiMaximize2/></a></li>
                    </ul>
                </div>
                <div className="pi-text">
                    <div className="catagory-name">Electronics</div>
                    <a href="#">
                        <h6>RR20M172ZR2 1 Door with Smart Digital</h6>
                    </a>
                    <div className="product-price">
                        Rs. 13000.00
                        <span>15000.00</span>
                    </div>
                </div>
            </div>

        );
    }
}

export default ProductItem;
