import React from "react";
import { Box, Button, ListItem } from "@mui/material";
import { NavLink } from "react-router-dom";
type props = {
	icon: any;
	title: string;
	href: string;
};
const NavItem: React.FC<props> = (props) => {
	const { icon, title, href, ...others } = props;
	return (
		<ListItem
			disableGutters
			sx={{
				display: "flex",
				mb: 0.5,
				py: 0,
				px: 2,
			}}
			//   {...others}
		>
			<NavLink
				style={({ isActive }) =>
					isActive
						? { color: "#10B981", backgroundColor: "rgba(255,255,255, 0.08)" }
						: undefined
				}
				to={href}
			>
				<Button
					component="button"
					startIcon={icon}
					disableRipple
					sx={{
						// backgroundColor:  'rgba(255,255,255, 0.08)',
						borderRadius: 1,
						fontWeight: "fontWeightBold",
						justifyContent: "flex-start",
						color: "#9CA3AF",
						px: 3,
						textAlign: "left",
						textTransform: "none",
						width: "100%",
						"& .MuiButton-startIcon": {
							color: "#9CA3AF",
						},
						"&:hover": {
							backgroundColor: "rgba(255,255,255, 0.08)",
							color: "#10B981",
							"& .MuiButton-startIcon": {
								color: "#10B981",
							},
						},
					}}
				>
					<Box sx={{ flexGrow: 1 }}>{title}</Box>
				</Button>
			</NavLink>
		</ListItem>
	);
};

export default NavItem;
