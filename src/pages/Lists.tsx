import React from "react";
import { Outlet } from "react-router-dom";

const Lists = () => {
	return (
		<>
			<p>Lists</p>
			<Outlet />
		</>
	);
};

export default Lists;
