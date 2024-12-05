// import React, { useState } from "react";
// import { TextField, Button, IconButton, InputAdornment } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import ReCAPTCHA from "react-google-recaptcha";
// import { useNavigate } from "react-router-dom"; // Import useNavigate hook

// const StudentLogin = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [captchaVerified, setCaptchaVerified] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(""); // Add error state
//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleClickShowPassword = () => setShowPassword(!showPassword);
//   const handleMouseDownPassword = (event) => event.preventDefault();

//   const handleRecaptchaChange = (value) => {
//     setCaptchaVerified(!!value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!captchaVerified) {
//       setError("Please complete the CAPTCHA");
//       return;
//     }

//     try {
//       const response = await fetch("/api/login", { // Adjust the endpoint as needed
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await response.json();
      
//       if (response.ok) {
//         // Assuming the response contains user details
//         navigate(`/profile?name=${data.name}`); // Redirect to ProfileHome with user's name
//       } else {
//         setError(data.message || "Login failed");
//       }
//     } catch (error) {
//       setError("An error occurred");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-full">
//       <div className="w-full max-w-md">
//         <form onSubmit={handleSubmit} className="flex flex-col items-center">
//           <TextField
//             label="Email"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="mb-4"
//           />
//           <TextField
//             label="Password"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             type={showPassword ? "text" : "password"}
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="mb-4"
//             InputProps={{
//               endAdornment: (
//                 <InputAdornment position="end">
//                   <IconButton
//                     aria-label="toggle password visibility"
//                     onClick={handleClickShowPassword}
//                     onMouseDown={handleMouseDownPassword}
//                     edge="end"
//                   >
//                     {showPassword ? <VisibilityOff /> : <Visibility />}
//                   </IconButton>
//                 </InputAdornment>
//               ),
//             }}
//           />
//           <Button href="#" variant="text" className="mb-4">
//             Forgot password?
//           </Button>

//           {/* Google reCAPTCHA */}
//           <ReCAPTCHA
//             sitekey="your-site-key" // Replace with your actual site key
//             onChange={handleRecaptchaChange}
//             className="mb-4"
//           />

//           {error && <p className="text-red-500">{error}</p>} {/* Display error messages */}

//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             className="mb-4 w-full"
//             disabled={!captchaVerified}
//           >
//             Sign In
//           </Button>
//         </form>

//         <div className="text-center">
//           <p>
//             Don't have an account?{" "}
//             <a href="/register" className="text-blue-500">
//               Register now
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentLogin;





import React, { useState } from "react";
import { TextField, Button, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

const StudentLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Add error state
  const navigate = useNavigate(); // Initialize useNavigate

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleSubmit = async (event) => {
    event.preventDefault();
      const role="Student";
    try {
      const response = await fetch("http://localhost:4000/auth/student/login", { // Adjust the endpoint as needed
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({role, email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        // Redirect directly to the profile page
        navigate("/profile");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (error) {
      setError("An error occurred");
    }
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4"
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button href="#" variant="text" className="mb-4">
            Forgot password?
          </Button>

          {error && <p className="text-red-500">{error}</p>} {/* Display error messages */}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="mb-4 w-full"
          >
            Sign In
          </Button>
        </form>

        <div className="text-center">
          <p>
            Don't have an account?{" "}
            <a href="/register" className="text-blue-500">
              Register now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
