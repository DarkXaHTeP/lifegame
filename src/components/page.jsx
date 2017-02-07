import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

function Page(props) {
    return <div className="container-fluid">
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    Game of Life
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <li><LinkContainer to={{ pathname: '/game' }}><NavItem>Game </NavItem></LinkContainer></li>
                <li><LinkContainer to={{ pathname: '/about' }}><NavItem>About</NavItem></LinkContainer></li>
            </Nav>
        </Navbar>
        <div>
            {props.children}
        </div>
    </div>
}

export default Page;