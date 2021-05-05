import React from 'react';
import { Component } from 'react';
import Form from 'react-bootstrap/Form';


export default class SearchForm extends Component {
      
      render() {
        return (
          
          <Form.Group>
              <Form.Label>Select tools</Form.Label>
            <Form.Control as="select" size="lg" onChange={this.props.onChange}>
              <option value='All tools'>All tools</option>
              <option value='Gardening'>Gardening</option>
              <option value='Carpentry'>Carpentry</option>
              <option value='Locksmith tools'>Locksmith tools</option>
              <option value='Other tools'>Other tools</option>
            </Form.Control>
          </Form.Group>
        );
    }
}