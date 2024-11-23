import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import PieChart from "../Charts/PieChart";


const Analytics = () => {
  return (
    <>
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
      
  </>
  )
}

export default Analytics