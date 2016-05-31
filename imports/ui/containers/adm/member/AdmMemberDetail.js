import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';

import { Member } from '/imports/api/member/member_collection';

import { AdmMemberDetail } from '/imports/ui/components/adm/member/AdmMemberDetail';
import { Loading } from '/imports/ui/components/loading';

const composer = (params, onData) => {
	const subscription = Meteor.subscribe('adm.member.detail', params.memberId);
	if (subscription.ready()) {
		const member = Member.findOne();
		onData(null, { 
			member: member,
			hasUser: Meteor.user()
		});
	}
};

export default composeWithTracker(composer, Loading)(AdmMemberDetail);
