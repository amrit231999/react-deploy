import React, { useState }  from 'react';
import { Button, Typography } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';


const useStyles = makeStyles({
	answerStyles: {
		width: 400,
  		display: "flex",
 		 flexDirection: "column",
  		justifyContent: "space-between",
		  
		  
	},
	
	
  });



const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const classes = useStyles();

  const handleAnswerButtonClick = (isCorrect) => {
    if(isCorrect===true){
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion);
    }
    else{
      setShowScore(true);
    }

  }

  const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];
    
    
    return (
        <div className="app">

           {/* HINT: replace "false" with logic to display the
      score when the user has answered all the questions */}
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>


			) : (
				<>
					<div className='question-section'>
						<Typography variant="h6">
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</Typography>
						<Typography className='question-text'>{questions[currentQuestion].questionText}</Typography>
						<br></br>
					</div>
					<div className={classes.answerStyles}>
						{questions[currentQuestion].answerOptions.map((answerOptions) =>
            <Button variant="outlined" size="medium" color="black" fullWidth style={{marginBottom: "5%", color: "black"}} onClick={ () => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</Button>
			
			)}
					</div>
				</>
			)}


    </div>
    )
}

export default Quiz
