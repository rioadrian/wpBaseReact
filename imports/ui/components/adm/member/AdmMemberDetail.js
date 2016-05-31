import React from 'react';
import { NotFound } from '/imports/ui/pages/not-found';
import { Jumbotron } from 'react-bootstrap';

export const AdmMemberDetail = ({ member, hasUser }) => {
	console.log('memberAccts', member.accts().fetch());
	if(hasUser && member)
		return(
			<div>
				<Jumbotron className="text-center">
					<h2>{ member.fullname }</h2>
					<p>{ member.bio }</p>
				</Jumbotron>
			</div>
		);
	else
		return(
			<NotFound />
		);
}

AdmMemberDetail.propTypes = {
  member: React.PropTypes.object,
  hasUser: React.PropTypes.object
};
