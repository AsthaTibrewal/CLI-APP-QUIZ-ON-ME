var readlineSync=require("readline-sync")
const chalk=require('chalk')
console.log(chalk.bold("---------welcome to our quiz-------"))
console.log(chalk.bgBlue("--HOW WELL DO YOU KNOW ME--"))
console.log(chalk.bold("can you answer this basic 5 questions about me"))
var userName=readlineSync.question(chalk.bold("enter your name"))


questions=[{
question:`What i will prefer more ?
A:Tea.
B:coffee.
C:chocolate.
`,
answer:"A"
},

{
question:`What is my favorite food? 
A:Idli
B:noodles
C:Paw Bhaji
`,
answer:"C"
},
{
question:`What i will enjoy doing more among these? 
A:Travelling
B:Watching Movies
C:Reading books`,
answer:"B"
},
{
question:`When is my birthday?
A:February
B:March.
C:July.
D:october`,
answer:"A"
},
{
question:`What is my favorite indoor game? 
A:Ludo.
B:Carrom.
C:Chess`,
answer:"A"
}
]
var score=0
function startQuiz(question,answer){

  var userAnswer=readlineSync.question(chalk.bold(question))
  if(userAnswer.toUpperCase()==answer)
  {
    console.log(chalk.green("correct answer"))
    console.log(chalk.green("your score is   "+  ++score))
  }
  else
  {
    console.log(chalk.red("oops wrong answer"))
    console.log(chalk.red("your score is "+score))
  }
  

}

for(var i=0;i<questions.length;i++)
{
startQuiz(questions[i].question,questions[i].answer)
}
console.log("your total score is---- "+score )
var participants=[
  {
name:"Astha",
totalScore:3
}
]
participants.push({name:userName,totalScore:score})
participants.sort(function(a,b){
  if(a.totalScore > b.totalScore)return -1;
if(a.totalScore < b.totlScore)return 1;
return 0;
});
if(userName==participants[0].name)
console.log(chalk.red("~~~~~congrats you have high score~~~~~~"))
for(var i=0;i<participants.length;i++)
{
  console.log(chalk.blue(participants[i].name +"->" + participants[i].totalScore))

}


