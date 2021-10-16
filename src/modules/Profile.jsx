/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useCallback } from 'react';

import {
  Modal, Button, Table, Container,
} from 'react-bootstrap';

function Profile({
  authUser, allUsers, showModal, setShowModal, selectedUser, borrowTool,
}) {
  const hideModal = useCallback(() => setShowModal(false), []);

  const { email } = authUser;
  const currentUser = allUsers.find((user) => user.email === email);

  return (
    <Modal show={showModal} onHide={hideModal} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>
          {selectedUser.name}
          {' '}
          👍, Hey Yo!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>
                  #
                </th>
                <th>
                  Tool Name
                </th>
                <th>
                  Category
                </th>
                <th>
                  Availability
                </th>
                <th>
                  Owner
                </th>
                <th>
                  Borrowed By
                </th>
                <th>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {selectedUser.tools.map((tool, idx) => (
                <tr key={tool.name}>
                  <td>
                    {idx + 1}
                  </td>
                  <td>
                    {tool.name}
                  </td>
                  <td>
                    {tool.category}
                  </td>
                  <td>
                    {`${tool.Availability}`}
                  </td>
                  <td>
                    {tool.owner}
                  </td>
                  <td>
                    {tool.borrowedBy}
                  </td>
                  <td>
                    {tool.Availability
                      ? (
                        <Button
                          variant="success"
                          value={`${idx},${currentUser._id}`}
                          onClick={borrowTool}
                        >
                          Borrow
                        </Button>
                      )
                      : (
                        <Button variant="warning">
                          Return
                        </Button>
                      )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </Modal.Body>
    </Modal>

  );
}

export default Profile;
