import faker from 'faker';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

export const Organization = new Mongo.Collection('organization');

// Deny all client-side updates since we will be using methods to manage this collection
Organization.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

Organization.schema = new SimpleSchema({
	name: {
		type: String,
		label: 'Organization Name',
	},
	bio: {
		type: String,
		label: 'Organization Short Biografy'
	},
	type: {
		type: String,
		allowedValues   : ["Company"],
		defaultValue 		: "Company"
	},
	status: {
		type: String,
		allowedValues   : ["Draft", "Active", "Suspended"],
		defaultValue    : "Draft"
	}
});

Organization.attachSchema(Organization.schema);

Organization.publicFields = {
  _id 			: 1,
  name 			: 1,
  bio 		 	: 1,
  type 		 	: 1,
  status 		: 1,
};
