import faker from 'faker';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

import { Member } from '../member/member_collection.js';

export const Acct = new Mongo.Collection('acct');

// Deny all client-side updates since we will be using methods to manage this collection
Acct.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

const _RefSchema = new SimpleSchema({
	refId: {
		type: SimpleSchema.RegEx.Id,
	},
	refType: {
		type: String,
	},
});

Acct.schema = new SimpleSchema({
	name: {
		type: String,
		label: 'Name of this Acct',
	},
	cocNr: {
		type: String,
		label: 'Number of Chart of Account',
		optional: true
	},
	ownerId: {
		type: SimpleSchema.RegEx.Id,
		label: 'ownerId of this Acct'
	},
	saldo: {
		type: Number,
		label: 'Last Saldo of this Acct',
	},
	currency: {
		type: String,
		defaultValue: 'IDR'
	},
	refs: {
		type: [ _RefSchema ],
		optional: true
	},
	status: {
		type: String,
		label: 'Acct Status, Active means is on air',
 		allowedValues   : ["Active", "Suspended"],
		defaultValue    : "Active"
	},
	timestamp: {
		type: Date,
		label: 'Latest Timestamp',
		autoValue : function(){
			return new Date();
		},
	},

});

Acct.attachSchema(Acct.schema);

Acct.publicFields = {
  _id 			: 1,
  name 			: 1,
  ownerId 	: 1,
  saldo 		: 1,
  currency 	: 1,
  timestamp : 1,
};

Acct.helpers({
	owner() {
		return Member.findOne(this.ownerId);
	},
});

