import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import ConceptCard from './ConceptCard';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import QuestionCard from './QuestionCard';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import pc from './images/pc.jpg';
import Divider from '@material-ui/core/Divider';
import Quiz from './Quiz';
import ci from './images/ci.jpeg';
import QuestionProgress from './QuestionProgress';

const useStyles = makeStyles({
  root: {
   minHeight: 200,
   minWidth: 200
  },
  
  imgStyle: {
    
    maxWidth: 640,
    maxHeight: 260,
  
  },
});


const ProblemPage = () => {
   const classes = useStyles();

    return (
        
        <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" style={{marginTop: 50}}>



        <Grid container xs={12} direction="row" spacing={3}>

        <Grid container item xs={12} sm={12} md={1}></Grid>
            <Grid container item xs={12} sm={12} md={4} justify="center"
  alignItems="flex-start">

           {/* CONCEPT CARD */}

           

           <Card className={classes.root} >
     <Grid container xs={12} justify="center"
  alignItems="center">
     <CardMedia>
     <img className={classes.imgStyle} src={ci}></img>
     </CardMedia>
       
   
     <CardContent>
       <Typography gutterBottom variant="h5" component="h2">
         Lizard
       </Typography>
       <Typography style={{marginBottom: 25}} variant="body2" color="textSecondary" component="p">
         Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
         across all continents except Antarctica
         Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
         across all continents except Antarctica. 
        
         
       </Typography>
       <QuestionProgress ></QuestionProgress>
       
     </CardContent>
     <Typography style={{marginBottom: 25}}>Mastery Points available: 1000</Typography>
     </Grid>
   
 </Card>

      
          
            
           

            </Grid>

            {/* QUIZ APP */}

            <Grid container item xs={12} sm={12} md={6}>

            <Card className={classes.questionStyle}>
      
      <CardContent>
        <div style={{marginTop: 50, marginBottom:50, marginLeft:25, marginRight:25}}>
        <Grid container xs={12} direction="column" spacing={3}>

        <Grid container item justify="center" alignItems="center">

        
        <Typography gutterBottom variant="h5" component="h2">
          Question Name
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica. 
          Why do we use it?
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
        </Typography>

        </Grid>
        
        <Divider style={{marginTop: 50, marginBottom: 50}}></Divider>
        
        <Grid container item justify="center" alignItems="center">

        <img className={classes.imgStyle} src={ci}></img>
        </Grid>
        
        <Divider style={{marginTop: 50, marginBottom: 50}}></Divider>
       
        <Grid  container item justify="center" alignItems="center">

        <Quiz></Quiz>
       
        </Grid>
      
        </Grid>
        </div>
        


      </CardContent>
    
    
  </Card>



            </Grid>

            <Grid container item xs={12} sm={12} md={1}>

           



            </Grid>

            

        </Grid>
       
       
            
     
      </Container>
    </React.Fragment>

      
    )
}

export default ProblemPage
