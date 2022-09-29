import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { useTheme } from "@mui/material/styles";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
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
			text: "Chart.js Line Chart",
		},
	},
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export function LineChart() {
	const theme = useTheme();
	const data = {
		labels,
		datasets: [
			{
				label: "Dataset 1",
				data: labels.map(() =>
					faker.datatype.number({ min: -1000, max: 1000 })
				),
				borderColor: theme.palette.primary.light,
				backgroundColor: theme.palette.primary.light,
			},
			{
				label: "Dataset 2",
				data: labels.map(() =>
					faker.datatype.number({ min: -1000, max: 1000 })
				),
				borderColor: theme.palette.primary.dark,
				backgroundColor: theme.palette.primary.dark,
			},
		],
	};
	return <Line options={options} data={data} />;
}
