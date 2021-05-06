import React from 'react';
// import { withAuth0 } from '@auth0/auth0-react';
import { Modal, Button } from 'react-bootstrap';
class Profile extends React.Component {
 
  render() {
 
    return (

      <Modal show={this.props.showModal}>
      <Modal.Header closeButton>
        <Modal.Title>{this.props.selectedUser.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{this.props.selectedUser.tools[2].name}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={this.props.handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={this.props.handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>

     
    );
  };
}



export default Profile;