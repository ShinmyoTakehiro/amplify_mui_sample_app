import React, { useState } from "react";
// import TodoList from './components/TodoList'
// import NewTodo from './components/NewTodo'
// import { todo } from './todo.model'
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Box, Container, Grid } from "@mui/material";
import Budget from "./components/Budget";
// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }
const App: React.FC = () => {
	// const todos = [{ id:'t1',text:'typescriptコースサンプルS'}]
	const [isSidebarOpen, setSidebarOpen] = useState<boolean>(true);
	console.log({ isSidebarOpen });
	console.log({ setSidebarOpen });
	//   const [todos,setTodos] = useState<todo[]>([])
	const todoAddHandler = (text: string) => {
		// setTodos(prevTodo=>[...prevTodo,{id:Math.random().toString(),text:text}])
		console.log({ text });
	};
	const todoDeleteHandler = (todoId: string) => {
		// setTodos(prevTodo =>prevTodo.filter(todo=>todo.id !== todoId))
	};
	const width: React.CSSProperties = {
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
						<Grid container spacing={3}>
							<Grid item lg={3} sm={6} xl={3} xs={12}>
								<Budget />
								{/* <h1>テスト項目</h1> */}
							</Grid>
							<Grid item xl={3} lg={3} sm={6} xs={12}>
								{/* <TotalCustomers /> */}
								<h1>テスト項目</h1>
							</Grid>
							<Grid item xl={3} lg={3} sm={6} xs={12}>
								{/* <TasksProgress /> */}
								<h1>テスト項目</h1>
							</Grid>
							<Grid item xl={3} lg={3} sm={6} xs={12}>
								{/* <TotalProfit sx={{ height: "100%" }} /> */}
								<h1>テスト項目</h1>
							</Grid>
							<Grid item lg={8} md={12} xl={9} xs={12}>
								{/* <Sales /> */}
								<h1>テスト項目</h1>
							</Grid>
							<Grid item lg={4} md={6} xl={3} xs={12}>
								{/* <TrafficByDevice sx={{ height: "100%" }} /> */}
								<h1>テスト項目</h1>
							</Grid>
							<Grid item lg={4} md={6} xl={3} xs={12}>
								{/* <LatestProducts sx={{ height: "100%" }} /> */}
								<h1>テスト項目</h1>
							</Grid>
							<Grid item lg={8} md={12} xl={9} xs={12}>
								{/* <LatestOrders /> */}
								<h1>テスト項目</h1>
							</Grid>
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
