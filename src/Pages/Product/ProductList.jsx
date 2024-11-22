import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { deleteTasks, getTask } from "../../Api";

export default function ProductList() {

  const [data, setData] = useState([]);

  const fullfillTask = async () => {
    const res = await getTask();
    setData(res.data);
  };

  const deleteTask = async (id) => {
    const res = await deleteTasks(id);
    console.log(res);

    fullfillTask();
  };

  useEffect(() => {
    fullfillTask();
  }, []);



  return (
    <>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ padding: "20px" }}
        >
          User List
        </Typography>
        <Divider />
        <Box height={80} style={{ padding: "10px" }}>
          <Stack direction="row" spacing={2} className="my-2 mb-2">
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <Button variant="contained" endIcon={<AddCircleOutlineIcon />}>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to={"/addProduct"}
              >
                ADD
              </Link>
            </Button>
          </Stack>
        </Box>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left" style={{ minWidth: "100px" }}>
                  Description
                </TableCell>
                <TableCell align="left" style={{ minWidth: "100px" }}>
                  Due-Date
                </TableCell>
                <TableCell align="left" style={{ minWidth: "100px" }}>
                  Priority
                </TableCell>
                <TableCell align="left" style={{ minWidth: "100px" }}>
                  Status
                </TableCell>

                <TableCell align="left" style={{ minWidth: "100px" }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((ele, index) => {
                return (
                  <>
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      <TableCell align="left">{ele.title}</TableCell>
                      <TableCell align="left">{ele.description}</TableCell>
                      <TableCell align="left">{ele.dueDate}</TableCell>
                      <TableCell align="left">{ele.priority}</TableCell>
                      <TableCell align="left">{ele.status}</TableCell>
                      <TableCell align="left">
                        <button style={{ margin: "5px" }}>
                          <Link to={`/editProduct/${ele._id}`}>
                            <EditIcon
                              style={{
                                fontSize: "20px",
                                color: "darkred",
                                cursor: "pointer",
                                margin: "3px",
                              }}
                            ></EditIcon>
                          </Link>
                        </button>
                        <button
                          onClick={() => {
                            deleteTask(ele._id);
                          }}
                        >
                          <DeleteIcon
                            style={{
                              fontSize: "20px",
                              color: "darkred",
                              cursor: "pointer",
                              margin: "3px",
                            }}
                          />
                        </button>
                      </TableCell>
                    </TableRow>
                  </>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}
