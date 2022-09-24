import {
	Avatar,
	Box,
	Card,
	CardContent,
	Grid,
	Typography,
} from "@mui/material";
import MoneyIcon from "@mui/icons-material/Money";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import BatteryCharging60OutlinedIcon from "@mui/icons-material/BatteryCharging60Outlined";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { BudgetObject } from "../types/index";
const Budget = (props: BudgetObject) => {
	let icon;
	let arrow;
	let HiLow;
	switch (props.icon) {
		case "MoneyIcon":
			icon = <MoneyIcon />;
			break;
		case "user":
			icon = <AccountCircleOutlinedIcon />;
			break;
		case "battery":
			icon = <BatteryCharging60OutlinedIcon />;
			break;

		default:
			break;
	}
	if (props.percent >= 50) {
		arrow = <ArrowDownwardIcon color="error" />;
		HiLow = "error";
	} else {
		arrow = <ArrowUpwardIcon color="success" />;
		HiLow = "success";
	}
	return (
		<Card sx={{ height: "100%" }}>
			<CardContent>
				<Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
					<Grid item>
						<Typography color="textSecondary" gutterBottom variant="overline">
							{props.title}
						</Typography>
						<Typography color="textPrimary" variant="h4">
							${props.money}k
						</Typography>
					</Grid>
					<Grid item>
						<Avatar
							sx={{
								backgroundColor: props.iconColor,
								height: 56,
								width: 56,
							}}
						>
							{icon}
						</Avatar>
					</Grid>
				</Grid>
				<Box
					sx={{
						pt: 2,
						display: "flex",
						alignItems: "center",
					}}
				>
					{arrow}
					<Typography
						color={HiLow}
						sx={{
							mr: 1,
						}}
						variant="body2"
					>
						{props.percent}%
					</Typography>
					<Typography color="textSecondary" variant="caption">
						{props.caption}
					</Typography>
				</Box>
			</CardContent>
		</Card>
	);
};
export default Budget;
