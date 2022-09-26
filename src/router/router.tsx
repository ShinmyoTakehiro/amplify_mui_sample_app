import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "../App";
export const Router: React.FC = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route index element={<App />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};
