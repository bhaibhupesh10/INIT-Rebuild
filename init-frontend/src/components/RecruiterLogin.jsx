import React, { useState } from "react";
import { Button, TextField, IconButton, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ReCAPTCHA from "react-google-recaptcha";
import linkedInLogo from "../assets/images/linkedIn.png"; // Adjust the path accordingly

const RecruiterLogin = () => {
  // State to handle password visibility
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleRecaptcha = (value) => {
    console.log("Captcha value:", value);
  };

  return (
    <div className="row flex items-center justify-center h-full">
      <div className="col-md-4 col-10 mx-auto">
        {/* LinkedIn Sign-In Button */}
        <Button
          variant="contained"
          startIcon={
            <img src={linkedInLogo} alt="LinkedIn Logo" width="28" height="25" />
          }
          href="https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=78jbh9wmqeq2tv&redirect_uri=http://campus.placements.iitb.ac.in/auth/recruiter/register/linkedin&state=6mJsJAt2r&scope=r_liteprofile%20r_emailaddress"
          style={{ backgroundColor: "#0077b7", color: "white", width: "100%" }}
        >
          Sign in with LinkedIn
        </Button>

        <hr style={{ margin: "2rem 0" }} /> {/* Adjusted margin for spacing */}

        {/* Login Form */}
        <form className="d-flex flex-column align-items-center">
          {/* Email Input */}
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            className="mb-6" // Increased margin bottom for more space below
            type="text"
            name="username"
            autoComplete="email"
          />

          {/* Password Input */}
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            type={showPassword ? "text" : "password"}
            name="password"
            autoComplete="current-password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handlePasswordVisibility}>
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            className="mb-4" // Margin bottom to ensure proper spacing from other elements
          />

          {/* Forgot Password Link */}
          <a href="#" className="mb-4">
            Forgot password?
          </a>

          {/* ReCAPTCHA */}
          <ReCAPTCHA
            sitekey="your-site-key" // Replace with your site key
            onChange={handleRecaptcha}
            className="mb-4" // Added margin bottom for spacing
          />

          {/* Sign-In Button */}
          <Button
            variant="contained"
            color="primary"
            disabled
            className="mb-4" // Added margin bottom for spacing
            fullWidth
          >
            Sign In
          </Button>
        </form>

        {/* Register Link */}
        <div className="text-center">
          <p>
            Don't have an account?{" "}
            <a href="/auth/recruiter/initiate">Register now</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecruiterLogin;
