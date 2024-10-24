
import Link from "next/link"

export default function Category() {
    return (
        <>
            <section className="category-area pt-70">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tpsection mb-40">
                                <h4 className="tpsection__title">Our<span> &nbsp; Commitments<img src="/assets/img/icon/title-shape-01.jpg" alt="" /></span></h4>
                            </div>
                        </div>
                    </div>
                    <div className="custom-row category-border pb-45 justify-content-xl-between">
                        <div className="tpcategory mb-40">
                            <div className="tpcategory__icon p-relative">
                                <img src="Sustainability.png" alt="" className="fn__svg" />
                                {/* <span>20</span> */}
                            </div>
                            <div className="tpcategory__content">
                                <h5 className="tpcategory__title">Sustainability</h5>
                            </div>
                        </div>
                        <div className="tpcategory mb-40">
                            <div className="tpcategory__icon">
                                <img src="Durablility.png" alt="" className="fn__svg" />
                                {/* <span>12</span> */}
                            </div>
                            <div className="tpcategory__content">
                                <h5 className="tpcategory__title">Durability</h5>
                            </div>
                        </div>
                        <div className="tpcategory mb-40">
                            <div className="tpcategory__icon">
                                <img src="Eco-friendly_Packing.png" alt="" className="fn__svg" />
                                {/* <span>03</span> */}
                            </div>
                            <div className="tpcategory__content">
                                <h5 className="tpcategory__title">Eco-friendly_Packing</h5>
                            </div>
                        </div>
                        <div className="tpcategory mb-40">
                            <div className="tpcategory__icon">
                                <img src="REcycle.png" alt="" className="fn__svg" />
                                {/* <span>09</span> */}
                            </div>
                            <div className="tpcategory__content">
                                <h5 className="tpcategory__title">Recycle</h5>
                            </div>
                        </div>
                        <div className="tpcategory mb-40">
                            <div className="tpcategory__icon">
                                <img src="Non-Toxic.png" alt="" className="fn__svg" />
                                {/* <span>10</span> */}
                            </div>
                            <div className="tpcategory__content">
                                <h5 className="tpcategory__title">Non-Toxic</h5>
                            </div>
                        </div>
                        <div className="tpcategory mb-40">
                            <div className="tpcategory__icon">
                                <img src="Waste_REduction.png" alt="" className="fn__svg" />
                                {/* <span>05</span> */}
                            </div>
                            <div className="tpcategory__content">
                                <h5 className="tpcategory__title">Waste Reduction</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
