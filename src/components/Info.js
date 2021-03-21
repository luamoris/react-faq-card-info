import React from 'react';
import Questions from './Questions.js';

function Info({$title}) {
	return (
		<div className="info">
			<div className="info__body">
				<div className="info__title">{$title}</div>
				<Questions />
			</div>
		</div>
	);
}

export default Info;
