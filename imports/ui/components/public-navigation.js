import React from 'react';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';

import { toggleNav } from '../../modules/utils.js';

import { CommonNavigation } from './common-navigation.js';

export const PublicNavigation = () => (
	<div onClick={ toggleNav }>
		<CommonNavigation />

		<Nav pullRight>
			<LinkContainer to="signup">
				<NavItem eventKey={ 7 } href="/signup">Sign Up</NavItem>
			</LinkContainer>
			<LinkContainer to="login">
				<NavItem eventKey={ 8 } href="/login">Log In</NavItem>
			</LinkContainer>
		</Nav>
	</div>
);
