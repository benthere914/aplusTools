import './index.css'
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { signOut, getAuth } from 'firebase/auth'

const Header = ({user}) => {
    const history = useHistory();
    const signOutHandler = () => {
        const auth = getAuth();
        signOut(auth);
    }
    return (
		<>
			<Navbar bg="primary" variant="dark">
				<Container>
					<Nav className="me-auto">
						<Nav.Link onClick={() => {history.push('/')}}>Home</Nav.Link>
                        {user?<div className='loggedInHeaderOptions'>
                        <Nav.Link onClick={()=> {signOutHandler()}}>Log Out</Nav.Link>
                        <Dropdown>
                            <Dropdown.Toggle>Tools</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => {history.push('/priceCalc')}}>Price Calculator</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        </div>:
                        <>
						<Nav.Link onClick={() => {history.push('/login')}}>Log In</Nav.Link>
						<Nav.Link onClick={() => {history.push('/signup')}}>Sign Up</Nav.Link>
                        </>
                        }
					</Nav>
				</Container>
			</Navbar>
		</>
	);
}

export default Header
