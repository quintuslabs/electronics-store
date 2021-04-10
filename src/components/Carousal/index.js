import React, {Component} from 'react';
import Slider from "react-slick";
import { FiChevronRight,FiChevronLeft } from "react-icons/fi";
class Carousal extends Component {
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
            infinite: true,
            fade: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,

        };
        return (
            <section class="section-slide">
                <Slider  ref={c => (this.slider = c)}  {...settings}>

                    <div className="slider-image-container">
                        <img
                            src='https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/125372095/original/7c528e2a921c6cf9cca8cbb1e1bffa435cf28262/graphic-designer-banner-design.jpg'
                            className="w-100 img-fluid"/>
                    </div>


                    <div className="slider-image-container">
                        <img src='https://bizimages.withfloats.com/actual/5ae04aec3740d40c7498dc31.jpg'
                             className="w-100 img-fluid"/>
                    </div>

                    <div className="slider-image-container">
                        <img src='https://ak.picdn.net/shutterstock/videos/1036421099/thumb/4.jpg'
                             className="w-100 img-fluid"/>
                    </div>

                </Slider>
                <div className="slider-navigation">
                    <button className="button slider-previous" onClick={this.previous}>
                        <FiChevronLeft/>
                    </button>
                    <button className="button slider-next" onClick={this.next}>
                        <FiChevronRight/>
                    </button>
                </div>

            </section>
        );
    }
}

export default Carousal;
