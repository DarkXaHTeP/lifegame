import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Button } from 'react-bootstrap';

function Page(props) {
    return <div>
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    Game of Life
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <li><LinkContainer to={{ pathname: '/game' }}><Button>Game </Button></LinkContainer></li>
                <li><LinkContainer to={{ pathname: '/about' }}><Button>About</Button></LinkContainer></li>
            </Nav>
        </Navbar>
        <div>
            {props.children}
        </div>
    </div>
}

export default Page;