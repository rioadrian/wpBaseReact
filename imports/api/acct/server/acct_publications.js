import { Meteor } from 'meteor/meteor';

import { Acct } from '/imports/api/acct/acct_collection.js';
import { Member } from '/imports/api/member/member_collection.js';

import { SimpleSchema } from 'meteor/aldeed:simple-schema';

// Meteor.publishComposite('acct.active', function acctActive(acctId) {
	
//   check(acctId, Match._id);

//   return {
//     find() {
    	
//       const query = {
//         _id: acctId,
//         ownerId: this.userId,
//         status: 'Active',
//       };

//       const options = {
//         fields: Acct.publicFields,
//       };

//       return Acct.find(query, options);
//     },

//     children: [{
//       find(acct) {
//         return Member.find({ _id: acct.ownerId }, { fields: Member.publicFields });
//       },
//     }],
//   };
// });


Meteor.publish('my.acct.list', function myAcctList(){
  return Acct.find({ ownerId: this.userId }, { fields: Acct.publicFields });
});

Meteor.publish('my.acct.detail', function myAcctDetail(acctId){
  check(acctId, Match._id);
  return Acct.find({ _id: acctId, ownerId: this.userId }, { fields: Acct.publicFields });
});
