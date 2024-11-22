import { Chart } from "react-google-charts";


function PieChart() {
    const data = [
      ["Task", "Hours per Day"],
      ["High", 9],
      ["Medium", 2],
      ["Low", 2],
   
    ];
  
    const options = {
      title: "My Daily Activities",
    };
    return (
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    );
  }

  export default PieChart