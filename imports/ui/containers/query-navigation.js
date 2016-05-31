import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';

import { Loading } from '/imports/ui/components/loading';
import { QueryNavigation } from '/imports/ui/components/query-navigation';

const composer = (props, onData) => {
  if(Session.get('queryInfinite')){
    if(Session.get('queryProcess')){
      onData(null, {queryState:'loading'});
    }else{
      onData(null, {queryState:'loadmore'});
    }
  }else{
  	onData(null, {queryState:'finish'});
  };
};

export default composeWithTracker(composer, {}, {}, { pure: false })(QueryNavigation);
