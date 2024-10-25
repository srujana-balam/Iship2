import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Login(){
    return(
        <>
        <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Sign Up">
            <section className="track-area pt-80 pb-40">
            <div className="col-lg-6 col-sm-12">
                                <div className="tptrack__product mb-40">
                                    <div className="tptrack__thumb">
                                        <img src="sign-up-image.jpg" alt="" />
                                    </div>
                                    <div className="tptrack__content grey-bg-3">
                                        <div className="tptrack__item d-flex mb-20">
                                            <div className="tptrack__item-icon">
                                                <img src="/assets/img/icon/sign-up.png" alt="" />
                                            </div>
                                            <div className="tptrack__item-content">
                                                <h4 className="tptrack__item-title">Sign Up</h4>
                                                <p>Welcome to Home Aura</p>
                                                <p>Create your account to start designing your eco-friendly space!</p>
                                            </div>
                                        </div>
                                        <div className="tptrack__id mb-10">

                                            <form action="#">
                                                {/* <span><i className="fal fa-user" /></span> */}
                                                <input type="text" placeholder="Username" />
                                            </form>
                                        </div>
                                        <div className="tptrack__id mb-10">

                                            <form action="#">
                                                {/* <span><i className="fal fa-envelope" /></span> */}
                                                <input type="email" placeholder="Email address" />
                                            </form>
                                        </div>
                                        <div className="tptrack__id mb-10">

                                            <form action="#">
                                                {/* <span><i className="fa-solid fa-phone-flip"></i></span> */}
                                                <input type="number" placeholder="Phone Number" />
                                            </form>
                                        </div>
                                        <div className="tptrack__id mb-10">

                                            <form action="#">
                                                {/* <span><i className="fa-solid fa-phone-flip fa-rotate-90"></i></span> */}
                                                <input type="text" placeholder="Address" />
                                            </form>
                                        </div>

                                        <div className="tptrack__email mb-10">
                                            <form action="#">
                                                {/* <span><i className="fal fa-key" /></span> */}
                                                <input type="text" placeholder="Password" />
                                            </form>
                                        </div>
                                        <div className="tptrack__id mb-10">

                                            <form action="#">
                                                {/* <span><i className="fa-solid fa-phone-flip fa-rotate-90"></i></span> */}
                                                <input type="organisation" placeholder="Organisation" />
                                            </form>
                                        </div>
                                        <div className="tpsign__account">
                                            <Link href="/Login">Already Have Account?</Link>
                                        </div>
                                        <div className="tptrack__btn">
                                            <button className="tptrack__submition tpsign__reg">Register Now<i className="fal fa-long-arrow-right" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                </section>
        </Layout>
        </>
    )
}