import React from 'react';
import { Row, Col } from 'react-bootstrap';

import MySetting from '/imports/ui/containers/my/setting/MySetting.js';

export const MySettingPage = ({ params, location }) => (
	<Row>
    <Col xs={ 12 }>
      <h4 className="page-header">My Setting</h4>
      <MySetting/>
    </Col>
  </Row>
);
