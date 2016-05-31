import React from 'react';

import { Button } from 'react-bootstrap';

import { goLink } from '/imports/modules/utils.js';

export class MySettingMenu extends React.Component {
	render() {
		return(
			<div>
				<Button bsStyle="primary" onClick={ goLink.bind(this, '/my/setting/change/password') }>Change Password</Button>
  		</div>
    );
  }// render
}
