import React from 'react';
// import { withAuth0 } from '@auth0/auth0-react';
// import { Container, Card } from 'react-bootstrap';

class Profile extends React.Component {
  render() {
    // const { user } = this.props.auth0;
    return(
      <Container>
        <Card>
          <h1>{`Welcome, ${user.name}`}</h1>
          <h2>{user.email}</h2>
        </Card>
      </Container>
    );
  }
}

export default Profile;