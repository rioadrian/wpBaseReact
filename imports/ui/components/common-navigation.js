import React from 'react';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';

export const CommonNavigation = () => (
		<Nav>
	      <IndexLinkContainer to="/">
	        <NavItem eventKey={ 1 } href="/">Home</NavItem>
	      </IndexLinkContainer>

			<LinkContainer to="/documents">
				<NavItem eventKey={ 2 } href="/documents">Document</NavItem>
			</LinkContainer>

		</Nav>
);
