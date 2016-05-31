import faker from 'faker';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

import { Acct } from '../acct/acct_collection'
import { Organization } from '../organization/organization_collection'

class MemberCollection extends Mongo.Collection {
  insert(doc, callback) {
    const result = super.insert(doc, callback);
    Acct.insert({
      name: doc.fullname,
      ownerId: result,
      saldo: 0
    });

    return result;
  }
  update(selector, modifier) {
    const result = super.update(selector, modifier);
    return result;
  }
  remove(selector) {
    const result = super.remove(selector);
    return result;
  }
}

export const Member = new MemberCollection('member');

// Deny all client-side updates since we will be using methods to manage this collection
Member.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});


Member.schema = new SimpleSchema({
	fullname: {
		type: String,
		label: 'Member FullName',
	},
	nickname: {
		type: String,
		label: 'Member NickName',
	},
	dob: {
		type: Date,
		label: 'Member Date of Birth',
		optional: true
	},
	bio: {
		type: String,
		label: 'Member Short Biografy',
		optional: true
	},
	imgUrl: {
		type: String,
		defaultValue: '/images/64x64.png'
	},
	organizationId: {
		type: SimpleSchema.RegEx.Id,
		optional: true
	},
	type: {
		type: String,
		allowedValues   : ["Member", "Admin"], //samakan dengan role
		defaultValue    : "Member"
	},
	status: {
		type: String,
		allowedValues   : ["Unverified", "Active", "Suspended"],
		defaultValue    : "Unverified"
	},
});

Member.attachSchema(Member.schema);

Member.publicFields = {
  _id 			: 1,
  fullname 	: 1,
  nickname 	: 1,
  bio 			: 1,
  imgUrl 		: 1,
  type 			: 1,
  status 		: 1,
};


Member.helpers({
	organization(){
		return Organization.findOne(this.organizationId);
	},
	accts(){		
		return Acct.find({ ownerId: this._id });
	}
});
