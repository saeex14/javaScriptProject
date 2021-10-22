const dataQuiz = [{
    question: "When Btc is made ?",
    a: '2011',
    b:'2010',
    c: "2007",
    d:'2006',
    current:'b'
},{
    question: "when bill gaetst was born?",
    a: '1960',
    b:'1965',
    c: "1955",
    d:'1940',
    current:'c'
},{
    question: "what langueg of progarmming was made in 1995 ?",
    a: 'java ',
    b:'c++',
    c: "c",
    d:'javascript',
    current:'d'
},{
    question: "Who is made git ?",
    a: 'Linus Torvalds',
    b:'Bill Gates',
    c: "Stive Jabes",
    d:'Kevin Systrom ',
    current:'a'
}]

const qtn = document.getElementById('qtn');
const ans1 = document.getElementById('ans1');
const ans2 = document.getElementById('ans2');
const ans3 = document.getElementById('ans3');
const ans4 = document.getElementById('ans4');
const btn = document.getElementById('btn');

var currentQuestion = 0;
var rightAns = 0; 

function loadQuiz () {
  
      const questinEl = dataQuiz[currentQuestion];
      
      if ( currentQuestion <= dataQuiz.length - 1 ) {
          currentQuestion ++;

          //changing the text of button to undrestand the client that Quiz is finish
          if (currentQuestion == 4){
            
            btn.innerHTML = 'finish';
          
        }

      }else{
            return alert('Quiz is finished');
      }
      //set the quiz
      qtn.innerHTML = questinEl.question;
      ans1.innerHTML = questinEl.a;
      ans2.innerHTML = questinEl.b;
      ans3.innerHTML = questinEl.c;
      ans4.innerHTML = questinEl.d;
      
}
function selectAns () {
     const ans = document.querySelectorAll('question');
     
     ans.forEach((ans) => {

         console.log(ans.ariaChecked);
     
        })

}
btn.addEventListener('click', () =>{
    loadQuiz();
})
//Initional 
loadQuiz();