import React from 'react';
import { Row, Col } from 'react-bootstrap';

import AdmMemberDetail from '/imports/ui/containers/adm/member/AdmMemberDetail';

export const AdmMemberPage = ({ params, location }) => (
	<Row>
    <Col xs={ 12 }>
      <h4 className="page-header">Member Page for Admin</h4>
      <AdmMemberDetail memberId={ params.memberId }/>
    </Col>
  </Row>
);
