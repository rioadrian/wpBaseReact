import React from 'react';
import { Link } from 'react-router';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { handleSearch } from '/imports/modules/search';

export class SearchForm extends React.Component {
  componentDidMount() {
  	Session.delete('searchText');
    handleSearch({ component: this });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return <form ref="searchForm" onSubmit={ this.handleSubmit }>
    	<Row>
      	<Col xs={ 8 } sm={ 10 }>
          <FormGroup>
            <FormControl
              type="text"
              ref="searchText"
              name="searchText"
              standalone
            />
          </FormGroup>
        </Col>
        <Col xs={ 4 } sm={ 2 }>
          <Button 
          	type="submit" 
          	bsStyle="success" 
          	className="btn-block">
          	Search
          </Button>
      	</Col>
    	</Row>
    </form>;
  }
}
