import React, {Component} from 'react';
import classNames from "classnames";
import {FiShoppingBag, FiSearch, FiHeart, FiMenu, FiX, FiChevronDown} from "react-icons/fi";
import {IconContext} from "react-icons";
import { withTranslation } from 'react-i18next';
import i18next from 'i18next';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state={
            showSearch:false,
            showMobileMenu:"none",
            isMenuActive:false
        }
    }
    handleClick(lang) {
        i18next.changeLanguage(lang)
    }
    render() {
        const { t } = this.props;
        return (
            <header>
                <div className="container-menu-desktop">
                    <div className="top-bar">
                        <div className="content-topbar flex-sb-m h-full container">
                            <div className="left-top-bar">
                                Free shipping for standard order over $100
                            </div>

                            <div className="right-top-bar flex-w h-full">
                                <a href="#" className="flex-c-m trans-04 p-lr-25">
                                    Help & FAQs
                                </a>

                                <a href="#" className="flex-c-m trans-04 p-lr-25">
                                    My Account
                                </a>

                                <a href="#" className="flex-c-m trans-04 p-lr-25" onClick={() => this.handleClick('en')}>
                                    English
                                </a>
                                <a href="#" className="flex-c-m trans-04 p-lr-25" onClick={() => this.handleClick('or')}>
                                    Oriya
                                </a>

                            </div>
                        </div>
                    </div>

                    <div className={classNames("wrap-menu-desktop", {"active": this.props.active})}>
                        <nav className="limiter-menu-desktop container">
                            <a href="/" className="logo">
                                Krishled
                                {/*<img src="images/icons/logo-01.png" alt="IMG-LOGO"/>*/}
                            </a>


                            <div className="menu-desktop">
                                <ul className="main-menu">
                                    <li>
                                        <a href="/">{t('Menu.1')}</a>

                                    </li>

                                    <li className="has-submenu">
                                        <a href="product.html">{t('Menu.2')} <FiChevronDown/></a>

                                        <ul className="sub-menu mega-dropdown">
                                            <li className="row w-100">

                                                <div className="col-sm-6">
                                                    <li className="category-title">Electronics</li>
                                                    <li><a href="/category/electronics/telivision">Television</a></li>
                                                    <li><a href="/category/electronics/washing-mechine">Washing Machine</a></li>
                                                    <li><a href="/category/electronics/air-conditioner">Air Conditioners</a></li>
                                                    <li><a href="/category/electronics/smart-ultra">Smart & Ultra HD</a></li>
                                                </div>
                                                <div className="col-sm-6">
                                                    <li className="category-title">Accessories</li>
                                                    <li><a href="/category/accessories/kitchen-appliance">Kitchen Appliance</a></li>
                                                    <li><a href="/category/accessories/small-home-appliances">Small Home Appliances</a></li>
                                                    <li><a href="/category/accessories/healthy-living-appliances">Healthy Living Appliances</a></li>
                                                </div>


                                            </li>
                                        </ul>
                                    </li>

                                    <li className="label1" data-label1="hot">
                                        <a href="shoping-cart.html">{t('Menu.3')}</a>
                                    </li>

                                    <li>
                                        <a href="blog.html">{t('Menu.4')}</a>
                                    </li>

                                    <li>
                                        <a href="about.html">{t('Menu.5')}</a>
                                    </li>

                                    <li>
                                        <a href="contact.html">{t('Menu.6')}</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="wrap-icon-header flex-w flex-r-m">
                                <div onClick={()=>{this.setState({showSearch:true})}}
                                    className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                                    <FiSearch/>
                                </div>

                                <a href="/cart/checkout"
                                    className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart"
                                    data-notify="2">
                                    <FiShoppingBag/>
                                </a>

                                <a href="#"
                                   className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
                                   data-notify="0">
                                    <FiHeart/>
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="wrap-header-mobile">
                    <div className="logo-mobile">
                        <a href="index.html"><img src="images/icons/logo-01.png" alt="IMG-LOGO"/></a>
                    </div>

                    <div className="wrap-icon-header flex-w flex-r-m m-r-15">
                        <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
                            <FiSearch/>
                        </div>

                        <div
                            className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart"
                            data-notify="2">
                            <FiShoppingBag/>
                        </div>

                        <a href="#"
                           className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti"
                           data-notify="0">
                            <FiShoppingBag/>
                        </a>
                    </div>

                    <div className={classNames("btn-show-menu-mobile hamburger hamburger--squeeze",{"is-active":this.state.isMenuActive})} onClick={()=>{this.setState({showMobileMenu:"block",isMenuActive:true})}}>
				<span className="hamburger-box">
                    <IconContext.Provider value={{size: "40px"}}>
					<FiMenu/>
                    </IconContext.Provider>
				</span>
                    </div>
                </div>


                <div className="menu-mobile" style={{display:this.state.showMobileMenu}}>
                    <ul className="topbar-mobile">
                        <li>
                            <div className="left-top-bar">
                                Free shipping for standard order over $100
                            </div>
                        </li>

                        <li>
                            <div className="right-top-bar flex-w h-full">
                                <a href="#" className="flex-c-m p-lr-10 trans-04">
                                    Help & FAQs
                                </a>

                                <a href="#" className="flex-c-m p-lr-10 trans-04">
                                    My Account
                                </a>

                                <a href="#" className="flex-c-m p-lr-10 trans-04">
                                    EN
                                </a>

                                <a href="#" className="flex-c-m p-lr-10 trans-04">
                                    USD
                                </a>
                            </div>
                        </li>
                    </ul>

                    <ul className="main-menu-m">
                        <li>
                            <a href="index.html">Home</a>
                            <ul className="sub-menu-m">
                                <li><a href="index.html">Homepage 1</a></li>
                                <li><a href="home-02.html">Homepage 2</a></li>
                                <li><a href="home-03.html">Homepage 3</a></li>
                            </ul>
                            <span className="arrow-main-menu-m">
						<i className="fa fa-angle-right" aria-hidden="true"></i>
					</span>
                        </li>

                        <li>
                            <a href="product.html">Shop</a>
                        </li>

                        <li>
                            <a href="shoping-cart.html" className="label1 rs1" data-label1="hot">Features</a>
                        </li>

                        <li>
                            <a href="blog.html">Blog</a>
                        </li>

                        <li>
                            <a href="about.html">About</a>
                        </li>

                        <li>
                            <a href="contact.html">Contact</a>
                        </li>
                    </ul>
                </div>

                <div className={classNames("modal-search-header flex-c-m trans-04 js-hide-modal-search",{"show-modal-search":this.state.showSearch})}>
                    <div className="container-search-header">
                        <button className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search" onClick={()=>{this.setState({showSearch:false})}}>
                            <FiX/>
                        </button>

                        <form className="wrap-search-header flex-w p-l-15">
                            <button className="flex-c-m trans-04">
                                <FiSearch/>
                            </button>
                            <input className="plh3" type="text" name="search" placeholder="Search..."></input>
                        </form>
                    </div>
                </div>
            </header>

        );
    }
}

export default withTranslation()(NavBar);
