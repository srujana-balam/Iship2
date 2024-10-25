const UserDetails = require("../Models/LoginModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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