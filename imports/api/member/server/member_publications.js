import { Meteor } from 'meteor/meteor';
import { Member } from '/imports/api/member/member_collection';
import { Organization } from '/imports/api/organization/organization_collection';
import { Acct } from '/imports/api/acct/acct_collection';

import { constructQuery } from '/imports/api/member/server/member_methods';

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

Meteor.publishComposite('adm.member.list', function admMemberList(searchText, limit) {
  check(searchText, Match.Maybe(Match.textOnly));
  check(limit, Number);

  if( Roles.userIsInRole(this.userId,'Admin','domain.com') )
    return {
      find() {
        
        // Meteor._sleepForMs(1000);
        const query = constructQuery(searchText);

        const options = {
          limit: limit
        };

        return Member.find(query,options);
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
