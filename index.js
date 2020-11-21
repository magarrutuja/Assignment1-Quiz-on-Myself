var readlineSync = require('readline-sync');

  var score = 0;
var readName = readlineSync.question('Can I get your Name?');
console.log('Welcome '+readName+' lets see how well do you know Rutuja');

 function quiz (question, answer){
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log('You are right');
    score++;

  } else {
    console.log('You are wrong '+'the right answer is '+ answer);
    score--;

  }
  }

  var question = [ {
    question: "Who is my favourite Bollywood Actor?",
    answer: "Varun Dhawan",
  },{
    question: "Who is my Favorite Singer?",
    answer: "Arijit Singh",
  },{
    question: "What is my Favorite color?",
    answer: "Black",
  },{
    question: "What is my Age?",
    answer: "20",
  }, {
    question: "What is my favorite food?",
    answer: "Chicken Biryani",
  },{
    question: "What is my favorite street food?",
    answer: "Pani Puri",
  },
  ]

  for (var i= 0 ; i < question.length; i++ ){
  var currentQuestion = question[i];
  quiz(currentQuestion.question,currentQuestion.answer)
}

var scoreBoard=[{
  name:"Rutuja",
  score: "10"
},
{
  name:"Ritu k",
  score:"7"
}]

console.log('Your final score is ' + score)
console.log(scoreBoard)


