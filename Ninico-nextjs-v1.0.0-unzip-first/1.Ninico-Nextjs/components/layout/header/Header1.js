'use client'
import CartShow from "@/components/elements/CartShow"
import WishListShow from "@/components/elements/WishListShow"
import Link from "next/link"
import { useState } from "react"
import HeaderMobSticky from "../HeaderMobSticky"
import HeaderSticky from "../HeaderSticky"
import HeaderTabSticky from "../HeaderTabSticky"


export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isCartSidebar, handleCartSidebar }) {
    const [isToggled, setToggled] = useState(true)
    const handleToggle = () => setToggled(!isToggled)
    return (
        <>
            <header>
                <div className="header-top space-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* <div className="header-welcome-text text-start ">
                                    <span>Welcome to our international shop! Enjoy free shipping on orders $100  up.</span>
                                    <Link href="/shop">Shop Now <i className="fal fa-long-arrow-right" /> </Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="logo-area mt-30 d-none d-xl-block">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-3">
                                <div className="logo">
                                    <Link href="/"><img src="http://localhost:1000/MainLogo.jpg" alt="logo" className="mainlogo"/></Link>
                                </div>
                            </div>
                            <div className="col-xl-10 col-lg-9">
                                <div className="header-meta-info d-flex align-items-center justify-content-between">
                                    <div className="header-search-bar">
                                        <form action="#">
                                            <div className="search-info p-relative">
                                                <button className="header-search-icon"><i className="fal fa-search" /></button>
                                                <input type="text" placeholder="Search products..." />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="header-meta header-brand d-flex align-items-center">
                                        <div className="header-meta__social d-flex align-items-center ml-25">
                                            <button className="header-cart p-relative tp-cart-toggle" onClick={handleCartSidebar}>
                                                <i className="fal fa-shopping-cart" />
                                                <CartShow />
                                            </button>
                                            <Link href="/sign-in"><i className="fal fa-user" /></Link>
                                            <Link href="/wishlist" className="header-cart p-relative tp-cart-toggle">
                                                <i className="fal fa-heart" />
                                                <WishListShow />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-menu-area mt-20 d-none d-xl-block">
                    <div className="for-megamenu p-relative">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-2 col-lg-3">
                                    <div className="cat-menu__category p-relative">
                                        <a className="tp-cat-toggle" onClick={handleToggle} role="button"><i className="fal fa-bars" />Categories</a>
                                        <div className="category-menu category-menu-off" style={{ display: `${isToggled ? "block" : "none"}` }}>
                                            <ul className="cat-menu__list">
                                                <li><Link href="/shop"><i className="fal fa-user" />Plants</Link></li>
                                                <li className="menu-item-has-children"><Link href="/shop"><i className="fal fa-flower-tulip" />Furniture</Link>
                                                    <ul className="submenu">
                                                        <li><Link href="/shop-2">Chairs</Link></li>
                                                        <li><Link href="/shop-2">Tables</Link></li>
                                                        <li><Link href="/shop">Sofa Sets</Link></li>
                                                        <li><Link href="/shop">Beds</Link></li>
                                                        <li><Link href="/shop">Stoles</Link></li>
                                                        <li><Link href="/shop">Teapoy</Link></li>
                                                        <li><Link href="/shop">Furniture</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link href="/shop"><i className="fal fa-shoe-prints" />Wall Hangings</Link></li>
                                                <li><Link href="/shop"><i className="fal fa-smile" />Lamps</Link></li>
                                                <li><Link href="/shop"><i className="fal fa-futbol" />jweleryBoxes</Link></li>
                                                <li><Link href="/shop"><i className="fal fa-crown" />Furniture</Link></li>
                                                <li><Link href="/shop"><i className="fal fa-gift" />Pooja Mandhir</Link></li>
                                                <li><Link href="/shop"><i className="fal fa-gift" />Kitchen Wear</Link></li>
                                                
                                            </ul>
                                            {/* <div className="daily-offer">
                                                <ul>
                                                    <li><Link href="/shop">Value of the Day</Link></li>
                                                    <li><Link href="/shop">Top 100 Offers</Link></li>
                                                    <li><Link href="/shop">New Arrivals</Link></li>
                                                </ul>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-6">
                                    <div className="main-menu">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li className="has-dropdown">
                                                    <Link href="/">Home</Link>
                                                    <ul className="submenu">
                                                        <li><Link href="/">Home</Link></li>
                                                        <li><Link href="/index-2">Lamps Home</Link></li>
                                                        <li><Link href="/index-3">Furniture Home</Link></li>
                                                          
                                                    </ul>
                                                </li>
                                                <li className="has-dropdown">
                                                    <Link href="/shop">Shop</Link>
                                                    <ul className="submenu">
                                                        <li><Link href="/shop">Shop</Link></li>
                                                        {/* <li><Link href="/cart">Cart</Link></li> */}
                                                        {/* <li><Link href="/sign-in">Sign In</Link></li> */}
                                                        {/* <li><Link href="/checkout">Checkout</Link></li> */}
                                                        {/* <li><Link href="/wishlist">Wishlist</Link></li> */}
                                                    </ul>
                                                </li>
                                                {/* <li className="has-dropdown has-megamenu">
                                                    <Link href="/about">Pages</Link>
                                                    <ul className="submenu mega-menu">
                                                        <li>
                                                            <a className="mega-menu-title">Page layout</a>
                                                            <ul>
                                                                <li><Link href="/shop">Shop filters v1</Link></li>
                                                                <li><Link href="/shop-2">Shop filters v2</Link></li>
                                                                <li><Link href="/shop-details">Shop sidebar</Link></li>
                                                                <li><Link href="/shop-details-2">Shop Right sidebar</Link></li>
                                                                <li><Link href="/shop-location">Shop List view</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="mega-menu-title">Page layout</a>
                                                            <ul>
                                                                <li><Link href="/about">About</Link></li>
                                                                <li><Link href="/cart">Cart</Link></li>
                                                                <li><Link href="/checkout">Checkout</Link></li>
                                                                <li><Link href="/sign-in">Sign In</Link></li>
                                                                <li><Link href="/sign-in">Log In</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="mega-menu-title">Page type</a>
                                                            <ul>
                                                                <li><Link href="/track">Product Track</Link></li>
                                                                <li><Link href="/wishlist">Wishlist</Link></li>
                                                                <li><Link href="/not-found">404 / Error</Link></li>
                                                                <li><Link href="/coming-soon">Coming Soon</Link></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li> */}
                                                <li className="has-dropdown">
                                                    <Link href="/">Customisation</Link>
                                                    {/* <ul className="submenu">
                                                        <li><Link href="/blog">Blog</Link></li>
                                                    </ul> */}
                                                </li>
                                                <li><Link href="/contact">Contact us</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3">
                                    <div className="menu-contact">
                                        <ul>
                                            <li>
                                                <div className="menu-contact__item">
                                                    <div className="menu-contact__icon">
                                                        {/* <i className="fal fa-phone" /> */}
                                                    </div>
                                                    {/* <div className="menu-contact__info">
                                                        <Link href="/tel:0123456">7842727933</Link>
                                                    </div> */}
                                                </div>
                                            </li>
                                            <li>
                                                <div className="menu-contact__item">
                                                    <div className="menu-contact__icon">
                                                        {/* <i className="fal fa-map-marker-alt" /> */}
                                                    </div>
                                                    {/* <div className="menu-contact__info">
                                                        <Link href="/shop-location">Find Store</Link>
                                                    </div> */}
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <HeaderSticky scroll={scroll} isCartSidebar={isCartSidebar} handleCartSidebar={handleCartSidebar} />
            <HeaderTabSticky scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isCartSidebar={isCartSidebar} handleCartSidebar={handleCartSidebar} />
            <HeaderMobSticky scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isCartSidebar={isCartSidebar} handleCartSidebar={handleCartSidebar} />
        </>
    )
}
