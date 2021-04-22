import React from "react";

const QouteCard = ({ quote, onClick }) => {
	return (
		<div className='quote-body'>
			<div className='quote'>
				<blockquote>{quote ? quote.saying : "Try Again..."}</blockquote>
				{quote && <p className='author-citation'>{quote.author}</p>}
			</div>
			<div className='generator-button'>
				<button className='generator-button' onClick={onClick}>
					Get Another Quote!
				</button>
			</div>
		</div>
	);
};

export default QouteCard;
