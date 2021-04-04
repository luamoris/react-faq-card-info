import React from 'react';

import bgPatternDesktop from '../img/bg-pattern-desktop.svg';
import womanOnlineDesktop from '../img/illustration-woman-online-desktop.svg';

import bgPatternMobile from '../img/bg-pattern-mobile.svg';
import womanOnlineMobile from '../img/illustration-woman-online-mobile.svg';

function Picture() {
	return (
		<div className="picture">
			<div className="picture__body">
				<div className="background">
					<picture id="bgPattern">
						<source media="(min-width: 931px)" srcSet={bgPatternDesktop}/>
						<img src={bgPatternMobile} alt="Background pattern."/>
					</picture>
					<picture id="womanOnline">
						<source media="(min-width: 931px)" srcSet={womanOnlineDesktop} />
						<img src={womanOnlineMobile} alt="Woman online." />
					</picture>
				</div>
			</div>
		</div>
	);
}

export default Picture;
