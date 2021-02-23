import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Quiz from './Quiz';
import pc from './images/pc.jpg';
import CssBaseline from '@material-ui/core/CssBaseline';

import Container from '@material-ui/core/Container';

import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles({
  questionStyle: {
    maxWidth: 900,
    paddingLeft : 100,
    paddingRight: 100,
    paddingTop: 50,
    paddingBottom: 50
  },
  media: {
    height: 300,
  },
  imgStyle: {
    maxWidth: 540,
    maxHeight: 270,
    marginLeft: 150
  },
  
  
});

export default function QuestionCard() {
  const classes = useStyles();

  return (
    <Card className={classes.questionStyle}>
      
        <CardContent>
          
          
          <Typography gutterBottom variant="h5" component="h2">
            Question Name
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica. 
            Why do we use it?
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
          </Typography>
          <br></br>
          <Divider></Divider>
          <br></br>
          <img className={classes.imgStyle} src={pc}></img>
          
          <br></br>
          <br></br>
          <Divider></Divider>
          <br></br>

          <Quiz>

          </Quiz>
         
          
        
         

          


        </CardContent>
      
      
    </Card>
  );
}
