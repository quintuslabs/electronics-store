import React, {Component} from 'react';
import Cat1 from "../../assets/images/cat1.jpg"
import Cat2 from "../../assets/images/cat2.jpg"
import Cat3 from "../../assets/images/cat3.jpg"

class Category extends Component {
    render() {
        return (
            <div>

                <div class="sec-banner bg0 p-t-80 p-b-50">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 col-xl-4 p-b-30 m-lr-auto">
                                <div class="block1 wrap-pic-w">
                                    <img src={Cat1} alt="IMG-BANNER"/>

                                        <a href="/store/electronics" class="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                                            <div class="block1-txt-child1 flex-col-l">
								<span class="block1-name ltext-102 trans-04 p-b-8">
									Telivision
								</span>

                                                <span class="block1-info stext-102 trans-04">
									Spring 2020
								</span>
                                            </div>

                                            <div class="block1-txt-child2 p-b-4 trans-05">
                                                <div class="block1-link stext-101 cl0 trans-09">
                                                    Shop Now
                                                </div>
                                            </div>
                                        </a>
                                </div>
                            </div>

                            <div class="col-md-6 col-xl-4 p-b-30 m-lr-auto">
                                <div class="block1 wrap-pic-w">
                                    <img src={Cat2} alt="IMG-BANNER"/>

                                        <a href="/store/home-appliances" class="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                                            <div class="block1-txt-child1 flex-col-l">
								<span class="block1-name ltext-102 trans-04 p-b-8">
									Washing Mechine
								</span>

                                                <span class="block1-info stext-102 trans-04">
									Spring 2020
								</span>
                                            </div>

                                            <div class="block1-txt-child2 p-b-4 trans-05">
                                                <div class="block1-link stext-101 cl0 trans-09">
                                                    Shop Now
                                                </div>
                                            </div>
                                        </a>
                                </div>
                            </div>

                            <div class="col-md-6 col-xl-4 p-b-30 m-lr-auto">
                                <div class="block1 wrap-pic-w">
                                    <img src={Cat3} alt="IMG-BANNER"/>

                                        <a href="/store/home-appliances" class="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                                            <div class="block1-txt-child1 flex-col-l">
								<span class="block1-name ltext-102 trans-04 p-b-8">
									Home Accessories
								</span>

                                                <span class="block1-info stext-102 trans-04">
									New Trend
								</span>
                                            </div>

                                            <div class="block1-txt-child2 p-b-4 trans-05">
                                                <div class="block1-link stext-101 cl0 trans-09">
                                                    Shop Now
                                                </div>
                                            </div>
                                        </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Category;
