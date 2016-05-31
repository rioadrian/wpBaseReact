import React from 'react';

import { goLink } from '/imports/modules/utils.js';

export const MyAcctItem = ({ acct }) => (
  <tr onClick={ goLink.bind(this, '/my/acct/'+acct._id) }>
    <td>
      { acct.name }
    </td>
    <td>
      { acct.saldo }
    </td>
    <td>
      { acct.currency }
    </td>
  </tr>
);
