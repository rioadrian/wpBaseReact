import React from 'react';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';

import { toggleNav } from '../../modules/utils.js';

import { CommonNavigation } from './common-navigation.js';

const userName = () => {
  const user = Meteor.user();
  // const name = user && user.profile ? user.profile.name : '';
  // return user ? `${name.first} ${name.last}` : '';
  return user && user.profile ? user.profile.fullname : '';
};

const myPageLink = () => {
  const user = Meteor.user();
  return user ? '/my/page' : '';
};

export const AuthenticatedNavigation = () => (
  <div onClick={ toggleNav }>
    <CommonNavigation />
    <Nav pullRight>
      <LinkContainer to={ myPageLink() }>
        <NavItem eventKey={ 1 } href={ myPageLink() }>{ userName() }</NavItem>
      </LinkContainer>
    </Nav>
  </div>
);
