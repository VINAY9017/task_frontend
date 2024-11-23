import { useState } from "react";
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

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
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
      const response = await fetch("http://localhost:4500/api/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Registration successful!");
      } else {
        alert("Registration failed.");
      }
    } catch{
      alert("An error occurred.");
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
            <Avatar
              style={{ backgroundColor: "#3f51b5", marginBottom: "1rem" }}
            >
              <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h5">Sign Up</Typography>
          </Box>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
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
              Register
            </Button>
            <Button
              variant="contained"
              fullWidth
              style={{ marginTop: "1.5rem" }}
              onClick={()=>navigate("/login")}
            >
              ALREADY ACCOUNT
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

export default Register;
