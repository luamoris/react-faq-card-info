import React from 'react';
import PropTypes from 'prop-types';
import icon from '../img/icon-arrow-down.svg';

const FAQ = [
	{
		question: 'How many team members can I invite?',
		answer: 'Lorem ipsum dolor sit amen consenter adipisicing elite. Pariahs, dubious.',
	},
	{
		question: 'What is the maximum file upload size?',
		answer: 'No more than 2GB. All files in your account must fit your allotted storage space.',
	},
	{
		question: 'How do I reset my password?',
		answer: 'Lorem ipsum dolor sit amen consenter adipisicing elite. Pariahs, dubious. Lorem ipsum dolor sit amen consenter adipisicing elite. Pariahs, dubious.',
	},
	{
		question: 'Can I cancel my subscriptions?',
		answer: 'Lorem ipsum dolor sit amen consenter adipisicing elite. Pariahs, dubious.',
	},
	{
		question: 'Do you provide additional support?',
		answer: 'Lorem ipsum dolor sit amen consenter adipisicing elite. Pariahs, dubious. No more than 2GB. All files in your account must fit your allotted storage space.',
	},
];

const QuestionItem = (props) => {
	const inputId = `questionItem-${props.id}`;
	return (
		<div className="question question_move">
			<input id={inputId} type="checkbox" className="checkbox_hide"/>
			<label htmlFor={inputId} className="question__label">
				<div className="question__topic">{props.question}</div>
				<div className="question__picture">
					<img src={icon} alt="The icon arrow." className="icon"/>
				</div>
			</label>
			<div className="question__answer"><span>{props.answer}</span></div>
			<div className="divider"></div>
		</div>
	);
};

QuestionItem.propTypes = {
	id: PropTypes.number.isRequired,
	question: PropTypes.string.isRequired,
	answer: PropTypes.string.isRequired,
};

const Questions = () => {
	const renderQuestionItem = (item, index) => (
		<li key={index + 1}>
			<QuestionItem
				id={index + 1}
				question={item.question}
				answer={item.answer}
			/>
		</li>
	);
	return (
		<div className="questions">
			<ul className="questions__list">
				{ FAQ.map(renderQuestionItem) }
			</ul>
		</div>
	);
};

export default Questions;
