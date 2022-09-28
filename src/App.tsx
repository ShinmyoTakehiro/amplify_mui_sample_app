import React, { useState } from "react";
// import TodoList from './components/TodoList'
// import NewTodo from './components/NewTodo'
// import { todo } from './todo.model'
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Box, Container, Grid } from "@mui/material";
import Budget from "./components/Card-sm";
import { BudgetObject } from "./types/index";
import { BarChart } from "./components/BarChart";
import { Circle } from "./components/CircleChart";
import { LineChart } from "./components/LineChart";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { TabPanel } from "./components/common/index";
// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

const App: React.FC = () => {
	const [tabFlg, setTabFlg] = useState<number>(0);
	const handleTabChange = (event: React.SyntheticEvent, newEvent: number) => {
		setTabFlg(newEvent);
	};
	const budgetObject: BudgetObject[] = [
		{
			title: "BUDGET",
			money: 24,
			percent: 10,
			caption: "since last month",
			icon: "MoneyIcon",
			iconColor: "error.main",
		},
		{
			title: "BUDGET2",
			money: 13,
			percent: 80,
			caption: "since last month2",
			icon: "user",
			iconColor: "success.main",
		},
		{
			title: "BUDGET3",
			money: 15,
			percent: 20,
			caption: "since last month3",
			icon: "battery",
			iconColor: "warning.main",
		},
	];
	const [isSidebarOpen, setSidebarOpen] = useState<boolean>(true);

	// const todoAddHandler = (text: string) => {
	// 	// setTodos(prevTodo=>[...prevTodo,{id:Math.random().toString(),text:text}])
	// 	console.log({ text });
	// };
	// const todoDeleteHandler = (todoId: string) => {
	// 	// setTodos(prevTodo =>prevTodo.filter(todo=>todo.id !== todoId))
	// };
	const width = {
		width: isSidebarOpen ? "calc(100% - 280px)" : "100%",
	};

	return (
		<div className="App">
			<Box sx={{ mr: 0, ml: "auto", width: width }}>
				<Navbar
					open={() => {
						setSidebarOpen(true);
						console.log({ isSidebarOpen });
					}}
					openFlg={isSidebarOpen}
				/>
				<Box
					component="main"
					sx={{
						flexGrow: 1,
						py: 8,
					}}
				>
					<Container maxWidth={false}>
						<Grid container spacing={3} sx={{ mb: 5 }}>
							{budgetObject.map((item) => {
								return (
									<Grid item lg={4} sm={6} xl={4} xs={12}>
										<Budget
											title={item.title}
											money={item.money}
											percent={item.percent}
											caption={item.caption}
											icon={item.icon}
											iconColor={item.iconColor}
										/>
									</Grid>
								);
							})}
						</Grid>
						<Grid item lg={8} md={12} xl={9} xs={12}>
							<Tabs
								value={tabFlg}
								onChange={handleTabChange}
								sx={{ borderBottom: 1, borderColor: "divider" }}
							>
								<Tab label="bar" />
								<Tab label="circle" />
								<Tab label="line" />
							</Tabs>
							<TabPanel value={tabFlg} index={0}>
								<BarChart />
							</TabPanel>
							<TabPanel value={tabFlg} index={1}>
								<Circle />
							</TabPanel>
							<TabPanel value={tabFlg} index={2}>
								<LineChart />
							</TabPanel>
						</Grid>
					</Container>
				</Box>
			</Box>
			<Sidebar
				close={() => {
					setSidebarOpen(false);
					console.log({ isSidebarOpen });
				}}
				openFlg={isSidebarOpen}
			/>
			{/* <NewTodo onAddTodo={todoAddHandler } /> */}
			{/* <TodoList todoItems={todos} onDeleteTodo={todoDeleteHandler } /> */}
		</div>
	);
};
export default App;
