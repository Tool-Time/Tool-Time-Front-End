import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function Footer() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Tool Time</Navbar.Brand>
        <Button variant="outline-success" className="mr-2">Login</Button>
        <Button variant="outline-success">Logout</Button>
      </Navbar>
    )
}

export default Footer;