import React from 'react';
import { Row, Col } from 'react-bootstrap';

import MyDetail from '/imports/ui/containers/my/MyDetail.js';

export const MyPage = ({ params, location }) => (
	<Row>
    <Col xs={ 12 }>
      <h4 className="page-header">My Page</h4>
      <MyDetail/>
    </Col>
  </Row>
);
