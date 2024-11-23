// import {
//   Box,
//   Button,
//   TextField,
//   Typography,
//   Grid,
//   Paper,
//   Avatar,
// } from "@mui/material";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import { useEffect, useState } from "react";
// import { loginApi } from "../../Api";
// import { useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";

// const Login = () => {

//     const {
//         register,
//         formState: { errors },
//       } = useForm();
//   const [data, setData] = useState({});
//   const navigate=useNavigate()

//   const handleChange = (event) => {
//     setData({ ...data, [event.target.name]: event.target.value });
//   };

//   const handleSummit = async (event) => {
//     event.preventDefault();
//     const res = await loginApi(data);
//     setData(res.data);
//     console.log(res);
    
//   };

//   useEffect(() => {
//     handleSummit();
//   }, []);

//   return (
//     <Grid
//       container
//       justifyContent="center"
//       alignItems="center"
//       style={{ minHeight: "100vh", padding: "1rem" }}
//     >
//       <Grid item xs={12} sm={8} md={5}>
//         <Paper elevation={3} style={{ padding: "2rem" }}>
//           <Box
//             display="flex"
//             flexDirection="column"
//             alignItems="center"
//             marginBottom="1.5rem"
//           >
//             <Avatar
//               style={{ backgroundColor: "#3f51b5", marginBottom: "1rem" }}
//             >
//               <LockOutlinedIcon />
//             </Avatar>
//             <Typography variant="h5">Login</Typography>
//           </Box>
//           <form onSubmit={handleSummit}>
//             <TextField
//               name="email"
//               label="Email"
//               type="email"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               onChange={handleChange}
//             />
//             <TextField
//               name="password"
//               label="Password"
//               type="password"
//               variant="outlined"
//               fullWidth
//               margin="normal"

//               error={!!errors.email}
//               helperText={errors.email?.message}
//               onChange={handleChange}
//             />
//             <Button
//               type="submit"
//               variant="contained"
//               fullWidth
//               style={{ marginTop: "1.5rem" }}
//             >
//               Login
//             </Button>

//             <Button
//               variant="contained"
//               fullWidth
//               style={{ marginTop: "1.5rem" }}
//               onClick={()=>navigate("/register")}
//             >
//               CREATE A NEW ACCOUNT
//             </Button>
//           </form>
//         </Paper>
//       </Grid>
//     </Grid>
//   );
// };

// export default Login;


import  { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Paper,
  Avatar,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate=useNavigate()

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4500/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Login successful!")
        localStorage.setItem("token",data.token)
      } else {
        const error = await response.json();
        alert(error.message)
      }
    } catch{
     
      alert("An error occurred.")
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh", padding: "1rem" }}
    >
      <Grid item xs={12} sm={8} md={5}>
        <Paper elevation={3} style={{ padding: "2rem" }}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            marginBottom="1.5rem"
          >
            <Avatar style={{ backgroundColor: "#3f51b5", marginBottom: "1rem" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h5">Login</Typography>
          </Box>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              style={{ marginTop: "1.5rem" }}
            >
              Login
            </Button>
            <Button
              variant="contained"
              fullWidth
              style={{ marginTop: "1.5rem" }}
              onClick={()=>navigate("/register")}
            >
              CREATE A NEW ACCOUNT
            </Button>
          </form>
          {message && (
            <Typography
              variant="body1"
              style={{ marginTop: "1rem", textAlign: "center", color: "green" }}
            >
              {message}
            </Typography>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;

