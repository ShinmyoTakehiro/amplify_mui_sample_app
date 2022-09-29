import { timeline } from "../_mock_/index";
import Avatar from "@mui/material/Avatar";
console.log({ timeline });
const formatDate = (date: Date) => {
	const year = date.getFullYear().toString().padStart(4, "0");
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const day = date.getDate().toString().padStart(2, "0");
	return `${year}-${month}-${day}`;
};
const TimeLine = () => {
	return (
		<>
			<ul>
				{timeline.map((item) => (
					<li>
						<h2>{item.title}</h2>
						<p>{item.detail}</p>
						<p>{formatDate(item.dateTime)}</p>
						<Avatar alt="Travis Howard" src={item.avatar} />
					</li>
				))}
			</ul>
		</>
	);
};
export default TimeLine;
