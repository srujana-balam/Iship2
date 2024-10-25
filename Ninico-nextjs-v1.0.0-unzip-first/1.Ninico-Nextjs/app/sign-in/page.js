
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
    const handleRegisterClick = () => {
      setIsActive(true);
    };
  
    const handleLoginClick = () => {
      setIsActive(false);
    };
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
    const handleSignIn = (e) => {

        e.preventDefault();
        alert("Testing")
        const loginUrl = "http://localhost:1000/api/login";
        
        axios.post(loginUrl, { email, password })
          .then(res => {
            if (res.data.message === "Login successful") {
              window.location.href="/";
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
                <section className="track-area pt-80 pb-40">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-sm-12">
                                <div className="tptrack__product mb-40">
                                    <div className="tptrack__thumb">
                                        <img src="login-image.jpg" alt="" />
                                    </div>
                                    <div className="tptrack__content grey-bg-3">
                                        <div className="tptrack__item d-flex mb-20">
                                            <div className="tptrack__item-icon">
                                                <img src="/assets/img/icon/lock.png" alt="" />
                                            </div>
                                            <div className="tptrack__item-content">
                                                <h4 className="tptrack__item-title">Login Here</h4>
                                                <p>Welcome Back to Home Aura</p>

                                                <p>Log in to access your personalized eco-friendly home decor experience.</p>
                                            </div>
                                        </div>
                                        <div className="tptrack__id mb-10">
                                            <form action="#">
                                                <span><i className="fal fa-user" /></span>
                                                <input type="email" placeholder="Username / email address" required onChange={(e) =>setEmail(e.target.value)}/>
                                            </form>
                                        </div>
                                        <div className="tptrack__email mb-10">
                                            <form action="#">
                                                <span><i className="fal fa-key" /></span>
                                                <input type={showPassword ? 'text' : 'password'} placeholder="Password" required onChange={(e)=>setPassword(e.target.value)}/>
                                            </form>
                                        </div>
                                        <div className="tpsign__remember d-flex align-items-center justify-content-between mb-15">
                                            <div className="form-check">
                                                <Link href="/Login">Don't have an account</Link>
                                            </div>
                                            <div className="tpsign__pass">
                                                <Link href="#">Forget Password</Link>
                                            </div>
                                        </div>
                                        <div className="tptrack__btn">
                                            <button type="submit" className="tptrack__submition" onSubmit={handleSignIn}>Login Now<i className="fal fa-long-arrow-right" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}