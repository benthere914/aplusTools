import './index.css'
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { signOut, getAuth } from 'firebase/auth'
import { useEffect, useState } from 'react'

const Header = ({user}) => {
    const [page, setPage] = useState('')
    const history = useHistory();
    const signOutHandler = () => {
        const auth = getAuth();
        signOut(auth);
    }
    useEffect(() => {
        if (!page) return
        if (page === history?.location?.pathname) return
        history.push(page)
    }, [page])
    return (
		<>
			<Navbar bg="primary" variant="dark">
				<Container>
					<Nav className="me-auto">
						<Nav.Link onClick={() => {setPage('/')}}>Home</Nav.Link>
                        {user?<div className='loggedInHeaderOptions'>
                        <Nav.Link onClick={()=> {signOutHandler()}}>Log Out</Nav.Link>
                        <Dropdown>
                            <Dropdown.Toggle>Tools</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => {setPage('/tools/priceMultiplier')}}>Price Mulitiplier</Dropdown.Item>
                                <Dropdown.Item onClick={() => {setPage('/tools/diagnostic/lookup')}}>Diagnostic Lookup</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        </div>:
                        <>
						<Nav.Link onClick={() => {setPage('/login')}}>Log In</Nav.Link>
						<Nav.Link onClick={() => {setPage('/signup')}}>Sign Up</Nav.Link>
                        </>
                        }
					</Nav>
				</Container>
			</Navbar>
		</>
	);
}

export default Header
