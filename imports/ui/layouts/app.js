import React from 'react';
import { Grid } from 'react-bootstrap';
import AppNavigation from '../containers/app-navigation';
import PageNavigation from '../containers/page-navigation';
// import { Footer } from '../components/footer';

export const App = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired,
  },
  render() {
    return <div>
      <AppNavigation />
      <Grid>
        <PageNavigation routeName = { this.props.routes[this.props.routes.length-1].name } params = { this.props.params }/>
      </Grid>
      <Grid>
        { this.props.children }
      </Grid>
    </div>;
  },
});
