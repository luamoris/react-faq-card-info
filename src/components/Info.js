import React from 'react';
import PropTypes from 'prop-types';
import Questions from './Questions.js';

const Info = (props) => {
	return (
		<div className="info">
			<div className="info__body">
				<div className="info__title">{props.title}</div>
				<Questions />
			</div>
		</div>
	);
};

Info.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Info;
