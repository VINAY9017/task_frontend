import { Box } from "@mui/material";
import SideNav from "../Compoents/SideNav";
import Navbar from "../Compoents/Navbar";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import PieChart from "../Charts/PieChart";


const Analytics = () => {
  return (
    <>
    <div className="bgcolor">
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Box height={20} />
          <Grid>
            <Grid item xs={8}>
              <Card sx={{ height: 60 + "vh" }}>
                <CardContent>
                  <PieChart />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  </>
  )
}

export default Analytics