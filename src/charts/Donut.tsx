import Chart from "react-google-charts"

const Donut = ({chartData}: any) => {
    return (
        <Chart
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={chartData}
            rootProps={{ 'data-testid': '1' }}
        />
    )
}
  
export default Donut