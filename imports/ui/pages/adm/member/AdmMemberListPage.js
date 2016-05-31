import React from 'react';
import { Row, Col } from 'react-bootstrap';

import AdmMemberList from '/imports/ui/containers/adm/member/AdmMemberList';

export const AdmMemberListPage = ({ params, location }) => {
	Session.set('queryInfinite', true);
	return (
	  <Row>
	    <Col xs={ 12 }>
	      <h4 className="page-header">Member List</h4>
	      <AdmMemberList />
	    </Col>
	  </Row>
	);
};
