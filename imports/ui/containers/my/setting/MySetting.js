import { Meteor } from 'meteor/meteor';

import { composeWithTracker } from 'react-komposer';
import { Member } from '/imports/api/member/member_collection';
import { MySetting } from '/imports/ui/components/my/setting/MySetting';
import { Loading } from '/imports/ui/components/loading';

const composer = (params, onData) => {
	onData(null, { 
		hasUser: Meteor.user()
	});
};

export default composeWithTracker(composer, Loading)(MySetting);
