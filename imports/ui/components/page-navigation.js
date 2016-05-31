import React from 'react';

import { MyMenu } from '/imports/ui/components/my/MyMenu';
import { MySettingMenu } from '/imports/ui/components/my/setting/MySettingMenu';

export class PageNavigation extends React.Component {

  renderNavigation(hasUser, routeName, params) {

    switch(routeName){

      case 'my.page':
        return <MyMenu hasUser={ hasUser } params={ params } />;

      case 'my.setting':
        return <MySettingMenu hasUser={ hasUser } params={ params } />;

      case 'adm.member.list':{
        return '';
      }
 
    }

    return '';
  }

  render() {
    return <div>
      { this.renderNavigation(this.props.hasUser, this.props.routeName, this.props.params) }
    </div>;
  }
}

PageNavigation.propTypes = {
  hasUser   : React.PropTypes.object,
  routeName : React.PropTypes.string.isRequired,
  params    : React.PropTypes.object
};
