import React from 'react';
import { Button } from '@klarna/bubble-ui/lib';

export default class Capture extends React.Component {
	showMessage() {
		window.alert(this.props.name);
	}
	render() {
		return (
			<Button.Primary onClick={this.showMessage.bind(this)} >Something</Button.Primary>
		)
	}
}
