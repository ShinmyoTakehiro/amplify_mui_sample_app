import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { useTheme } from "@mui/material/styles";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top" as const,
		},
		title: {
			display: true,
			text: "Chart.js Bar Chart",
		},
	},
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const BarChart = () => {
	const theme = useTheme();

	const data = {
		labels,
		datasets: [
			{
				label: "Dataset 1",
				data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
				backgroundColor: theme.palette.primary.light,
			},
			{
				label: "Dataset 2",
				data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
				backgroundColor: theme.palette.primary.dark,
			},
		],
	};
	return <Bar options={options} data={data} />;
};
// export default Chart;
