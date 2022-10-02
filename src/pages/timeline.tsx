import React, { useState } from "react";
import ChatList from "../components/timeline/ChatList";
import Chat from "../components/timeline/Chat";
import { Container, Grid } from "@mui/material";
import Box from "@mui/material/Box";

const TimeLine: React.FC = () => {
	return (
		<Container maxWidth={false} sx={{ py: 3 }}>
			<Grid
				sx={{
					display: "flex",
					bgcolor: "background.paper",
				}}
			>
				<Box>
					<ChatList />
				</Box>
				<Box sx={{ flexGrow: 1 }}>
					<Chat />
				</Box>
			</Grid>
		</Container>
	);
};

export default TimeLine;
