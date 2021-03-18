import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';

export default function Menu() {
  return (
    <Navbar bg="dark" expand="sm" variant="dark">
      <style jsx="true">{`
        .logo {
          max-width: 180px;
        }

        .nav-link {
          padding: 0.5rem 1rem;
        }
      `}</style>
      <Container className="justify-content-between">
        <Link href="/">
          <Navbar.Brand>
            <a>
              <img
                src="logo-nasa-kids.png"
                className="logo"
                alt="Nasa for kids"
              />
            </a>
          </Navbar.Brand>
        </Link>
        <Nav>
          <Link href="/">
            <a className="nav-link">Home</a>
          </Link>
          <Link href="/mars">
            <a className="nav-link">Mars</a>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
