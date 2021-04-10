import React, {Component} from 'react';
import {FiChevronLeft, FiHeart, FiChevronRight} from "react-icons/fi";
import Slider from "react-slick";
import ProductItem from "../../components/Product/ProductItem";


class PopularProduct extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    next() {
        this.slider.slickNext();
    }

    previous() {
        this.slider.slickPrev();
    }

    render() {
        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            arrows:false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div>
                <div className="container mt-5 mb-5" style={{position: "relative"}}>
                    <div className="d-flex flex-column justify-content-center text-center m-5">
                        <h3>Popular Product</h3>
                        <div className="bar"></div>
                    </div>

                    <Slider  ref={c => (this.slider = c)}  {...settings}>
                        <div className="pl-2 pr-2">
                            <ProductItem/>
                        </div>
                        <div className="pl-2 pr-2">
                            <ProductItem/>
                        </div>
                        <div className="pl-2 pr-2">
                            <ProductItem/>
                        </div>
                        <div className="pl-2 pr-2">
                            <ProductItem/>
                        </div>
                        <div className="pl-2 pr-2">
                            <ProductItem/>
                        </div>
                        <div className="pl-2 pr-2">
                            <ProductItem/>
                        </div>
                        <div className="pl-2 pr-2">
                            <ProductItem/>
                        </div>
                        <div className="pl-2 pr-2">
                            <ProductItem/>
                        </div>
                        <div className="pl-2 pr-2">
                            <ProductItem/>
                        </div>
                        <div className="pl-2 pr-2">
                            <ProductItem/>
                        </div>
                        <div className="pl-2 pr-2">
                            <ProductItem/>
                        </div>
                        <div className="pl-2 pr-2">
                            <ProductItem/>
                        </div>
                        <div className="pl-2 pr-2">
                            <ProductItem/>
                        </div>
                        <div className="pl-2 pr-2">
                            <ProductItem/>
                        </div>


                    </Slider>
                    <div className="product-slider-navigation">
                        <button className="button slider-previous" onClick={this.previous}>
                            <FiChevronLeft/>
                        </button>
                        <button className="button slider-next" onClick={this.next}>
                            <FiChevronRight/>
                        </button>
                    </div>
                </div>

            </div>
        );
    }
}

export default PopularProduct;
