import Chart from "react-google-charts"

const Sankey = ({chartData}: any) => {
    return (
        <Chart
            chartType="Sankey"
            loader={<div>Loading Chart</div>}
            data={chartData}
            options={{
            sankey: {
                node: {
                width: 15,
                },
                link: { colorMode: 'gradient' },
            },
            }}
            rootProps={{ 'data-testid': '1' }}
        />
    )
}
  
export default Sankey