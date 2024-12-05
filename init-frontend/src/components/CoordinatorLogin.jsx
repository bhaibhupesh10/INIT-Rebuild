import React, { useState } from 'react';
import { TextField, Button, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ReCAPTCHA from 'react-google-recaptcha';

const CoordinatorLogin = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [coordinatorPasswordVisible, setCoordinatorPasswordVisible] = useState(false);
  const [personalPasswordVisible, setPersonalPasswordVisible] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handlePasswordVisibilityToggle = (setter) => {
    setter((prev) => !prev);
  };

  const handleRecaptcha = (value) => {
    if (value) {
      setCaptchaVerified(true);
    }
  };

  return (
    <div className="row flex items-center justify-center mt-10">
      <div className="col-md-4 col-11 mx-auto">
        <form noValidate className="d-flex flex-column align-items-center">
          {/* Roll Input */}
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            name="username"
            className="mb-4"
          />

          {/* Coordinator Password Input */}
          <TextField
            label="Coordinator Password"
            variant="outlined"
            fullWidth
            type={coordinatorPasswordVisible ? 'text' : 'password'}
            name="coordinatorPassword"
            InputProps={{
              endAdornment: (
                <IconButton
                  onClick={() => handlePasswordVisibilityToggle(setCoordinatorPasswordVisible)}
                >
                  {coordinatorPasswordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              ),
            }}
            className="mb-3"
          />

          {/* Personal Password Input */}
          <TextField
            label="Personal Password"
            variant="outlined"
            fullWidth
            type={personalPasswordVisible ? 'text' : 'password'}
            name="personalPassword"
            InputProps={{
              endAdornment: (
                <IconButton
                  onClick={() => handlePasswordVisibilityToggle(setPersonalPasswordVisible)}
                >
                  {personalPasswordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              ),
            }}
            className="mb-3"
          />

          {/* ReCAPTCHA */}
          <ReCAPTCHA
            sitekey="your-site-key" // Replace with your actual reCAPTCHA site key
            onChange={handleRecaptcha}
            className="mb-3"
          />

          {/* Sign-In Button */}
          <Button
            variant="contained"
            color="primary"
            disabled={!captchaVerified} // Enable the button only if captcha is verified
            className="pl-5 pr-5 m-3"
            fullWidth
          >
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CoordinatorLogin;
