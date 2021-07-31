import React from 'react';

export default class SvgCircle extends React.Component {

	render() {
		return (
			<svg class="donut__base" viewBox="0 0 248 248" width="248" height="248">
				<circle cx="124" cy="124" r="124" fill="#f2f2f2"></circle>
				<circle class="donut__data" cx="124" cy="124" r="117" fill="none" stroke-width="14" stroke="rgb(251, 171, 24)" stroke-dasharray="342.92315612744557 735.1326809400116" transform="rotate(270, 124, 124)"></circle>
				<circle cx="124" cy="124" r="110" fill="#ffffff"></circle>
			</svg>
		);
	}
}
