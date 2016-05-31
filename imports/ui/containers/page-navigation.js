import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { PageNavigation } from '../components/page-navigation';

const composer = (props, onData) => {
	onData(null, { hasUser: Meteor.user() });
};

export default composeWithTracker(composer, {}, {}, { pure: false })(PageNavigation);
