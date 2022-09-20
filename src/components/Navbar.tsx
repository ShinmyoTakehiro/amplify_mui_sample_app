import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
interface NavProps {
	open: () => void;
	openFlg: boolean;
}
const Navbar: React.FC<NavProps> = (props) => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar color="inherit" position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<MenuIcon onClick={props.open} />
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						dashboard
					</Typography>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
export default Navbar;
