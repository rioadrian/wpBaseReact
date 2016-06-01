import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';

import { App } from '/imports/ui/layouts/app';

import { Documents } from '/imports/ui/pages/documents';
import { Index } from '/imports/ui/pages/index';
import { Login } from '/imports/ui/pages/login';
import { NotFound } from '/imports/ui/pages/not-found';
import { RecoverPassword } from '/imports/ui/pages/recover-password';
import { ResetPassword } from '/imports/ui/pages/reset-password';
import { Signup } from '/imports/ui/pages/signup';

import { MyPage } from '/imports/ui/pages/my/MyPage';
import { MyAcctListPage } from '/imports/ui/pages/my/acct/list/MyAcctListPage';
import { MyAcctPage } from '/imports/ui/pages/my/acct/MyAcctPage';
import { MySettingPage } from '/imports/ui/pages/my/setting/MySettingPage';
import { MySettingChangePasswordPage } from '/imports/ui/pages/my/setting/change/password/MySettingChangePasswordPage';


import { AdmMemberListPage } from '/imports/ui/pages/adm/member/AdmMemberListPage';
import { AdmMemberPage } from '/imports/ui/pages/adm/member/AdmMemberPage';


const requireAuth = (nextState, replace) => {
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
};

Meteor.startup(() => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute name="index" component={ Index }  />
        
        <Route name="documents" path="/documents" component={ Documents } onEnter={ requireAuth } />
        
        <Route name="login" path="/login" component={ Login } />
        <Route name="recover-password" path="/recover-password" component={ RecoverPassword } />
        <Route name="reset-password" path="/reset-password/:token" component={ ResetPassword } />
        <Route name="signup" path="/signup" component={ Signup } />

        <Route name="my.page" path="/my/page" component={ MyPage } onEnter={ requireAuth }/>
        <Route name="my.acct.list" path="/my/acct/list" component={ MyAcctListPage } onEnter={ requireAuth }/>
        <Route name="my.acct.page" path="/my/acct/:acctId" component={ MyAcctPage } onEnter={ requireAuth }/>
        <Route name="my.setting" path="/my/setting" component={ MySettingPage } onEnter={ requireAuth }/>
        <Route name="my.setting.change.password" path="/my/setting/change/password" component={ MySettingChangePasswordPage } onEnter={ requireAuth }/>

        <Route name="adm.member.list" path="/adm/member/list" component={ AdmMemberListPage } onEnter={ requireAuth }/>
        <Route name="adm.member.page" path="/adm/member/:memberId" component={ AdmMemberPage } onEnter={ requireAuth }/>
        
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>,
    document.getElementById('react-root')
  );
});
