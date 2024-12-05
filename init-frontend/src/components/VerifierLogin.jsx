import React, { useState } from 'react';
import { TextField, Button, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ReCAPTCHA from 'react-google-recaptcha';

const VerifierLogin = () => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleClickShowPassword1 = () => setShowPassword1(!showPassword1);
  const handleClickShowPassword2 = () => setShowPassword2(!showPassword2);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="row flex items-center justify-center h-full">
      <div className="col-md-4 col-10 mx-auto">
        <form className="d-flex flex-column align-items-center" noValidate onSubmit={handleSubmit}>
          <TextField
            label="Email"
            name="username"
            type="text"
            fullWidth
            variant="outlined"
            margin="normal"
            autoComplete="off"
          />

          <TextField
            label="Verifier Password"
            name="password"
            type={showPassword1 ? 'text' : 'password'}
            fullWidth
            variant="outlined"
            margin="normal"
            InputProps={{
              endAdornment: (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword1}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword1 ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }}
          />

          <TextField
            label="Personal Password"
            name="password"
            type={showPassword2 ? 'text' : 'password'}
            fullWidth
            variant="outlined"
            margin="normal"
            InputProps={{
              endAdornment: (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword2}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword2 ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }}
          />

          <ReCAPTCHA
            sitekey="your-recaptcha-site-key"
            onChange={(value) => console.log("Captcha value:", value)}
            style={{ margin: '16px 0' }}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="pl-5 pr-5 m-3 w-full"
            disabled
          >
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default VerifierLogin;
