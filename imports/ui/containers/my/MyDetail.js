import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';

import { Member } from '../../../api/member/member_collection';

import { MyDetail } from '../../components/my/MyDetail';
import { Loading } from '../../components/loading';

const composer = (params, onData) => {
	const subscription = Meteor.subscribe('my.detail');
	if (subscription.ready()) {
		const member = Member.findOne();
		onData(null, { 
			member: member,
			hasUser: Meteor.user()
		});
	}
};

export default composeWithTracker(composer, Loading)(MyDetail);
