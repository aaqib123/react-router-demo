import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import List from "./pages/list";
import Lists from "./pages/Lists";

function App() {
	const Layout = () => {
		return (
			<>
				<Header />
				<section className="container">
					<Outlet />
				</section>
				<Footer />
			</>
		);
	};

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			errorElement: <div>404 Not Found</div>,
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "/lists",
					children: [
						{
							index: true,
							element: <Lists />,
						},
						{
							path: ":id",
							element: <List />,
						},
					],
				},
				{
					path: "/about",
					element: <About />,
				},
				{
					path: "*",
					element: <div>6060 Not Found</div>,
				},
			],
		},
	]);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
