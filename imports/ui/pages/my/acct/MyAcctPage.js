import React from 'react';
import { Row, Col } from 'react-bootstrap';

import MyAcctDetail from '/imports/ui/containers/my/acct/MyAcctDetail';

export const MyAcctPage = ({ params, location }) => (
	<Row>
    <Col xs={ 12 }>
      <h4 className="page-header">My Account: { params.acctId }</h4>
      <MyAcctDetail acctId={ params.acctId }/>
    </Col>
  </Row>
);
