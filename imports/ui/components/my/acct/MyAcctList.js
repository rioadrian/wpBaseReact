import React from 'react';
import { Table, Alert } from 'react-bootstrap';
import { NotFound } from '/imports/ui/pages/not-found';

import { MyAcctItem } from './MyAcctItem.js';

export const MyAcctList = ({ accts, hasUser }) => {
	if(hasUser)
		return (
		  accts.length > 0 ? <Table striped bordered condensed hover responsive>
			<thead>
				<tr>
					<th>Account Name</th>
					<th>Saldo</th>
					<th>Currency</th>
				</tr>
			</thead>
			<tbody>
				{accts.map((acct) => (
					<MyAcctItem key={ acct._id } acct={ acct } />
				))}
		    </tbody>
		  </Table> :
		  <Alert bsStyle="warning">No Account yet.</Alert>
		);
	else
		return(
			<NotFound />
		);
}

MyAcctList.propTypes = {
  accts: React.PropTypes.array,
  hasUser: React.PropTypes.object
};
