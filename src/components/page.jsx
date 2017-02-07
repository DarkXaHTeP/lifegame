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
                <LinkContainer to={{ pathname: '/game' }}><NavItem>Game </NavItem></LinkContainer>
                <LinkContainer to={{ pathname: '/about' }}><NavItem>About</NavItem></LinkContainer>
            </Nav>
        </Navbar>
        <div>
            {props.children}
        </div>
    </div>
}

export default Page;