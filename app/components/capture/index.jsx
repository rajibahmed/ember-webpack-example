import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {RaisedButton} from 'material-ui';

export default class Capture extends React.Component {
  render() {
		return (
			<MuiThemeProvider>
				<RaisedButton label="Default" />
			</MuiThemeProvider>
		)
  }
}
