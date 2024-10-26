const UserDetails = require("../Models/LoginModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Contact = require("../Models/contact_supportModel");
const CheckOut = require("../Models/checkout");
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const contact_supportModel = require("../Models/contact_supportModel");


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
};

exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserDetails.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // const isValidPassword = await bcrypt.compare(password, user.password);
    if (user.password != password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: "Error logging in" });
  }

  
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
      'your-secret-key', 
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
exports.Order = Order;
exports.ContactSupport = ContactSupport;
exports.SignUp = SignUp;

