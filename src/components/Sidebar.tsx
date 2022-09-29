import React from "react";
import { Box, Drawer, Divider, Typography, Button } from "@mui/material";
import BarChartSharpIcon from "@mui/icons-material/BarChartSharp";
import AndroidIcon from "@mui/icons-material/Android";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import CloseIcon from "@mui/icons-material/Close";
import ViewTimelineOutlinedIcon from "@mui/icons-material/ViewTimelineOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import NavItem from "./Nav-item";
type props = {
	close: () => void;
	openFlg: boolean;
};
const Sidebar: React.FC<props> = (props) => {
	const style: React.CSSProperties = {
		display: props.openFlg ? "block" : "none",
	};
	const items = [
		{
			href: "/",

			icon: <BarChartSharpIcon fontSize="small" />,
			title: "Dashboard",
		},
		{
			href: "/timeline",
			icon: <ViewTimelineOutlinedIcon fontSize="small" />,
			title: "TimeLine",
		},
		{
			href: "/calendar",
			icon: <CalendarMonthOutlinedIcon fontSize="small" />,
			title: "Calendar",
		},
	];
	return (
		<Drawer
			anchor="left"
			style={style}
			PaperProps={{
				sx: {
					backgroundColor: "#111827",
					color: "#FFFFFF",
					width: 280,
				},
			}}
			variant="permanent"
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					height: "100%",
				}}
			>
				<div>
					<Box
						sx={{
							p: 3,
							alignItems: "center",
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<AndroidIcon
							sx={{
								height: 42,
								width: 42,
							}}
						/>
						<Button
							onClick={props.close}
							sx={{
								color: "#9CA3AF",
								m: 0,
								"&:hover": {
									backgroundColor: "rgba(255,255,255, 0.08)",
									color: "#10B981",
									"& .MuiButton-startIcon": {
										color: "#10B981",
									},
								},
							}}
						>
							<CloseIcon
								sx={{
									height: 42,
									width: 42,
									m: 0,
								}}
							/>
						</Button>
					</Box>
					<Box sx={{ px: 2 }}>
						<Box
							sx={{
								alignItems: "center",
								backgroundColor: "rgba(255, 255, 255, 0.04)",
								cursor: "pointer",
								display: "flex",
								justifyContent: "space-between",
								px: 3,
								py: "11px",
								borderRadius: 1,
							}}
						>
							<div>
								<Typography color="inherit" variant="subtitle1">
									TIPS Inc
								</Typography>
								<Typography color="#9CA3AF" variant="body2">
									Sidebar : text
								</Typography>
							</div>
							<UnfoldMoreIcon
								sx={{
									color: "#6B7280",
									width: 14,
									height: 14,
								}}
							/>
						</Box>
					</Box>
				</div>
				<Divider
					sx={{
						borderColor: "#2D3748",
						my: 3,
					}}
				/>
				<Box sx={{ flexGrow: 1 }}>
					{items.map((item) => (
						<NavItem
							key={item.title}
							icon={item.icon}
							href={item.href}
							title={item.title}
						/>
					))}
				</Box>
			</Box>
		</Drawer>
	);
};
export default Sidebar;
