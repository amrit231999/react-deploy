import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography, Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import ConceptCard from './ConceptCard';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import QuestionCard from './QuestionCard'
import { makeStyles } from '@material-ui/core/styles';
import Footer from './Footer';
import pc from './images/pc.jpg';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import flex from './images/flex.png';
import mind from './images/mind.png';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
import FormatListNumberedOutlinedIcon from '@material-ui/icons/FormatListNumberedOutlined';



const useStyles = makeStyles ( (theme) => ({
    buttonStyles: {
        background: "#008080",
        color: "white",
        textDecoration: "none"
    },
    contentStyles: {
        padding: 40,
        lineHeight: 6,
        
    },
    imgStyle: {
        padding: 40,
        maxHeight: 450
    },
    img2Style: {
        paddingBottom: 25,
        maxHeight: 475
    },
    pointStyles: {
        marginTop: 5,
        padding: 50
    },
    fontStyle: {
        fontFamily: "Helvetica",
    },
    learningStyle:{

    },
    spanStyle: {
        color: "#fdb827"
    },
    leaRev: {
        color: "#d00000",
    }

    
}));


const Home = () => {
    const classes = useStyles();
    return (
        
        <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" >
       
      

     {/* CURIOSITY MEETS ACCESS */}
      

      <div style={{paddingTop: 50, paddingBottom: 50}}>
      
      <Grid container xs={12} direction="row" justify="center"
  alignItems="center" >
          
          <Grid item container xs={12} sm={12} md={6} justify="center"
  alignItems="center">
            
            <div className={classes.contentStyles}>
            
            <div style={{marginBottom: 25}}>
            <Typography variant="h2" > <strong>Curiosity <br></br>meets Access <br></br></strong></Typography>
            </div>

            <div style={{marginBottom: 25}}>
            <Typography variant="h6"  >Introducing a new way to learn with interactive, handson learning modules. LifeShala makes learning fun for everyone. <br></br></Typography>
            </div>

            <Link to="./courses" style={{textDecoration: "none"}}>
            <Button variant="contained" color="secondary" size="large" style={{color: "white", background: "#008080"}}>Start Learning</Button>
            
            </Link>
           
            </div>
            
            
          </Grid>
          <Grid item container xs={12} sm={12} md={6} justify="center"
  alignItems="center" >
            <img className={classes.imgStyle} src={flex}></img>
            
          </Grid>
          

      </Grid>
      </div>

      <Divider variant="fullWidth"></Divider>
     
        {/* 3 POINTS */}

        <div style={{paddingTop: 50, paddingBottom: 50}}>
        <Typography style={{textAlign: "center"}} variant="h2"> <strong>A Bicycle <span className={classes.spanStyle} >for the Mind</span></strong></Typography>
      
      <Grid container xs={12} direction="row" >
          
          <Grid item container xs={12} sm={12} md={6} justify="center"
  alignItems="center" direction="column">
            
          <img className={classes.img2Style} src={mind}></img>
         
            
          </Grid>
          
         
          <Grid item container xs={12} sm={12} md={6} justify="center"
  alignItems="center" >
           
           <div className={classes.pointStyles}>
           <Typography style={{color: "#D00000", marginBottom: 20}} variant="h5"> <EmojiObjectsOutlinedIcon fontSize="large"></EmojiObjectsOutlinedIcon><strong> Interactive Learning Modules</strong></Typography>
           <Typography style={{marginBottom: 40}}variant="h6">High quality interactive animated videos from some of the finest content creators and educators which will help young students learn basic life skills.</Typography>
           <p></p>
           <Divider></Divider>
           <p></p>
           <Typography style={{color: "#3A0CA3", marginBottom: 20}} variant="h5"> <SportsEsportsOutlinedIcon fontSize="large"></SportsEsportsOutlinedIcon><strong> Online Games</strong></Typography>
           <Typography style={{marginBottom: 20}} variant="h6">Games which will help them learn while having fun. Our aim is to motivate them to start building things at an early age.</Typography>
           <p></p>
           <Divider></Divider>
           <p></p>
           <Typography style={{color: "#43aa8b", marginBottom: 20}} variant="h5"><FormatListNumberedOutlinedIcon variant="large"></FormatListNumberedOutlinedIcon><strong> Contests</strong></Typography>
           <Typography  style={{marginBottom: 20}} variant="h6"> Daily, Weekly and Monthly challenges and contests to help them master certain skills and giving them a chance to win exciting rewards.</Typography>
           </div>
           
           </Grid>
        
      </Grid>
      </div>

      <Divider></Divider>

        <p></p>
        <br></br>
      {/* BRING ON THE LEARNING REVOLUTION */}
      <Typography variant="h2" style={{textAlign: "center"}}> <strong>Bring on the <span className={classes.leaRev}>Learning Revolution</span></strong></Typography>
      <p></p>
      <br></br>     
      
      <Grid container direction="row" xs={12}>
            



      </Grid>
      
     
     
        
<p></p>
      <Divider></Divider>

<p></p>

<Typography variant="h4" style={{textAlign: "center"}}>Join now and    <Link to="./courses"  style={{textDecoration: "none"}}>
<Button variant="contained" color="secondary" size="large" style={{color: "white", background: "#008080"}}>Start Learning</Button>
            </Link> </Typography>

      
        
     
      </Container>

      <p></p>
      <br></br>

      <Footer></Footer>
       


    </React.Fragment>

      
    )
}

export default Home
