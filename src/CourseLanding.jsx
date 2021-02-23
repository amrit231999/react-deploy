import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import CourseTile from './CourseTile';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ci from './images/ci.jpeg';
import Divider from '@material-ui/core/Divider';
import Footer from './Footer';

const useStyles = makeStyles ( (theme) => ({
    buttonStyles: {
        background: "#008080",
        color: "white"
    },
    contentStyles: {
        padding: 50
        
    
    },
    imgStyle: {
        padding: 50,
        maxHeight: 400
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
    linkStyle: {
        textDecoration: "none",
    }

    
}));

const CourseLanding = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
        
        <CssBaseline />
        <Container maxWidth="lg" style={{marginBottom: 100, marginTop: 50}}>

        

        <Grid container xs={12} direction="row" style={{marginBottom: 50}}>
          <Grid item container xs={12} sm={6} justify="center"
  alignItems="center" direction="column">
            
            <div className={classes.contentStyles}>
            
            <Typography style={{marginBottom: 20}} variant="h2"> <strong>Compound Interest</strong></Typography>
            
            <Typography style={{marginBottom: 20}} variant="h6">Learn the fundamentals of compound interest and the importance of time. <br></br></Typography>

            <Typography style={{marginBottom: 20}} variant="body" >Compound interest is the addition of interest to the principal sum of a loan or deposit, or in other words, interest on interest. It is the result of reinvesting interest, rather than paying it out, so that interest in the next period is then earned on the principal sum plus previously accumulated interest. </Typography>
            
            <Typography style={{marginTop: 20, color: "#008080"}}>Prerequisites: Basics of algebra and exponents</Typography>
            
           
           
            </div>

           
          </Grid>
          <Grid item container xs={12} sm={6} justify="center"
  alignItems="center" direction="column" >
            <img className={classes.imgStyle} src={ci}></img> 
            
           
            <Link to="./problem" style={{textDecoration: "none"}}>
            <Button variant="contained" color="secondary" size="large" style={{color: "white", background: "#008080"}}>Start this Course</Button>
            
            </Link>
            
            
          </Grid>

      </Grid>

      <Divider></Divider>

      <Container maxWidth="md">
        
        <div style={{marginTop: 40, marginBottom: 20}}>
        <Typography variant="h3">Level 1</Typography>
        <Typography variant="h6">Beginner</Typography>
        
        </div>

        <Grid container direction="row" xs={12} spacing={4} justify="center"
  alignItems="center" >
            <Grid container item xs={12} sm={6} md={4}>
                <Link to="./problem" className={classes.linkStyle} style={{textDecoration: "none"}}><CourseTile></CourseTile>
                </Link>
                
            </Grid>
            <Grid container item xs={12} sm={6} md={4}>
            <CourseTile></CourseTile>
            </Grid>
            <Grid container item xs={12} sm={6} md={4}>
            <CourseTile></CourseTile>
            </Grid>
            
        </Grid>


        <div style={{marginTop: 40, marginBottom: 20}}>
        <Typography variant="h3">Level 2</Typography>
        <Typography variant="h6">Intermediate</Typography>
        
        </div>

        <Grid container direction="row" xs={12} spacing={4}>
            <Grid container item xs={12} sm={6} md={4}>
                <Link to="./problem" className={classes.linkStyle}><CourseTile></CourseTile>
                </Link>
                
            </Grid>
            <Grid container item xs={12} sm={6} md={4}>
            <CourseTile></CourseTile>
            </Grid>
            <Grid container item xs={12} sm={6} md={4}>
            <CourseTile></CourseTile>
            </Grid>
            
        </Grid>

        <div style={{marginTop: 40, marginBottom: 20}}>
        <Typography variant="h3">Level 3</Typography>
        <Typography variant="h6">Advanced</Typography>
        
        </div>

        <Grid container direction="row" xs={12} spacing={4}>
            <Grid container item xs={12} sm={6} md={4}>
                <Link to="./problem" className={classes.linkStyle}><CourseTile></CourseTile>
                </Link>
                
            </Grid>
            <Grid container item xs={12} sm={6} md={4}>
            <CourseTile></CourseTile>
            </Grid>
            <Grid container item xs={12} sm={6} md={4}>
            <CourseTile></CourseTile>
            </Grid>
            
        </Grid>


        </Container>
       

        
        
        
        </Container>

        <Footer ></Footer>

    </React.Fragment>
    )
}

export default CourseLanding
