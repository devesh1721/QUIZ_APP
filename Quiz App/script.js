var quizquestion=[
    {
        Question:"Who is prime minsiter of india?",
        a:"Narender Modi",
        b:"Rahul Gnadhi",
        c:"Soniya Gandhi",
        d:"Ram Nath Govind",
        Answer:"a"
    },
    {
        Question:"What is captial of india?",
        a:"Delhi",
        b:"Noida",
        c:"Daka",
        d:"Nepal",
        Answer:"a"
    },
    {
        Question:"Who is national animal of india?",
        a:"Tiger",
        b:"Lion",
        c:"Cow",
        d:"Camel",
        Answer:"a"
    },
    {
        Question:"Name the first man on moon?",
        a:"Kalplna chwala",
        b:"Neil Armstrong",
        c:"Arybatta",
        d:"Bill Gates",
        Answer:"b"
    },
    {
        Question:"What is smallest prime number",
        a:"1",
        b:"2",
        c:"3",
        d:"0",
        Answer:"b"
    },
    
]
let score=0;
let currentquiz=0;
const q=document.getElementById("quiz");
const questionel=document.getElementById("question");
const a_text=document.getElementById("a_text");
const b_text=document.getElementById("b_text");
const c_text=document.getElementById("c_text");
const d_text=document.getElementById("d_text");


loadquiz();
//Returning undefined and selcted element
function getselcted()
{

 var answersel=document.querySelectorAll(".answer");
 
 answersel.forEach((answerel)=>{
     if(answerel.checked)
     {
        return answerel.id;
     }
     return undefined;
 });

}

//loading new question
function loadquiz()
{   deselect();
    const currentquizdata=quizquestion[currentquiz]; 
    questionel.innerHTML=currentquizdata.Question;
    a_text.innerHTML=currentquizdata.a;
    b_text.innerHTML=currentquizdata.b;
    c_text.innerHTML=currentquizdata.c;
    d_text.innerHTML=currentquizdata.d;
}

//Deselecting the slected answer
function deselect()
{
  var answersel=document.querySelectorAll(".answer");
  let answer=undefined;
  answersel.forEach((answerel)=>{
     answerel.checked=false;
     })
}

//Checking answer and taking acc of the answer
button=document.getElementById("button");
button.addEventListener("click",()=>{
    //
    var answer=getselcted();
    currentquiz++
    if(answer)
    {
    if(answer==quizquestion[currentquiz].Answer)
        {
            score++;
        } 
    }  
    if(currentquiz<quizquestion.length)
    { 
        loadquiz();
    }
    else
    {
        q.innerHTML=`<h2>You answered correctly at ${score}/${quizquestion.length} question`
    }
    

});

