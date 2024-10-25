"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";

export default function Contact() {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [subject, setSubject] = useState("");
    const [Emessage, setMessage] = useState("");
    const [responseMessage, setResponseMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:1000/api/contact-api", {
                fullname,
                email,
                phonenumber,
                subject,
                Emessage,
            });
            setResponseMessage(res.data.message); 
            setFullname("");
            setEmail("");
            setPhonenumber("");
            setSubject("");
            setMessage("");
        } catch (error) {
            setResponseMessage("Failed to send your message. Please try again.");
        }
    };

    return (
        <>
            <Layout headerStyle={3} footerStyle={1}>
                <div>
                    <section className="contact-area pt-80 pb-80">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-12">
                                    <div className="tpcontact__right mb-40">
                                        <div className="tpcontact__shop mb-30">
                                            <h4 className="tpshop__title mb-25">Get In Touch</h4>
                                            <div className="tpshop__info">
                                                <ul>
                                                    <li><i className="fal fa-map-marker-alt" /> <Link href="#">2-2-24 Samalkot, Kakinada, Andhra Pradesh</Link></li>
                                                    <li>
                                                        <i className="fal fa-phone" />
                                                        <Link href="/tel:0123456789">+91 8945223234</Link>
                                                        <Link href="/tel:0123456789">6 - 146 - 389 - 5748</Link>
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-clock" />
                                                        <span>Store Hours:</span>
                                                        <span>10 am - 10 pm IST, 7 days a week</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="tpcontact__support">
                                            <Link target="_blank" href="https://maps.app.goo.gl/vK7RbsLbH7crJgwk7">Get Direction <i className="fal fa-map-marker-alt" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-12">
                                    <div className="tpcontact__form">
                                        <div className="tpcontact__info mb-35">
                                            <h4 className="tpcontact__title">Contact Support</h4>
                                        </div>
                                        <form onSubmit={handleSubmit} id="contact-form">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="tpcontact__input mb-20">
                                                        <input
                                                            name="fullname"
                                                            type="text"
                                                            placeholder="Full name"
                                                            value={fullname}
                                                            onChange={(e) => setFullname(e.target.value)}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="tpcontact__input mb-20">
                                                        <input
                                                            name="email"
                                                            type="email"
                                                            placeholder="Email address"
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="tpcontact__input mb-20">
                                                        <input
                                                            name="phonenumber"
                                                            type="text"
                                                            placeholder="Phone number"
                                                            value={phonenumber}
                                                            onChange={(e) => setPhonenumber(e.target.value)}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="tpcontact__input mb-20">
                                                        <input
                                                            name="subject"
                                                            type="text"
                                                            placeholder="Subject"
                                                            value={subject}
                                                            onChange={(e) => setSubject(e.target.value)}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="tpcontact__input mb-30">
                                                        <textarea
                                                            name="message"
                                                            placeholder="Enter message"
                                                            value={Emessage}
                                                            onChange={(e) => setMessage(e.target.value)}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tpcontact__submit">
                                                <button type="submit" className="tp-btn tp-color-btn tp-wish-cart">
                                                    Get A Quote <i className="fal fa-long-arrow-right" />
                                                </button>
                                            </div>
                                        </form>
                                        {responseMessage && <p className="ajax-response mt-30">{responseMessage}</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="map-area">
                        <div className="tpshop__location-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30515.456172300568!2d82.16719814999998!3d17.051507900000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3780d1290cc30b%3A0x1ce9f136df2886ec!2sSamarlakota%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1729759921007!5m2!1sen!2sin"
                                width={600}
                                height={450}
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
