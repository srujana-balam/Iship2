"use client"

import React, { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import axios from "axios"
import Layout from "@/components/layout/Layout"

export default function ForgotPassword() {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:1000/api/forgot-password', { email })
            setMessage(response.data.message)
            
            if (response.data.token) {
                router.push(`/reset-password/${response.data.token}`)
            }
        } catch (error) {
            setMessage(error.response?.data?.message || 'An error occurred. Please try again.')
        }
    }

    return (
        <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Forgot Password">
            <style jsx>{`
                .forgot-password-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    background-color: #f8f9fa;
                }
                .forgot-password-form {
                    background-color: white;
                    padding: 2rem;
                    border-radius: 8px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    width: 100%;
                    max-width: 400px;
                }
                .forgot-password-heading {
                    text-align: center;
                    margin-bottom: 1.5rem;
                }
                .form-group {
                    margin-bottom: 1rem;
                }
                label {
                    display: block;
                    margin-bottom: 0.5rem;
                }
                input {
                    width: 100%;
                    padding: 0.5rem;
                    border: 1px solid #e0e0e0;
                    border-radius: 4px;
                }
                .reset-btn {
                    width: 100%;
                    padding: 0.75rem;
                    background-color: #4CAF50;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: background-color 0.3s;
                }
                .reset-btn:hover {
                    background-color: #45a049;
                }
                .message {
                    text-align: center;
                    margin-top: 1rem;
                }
                .back-link {
                    display: block;
                    text-align: center;
                    margin-top: 1rem;
                }
            `}</style>
            <div className="forgot-password-container">
                <div className="forgot-password-form">
                    <h2 className="forgot-password-heading">Forgot Password</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <button type="submit" className="reset-btn">Reset Password</button>
                    </form>
                    {message && <p className="message">{message}</p>}
                    <Link href="/" className="back-link">Back to Login</Link>
                </div>
            </div>
        </Layout>
    )
}