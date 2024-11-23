import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import { useState } from "react";
import { addTaskApi } from "../../Api";
import { useNavigate } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";

const AddTask = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "",
    status: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    // Update data and clear error for the field if valid
    setData({ ...data, [name]: value });
    if (value) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!data.title) {
      tempErrors.title = "Title is required.";
      isValid = false;
    }
    if (!data.description) {
      tempErrors.description = "Description is required.";
      isValid = false;
    }
    if (!data.dueDate) {
      tempErrors.dueDate = "Due Date is required.";
      isValid = false;
    }
    if (!data.priority) {
      tempErrors.priority = "Priority is required.";
      isValid = false;
    }
    if (!data.status) {
      tempErrors.status = "Status is required.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSummit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        const res = await addTaskApi(data);
        if (res.status === "success") {
          navigate("/taskbar");
        }
      } catch (error) {
        console.error("Error submitting the task:", error);
      }
    }
  };

  const options = ["Medium", "High", "Low"];
  const status = ["Pending"];

  return (
    <>
       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Box height={10} />
            <Grid>
              <Grid item xs={8}>
                <Card>
                  <CardContent>
                    <Box sx={{ m: 2 }} />
                    <Typography variant="h5" align="center">
                      Add Task
                    </Typography>
                    <Grid>
                      <Grid align="center" margin="10px">
                        <TextField
                          name="title"
                          label="Title"
                          variant="outlined"
                          size="small"
                          sx={{ width: "35ch" }}
                          onChange={handleChange}
                          error={Boolean(errors.title)}
                          helperText={errors.title}
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
                          error={Boolean(errors.description)}
                          helperText={errors.description}
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
                          error={Boolean(errors.dueDate)}
                          helperText={errors.dueDate}
                        />
                      </Grid>
                      <Grid item xs={12} align="center" margin="10px">
                        <Autocomplete
                          disablePortal
                          options={options}
                          sx={{ width: 300 }}
                          onChange={(event, value) => {
                            setData({ ...data, priority: value });
                            if (value) {
                              setErrors((prevErrors) => ({
                                ...prevErrors,
                                priority: "",
                              }));
                            }
                          }}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Priority"
                              error={Boolean(errors.priority)}
                              helperText={errors.priority}
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12} align="center" margin="10px">
                        <Autocomplete
                          disablePortal
                          options={status}
                          sx={{ width: 300 }}
                          onChange={(event, value) => {
                            setData({ ...data, status: value });
                            if (value) {
                              setErrors((prevErrors) => ({
                                ...prevErrors,
                                status: "",
                              }));
                            }
                          }}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Status"
                              error={Boolean(errors.status)}
                              helperText={errors.status}
                            />
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

export default AddTask;
