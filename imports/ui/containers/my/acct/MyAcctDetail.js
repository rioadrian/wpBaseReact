import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';

import { Acct } from '/imports/api/acct/acct_collection';

import { MyAcctDetail } from '/imports/ui/components/my/acct/MyAcctDetail';
import { Loading } from '/imports/ui/components/loading';

const composer = (params, onData) => {
	const subscription = Meteor.subscribe('my.acct.detail', params.acctId);
	if (subscription.ready()) {
		const acct = Acct.findOne();
		onData(null, { 
			acct: acct,
			hasUser: Meteor.user()
		});
	}
};

export default composeWithTracker(composer, Loading)(MyAcctDetail);
