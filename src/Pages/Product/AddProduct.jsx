import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import SideNav from "../../Compoents/SideNav";
import Navbar from "../../Compoents/Navbar";
import { useState } from "react";
import { addTask } from "../../Api";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  console.log("data==>",data);
  

  const handleSummit = async (event) => {
    event.preventDefault();
    const res = await addTask(data);
   if(res.status==="success"){
    navigate("/")
   }
   
  };

  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <Box height={90} />
        <Box sx={{ display: "flex" }}>
          <SideNav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Box height={10} />
            <Grid>
              <Grid item xs={8}>
                <Card sx={{ height: 70 + "vh" }}>
                  <CardContent>
                    <Box sx={{ m: 2 }} />
                    <Typography variant="h5" align="center">
                      Add Product
                    </Typography>
                    <Box height={50} />
                    <Grid>
                      <Grid align="center" margin="10px">
                        <TextField
                          name="title"
                          align="center"
                          label="title"
                          variant="outlined"
                          size="small"
                          sx={{ width: "35ch" }}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12} align="center" margin="10px">
                        <TextField
                          name="description"
                          label="Description"
                          variant="outlined"
                          size="small"
                          sx={{ width: "35ch" }}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12} align="center" margin="10px">
                        <TextField
                        type="date"
                          name="dueDate"
                          variant="outlined"
                          size="small"
                          sx={{ width: "35ch" }}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12} align="center" margin="10px">
                        <TextField
                          name="priority"
                          label="priority"
                          variant="outlined"
                          size="small"
                          sx={{ width: "35ch" }}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12} align="center" margin="10px">
                        <TextField
                          name="status"
                          label="status"
                          variant="outlined"
                          size="small"
                          onChange={handleChange}
                          sx={{ width: "35ch" }}
                        />
                      </Grid>
                      <Grid item xs={12} align="center" margin="10px">
                        <Typography variant="h5" align="center">
                          <Button variant="contained" onClick={handleSummit}>
                            Submit
                          </Button>
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default AddProduct;
