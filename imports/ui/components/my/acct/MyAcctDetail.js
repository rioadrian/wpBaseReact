import React from 'react';
import { NotFound } from '/imports/ui/pages/not-found';
import { Jumbotron } from 'react-bootstrap';

export const MyAcctDetail = ({ acct, hasUser }) => {
	if(hasUser && acct)
		return(
			<div>
				<Jumbotron className="text-center">
					<h2>{ acct.name }</h2>
					<p>{ acct.saldo }</p>
					<p>{ acct.currency }</p>
					<p>{ acct.timestamp.toString() }</p>
				</Jumbotron>
			</div>
		);
	else
		return(
			<NotFound />
		);
}

MyAcctDetail.propTypes = {
  acct: React.PropTypes.object,
  hasUser: React.PropTypes.object
};
