import { Member } from '../member_collection.js';

import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

export const createMember = new ValidatedMethod({
  name: 'Member.create',

  validate: new SimpleSchema({
    userId: { type: SimpleSchema.RegEx.Id }
  }).validator(),

  run({userId}) {
    // now sanity check
    if(!this.userId)
      throw new Meteor.Error(401, 'You must be logged in.');

    let newUser = Meteor.users.findOne(userId);

    if(!newUser)
      throw new Meteor.Error(404,'User not found');

    Member.insert({
      _id: userId,
      fullname: newUser.profile.fullname,
      nickname: newUser.profile.fullname,
    });
    
    Roles.addUsersToRoles(userId, ['Member'], 'domain.com');

    return true;
  }

});

export const admMemberListCount = new ValidatedMethod({
  name: 'adm.member.list.count',
  validate: new SimpleSchema({
    searchText: { type: String, optional: true }
  }).validator(),

  run({searchText}) {
    if( Roles.userIsInRole(this.userId,'Admin','domain.com') ){

      const query = constructQuery(searchText);

      return Member.find(query).count();
    }
    else
      return 0;
  }

});

export const constructQuery = (searchText) => {
  let query = {};
  let mongoDbArr = [];
        
  if(searchText){
    // already filtered in Match aboved searchText = searchText.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");

    mongoDbArr.push({fullname: { $regex : searchText, $options:"i" } });
    mongoDbArr.push({nickname: { $regex : searchText, $options:"i" } });
    mongoDbArr.push({type: { $regex : searchText, $options:"i" } });
    mongoDbArr.push({status: { $regex : searchText, $options:"i" } });
    
    query = { $or: mongoDbArr };
  };

  return query;
};

