import React, { useState, useEffect }from 'react'
import { Button, Typography } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

const API_URL = 'https://opentdb.com/api.php?amount=10&category=14&difficulty=easy&type=multiple';

const useStyles = makeStyles({
	answerStyles: {
		width: 400,
  		display: "flex",
 		 flexDirection: "column",
  		justifyContent: "space-between",
		  
		  
	},
	
	
  });

const QuizApp = () => {
    
    const classes = useStyles();
    const [questions, setQuestions] = useState([]);

    useEffect (() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                setQuestions(data.results);
            });


    }, [])

    return (    

            
            
            <div>
                 
                <div>
                {questions[0].question}
            </div>

            <div>
                <Button variant="outlined" size="medium" color="black" fullWidth style={{marginBottom: "5%", color: "black"}}>{questions[0].correct_answer}</Button>
                <Button variant="outlined" size="medium" color="black" fullWidth style={{marginBottom: "5%", color: "black"}}>{questions[0].incorrect_answer[0]}</Button>
                <Button variant="outlined" size="medium" color="black" fullWidth style={{marginBottom: "5%", color: "black"}}>{questions[0].incorrect_answer[0]}</Button>
                <Button variant="outlined" size="medium" color="black" fullWidth style={{marginBottom: "5%", color: "black"}}>{questions[0].incorrect_answer[0]}</Button>
            </div>
            
            </div>

            





    );         
            
            
    
            
        
    
}

export default QuizApp
