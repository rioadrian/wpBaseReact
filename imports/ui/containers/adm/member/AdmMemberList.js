import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';

import { Member } from '/imports/api/member/member_collection';

import { AdmMemberList } from '/imports/ui/components/adm/member/AdmMemberList';
import { Loading } from '/imports/ui/components/loading';

const composer = (params, onData) => {
	console.log('di dalam composer');
	
	const subscription = Meteor.subscribe('adm.member.list', Session.get('queryLimit'));
	if (subscription.ready()){
		Meteor.call('adm.member.list.count', null, function(error, result){
			if(!error)
				Session.set('queryMax', result);
		});

		const members = Member.find().fetch();
		onData(null, { 
			members: members,
			hasUser: Meteor.user()
		});
	}
};

export default composeWithTracker(composer, Loading)(AdmMemberList);
