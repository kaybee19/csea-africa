import React from 'react';

export default class SvgCircle extends React.Component {

	render() {
		return (
			<svg class="donut__base" viewBox="0 0 280 280" width="280" height="280">
				<circle cx="124" cy="124" r="124" fill="#F0F3F5"></circle>
				<circle class="donut__data" cx="124" cy="124" r="117" fill="none" stroke-width="24" stroke="#C2CDD6" stroke-dasharray="12.92315612744557 735.1326809400116" transform="rotate(270, 124, 124)"></circle>
				<circle cx="124" cy="124" r="110" fill="#ffffff"></circle>
			</svg>
		);
	}
}
