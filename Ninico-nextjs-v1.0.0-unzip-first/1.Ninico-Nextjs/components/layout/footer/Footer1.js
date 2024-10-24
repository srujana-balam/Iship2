import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer>
                <div className="footer-area theme-bg pt-65">
                    <div className="container">
                        <div className="main-footer pb-15 mb-30">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="footer-widget footer-col-1 mb-40">
                                        <div className="footer-logo mb-30">
                                            <Link href="/"><img src="MainLogo.jpg" alt="logo" className="mainlogo" /></Link>
                                        </div>
                                        <div className="footer-content">
                                            <p>offers sustainable and stylish home furnishings,
                                                 featuring natural items like plants and 
                                                eco-conscious furniture. We focus on reducing environmental impact
                                                 while enhancing the beauty of homes.</p>
                                                
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6">
                                    <div className="footer-widget footer-col-2 ml-30 mb-40">
                                        <h4 className="footer-widget__title mb-30">Home Aura</h4>
                                        <div className="footer-widget__links">
                                            <ul>
                                                <li><Link href="#">Home</Link></li>
                                                <li><Link href="#">Shop products</Link></li>
                                                <li><Link href="/track">Customization</Link></li>
                                                <li><Link href="/contact">Contacts</Link></li>
                                                {/* <li><Link href="#">Events</Link></li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6">
                                    <div className="footer-widget footer-col-3 mb-40">
                                        <h4 className="footer-widget__title mb-30">About Us</h4>
                                        <div className="footer-widget__links">
                                            <ul>
                                                <li><Link href="#">Meet Our Team</Link></li>
                                                <li><Link href="#">Our Responsibilities</Link></li>
                                                <li><Link href="#">Discount</Link></li>
                                                <li><Link href="#">Our Moto</Link></li>
                                                <li><Link href="#">Our Values</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6">
                                    <div className="footer-widget footer-col-4 mb-40">
                                        <h4 className="footer-widget__title mb-30">Products</h4>
                                        <div className="footer-widget__links">
                                            <ul>
                                                {/* <li><Link href="#"><i className="fab fa-facebook-f" />Facebook</Link></li>
                                                <li><Link href="#"><i className="fab fa-dribbble" />Dribbble</Link></li>
                                                <li><Link href="#"><i className="fab fa-twitter" />Twitter</Link></li>
                                                <li><Link href="#"><i className="fab fa-behance" />Behance</Link></li>
                                                <li><Link href="#"><i className="fab fa-youtube" />Youtube</Link></li> */}
                                                <li><a href="#">Plants</a></li>
            <li><a href="#">Furniture</a></li>
            <li><a href="#">Wall Decors</a></li>
            <li><a href="#">CookWare</a></li>
            <li><a href="#">Wooden Shelfs</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4">
                                    <div className="footer-widget footer-col-5 mb-40">
                                        <h4 className="footer-widget__title mb-30">Stay in Touch</h4>
                                        <p>Get on the list and get 10% off your first order!</p>
                                        <div className="footer-widget__newsletter">
                                            <form action="#">
                                                <input type="email" placeholder="Enter email address" />
                                                <button className="footer-widget__fw-news-btn tpsecondary-btn">Subscribe Now<i className="fal fa-long-arrow-right" /></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="footer-cta pb-20">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-xl-6 col-lg-4 col-md-4 col-sm-6">
                                    <div className="footer-cta__contact">
                                        <div className="footer-cta__icon">
                                            <i className="far fa-phone" />
                                        </div>
                                        <div className="footer-cta__text">
                                            <Link href="/tel:0123456">980. 029. 666. 99</Link>
                                            <span>Working 8:00 - 22:00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-8 col-md-8 col-sm-6">
                                    <div className="footer-cta__source">
                                        <div className="footer-cta__source-content">
                                            <h4 className="footer-cta__source-title">Download App on Mobile</h4>
                                            <p>15% discount on your first purchase</p>
                                        </div>
                                        <div className="footer-cta__source-thumb">
                                            <Link href="#"><img src="/assets/img/footer/f-google.jpg" alt="google" /></Link>
                                            <Link href="#"><img src="/assets/img/footer/f-app.jpg" alt="app" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    {/* <div className="footer-copyright footer-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-7 col-md-5 col-sm-12">
                                    <div className="footer-copyright__content">
                                        <span>Copyright {new Date().getFullYear()} <Link href="/">©Ninico</Link>. All rights reserved. Developed by
                                            <Link href="https://themeforest.net/user/alithemes/portfolio"> AliThemes</Link>.</span>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-5 col-md-7 col-sm-12">
                                    <div className="footer-copyright__brand">
                                        <img src="/assets/img/footer/f-brand-icon-01.png" alt="footer-brand" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </footer>

        </>
    )
}
