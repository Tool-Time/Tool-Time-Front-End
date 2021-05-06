import React from 'react';
// import { withAuth0 } from '@auth0/auth0-react';
import { Modal, Button, Table, Container, } from 'react-bootstrap';
class Profile extends React.Component {

  render() {

    return (

      <Modal show={this.props.showModal} onHide={this.props.handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.selectedUser.name} 👍, Hey Yo!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Table striped bordered hover>
              <thead>
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
              </thead>
              <tbody>
                {this.props.selectedUser.tools.map((tool, idx) => {
                  return (
                    <tr>
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
                        {tool.Availability}
                      </td>
                      <td>
                        {tool.owner}
                      </td>
                      <td>
                        {tool.borrowedBy}
                      </td>
                      <td>
                        <Button>
                          Borrow
                       </Button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
        </Button>
          <Button variant="primary" onClick={this.props.handleClose}>
            Select
        </Button>
        </Modal.Footer>
      </Modal>


    );
  };
}



export default Profile;