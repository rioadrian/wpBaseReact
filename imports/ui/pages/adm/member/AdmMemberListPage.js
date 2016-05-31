import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { initInfiniteScroll } from '/imports/modules/utils';

import AdmMemberList from '/imports/ui/containers/adm/member/AdmMemberList';

export const AdmMemberListPage = ({ params, location }) => {
	initInfiniteScroll('adm.member.list.count');
	return (
	  <Row>
	    <Col xs={ 12 }>
	      <h4 className="page-header">Member List</h4>
	      <AdmMemberList />
	    </Col>
	  </Row>
	);
};
