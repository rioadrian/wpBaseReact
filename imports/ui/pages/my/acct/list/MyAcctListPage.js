import React from 'react';
import { Row, Col } from 'react-bootstrap';

import MyAcctList from '/imports/ui/containers/my/acct/MyAcctList';

export const MyAcctListPage = ({ params, location }) => (
  <Row>
    <Col xs={ 12 }>
      <h4 className="page-header">My Account List</h4>
      <MyAcctList />
    </Col>
  </Row>
);
