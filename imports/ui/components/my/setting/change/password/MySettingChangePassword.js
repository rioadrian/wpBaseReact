import React from 'react';
import { NotFound } from '/imports/ui/pages/not-found';
import { Jumbotron } from 'react-bootstrap';

export const MySettingChangePassword = ({ hasUser }) => {
	if(hasUser)
		return(
			<div>
				<Jumbotron className="text-center">
					<h2>Change Password</h2>
					<p></p>
					<p></p>
				</Jumbotron>
			</div>
		);
	else
		return(
			<NotFound />
		);
}

MySettingChangePassword.propTypes = {
  hasUser: React.PropTypes.object
};
