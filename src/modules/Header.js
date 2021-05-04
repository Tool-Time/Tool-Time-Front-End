import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

function Header() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Tool Time</Navbar.Brand>
        <Link to="/" className="mr-2">home</Link>
        <Button variant="outline-success" className="mr-2">Login</Button>
        <Button variant="outline-success">Logout</Button>
      </Navbar>
    )
}

export default Header;