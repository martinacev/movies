import "./assets/css/style.css";
import HomePage from "./page/Home/Home";
import Favorites from "./components/Favorites/Favorites";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./components/redux/store";

function App() {
	return (
		<>
			<div className="bgimage"></div>
			<Provider store={store}>
				<BrowserRouter>
					<Routes>
						<Route index element={<HomePage />} />
						<Route path="/" element={<HomePage />} />
						<Route path="/favorites" element={<Favorites />} />
					</Routes>
				</BrowserRouter>
			</Provider>
		</>
	);
}

export default App;
