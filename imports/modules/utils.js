import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

import { Loading } from '/imports/ui/components/loading';

export const toggleNav = () => {
	if($('.navbar-toggle.collapsed').length == 0)
		$('.navbar-toggle').click();
};

export const handleLogout = () => Meteor.logout(() => browserHistory.push('/'));

export const resetInputValue = (component) => {
	ReactDOM.findDOMNode(component).blur()
	ReactDOM.findDOMNode(component).value= '';
};

export const goLink = (path) => browserHistory.push(path);

export const renderLoadingState = () => {

	// if(Session.get('queryLimit') < Session.get('queryMax')) 
	// 	return <Loading />;
	
	if(Session.get('queryInfinite')){
		if(Session.get('queryProcess'))
			return <Loading />;
		else
			return 'load more...';
	}

	return '';	
};

export const infiniteScroll = () => {
  if(Session.get('queryInfinite')){

	  $(window).scroll(
	    _.throttle(function() {
	      
	      	if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
		        // self.props.incrementLimit();          
		        if(Session.get('queryLimit') < Session.get('queryMax')){
		          console.log('lanjut');
		          Session.set('queryLimit', Session.get('queryLimit')+Session.get('queryStep'));
		          Session.set('queryProcess', true);
		        }
		        else{
		        	console.log('harusnya selesai');
		          Session.set('queryLimit', Session.get('queryMax'));
		          Session.set('queryProcess', false);
		          Session.set('queryInfinite', false);
		        }
	      	}
	      
	    }, 1000)

	  );
	};

}