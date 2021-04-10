import React, {Component} from 'react';

class BreadCrum extends Component {
    render() {
        return (
            <div>
                <div className="bg6 m-l--15 m-r--60">
                    <div className="container mb-3 m-t--50 pt-4 pb-4">
                        <div className="container">
                            <div className="bread-crumb flex-w p-r-15  p-lr-0-lg">
                                <a href="/" className="stext-109 cl8 hov-cl1 trans-04">
                                    Home
                                    <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
                                </a>

                                <a href="product.html" className="stext-109 cl8 hov-cl1 trans-04">
                                    telivision-store
                                    <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
                                </a>

                                <span className="stext-109 cl4">
			                         	Refrigerator
		                        	</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default BreadCrum;
