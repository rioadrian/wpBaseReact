import { Meteor } from 'meteor/meteor';
import { Member } from '/imports/api/member/member_collection.js';
import { Organization } from '/imports/api/organization/organization_collection.js';
import { Acct } from '/imports/api/acct/acct_collection.js';

//all publications for own account
Meteor.publishComposite('my.detail', function myDetail(){
  return {
    find() {
    	
      const query = {
        _id: this.userId,
      };

      const options = {
        fields: Member.publicFields,
      };

      return Member.find(query, options);
    },

    children: [{
      find(member) {
        return Organization.find({ _id: member.organizationId }, { fields: Organization.publicFields });
      },
    },{
    	find(member) {
        return Acct.find({ ownerId: member._id }, { fields: Acct.publicFields });
      },
    }],
  };
});


//all publications for other public
Meteor.publishComposite('member.detail', function memberDetail(memberId) {
  
  check(memberId, Match._id);

  return {
    find() {
      
      const query = {
        _id: memberId,
        status: 'Active',
        // $or: [{ userId: { $exists: false } }, { userId }],
      };

      const options = {
        fields: Member.publicFields,
      };

      return Member.find(query, options);
    },

    children: [{
      find(member) {
        return Organization.find({ _id: member.organizationId }, { fields: Organization.publicFields });
      },
    }],
  };
});


// now all publications for admistrators
Meteor.publishComposite('adm.member.detail', function admMemberDetail(memberId) {
  
  check(memberId, Match._id);

  if( Roles.userIsInRole(this.userId,'Admin','domain.com') )
    return {
      find() {
        
        const query = {
          _id: memberId,
        };

        return Member.find(query);
      },

      children: [{
        find(member) {
          return Organization.find({ _id: member.organizationId });
        },
      },{
        find(member) {
          return Acct.find({ ownerId: member._id });
        },
      }],
    };
});

Meteor.publishComposite('adm.member.list', function admMemberList(limit) {
  check(limit, Number);

  if( Roles.userIsInRole(this.userId,'Admin','domain.com') )
    return {
      find() {
        return Member.find({},{limit: limit});
      },

      children: [{
        find(member) {
          return Organization.find({ _id: member.organizationId });
        },
      },{
        find(member) {
          return Acct.find({ ownerId: member._id });
        },
      }],
    };
});
