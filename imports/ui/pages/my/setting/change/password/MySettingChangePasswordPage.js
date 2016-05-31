import React from 'react';
import { Row, Col } from 'react-bootstrap';

import MySettingChangePassword from '/imports/ui/containers/my/setting/change/password/MySettingChangePassword.js';

export const MySettingChangePasswordPage = ({ params, location }) => (
	<Row>
    <Col xs={ 12 }>
      <h4 className="page-header">Change Password</h4>
      <MySettingChangePassword/>
    </Col>
  </Row>
);
