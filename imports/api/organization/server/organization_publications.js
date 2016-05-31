import { Meteor } from 'meteor/meteor';
import { Organization } from '../organization_collection.js';

Meteor.publish('organization', (organizationId) => {
	check(organizationId, Match._id);
	
	return Organization.find({_id:organizationId});
});

Meteor.publish('organizations', () => {	
	//FIXME bikin limit buat infinite scrolling
	return Organization.find();
});
