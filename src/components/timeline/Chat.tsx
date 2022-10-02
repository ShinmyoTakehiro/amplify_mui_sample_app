import React from "react";
// import { makeStyles } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Fab from "@mui/material/Fab";
import SendIcon from "@mui/icons-material/SendOutlined";
import { blueGrey } from "@mui/material/colors";

const bgColorSend = blueGrey[500];
// const useStyles = makeStyles({
// 	table: {
// 		minWidth: 650,
// 	},
// 	chatSection: {
// 		width: "100%",
// 		height: "80vh",
// 	},
// 	headBG: {
// 		backgroundColor: "#e0e0e0",
// 	},
// 	borderRight500: {
// 		borderRight: "1px solid #e0e0e0",
// 	},
// 	messageArea: {
// 		height: "70vh",
// 		overflowY: "auto",
// 	},
// });

const Chat = () => {
	return (
		<Grid
			sx={{
				borderLeft: "1px solid rgba(0, 0, 0, 0.12);",
			}}
		>
			<Grid>
				<List sx={{ height: "70vh" }}>
					<ListItem
						sx={{ display: "flex", justifyContent: "flex-start" }}
						key="1"
					>
						<Grid
							sx={{
								bgcolor: "primary.light",
								color: "primary.contrastText",
								p: 2,
								borderRadius: 2,
							}}
						>
							<Grid item>
								<ListItemText primary="Hey man, What's up ?" />
							</Grid>
							<Grid item>
								<ListItemText secondary="09:30" />
							</Grid>
						</Grid>
					</ListItem>
					<ListItem
						sx={{ display: "flex", justifyContent: "flex-end" }}
						key="2"
					>
						<Grid
							sx={{
								bgcolor: bgColorSend,
								color: "primary.contrastText",
								p: 2,
								borderRadius: 2,
							}}
						>
							<Grid item>
								<ListItemText primary="Hey, Iam Good! What about you ?" />
							</Grid>
							<Grid item>
								<ListItemText secondary="09:31" />
							</Grid>
						</Grid>
					</ListItem>
					<ListItem
						key="3"
						sx={{ display: "flex", justifyContent: "flex-start" }}
					>
						<Grid
							sx={{
								bgcolor: "primary.light",
								color: "primary.contrastText",
								p: 2,
								borderRadius: 2,
							}}
						>
							<Grid item>
								<ListItemText primary="Cool. i am good, let's catch up!" />
							</Grid>
							<Grid item>
								<ListItemText secondary="10:30" />
							</Grid>
						</Grid>
					</ListItem>
				</List>
				<Divider />
				<Grid
					sx={{
						display: "flex",
						p: 1,
						width: "100%",
					}}
				>
					<Grid sx={{ flexGrow: 1, mr: 1 }}>
						<TextField
							id="outlined-basic-email"
							label="Type Something"
							fullWidth
						/>
					</Grid>
					<Fab color="primary" aria-label="add">
						<SendIcon />
					</Fab>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Chat;
