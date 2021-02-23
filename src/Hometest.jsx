import React from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import ConceptCard from './ConceptCard';
import CssBaseline from '@material-ui/core/CssBaseline';

import QuestionCard from './QuestionCard'
import { makeStyles } from '@material-ui/core/styles';

import pc from './images/pc.jpg';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Footer from './Footer';
import { Link } from 'react-router-dom';


const useStyles = makeStyles ( (theme) => ({
    buttonStyles: {
        background: "#008080",
        color: "white",
        textDecoration: "none"
    },
    contentStyles: {
        padding: 75,
        lineHeight: 6,
        marginLeft: 75
    },
    imgStyle: {
        padding: 75,
        maxHeight: 500
    },
    img2Style: {
        padding: 50,
        maxHeight: 600
    },
    pointStyles: {
        marginTop: 5,
        padding: 75
    },
    fontStyle: {
        fontFamily: "Helvetica",
    },
    learningStyle:{

    }

    
}));

const Hometest = () => {

    const classes = useStyles();
    return (
        <Container fluid>
            <Row>
               
               <Col  className="ml-5 mr-5 mt-5"  xs={6}>
               <Typography variant="h2"> <strong>Curiosity <br></br>meets Access <br></br></strong></Typography>
            <p></p>

            <Typography variant="h6">Introducing a new way to learn with interactive, handson learning modules. LifeShala makes learning fun for everyone. <br></br></Typography>
            <p></p>
            <Link to="./courses" style={{textDecoration: "none", padding: 15}}>
            <Button variant="info" size="lg" > Start Learning</Button>{' '}
            </Link>
               </Col>



               <Col xs={6}>
               
               </Col>


            </Row>

        </Container>


        
    )
}

export default Hometest
