import { Line } from "react-chartjs-2"
import revenueData from "../../data/revenueData.json";

const LineChart = () => {
    return (
        <Line
            height="300px"
            data={{
                labels: revenueData.map((data) => data.label),
                datasets: [
                    {
                        label: "Revenue",
                        data: revenueData.map((data) => data.revenue),
                        backgroundColor: "#064FF0",
                        borderColor: "#064FF0",
                    },
                    {
                        label: "Cost",
                        data: revenueData.map((data) => data.cost),
                        backgroundColor: "#FF3030",
                        borderColor: "#FF3030",
                    },
                ],
            }}
            options={{
                plugins: {
                    legend: {
                        position: 'top',
                        align: 'end',

                    },
                    title: {
                        text: "Talents",
                        color: "#01428E",
                    },
                },
            }}
        />
    )
}

export default LineChart;