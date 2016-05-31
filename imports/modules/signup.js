import $ from 'jquery';
import 'jquery-validation';
import { browserHistory } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
import { Bert } from 'meteor/themeteorchef:bert';
import { getInputValue } from './get-input-value';

let component;

const getUserData = () => ({
  email: getInputValue(component.refs.emailAddress),
  password: getInputValue(component.refs.password),
  profile: {
    fullname: getInputValue(component.refs.fullName)
  },
});

const signUp = () => {
  const user = getUserData();

  Accounts.createUser(user, (error) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      Meteor.call('Member.create', {userId:Meteor.userId()}, function(error,result){
        if(error){
          Meteor.logout();
          Bert.alert(error.message,'danger');
          //FIXME seharusnya notify admin untuk mengecek kesalahan
        }else{
          console.log('result', result);
          browserHistory.push('/');
          Bert.alert('Welcome!', 'success');
        }
      });
    };
  });
};

const validate = () => {
  $(component.refs.signup).validate({
    rules: {
      fullName: {
        required: true,
      },
      emailAddress: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 6,
      },
    },
    messages: {
      fullName: {
        required: 'Full Name?',
      },
      emailAddress: {
        required: 'Need an email address here.',
        email: 'Is this email address legit?',
      },
      password: {
        required: 'Need a password here.',
        minlength: 'Use at least six characters, please.',
      },
    },
    submitHandler() { signUp(); },
  });
};

export const handleSignup = (options) => {
  component = options.component;
  validate();
};
