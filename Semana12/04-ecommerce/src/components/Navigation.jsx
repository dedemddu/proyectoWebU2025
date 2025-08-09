import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Navigation = ()=> {
  return (
    <Navbar className='bg-body-tertiary' expand="lg">
        <Container>
          <Navbar.Brand >
                Opciones
          </Navbar.Brand>
          <Navbar.Toggle aria-control="basic-navbar-nav"/>
          <Navbar.Collapse id='basic-navbar-nav' >
            <Nav className='me-auto'>
                <Link to="/" className='nav-link'>Lista de Productos</Link>
                <Link to="/createproduct" className='nav-link'>Nuevo producto</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
  );
}

export default Navigation;