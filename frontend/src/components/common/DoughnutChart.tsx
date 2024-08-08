import { Doughnut } from "react-chartjs-2";

import sourceData from "../../data/sourceData.json";

const DoughnutChart = () => {
    const textCenter = {
        id: 'textCenter',
        beforeDatasetsDraw(chart) {
            const { ctx, data } = chart;
            ctx.save();
            ctx.textAlign = 'center';
            ctx.textBaseLine = 'middle';
            ctx.font = '10px Poppins';
            ctx.fillStyle = '#7E7E80';
            ctx.fillText('Total', chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y - 8);

            ctx.font = '26px Poppins bolder';
            ctx.fillStyle = '#333335';
            ctx.fillText(data.datasets[0].data[0], chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y + 16);
        }
    }

    const doughnutData = {
        labels: sourceData.map((data) => data.label),
        datasets: [
            {
                label: "Count",
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                    "#FF9B04",
                    "#2C6EEE",
                ],
                borderColor: [
                    "#FF9B04",
                    "#2C6EEE",
                ],
                weight: 1,
            },
        ],
    }

    const doughnutOptions = {
        cutout: 45,
        plugins: {
            legend: {
                position: 'right'
            },
            title: {
                text: "Total Talent",
            },
        },
    }

    return (
        <div className="p-6 border rounded-2xl">
            <Doughnut
                data={doughnutData}
                plugins={[textCenter]}
                options={doughnutOptions}
            />
        </div>
    );
}

export default DoughnutChart;