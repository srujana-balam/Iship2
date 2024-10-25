"use client"
import React, { useState } from "react";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import axios from "axios";
export default function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [address, setAddress] = useState('');
    const [organisation, setOrganisation] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState('');
    const [passwordMessage, setPasswordMessage] = useState('');

    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

    const checkPasswordStrength = (password) => {
        if (password.length < 6) {
            setPasswordStrength('weak');
            setPasswordMessage('Password is too weak');
        } else if (password.length < 10) {
            setPasswordStrength('medium');
            setPasswordMessage('Password is moderately strong');
        } else {
            setPasswordStrength('strong');
            setPasswordMessage('Password is strong');
        }
    };
    const submit = (e) => {
        e.preventDefault();
        
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        axios.post("http://localhost:1000/api/signup", {
            username: username,
            email: email,
            phonenumber: phonenumber,
            address: address,
            password: password,
            organisation: organisation
        })
        
        .then(res => {
            if (res.data.message === "User Registered Successfully") {
                window.location.href="/";
            } else if (res.data.message === "Already Exists") {
                alert("User already exists");
            }
        })
        .catch(err => {
            alert("Invalid details");
            console.log(err);
        });
    };
    

    return (
        <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Sign Up">
            <section className="track-area pt-80 pb-40">
                <div className="container">
                    <div className="row justify-content-center">
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
                                            <p>Create your account to start designing your eco-friendly space!</p>
                                        </div>
                                    </div>
                                    <form onSubmit={submit}>
                                        <div className="tptrack__id mb-10">
                                            <input
                                                type="text"
                                                placeholder="Username"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="tptrack__id mb-10">
                                            <input
                                                type="email"
                                                placeholder="Email address"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="tptrack__id mb-10">
                                            <input
                                                type="number"
                                                placeholder="Phone Number"
                                                value={phonenumber}
                                                onChange={(e) => setPhonenumber(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="tptrack__id mb-10">
                                            <input
                                                type="text"
                                                placeholder="Address"
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="tptrack__id mb-10">
                                            <input
                                                type="text"
                                                placeholder="Organisation (if applicable)"
                                                value={organisation}
                                                onChange={(e) => setOrganisation(e.target.value)}
                                            />
                                        </div>
                                        <div className="tptrack__email mb-10 password-group">
                                            <input
                                                type={showPassword ? 'text' : 'password'}
                                                placeholder="Password"
                                                value={password}
                                                onChange={(e) => {
                                                    setPassword(e.target.value);
                                                    checkPasswordStrength(e.target.value);
                                                }}
                                                required
                                            />
                                            <span className="password-icon" onClick={togglePasswordVisibility}>
                                                
                                            </span>
                                            <p className={`password-message ${passwordStrength}`}>
                                                {passwordMessage}
                                            </p>
                                        </div>
                                        <div className="tptrack__id mb-10 password-group">
                                            <input
                                                type={showConfirmPassword ? 'text' : 'password'}
                                                placeholder="Confirm Password"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                required
                                            />
                                            <span className="password-icon" onClick={toggleConfirmPasswordVisibility}>
                                                
                                            </span>
                                        </div>
                                        <div className="tpsign__account">
                                            <Link href="/sign-in">Already Have Account?</Link>
                                        </div>
                                        <div className="tptrack__btn">
                                            <button type="submit" className="tptrack__submition tpsign__reg">
                                                Register Now<i className="fal fa-long-arrow-right" />
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
    );
}
