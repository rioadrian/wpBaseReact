import React from 'react';
import { NotFound } from '/imports/ui/pages/not-found';
import { Jumbotron } from 'react-bootstrap';

export const MySetting = ({ hasUser }) => {
	if(hasUser)
		return(
			<div>
				<Jumbotron className="text-center">
					<h2>Settings</h2>
					<p>ini llnk setting 1</p>
					<p>ini llnk setting 2</p>
				</Jumbotron>
			</div>
		);
	else
		return(
			<NotFound />
		);
}

MySetting.propTypes = {
  hasUser: React.PropTypes.object
};
