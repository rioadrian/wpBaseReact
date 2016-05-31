import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';

import { Acct } from '/imports/api/acct/acct_collection';

import { MyAcctList } from '/imports/ui/components/my/acct/MyAcctList';
import { Loading } from '/imports/ui/components/loading';

const composer = (params, onData) => {
	const subscription = Meteor.subscribe('my.acct.list');
	if (subscription.ready()){
		const accts = Acct.find().fetch();
		console.log('accts', accts);
		onData(null, { 
			accts: accts,
			hasUser: Meteor.user()
		});
	}
};

export default composeWithTracker(composer, Loading)(MyAcctList);
