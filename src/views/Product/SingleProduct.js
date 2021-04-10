import React, {Component} from 'react';
import {FiMinus, FiPlus, FiHeart} from "react-icons/fi";
import ProductDetails from "./ProductDetails";
import BreadCrum from "../../components/BreadCrum";

class SingleProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "https://images-na.ssl-images-amazon.com/images/I/71-XsJoSe1L._SL1500_.jpg",
            counter: 1
        }
    }

    setImage = (image) => {
        this.setState({"selected": image})
    }

    incrementProductCount = () => {
        this.setState({counter: this.state.counter + 1})
    }
    decrementProductCount = () => {
        if (this.state.counter > 1) {
            this.setState({counter: this.state.counter - 1})
        }

    }

    render() {
        return (
            <div>
                <section className="sec-product-detail bg0 p-t-65 p-b-60">
                    <BreadCrum/>
                    <div className="container">
                        <div className="row">

                            <div className="col-md-6 col-lg-7 p-b-30">
                                <div className="d-flex flex-row">
                                    <div className="d-flex flex-column w-25">
                                        <div className="product-thumbnail" onClick={() => {
                                            this.setImage("https://images-na.ssl-images-amazon.com/images/I/71-XsJoSe1L._SL1500_.jpg")
                                        }}>
                                            <img
                                                src="https://images-na.ssl-images-amazon.com/images/I/71-XsJoSe1L._SL1500_.jpg"
                                                alt="IMG-PRODUCT" className="img-thumbnail"/>
                                        </div>
                                        <div className="product-thumbnail" onClick={() => {
                                            this.setImage("https://manglamelectronics.com/wp-content/uploads/2020/05/6304.1.jpg")
                                        }}>
                                            <img
                                                src="https://manglamelectronics.com/wp-content/uploads/2020/05/6304.1.jpg"
                                                alt="IMG-PRODUCT" className="img-thumbnail"/>
                                        </div>
                                        <div className="product-thumbnail" onClick={() => {
                                            this.setImage("https://images-na.ssl-images-amazon.com/images/I/71-XsJoSe1L._SL1500_.jpg")
                                        }}>
                                            <img
                                                src="https://images-na.ssl-images-amazon.com/images/I/71-XsJoSe1L._SL1500_.jpg"
                                                alt="IMG-PRODUCT" className="img-thumbnail"/>
                                        </div>
                                        <div className="product-thumbnail" onClick={() => {
                                            this.setImage("https://n2.sdlcdn.com/imgs/a/0/b/Godrej-221-Ltrs-RD-Edge-SDL069490493-1-0c47d.jpg")
                                        }}>
                                            <img
                                                src="https://n2.sdlcdn.com/imgs/a/0/b/Godrej-221-Ltrs-RD-Edge-SDL069490493-1-0c47d.jpg"
                                                alt="IMG-PRODUCT" className="img-thumbnail"/>
                                        </div>
                                        <div className="product-thumbnail" onClick={() => {
                                            this.setImage("https://www.askmea2z.com/inventory_images/7032.jpg")
                                        }}>
                                            <img
                                                src="https://www.askmea2z.com/inventory_images/7032.jpg"
                                                alt="IMG-PRODUCT" className="img-thumbnail"/>
                                        </div>

                                    </div>
                                    <div className="d-flex flex-column w-75">
                                        <div className="wrap-pic-w pos-relative">
                                            <img
                                                src={this.state.selected}
                                                alt="IMG-PRODUCT" className="img-fluid"/>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="col-md-6 col-lg-5 p-b-30">
                                <div className="p-r-50 p-t-5 p-lr-0-lg">
                                    <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                                        Godrej 210 L Direct Cool Single Door Refrigerator(iris Blue, Rd Edgepro 210 Pd
                                        3.2)
                                    </h4>

                                    <span className="mtext-106 cl2">
							Rs. 10,000.79 <s className="ml-1 fs-14">8,000.00</s>
						</span>

                                    <p className="stext-102 cl3 p-t-23">
                                        Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris
                                        consequat ornare feugiat.
                                    </p>
                                    <b className="stext-107 cl6 pt-1">
                                        <b>SKU: JAK-01</b>
                                    </b>

                                    <p><b className="stext-107 cl6 pt-1">
                                        Categories: Refrigerator
                                    </b></p>

                                    <div className="p-t-33">

                                        <div className="flex-w flex-r-m p-b-10">
                                            <div className="size-204 flex-w flex-m respon6-next">
                                                <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                                                    <div onClick={() => {
                                                        this.decrementProductCount()
                                                    }}
                                                         className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                                                        <FiMinus/>
                                                    </div>

                                                    <input className="mtext-104 cl3 txt-center num-product"
                                                           type="number" name="num-product" value={this.state.counter}/>

                                                    <div onClick={() => {
                                                        this.incrementProductCount()
                                                    }}
                                                         className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                                                        <FiPlus/>
                                                    </div>
                                                </div>

                                                <button
                                                    className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                                                    Add to cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bor10 m-t-50 p-t-43 p-b-40">
                            <ProductDetails/>

                        </div>
                    </div>

                </section>
            </div>
        );
    }
}

export default SingleProduct;
