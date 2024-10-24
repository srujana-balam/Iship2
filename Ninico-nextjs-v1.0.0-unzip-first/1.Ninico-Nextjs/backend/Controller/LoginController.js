const express = require('express');
const app = express();
app.use(express.json());
const UserDetails = require("../Models/LoginModel");
const nodemailer = require('nodemailer');
const crypto = require('crypto');

const Controller = async (req, res) => {
   res.send("Working");
}

const Login = async (req, res) => { 
    if (!req.body) {
        return res.status(400).json({ message: "Request body is missing" });
    }
    
    const { email, password } = req.body;
    try {
      const check = await UserDetails.findOne({email:email});
      if (check && check.password === password) {
        res.json({ message: "Login successful" });
      } else {
        res.json({ message: "Invalid credentials" });
      }
    } catch (e) {
      res.json("Not Exist");
    }
}

const SignUp = async (req, res) => {
  const { username, email, phonenumber, address, organisation, password } = req.body;
  try {
      const check = await UserDetails.findOne({ email: email });
      if (check) {
          return res.status(400).json({ message: "Already exists" });
      } else {
          const newUser = { username: username, email: email, phonenumber: phonenumber, address: address, organisation: organisation, password: password };
          await UserDetails.insertMany([newUser]);
          return res.status(201).json({ message: "User Registered Successfully" });
      }
  } catch (e) {
      console.error("Error during signup:", e);
      return res.status(500).json({ message: "An error occurred while processing the request" });
  }
};

const ForgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await UserDetails.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const resetToken = crypto.randomBytes(20).toString('hex');
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-password'
      }
    });

    const mailOptions = {
      from: 'priyareethikalanka@gmailcom',
      to: user.email,
      subject: 'Password Reset Link',
      text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
        Please click on the following link, or paste this into your browser to complete the process:\n\n
        http://localhost:1000/reset-password/${resetToken}\n\n
        If you did not request this, please ignore this email and your password will remain unchanged.\n`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Error sending email" });
      }
      res.status(200).json({ message: 'Reset link sent to email' });
    });
  } catch (error) {
    console.error("Error in forgot password:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const ResetPassword = async (req, res) => {
  const { token, newPassword } = req.body;
  try {
    const user = await UserDetails.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({ message: "Password reset token is invalid or has expired" });
    }

    user.password = newPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.status(200).json({ message: "Password has been reset" });
  } catch (error) {
    console.error("Error in reset password:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.Test = Controller;
exports.Login = Login;
exports.SignUp = SignUp;
exports.ForgotPassword = ForgotPassword;
exports.ResetPassword = ResetPassword;