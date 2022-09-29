import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
ChartJS.register(ArcElement, Tooltip, Legend);

// export const data = {
// 	labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
// 	datasets: [
// 		{
// 			label: "# of Votes",
// 			data: [12, 19, 3, 5, 2, 3],
// 			backgroundColor: [
// 				theme.palette.primary.contrastText,
// 				"rgba(54, 162, 235, 1)",
// 				"rgba(255, 206, 86, 1)",
// 				"rgba(75, 192, 192, 1)",
// 				"rgba(153, 102, 255, 1)",
// 				"rgba(255, 159, 64, 1)",
// 			],
// 		},
// 	],
// };

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top" as const,
		},
		title: {
			display: true,
			text: "Doughnut chart",
		},
	},
};
export const Circle: React.FC = () => {
	const theme = useTheme();
	const data = {
		labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
		datasets: [
			{
				label: "# of Votes",
				data: [12, 19, 3, 5, 2, 3],
				backgroundColor: [
					theme.palette.primary.main,
					theme.palette.primary.light,
					theme.palette.primary.dark,
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 159, 64, 1)",
				],
			},
		],
	};
	return (
		<Box sx={{ width: "50%", m: "auto" }}>
			<Doughnut options={options} data={data} />
		</Box>
	);
};
