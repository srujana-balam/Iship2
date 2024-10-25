
"use client"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import React from "react"
import { useState } from "react"
import axios from "axios"
export default function SignIn() {
    const [isActive, setIsActive] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = (e) => {
        e.preventDefault();
        const loginUrl = "http://localhost:1000/api/login";

        axios.post(loginUrl, { email, password })
            .then(res => {
                if (res.data.message === "Login successful") {
                    window.location.href = "/";
                } else if (res.data.message === "Invalid credentials") {
                    alert("User has not signed up");
                }
            })
            .catch(err => {
                alert("Wrong Details");
                console.log(err);
            });
    };

    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Sign In">
            <style jsx>{`
                .track-area {
                    padding: 80px 0 40px;
                    background-color: #f8f9fa;
                }
                .tptrack__product {
                    background-color: #ffffff;
                    border-radius: 8px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                }
                .tptrack__thumb img {
                    width: 100%;
                    height: auto;
                }
                .tptrack__content {
                    padding: 30px;
                }
                .tptrack__item {
                    display: flex;
                    align-items: center;
                    margin-bottom: 20px;
                }
                .tptrack__item-icon {
                    margin-right: 15px;
                }
                .tptrack__item-icon img {
                    width: 40px;
                    height: 40px;
                }
                .tptrack__item-title {
                    font-size: 24px;
                    margin-bottom: 5px;
                }
                .tptrack__id, .tptrack__email {
                    margin-bottom: 15px;
                    position: relative;
                }
                .tptrack__id span, .tptrack__email span {
                    position: absolute;
                    left: 10px;
                    top: 50%;
                    transform: translateY(-50%);
                }
                input {
                    width: 100%;
                    padding: 10px 15px 10px 35px;
                    border: 1px solid #e0e0e0;
                    border-radius: 4px;
                    font-size: 16px;
                }
                .tpsign__remember {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 15px;
                }
                .tptrack__btn button {
                    width: 100%;
                    padding: 12px;
                    background-color: #4CAF50;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    font-size: 18px;
                    cursor: pointer;
                    transition: background-color 0.3s;
                }
                .tptrack__btn button:hover {
                    background-color: #45a049;
                }
            `}</style>
            <section className="track-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-sm-12">
                            <div className="tptrack__product mb-40">
                                <div className="tptrack__thumb">
                                    <img src="login-image.jpg" alt="" />
                                </div>
                                <div className="tptrack__content">
                                    <div className="tptrack__item">
                                        <div className="tptrack__item-icon">
                                            <img src="/assets/img/icon/lock.png" alt="" />
                                        </div>
                                        <div className="tptrack__item-content">
                                            <h4 className="tptrack__item-title">Login Here</h4>
                                            <p>Welcome Back to Home Aura</p>
                                            <p>Log in to access your personalized eco-friendly home decor experience.</p>
                                        </div>
                                    </div>
                                    <form onSubmit={handleSignIn}>
                                        <div className="tptrack__id">
                                            <span><i className="fal fa-user" /></span>
                                            <input
                                                type="email"
                                                placeholder="Username / email address"
                                                required
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="tptrack__email">
                                            <span><i className="fal fa-key" /></span>
                                            <input
                                                type={showPassword ? 'text' : 'password'}
                                                placeholder="Password"
                                                required
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                        <div className="tpsign__remember">
                                            <div className="form-check">
                                                <Link href="/Login">Don't have an account</Link>
                                            </div>
                                            <div className="tpsign__pass">
                                                <Link href="/forgot-password">Forget Password</Link>
                                            </div>
                                        </div>
                                        <div className="tptrack__btn">
                                            <button type="submit" className="tptrack__submition">
                                                Login Now <i className="fal fa-long-arrow-right" />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
        </>
    );
}

