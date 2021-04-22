import React from "react";
//API
import { API } from "./api";
//Components
import { Header, QouteCard } from "./components";

//Helper function to generate random numbers
function getRandomInt(min = 1, max = 10) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const App = () => {
	const [foundQuote, setFoundQuote] = React.useState(API[0]);

	const getRandomQuote = () => {
		const foundQuote = API.find(
			(quote) => quote.id === getRandomInt(1, API.length)
		);
		setFoundQuote(foundQuote);
	};

	return (
		<div className='container'>
			<div className='main-body'>
				<Header />
				<QouteCard quote={foundQuote} onClick={getRandomQuote} />
			</div>
		</div>
	);
};

export default App;
