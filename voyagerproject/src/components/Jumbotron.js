import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import testImage from '../assets/logo.png'

const Styles = styled.div``;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>Welcome</h1>
                <p>The supreme leader in a wide range of vehicle trailers</p>
            </Container>
        </Jumbo>
    </Styles>
)