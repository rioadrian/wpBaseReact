import React from 'react';

import { MyMenuAdmin } from './MyMenuAdmin';
import { MyMenuMember } from './MyMenuMember';

export class MyMenu extends React.Component {
	renderMenu(){
		if(Roles.userIsInRole(Meteor.userId(),'Admin','domain.com'))
			return(
				<MyMenuAdmin />
			);

		if(Roles.userIsInRole(Meteor.userId(),'Member','domain.com'))
			return(
				<MyMenuMember />
			);

		return '';
	}// renderMenu

	render() {
		return(
			<div>
  			{ this.renderMenu() }
  		</div>
    );
  }// render
}
