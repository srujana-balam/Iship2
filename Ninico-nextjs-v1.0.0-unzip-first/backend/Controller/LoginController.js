const UserDetails = require("../Models/LoginModel");
<<<<<<< HEAD
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
=======
const Contact = require("../Models/contact_supportModel");
const CheckOut = require("../Models/checkout");
const nodemailer = require('nodemailer');
const crypto = require('crypto');
>>>>>>> origin/main

exports.Test = (req, res) => {
    res.send("API Testing Successful");
};

exports.SignUp = async (req, res) => {
    try {
        const { username, email, phonenumber, address, password, organisation } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const newUser = new UserDetails({
            username,
            email,
            phonenumber,
            address,
            password: hashedPassword,
            organisation
        });
        
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error registering user" });
    }
<<<<<<< HEAD
=======
}
const SignUp = async (req, res) => {
  console.log(req.body);
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
>>>>>>> origin/main
};

exports.Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserDetails.findOne({ email });
        
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ message: "Invalid password" });
        }
        
        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        res.status(500).json({ message: "Error logging in" });
    }
<<<<<<< HEAD
=======

    const resetToken = crypto.randomBytes(20).toString('hex');
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000;
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
>>>>>>> origin/main
};

exports.ForgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await UserDetails.findOne({ email });
        
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Create a temporary token
        const token = jwt.sign(
            { userId: user._id },
            'your-secret-key', // Replace with a secure secret key
            { expiresIn: '1h' }
        );

        // Save token to user document
        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
        await user.save();

        res.status(200).json({ 
            message: "Email verified successfully", 
            token: token 
        });
    } catch (error) {
        console.error('Forgot password error:', error);
        res.status(500).json({ message: "Error processing request" });
    }
};
const ContactSupport = async (req, res) => {
  if (req.method === "POST") {
    const { fullname, email, phonenumber, subject, Emessage } = req.body;
    try {
      const newComplaint = {
        fullname,
        email,
        phonenumber,
        subject,
        Emessage,
      };
      await Contact.insertMany([newComplaint]);
      res.status(200).json({ message: "Thank you for your feedback!" });
    } catch (error) {
      console.error("Error saving complaint:", error);
      res.status(500).json({ message: "Error saving complaint. Please try again later." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};
const Order = async (req, res) => {
  if (req.method === "POST") {
    const { country, firstname, lastname, caddress, town, state, postalcode, cemail, phone } = req.body;
    try {
      const newCheck = {
        country,
        firstname,
        lastname,
        caddress,
        town,
        state,
        postalcode,
        cemail,
        phone
      };
      await CheckOut.insertMany([newCheck]);
      res.status(200).json({ message: "Address Updated" });
    } catch (error) {
      console.error("Error saving Address:", error);
      res.status(500).json({ message: `Error saving address: ${error.message}` });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};

<<<<<<< HEAD
exports.ResetPassword = async (req, res) => {
    try {
        const { token, newPassword } = req.body;
        
        // Verify token and find user
        const decoded = jwt.verify(token, 'your-secret-key');
        const user = await UserDetails.findOne({
            _id: decoded.userId,
            resetPasswordToken: token,
            resetPasswordExpires: { $gt: Date.now() }
        });

        if (!user) {
            return res.status(400).json({ message: "Invalid or expired token" });
        }

        // Hash new password and update user
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        await user.save();

        res.status(200).json({ message: "Password reset successful" });
    } catch (error) {
        console.error('Reset password error:', error);
        res.status(500).json({ message: "Error resetting password" });
    }
};
=======
exports.Order=Order;
exports.ContactSupport=ContactSupport;
exports.Test = Controller;
exports.Login = Login;
exports.SignUp = SignUp;
exports.ForgotPassword = ForgotPassword;
exports.ResetPassword = ResetPassword;
>>>>>>> origin/main
