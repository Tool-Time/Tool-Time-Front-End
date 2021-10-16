/* eslint-disable react/prop-types */

import React, { useState, useCallback, useEffect } from 'react';
import Form from 'react-bootstrap/Form';

function SearchForm({ filterUsersByTool }) {
  const [category, setCategory] = useState('');

  const handleChange = useCallback((e) => {
    setCategory(e.target.value);
  }, []);

  useEffect(() => {
    filterUsersByTool(category);
  }, [category]);

  return (
    <Form inline>
      <Form.Group>
        <Form.Label className="mr-2" style={{ color: 'white' }}>Filter by Category</Form.Label>
        <Form.Control
          as="select"
          onChange={handleChange}
          value={category}
        >
          <option value="">Category</option>
          <option value="demolition">Demolition</option>
          <option value="carpentry">Carpentry</option>
          <option value="flooring">Flooring</option>
          <option value="gardening">Gardening</option>
          <option value="painting">Painting</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
}

export default SearchForm;
