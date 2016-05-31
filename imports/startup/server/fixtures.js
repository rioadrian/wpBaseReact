import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Accounts } from 'meteor/accounts-base';

import { Member } from '/imports/api/member/member_collection.js';

const users = [{
  username: 'jcha',
  email: 'johnson.chandra@gmail.com',
  password: 'password',
  profile: {
    fullname: 'Johnson Chandra',
  },
  bio: 'Short Bio of Johnson Chandra',
  roles: ['Admin'],
  group: Roles.GLOBAL_GROUP
},{
  username: 'rio',
  email: 'rio.adrian@gmail.com',
  password: 'password',
  profile: {
    fullname: 'Rio Adrian',
  },
  bio: 'Short Bio of Rio Adrian',
  roles: ['Admin'],
  group: 'domain.com'
},{
  username: 'philip',
  email: 'philip.herlambang@gmail.com',
  password: 'password',
  profile: {
    fullname: 'Philip Herlambang',
  },
  bio: 'Short Bio of Philip Herlambang',
  roles: ['Member'],
  group: 'domain.com'
},{
  username: 'philip2',
  email: 'philip2.herlambang@gmail.com',
  password: 'password',
  profile: {
    fullname: 'Philip 2 Herlambang',
  },
  bio: 'Short Bio of Philip Herlambang',
  roles: ['Member'],
  group: 'domain.com'
},{
  username: 'philip3',
  email: 'philip3.herlambang@gmail.com',
  password: 'password',
  profile: {
    fullname: 'Philip 3 Herlambang',
  },
  bio: 'Short Bio of Philip Herlambang',
  roles: ['Member'],
  group: 'domain.com'
},{
  username: 'philip4',
  email: 'philip4.herlambang@gmail.com',
  password: 'password',
  profile: {
    fullname: '4 Philip Herlambang',
  },
  bio: 'Short Bio of Philip Herlambang',
  roles: ['Member'],
  group: 'domain.com'
},{
  username: 'philip5',
  email: 'philip.herlambang@gmail.com',
  password: 'password',
  profile: {
    fullname: '5 Philip Herlambang',
  },
  bio: 'Short Bio of Philip Herlambang',
  roles: ['Member'],
  group: 'domain.com'
},{
  username: 'philip6',
  email: 'philip.herlambang@gmail.com',
  password: 'password',
  profile: {
    fullname: '6 Philip Herlambang',
  },
  bio: 'Short Bio of Philip Herlambang',
  roles: ['Member'],
  group: 'domain.com'
},{
  username: 'philip7',
  email: 'philip7.herlambang@gmail.com',
  password: 'password',
  profile: {
    fullname: '7 Philip Herlambang',
  },
  bio: 'Short Bio of Philip Herlambang',
  roles: ['Member'],
  group: 'domain.com'
},{
  username: 'philip8',
  email: 'philip.8herlambang@gmail.com',
  password: 'password',
  profile: {
    fullname: '8 Philip Herlambang',
  },
  bio: 'Short Bio of Philip Herlambang',
  roles: ['Member'],
  group: 'domain.com'
},{
  username: 'philip9',
  email: 'philip.9herlambang@gmail.com',
  password: 'password',
  profile: {
    fullname: '9 Philip Herlambang',
  },
  bio: 'Short Bio of Philip Herlambang',
  roles: ['Member'],
  group: 'domain.com'
},{
  username: 'philip10',
  email: 'philip.10herlambang@gmail.com',
  password: 'password',
  profile: {
    fullname: '10 Philip Herlambang',
  },
  bio: 'Short Bio of Philip Herlambang',
  roles: ['Member'],
  group: 'domain.com'
},{
  username: 'philip11',
  email: 'philip.11herlambang@gmail.com',
  password: 'password',
  profile: {
    fullname: '11 Philip Herlambang',
  },
  bio: 'Short Bio of Philip Herlambang',
  roles: ['Member'],
  group: 'domain.com'
},{
  username: 'philip12',
  email: 'philip.12herlambang@gmail.com',
  password: 'password',
  profile: {
    fullname: '12 Philip Herlambang',
  },
  bio: 'Short Bio of Philip Herlambang',
  roles: ['Member'],
  group: 'domain.com'
},{
  username: 'philip13',
  email: 'philip.13herlambang@gmail.com',
  password: 'password',
  profile: {
    fullname: '13 Philip Herlambang',
  },
  bio: 'Short Bio of Philip Herlambang',
  roles: ['Member'],
  group: 'domain.com'
},{
  username: 'philip14',
  email: 'philip.14herlambang@gmail.com',
  password: 'password',
  profile: {
    fullname: '14 Philip Herlambang',
  },
  bio: 'Short Bio of Philip Herlambang',
  roles: ['Member'],
  group: 'domain.com'
},{
  username: 'philip15',
  email: 'philip.15herlambang@gmail.com',
  password: 'password',
  profile: {
    fullname: '15 Philip Herlambang',
  },
  bio: 'Short Bio of Philip Herlambang',
  roles: ['Member'],
  group: 'domain.com'
},{
  username: 'philip16',
  email: 'philip.16herlambang@gmail.com',
  password: 'password',
  profile: {
    fullname: '16 Philip Herlambang',
  },
  bio: 'Short Bio of Philip Herlambang',
  roles: ['Member'],
  group: 'domain.com'
},{
  username: 'philip17',
  email: 'philip.17herlambang@gmail.com',
  password: 'password',
  profile: {
    fullname: '17 Philip Herlambang',
  },
  bio: 'Short Bio of Philip Herlambang',
  roles: ['Member'],
  group: 'domain.com'
},{
  username: 'philip18',
  email: 'philip.18herlambang@gmail.com',
  password: 'password',
  profile: {
    fullname: '18 Philip Herlambang',
  },
  bio: 'Short Bio of Philip Herlambang',
  roles: ['Member'],
  group: 'domain.com'
},{
  username: 'philip19',
  email: 'philip.19herlambang@gmail.com',
  password: 'password',
  profile: {
    fullname: '19 Philip Herlambang',
  },
  bio: 'Short Bio of Philip Herlambang',
  roles: ['Member'],
  group: 'domain.com'
},{
  username: 'philip20',
  email: 'philip.20herlambang@gmail.com',
  password: 'password',
  profile: {
    fullname: '20 Philip Herlambang',
  },
  bio: 'Short Bio of Philip Herlambang',
  roles: ['Member'],
  group: 'domain.com'
},{
  username: 'philip21',
  email: 'philip.21herlambang@gmail.com',
  password: 'password',
  profile: {
    fullname: '21 Philip Herlambang',
  },
  bio: 'Short Bio of Philip Herlambang',
  roles: ['Member'],
  group: 'domain.com'
},{
  username: 'philip22',
  email: 'philip.22herlambang@gmail.com',
  password: 'password',
  profile: {
    fullname: '22 Philip Herlambang',
  },
  bio: 'Short Bio of Philip Herlambang',
  roles: ['Member'],
  group: 'domain.com'
}];

users.forEach(({ username, email, password, profile, bio, roles, group }) => {
  const userExists = Meteor.users.findOne({ 'emails.address': email });

  if (!userExists) {
    const userId = Accounts.createUser({ username, email, password, profile });
    Roles.addUsersToRoles(userId, roles, group);

    Member.insert({
      _id: userId,
      nickname: username,
      fullname: profile.fullname,
      bio: bio,
      type: roles[roles.length-1],
      status: 'Active'
    });

  }
});

