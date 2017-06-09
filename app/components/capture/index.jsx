import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {RaisedButton} from 'material-ui';

export default class Capture extends React.Component {
	constructor(props) {
		super(props);
	}

	showName() {
		window.alert(this.props.name);		
	}

  render() {
		return (
			<MuiThemeProvider>
				<RaisedButton label="Default" onClick={ this.showName.bind(this) } />
			</MuiThemeProvider>
		)
  }
}
