"use client"

import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useParams } from "next/navigation"
import axios from "axios"
import Layout from "@/components/layout/Layout"

export default function ResetPassword() {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')
    const router = useRouter()
    const params = useParams()
    const [token, setToken] = useState('')

    useEffect(() => {
        if (params.token) {
            setToken(params.token)
        }
    }, [params.token])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
            return
        }

        if (!token) {
            setMessage('Invalid reset token')
            return
        }

        try {
            const response = await axios.post('http://localhost:1000/api/reset-password', {
                token,
                newPassword: password
            })
            setMessage(response.data.message)
            setTimeout(() => router.push('/'), 3000) 
        } catch (error) {
            setMessage('An error occurred. Please try again.')
        }
    }

    return (
        <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Reset Password">
            <style jsx>{`
                .reset-password-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    background-color: #f8f9fa;
                }
                .reset-password-form {
                    background-color: white;
                    padding: 2rem;
                    border-radius: 8px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    width: 100%;
                    max-width: 400px;
                }
                h2 {
                    text-align: center;
                    margin-bottom: 1.5rem;
                }
                input {
                    width: 100%;
                    padding: 0.5rem;
                    margin-bottom: 1rem;
                    border: 1px solid #e0e0e0;
                    border-radius: 4px;
                }
                button {
                    width: 100%;
                    padding: 0.75rem;
                    background-color: #4CAF50;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: background-color 0.3s;
                }
                button:hover {
                    background-color: #45a049;
                }
                p {
                    text-align: center;
                    margin-top: 1rem;
                }
            `}</style>
            <div className="reset-password-container">
                <form onSubmit={handleSubmit} className="reset-password-form">
                    <h2>Reset Password</h2>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="New Password"
                        required
                    />
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm New Password"
                        required
                    />
                    <button type="submit">Reset Password</button>
                </form>
                {message && <p>{message}</p>}
            </div>
        </Layout>
    )
}