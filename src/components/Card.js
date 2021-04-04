import React from 'react';
import Picture from './Picture.js';
import Info from './Info.js';

function Card() {
	return (
		<div className="card">
			<div className="card__body">
				<Picture />
				<Info 
					$title="FAQ"
				/>
			</div>
		</div>
	);
}

export default Card;
