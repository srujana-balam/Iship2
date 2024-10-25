"use client"

import React, { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import axios from "axios"
import Layout from "@/components/layout/Layout"

export default function SignUp() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phonenumber, setPhonenumber] = useState('')
    const [address, setAddress] = useState('')
    const [organisation, setOrganisation] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [passwordStrength, setPasswordStrength] = useState('')
    const [passwordMessage, setPasswordMessage] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const router = useRouter()

    const togglePasswordVisibility = () => setShowPassword(!showPassword)
    const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword)

    const checkPasswordStrength = (password) => {
        if (password.length < 6) {
            setPasswordStrength('weak')
            setPasswordMessage('Password is too weak')
        } else if (password.length < 10) {
            setPasswordStrength('medium')
            setPasswordMessage('Password is moderately strong')
        } else {
            setPasswordStrength('strong')
            setPasswordMessage('Password is strong')
        }
    }

    const validateInputs = () => {
        if (!username || !email || !phonenumber || !address || !password || !confirmPassword) {
            setError("All fields are required")
            return false
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match!")
            return false
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters long")
            return false
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Please enter a valid email address")
            return false
        }
        return true
    }

    const submit = async (e) => {
        e.preventDefault()
        setError('')
        
        if (!validateInputs()) {
            return
        }

        setIsLoading(true)

        try {
            const response = await axios.post("http://localhost:1000/api/signup", {
                username,
                email,
                phonenumber,
                address,
                password,
                organisation
            })
            
            if (response.data.success || response.data.message === "User Registered Successfully") {
                
                setUsername('')
                setEmail('')
                setPhonenumber('')
                setAddress('')
                setOrganisation('')
                setPassword('')
                setConfirmPassword('')
                
                
                alert("Registration successful! Redirecting to login...")
                
                
                router.push("/sign-in")
            } else {
                setError(response.data.message || "Registration failed. Please try again.")
            }
        } catch (err) {
            console.error("Signup error:", err)
            if (err.response?.data?.message) {
                setError(err.response.data.message)
            } else if (err.response?.status === 409) {
                setError("User already exists with this email")
            } else {
                setError("Registration failed. Please check your details and try again.")
            }
        } finally {
            setIsLoading(false)
        }
    }
    

    return (
        <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Sign Up">
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
                }
                input {
                    width: 100%;
                    padding: 10px 15px;
                    border: 1px solid #e0e0e0;
                    border-radius: 4px;
                    font-size: 16px;
                }
                .password-group {
                    position: relative;
                }
                .password-icon {
                    position: absolute;
                    right: 10px;
                    top: 50%;
                    transform: translateY(-50%);
                    cursor: pointer;
                }
                .password-message {
                    font-size: 12px;
                    margin-top: 5px;
                }
                .tpsign__account {
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
                                    <img src="sign-up-image.jpg" alt="" />
                                </div>
                                <div className="tptrack__content">
                                    <div className="tptrack__item">
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
