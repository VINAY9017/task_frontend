import { Box } from "@mui/material";
// import SideNav from "../Compoents/SideNav";
// import Navbar from "../Compoents/Navbar";
import TaskList from "./Tasks/TaskList";

import "../Dash.css";

const Home = () => {
  return (
    <>
 
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <TaskList />
        </Box>
    
    </>
  );
};

export default Home;
