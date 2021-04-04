import React from 'react';
import icon from '../img/icon-arrow-down.svg';

function Questions() {
	return (
		<div className="questions">
			<ul className="questions__list">
				<li className="questions__item">
					<QuestionItem $id="1"
						$questin="How many team members can I invite?"
						$answer="No more than 2GB. All files in your account must fit your allotted storage space."
					/>
				</li>
				<li className="questions__item">
					<QuestionItem $id="2"
						$questin="What is the maximum file upload size?"
						$answer="No more than 2GB. All files in your account must fit your allotted storage space."
					/>
				</li>
				<li className="questions__item">
					<QuestionItem $id="3"
						$questin="How do I reset my password?"
						$answer="No more than 2GB. All files in your account must fit your allotted storage space."
					/>
				</li>
				<li className="questions__item">
					<QuestionItem $id="4"
						$questin="Can I cancel my subscriptions?"
						$answer="No more than 2GB. All files in your account must fit your allotted storage space."
					/>
				</li>
				<li className="questions__item">
					<QuestionItem $id="5"
						$questin="Do you provide additional support?"
						$answer="No more than 2GB. All files in your account must fit your allotted storage space."
					/>
				</li>
			</ul>
		</div>
	);
}

function QuestionItem({$id, $questin, $answer}) {
	const inputId = `questionItem-${$id}`;
	return (
		<div className="question question_move">
			<input id={inputId} type="checkbox" className="checkbox_hide"/>
			<label htmlFor={inputId} className="question__label">
				<div className="question__topic">{$questin}</div>
				<div className="question__picture">
					<img src={icon} alt="The icon arrow." className="icon"/>
				</div>
			</label>
			<div className="question__answer"><span>{$answer}</span></div>
			<div className="divider"></div>
		</div>
	);
}

export default Questions;
