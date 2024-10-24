
import Link from "next/link"
import Countdown from "../elements/CountDown"

export default function DealProduct2() {
    const currentTime = new Date()
    return (
        <>
            <section className="dealproduct-area pb-65">
                <div className="container">
                    <div className="discount-product  p-relative green-bg-2 pt-70 pb-70">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="tpdealproduct">
                                    <div className="tpdealproduct__thumb p-relative text-center">
                                        <img src="Hemp2.jpg" alt="Hemp Plant" />
                                        <div className="tpdealproduct__offer">
                                            <h5 className="tpdealproduct__offer-price"><span>From</span>120/-</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="tpdealcontact pt-30">
                                    <div className="tpdealcontact__price mb-5">
                                        <span>120/-</span>
                                        <del>200/*</del>
                                    </div>
                                    <div className="tpdealcontact__text mb-35">
                                        <h4 className="tpdealcontact__title mb-10">Hemp Plant</h4>
                                        <p>Hemp is a versatile and sustainable plant that can grow up to 15 feet tall. It features distinct palmate leaves with 5-7 leaflets.
                                        It Requires less water and fewer pesticides compared to traditional crops and Improves soil health and prevents erosion.</p>
                                    </div>
                                    <div className="tpdealcontact__progress tphome3 mb-30">
                                        <div className="progress">
                                            <div className="progress-bar w-75" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                    <div className="tpdealcontact__count">
                                        <div className="tpdealcontact__countdown">
                                            <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                        </div>
                                        <i>Remains until the <br /> end of the offer</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
