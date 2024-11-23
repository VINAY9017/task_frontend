import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import SideNav from "../../Compoents/SideNav";
import Navbar from "../../Compoents/Navbar";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { singleTasks, updateTasks } from "../../Api";
import Autocomplete from "@mui/material/Autocomplete";

const EditTask = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

 
  const single = async () => {
    const res = await singleTasks(id);
    setData(res.data);
  };

  useEffect(() => {
    single();
  }, []);

  const handleSummit = async (event) => {
    event.preventDefault();
    const res = await updateTasks(id, data);
    if (res.status === "success") {
      navigate("/taskbar");
    }
  };

  const status = ["Pending", "Complete"];

  return (
    <>
     
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Box height={10} />
            <Grid>
              <Grid item xs={8}>
                <Card sx={{ height: 40 + "vh" }}>
                  <CardContent>
                    <Box sx={{ m: 2 }} />
                    <Typography variant="h5" align="center">
                      EDIT TASK
                    </Typography>
                    <Grid>
                      <Grid item xs={12} align="center" margin="20px">
                        <Autocomplete
                          disablePortal
                          options={status}
                          sx={{ width: 300 }}
                          onChange={(event, value) =>
                            setData({ ...data, status: value })
                          } // Update state with selected status
                          renderInput={(params) => (
                            <TextField {...params} label="Status" />
                          )}
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
       
    </>
  );
};

export default EditTask;
