import React from 'react';

import { Loading } from '/imports/ui/components/loading';
import { nextQueryLimit } from '/imports/modules/utils';

export const QueryNavigation = ({ queryState }) => {
  if(queryState === 'loading')
    return <Loading />;
  
  if(queryState === 'loadmore')
    return <p onClick={ nextQueryLimit.bind(this) }>loadmore</p>;

  return <div></div>;

}

QueryNavigation.propTypes = {
  queryState: React.PropTypes.string.isRequired
};
