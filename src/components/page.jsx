import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem, Grid } from 'react-bootstrap';

const Page = (props) =>
    <div>
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
        <Grid fluid={true}>
            {props.children}
        </Grid>
    </div>

export default Page;