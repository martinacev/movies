import './assets/css/style.css';
import HomePage from "./page/Home/Home";
import Favorites from './components/Favorites/Favorites';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
	return (
	<>
	<div className="bgimage"></div>
	<BrowserRouter>
	<Routes>
		<Route index element={<HomePage />} />
		<Route path='/' element={<HomePage />} />
		<Route path='/favorites' element={<Favorites />}/>
	</Routes>
	</BrowserRouter>
	</>
	);
}

export default App;
