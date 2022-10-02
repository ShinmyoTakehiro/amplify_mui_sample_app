import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/dashboard";
import TimeLine from "./pages/timeline";
import { Box } from "@mui/material";

// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

const App: React.FC = () => {
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
	const AppStyle: React.CSSProperties = {
		transition: "width .3s",
	};
	return (
		<BrowserRouter>
			<Box style={AppStyle} sx={{ mr: 0, ml: "auto", width: width }}>
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
					}}
				>
					<Routes>
						<Route index element={<Dashboard />} />
						<Route path="/timeline" element={<TimeLine />} />
					</Routes>
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
		</BrowserRouter>
	);
};
export default App;
