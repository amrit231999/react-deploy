import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import { CardActionArea } from '@material-ui/core';
import Search from './Search';
import Divider from '@material-ui/core/Divider';
import CourseTile from './CourseTile';
import Footer from './Footer';



const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  buttonStyles: {
    background: "#008080",
    color: "white"
},
contentStyles: {
    padding: 50,
    lineHeight: 6,

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
linkStyle: {
    textDecoration: "none",
}
}));



export default function CourseCatalogue() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      
     
        
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Courses
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Choose from a variety of courses that will help improve your problem solving skills.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Search></Search>
                <Divider></Divider>
              </Grid>
            </div>
          </Container>
        </div>


        
        
        
        <Container className={classes.cardGrid} maxWidth="md">

          <Typography style={{marginBottom: 8}} variant="h4"><strong>Fundamentals</strong></Typography>
          <Typography style={{marginBottom: 8}} variant="h6">Start with the basics and work your way up</Typography>
          <Divider style={{marginBottom: 20}}></Divider>
          <Grid container spacing={4}>
            
              <Grid item  xs={12} sm={6} md={4}>
                
              <Link to="./courselanding" className={classes.linkStyle} style={{textDecoration: "none"}}><CourseTile></CourseTile>
                </Link>
             
              </Grid>
        

              <Grid item  xs={12} sm={6} md={4}>
                
                <Link to="./problem" className={classes.linkStyle} style={{textDecoration: "none"}}><CourseTile></CourseTile>
                  </Link>
                  
                  
                  
                </Grid>

                <Grid item  xs={12} sm={6} md={4}>
                
              <Link to="./problem" className={classes.linkStyle} style={{textDecoration: "none"}}><CourseTile></CourseTile>
                </Link>
                
                
                
              </Grid>
          </Grid>
        </Container>
      

        <Container className={classes.cardGrid} maxWidth="md">

<Typography style={{marginBottom: 8}} variant="h4"><strong>Logic and Aptitude</strong></Typography>
<Typography style={{marginBottom: 8}} variant="h6">Sharpen your analytical and problem solving skills</Typography>
<Divider style={{marginBottom: 20}}></Divider>
<Grid container spacing={4}>
  
    <Grid item  xs={12} sm={6} md={4}>
      
    <Link to="./courselanding" className={classes.linkStyle} style={{textDecoration: "none"}}><CourseTile></CourseTile>
      </Link>
   
    </Grid>


    <Grid item  xs={12} sm={6} md={4}>
      
      <Link to="./problem" className={classes.linkStyle} style={{textDecoration: "none"}}><CourseTile></CourseTile>
        </Link>
        
        
        
      </Grid>

      <Grid item  xs={12} sm={6} md={4}>
      
    <Link to="./problem" className={classes.linkStyle} style={{textDecoration: "none"}}><CourseTile></CourseTile>
      </Link>
      
      
      
    </Grid>
</Grid>
</Container>


        <Footer></Footer>

     
    </React.Fragment>
  );
}