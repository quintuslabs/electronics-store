import React, {Component} from 'react';
import HomeBanner1 from "../../assets/images/home-01.jpg"
import HomeBanner2 from "../../assets/images/home-03.jpg"
import HomeBanner3 from "../../assets/images/home-04.jpg"
import HomeBanner4 from "../../assets/images/home-05.jpg"

class FlatBanner extends Component {
    render() {
        return (
            <div>
            <section className="flat-row flat-banner-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="banner-box one-half">
                                <div className="inner-box">
                                    <a href="#" title="">
                                        <img src={HomeBanner1} alt=""/>
                                    </a>
                                </div>
                                <div className="inner-box">
                                    <a href="#" title="">
                                        <img src={HomeBanner4} alt=""/>
                                    </a>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="banner-box">
                                <div className="inner-box">
                                    <a href="#" title="">
                                        <img src={HomeBanner3} alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="banner-box">
                                <div className="inner-box">
                                    <a href="#" title="">
                                        <img src={HomeBanner2} alt=""/>
                                    </a>
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

export default FlatBanner;
