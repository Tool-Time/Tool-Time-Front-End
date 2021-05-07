import React from 'react';
// import { withAuth0 } from '@auth0/auth0-react';
import { Modal, Button, Table, Container, } from 'react-bootstrap';
class Profile extends React.Component {

  render() {
    const email = this.props.authUser.email;
    const currentUser = this.props.allUsers.find(user => user.email === email);

    return (
      <Modal show={this.props.showModal} onHide={this.props.handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.selectedUser.name} 👍, Hey Yo!</Modal.Title>
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
                {this.props.selectedUser.tools.map((tool, idx) => {
                  return (
                    <tr key={idx}>
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
                        {`${tool.Availbility}`}
                      </td>
                      <td>
                        {tool.owner}
                      </td>
                      <td>
                        {tool.borrowedBy}
                      </td>
                      <td>
                        {tool.Availbility ? 
                        <Button
                        variant='success' 
                        value={`${idx},${currentUser._id}`} 
                        onClick={this.props.borrowTool}>
                          Borrow
                        </Button>
                        :
                        <Button variant='warning'>
                          Return
                        </Button>
                      }
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </Container>
        </Modal.Body>
      </Modal>


    );
  };
}



export default Profile;