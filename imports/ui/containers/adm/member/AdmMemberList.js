import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';

import { Member } from '/imports/api/member/member_collection';

import { AdmMemberList } from '/imports/ui/components/adm/member/AdmMemberList';
import { Loading } from '/imports/ui/components/loading';

const composer = (params, onData) => {
	Session.set('queryProcess', true);
	const subscription = Meteor.subscribe('adm.member.list', Session.get('queryLimit'));
	if (subscription.ready()){
		Session.set('queryProcess', false);
		const members = Member.find().fetch();
		if(Session.get('queryMax') <= members.length)
			Session.set('queryInfinite', false);
		
		onData(null, { 
			members: members,
			hasUser: Meteor.user()
		});
	}
};

export default composeWithTracker(composer, Loading)(AdmMemberList);
