import { TabPanelProps } from "../../types/index";
import { Box } from "@mui/material";
// タブ切り替えのコンポーネント

export const TabPanel = (props: TabPanelProps) => {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	);
};

// 日付フォーマットを変換
export const formatDate = (date: Date) => {
	const year = date.getFullYear().toString().padStart(4, "0");
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const day = date.getDate().toString().padStart(2, "0");
	return `${year}/${month}/${day}`;
};
// [スケジュール]連番表示関数
let eventGuid = 0;
export const createEventId = () => String(eventGuid++);

// [スケジュール]現在日付取得処理
export const todayStr = new Date().toISOString().replace(/T.*$/, "");
