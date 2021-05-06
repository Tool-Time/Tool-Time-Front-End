import React from 'react';
import { Component } from 'react';
import Form from 'react-bootstrap/Form';


export default class SearchForm extends Component {
      render() {
        return (
          <Form inline>
            <Form.Group>
              <Form.Label className="mr-2" style={{color: "white"}}>Filter Tools by Category</Form.Label>
              <Form.Control as="select"
              onChange={this.props.handleChange}
              value={this.props.category}>
                <option value=''>Category</option>
                <option value='Demolition'>Demolition</option>
                <option value='Carpentry'>Carpentry</option>
                <option value='Flooring'>Flooring</option>
                <option value='Gardening'>Gardening</option>
                <option value='Painting'>Painting</option>
              </Form.Control>
            </Form.Group>
          </Form>
        );
    }
}