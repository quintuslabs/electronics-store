import React, {Component, useState} from 'react';
import {Tab, Tabs} from "react-bootstrap";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";

function ProductDetails(props) {
    const [key, setKey] = useState('description');
    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}>
            <Tab eventKey="description" title="Description">
               <div className="row mt-2">
                <div className="how-pos2 p-lr-15-md">
                    <p className="stext-102 cl6">
                        Aenean sit amet gravida nisi. Nam fermentum est felis, quis feugiat nunc
                        fringilla sit amet. Ut in blandit ipsum. Quisque luctus dui at ante
                        aliquet, in hendrerit lectus interdum. Morbi elementum sapien rhoncus
                        pretium maximus. Nulla lectus enim, cursus et elementum sed, sodales
                        vitae eros. Ut ex quam, porta consequat interdum in, faucibus eu velit.
                        Quisque rhoncus ex ac libero varius molestie. Aenean tempor sit amet
                        orci nec iaculis. Cras sit amet nulla libero. Curabitur dignissim, nunc
                        nec laoreet consequat, purus nunc porta lacus, vel efficitur tellus
                        augue in ipsum. Cras in arcu sed metus rutrum iaculis. Nulla non tempor
                        erat. Duis in egestas nunc.
                    </p>
                </div>
               </div>
            </Tab>
            <Tab eventKey="additional-information" title="Additional information">
                <div className="row mt-2">
                    <div className="col-sm-10 col-md-8 col-lg-6 m-lr-auto">
                        <ul className="p-lr-28 p-lr-15-sm">
                            <li className="flex-w flex-t p-b-7">
											<span className="stext-102 cl3 size-205">
												Weight
											</span>

                                <span className="stext-102 cl6 size-206">
												0.79 kg
											</span>
                            </li>

                            <li className="flex-w flex-t p-b-7">
											<span className="stext-102 cl3 size-205">
												Dimensions
											</span>

                                <span className="stext-102 cl6 size-206">
												110 x 33 x 100 cm
											</span>
                            </li>

                            <li className="flex-w flex-t p-b-7">
											<span className="stext-102 cl3 size-205">
												Materials
											</span>

                                <span className="stext-102 cl6 size-206">
												60% cotton
											</span>
                            </li>

                            <li className="flex-w flex-t p-b-7">
											<span className="stext-102 cl3 size-205">
												Color
											</span>

                                <span className="stext-102 cl6 size-206">
												Black, Blue, Grey, Green, Red, White
											</span>
                            </li>

                            <li className="flex-w flex-t p-b-7">
											<span className="stext-102 cl3 size-205">
												Size
											</span>

                                <span className="stext-102 cl6 size-206">
												XL, L, M, S
											</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Tab>
            <Tab eventKey="reviews" title="Reviews">
                <div className="row mt-2">
                    <div className="col-sm-10 col-md-8 col-lg-6 m-lr-auto">
                        <div className="p-b-30 m-lr-15-sm">
                            <div className="flex-w flex-t p-b-68">
                                <div
                                    className="wrap-pic-s size-109 bor0 of-hidden m-r-18 m-t-6">
                                    <img src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png" alt="AVATAR"/>
                                </div>

                                <div className="size-207">
                                    <div className="flex-w flex-sb-m p-b-17">
													<span className="mtext-107 cl2 p-r-20">
														Ariana Grande
													</span>

                                        <span className="fs-18 cl11">
														<AiFillStar/>
														<AiFillStar/>
														<AiFillStar/>
														<AiFillStar/>
														<AiOutlineStar/>

													</span>
                                    </div>

                                    <p className="stext-102 cl6">
                                        Quod autem in homine praestantissimum atque optimum est,
                                        id deseruit. Apud ceteros autem philosophos
                                    </p>
                                    <hr/>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </Tab>
        </Tabs>
    );

}

export default ProductDetails;
