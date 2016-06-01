import $ from 'jquery';
import 'jquery-validation';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import { getInputValue } from './get-input-value';

import { initInfiniteScroll } from '/imports/modules/utils';

let component;

const search = () => {
  const searchText = getInputValue(component.refs.searchText);
  if(searchText === "")
    Session.delete('searchText');
  else
    Session.set('searchText', searchText);

  initInfiniteScroll(Session.get('methodCountName'), searchText);
};

const validate = () => {
  $(component.refs.searchForm).validate({
    rules: {
      searchText: {
        minlength: 3,
      },
    },
    messages: {
      searchText: {
        minlength: 'search needs at least 3 characters',
      },
    },
    submitHandler() { search(); },
  });
};

export const handleSearch = (options) => {
  component = options.component;
  validate();
};
