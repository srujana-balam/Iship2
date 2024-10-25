"use client"
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";

export default function Checkout() {
    // Form state variables
    const [formData, setFormData] = useState({
        country: "",
        firstname: "",
        lastname: "",
        caddress: "",
        town: "",
        state: "",
        postalcode: "",
        cemail: "",
        phone: ""
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:1000/api/check-api", formData);
            alert(response.data.message);
        } catch (error) {
            console.error("Error submitting order:", error);
            alert("Error saving address. Please try again later.");
        }
    };

    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Checkout">
                <div>
                    {/* coupon-area start */}
                    <section className="coupon-area pt-80 pb-30 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".2s">
                        <div className="container">
                            <div className="row">
                                {/* Add other sections here as needed */}
                            </div>
                        </div>
                    </section>
                    {/* checkout-area start */}
                    <section className="checkout-area pb-50 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".2s">
                        <div className="container">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="checkbox-form">
                                            <h3>Billing Details</h3>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="checkout-form-list">
                                                        <label>Country <span className="required">*</span></label>
                                                        <input type="text" name="country" value={formData.country} onChange={handleInputChange}></input>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="checkout-form-list">
                                                        <label>First Name <span className="required">*</span></label>
                                                        <input type="text" name="firstname" value={formData.firstname} onChange={handleInputChange} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="checkout-form-list">
                                                        <label>Last Name <span className="required">*</span></label>
                                                        <input type="text" name="lastname" value={formData.lastname} onChange={handleInputChange} />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="checkout-form-list">
                                                        <label>Address <span className="required">*</span></label>
                                                        <input type="text" name="caddress" placeholder="Street address" value={formData.caddress} onChange={handleInputChange} />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="checkout-form-list">
                                                        <label>Town / City <span className="required">*</span></label>
                                                        <input type="text" name="town" placeholder="Town / City" value={formData.town} onChange={handleInputChange} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="checkout-form-list">
                                                        <label>State / County <span className="required">*</span></label>
                                                        <input type="text" name="state" value={formData.state} onChange={handleInputChange} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="checkout-form-list">
                                                        <label>Postcode / Zip <span className="required">*</span></label>
                                                        <input type="text" name="postalcode" placeholder="Postcode / Zip" value={formData.postalcode} onChange={handleInputChange} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="checkout-form-list">
                                                        <label>Email Address <span className="required">*</span></label>
                                                        <input type="email" name="cemail" value={formData.cemail} onChange={handleInputChange} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="checkout-form-list">
                                                        <label>Phone <span className="required">*</span></label>
                                                        <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleInputChange} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        {/* Add your order summary or other content here */}
                                    </div>
                                    <div className="order-button-payment mt-20">
                                        <button type="submit" className="tp-btn tp-color-btn w-100 banner-animation">Place order</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    );
}
