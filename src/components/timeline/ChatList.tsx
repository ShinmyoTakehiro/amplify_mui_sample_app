import { timeline } from "../../_mock_/index";
import Avatar from "@mui/material/Avatar";
import { formatDate } from "../common/index";
import Typography from "@mui/material/Typography";
import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

console.log({ timeline });

const ChatList = () => {
	console.log({ timeline });
	return (
		<List
			sx={{
				width: "100%",
				maxWidth: 360,
			}}
		>
			<Grid item style={{ padding: "10px" }}>
				<TextField
					id="outlined-basic-email"
					label="Search"
					variant="outlined"
					fullWidth
				/>
			</Grid>
			{timeline.map((item) => (
				<>
					<ListItemButton alignItems="flex-start">
						<ListItemAvatar>
							<Avatar alt="Travis Howard" src={item.avatar} />
						</ListItemAvatar>
						<ListItemText
							primary={item.title}
							secondary={
								<React.Fragment>
									<Typography variant="body2" color="text.primary">
										{item.detail}
									</Typography>
									{formatDate(item.dateTime)}
								</React.Fragment>
							}
						/>
					</ListItemButton>
					<Divider />
				</>
			))}
		</List>
	);
};
export default ChatList;
