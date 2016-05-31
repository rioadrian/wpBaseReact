import React from 'react';
import { Button } from 'react-bootstrap';

import { goLink } from '../../../modules/utils.js';

import { MyMenuCommon } from './MyMenuCommon';

export const MyMenuAdmin = () => (
	<div>
		<Button bsStyle="primary" onClick={ goLink.bind(this, '/adm/member/list') }>Member</Button>
		<MyMenuCommon />
	</div>
);
