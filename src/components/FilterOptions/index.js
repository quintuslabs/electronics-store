import React, {Component} from 'react';
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

class FilterOptions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            min: 5000,
            max: 15000,
            textValue: null,
            percent: null
        };
    }

    onSlide = (render, handle, value, un, percent) => {
        this.setState({
            min: value[0].toFixed(2),
            max: value[1].toFixed(2),

        });
    };

    render() {
        return (
            <div>
                <div className="filter-widget">
                    <h4 className="fw-title">Categories</h4>
                    <ul className="filter-catagories">
                        <li><a href="#">Electronics</a></li>
                        <li><a href="#">Home Appliances</a></li>
                    </ul>
                </div>
                <div className="filter-widget">
                    <h4 className="fw-title">Brand</h4>
                    <div className="fw-brand-check">
                        <div className="bc-item">
                            <label htmlFor="bc-calvin">
                                Tosiba
                                <input type="checkbox" id="bc-calvin"/>
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="bc-item">
                            <label htmlFor="bc-diesel">
                                Sony
                                <input type="checkbox" id="bc-diesel"/>
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="bc-item">
                            <label htmlFor="bc-polo">
                                LG
                                <input type="checkbox" id="bc-polo"/>
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="bc-item">
                            <label htmlFor="bc-tommy">
                                SangSung
                                <input type="checkbox" id="bc-tommy"/>
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="filter-widget">
                    <h4 className="fw-title">Price</h4>
                    <div className="filter-range-wrap">
                        <div className="range-slider">
                            <div className="price-input">
                                <input type="text" id="minamount" value={this.state.min}/>
                                <input type="text" id="maxamount" value={this.state.max}/>
                            </div>
                        </div>
                        <Nouislider
                            range={{min: 0, max: 50000}} start={[this.state.min, this.state.max]} connect
                            keyboardSupport
                            onSlide={this.onSlide}/>

                    </div>
                    <a href="#" className="filter-btn">Filter</a>
                </div>
                {/* <div className="filter-widget">
                    <h4 className="fw-title">Color</h4>
                    <div className="fw-color-choose">
                        <div className="cs-item">
                            <input type="radio" id="cs-black"/>
                            <label className="cs-black" htmlFor="cs-black">Black</label>
                        </div>
                        <div className="cs-item">
                            <input type="radio" id="cs-violet"/>
                            <label className="cs-violet" htmlFor="cs-violet">Violet</label>
                        </div>
                        <div className="cs-item">
                            <input type="radio" id="cs-blue"/>
                            <label className="cs-blue" htmlFor="cs-blue">Blue</label>
                        </div>
                        <div className="cs-item">
                            <input type="radio" id="cs-yellow"/>
                            <label className="cs-yellow" htmlFor="cs-yellow">Yellow</label>
                        </div>
                        <div className="cs-item">
                            <input type="radio" id="cs-red"/>
                            <label className="cs-red" htmlFor="cs-red">Red</label>
                        </div>
                        <div className="cs-item">
                            <input type="radio" id="cs-green"/>
                            <label className="cs-green" htmlFor="cs-green">Green</label>
                        </div>
                    </div>
                </div>
                <div className="filter-widget">
                    <h4 className="fw-title">Size</h4>
                    <div className="fw-size-choose">
                        <div className="sc-item">
                            <input type="radio" id="s-size"/>
                            <label htmlFor="s-size">s</label>
                        </div>
                        <div className="sc-item">
                            <input type="radio" id="m-size"/>
                            <label htmlFor="m-size">m</label>
                        </div>
                        <div className="sc-item">
                            <input type="radio" id="l-size"/>
                            <label htmlFor="l-size">l</label>
                        </div>
                        <div className="sc-item">
                            <input type="radio" id="xs-size"/>
                            <label htmlFor="xs-size">xs</label>
                        </div>
                    </div>
                </div>
                <div className="filter-widget">
                    <h4 className="fw-title">Tags</h4>
                    <div className="fw-tags">
                        <a href="#">Towel</a>
                        <a href="#">Shoes</a>
                        <a href="#">Coat</a>
                        <a href="#">Dresses</a>
                        <a href="#">Trousers</a>
                        <a href="#">Men's hats</a>
                        <a href="#">Backpack</a>
                    </div>
                </div>*/}
            </div>
        );
    }
}

export default FilterOptions;
