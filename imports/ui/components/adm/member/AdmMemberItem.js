import React from 'react';

import { goLink } from '/imports/modules/utils.js';

export const AdmMemberItem = ({ member }) => (
  <tr onClick={ goLink.bind(this, '/adm/member/'+member._id) }>
    <td>
      { member.fullname }
    </td>
    <td>
      { member.type }
    </td>
    <td>
      { member.status }
    </td>
  </tr>
);
