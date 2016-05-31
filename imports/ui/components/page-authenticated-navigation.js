import React from 'react';
// import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
// import { Nav, NavItem } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';

import { toggleNav } from '../../modules/utils.js';

import { PageCommonNavigation } from './page-common-navigation.js';

const userName = () => {
  const user = Meteor.user();
  // const name = user && user.profile ? user.profile.name : '';
  // return user ? `${name.first} ${name.last}` : '';
  return user && user.profile ? user.profile.fullname : '';
};

const memberLink = () => {
  const user = Meteor.user();
  return user ? '/member/detail/'+user._id : '';
};

export const PageAuthenticatedNavigation = () => (
  <div>
    <PageCommonNavigation />
    <p>ini PageAuthenticatedNavigation</p>
    <p>{ }</p>
  </div>
);
