import { Meteor } from 'meteor/meteor';

import { composeWithTracker } from 'react-komposer';
import { Member } from '/imports/api/member/member_collection.js';
import { MySettingChangePassword } from '/imports/ui/components/my/setting/change/password/MySettingChangePassword';
import { Loading } from '/imports/ui/components/loading.js';

const composer = (params, onData) => {
	onData(null, { hasUser: Meteor.user() });
};

export default composeWithTracker(composer, Loading)(MySettingChangePassword);
