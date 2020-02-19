//Will wrap our components to have a similar look/feel
import React from 'react';
//import { Container } from 'react-bootstrap';
//NOTE: This will pull the entire react-bootstrap library. By using: import Container from 'react-bootstrap/Container' we only pull container feats.
import { Container } from 'react-bootstrap';

//This will render DIRECTLY in the centre
export const Layout = (props) => (
    <Container>
        {props.children}
    </Container>
)