import React from 'react';
import { Button } from 'react-bootstrap';

import { goLink, handleLogout } from '../../../modules/utils.js';

export const MyMenuCommon = () => (
	<div className="wrapper-inline">
		<Button bsStyle="primary" onClick={ goLink.bind(this, '/my/acct/list') }>Account</Button>
		<Button bsStyle="primary" onClick={ goLink.bind(this, '/my/setting') }>Setting</Button>
		<Button bsStyle="danger" onClick={ handleLogout }>Logout</Button>
	</div>
);
