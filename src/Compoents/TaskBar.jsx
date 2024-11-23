// import { Outlet } from "react-router-dom";
// import Box from "@mui/material/Box";
// import Navbar from "./Navbar";
// import SideNav from "./SideNav";

// const TaskBar = () => {
//   return (
//     <>
//       <Navbar />
//       <Box sx={{ display: "flex" }}>
//         <SideNav />
      
//       <div className="bgcolor">
//       <Box height={70} width={1100} />
//       <Box >
//         <Outlet />
//         </Box>
//       </div>
//       </Box>
//     </>
//   );
// };

// export default TaskBar;

import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Navbar from "./Navbar";
import SideNav from "./SideNav";
import "../Dash.css";

const TaskBar = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" }, 
        }}
      >
        <SideNav
          sx={{
            flexShrink: 0,
            display: { xs: "none", sm: "block" },
            width: { sm: 240 }
          }}
        />

       
        <Box
          sx={{
            flexGrow: 1,
            padding: { xs: 2, sm: 3 },
          }}
          className="bgcolor"
        >
          <Box
            sx={{
              height: { xs: 50, sm: 70 }, 
              width: "100%",
            }}
          />
          <Box>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TaskBar;

