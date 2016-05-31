import React from 'react';
import { Table, Alert } from 'react-bootstrap';
import { NotFound } from '/imports/ui/pages/not-found';

import { infiniteScroll, renderLoadingState } from '/imports/modules/utils';

import { AdmMemberItem } from './AdmMemberItem.js';

export const AdmMemberList = ({ members, hasUser }) => {
	infiniteScroll();
	
	if(hasUser)
		return (
		  members.length > 0 ? <div>
		  	<p>Showing { Session.get('queryLimit') } of { Session.get('queryMax') } </p>
			  <Table striped bordered condensed hover responsive>
					<thead>
						<tr>
							<th>Fullname</th>
							<th>Type</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{members.map((member) => (
							<AdmMemberItem key={ member._id } member={ member } />
						))}
					</tbody>
			  </Table>

			  { renderLoadingState() }
		  </div> :
			  <Alert bsStyle="warning">No Member yet.</Alert>
		);
	else
		return(
			<NotFound />
		);
}

AdmMemberList.propTypes = {
  members: React.PropTypes.array,
  hasUser: React.PropTypes.object
};
