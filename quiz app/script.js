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

var currentQuestion = 0;
function loadQuiz () {
      const questinEl = dataQuiz[currentQuestion];
      
      if ( currentQuestion <= dataQuiz.length - 1 ) {
          currentQuestion ++;
      }else{
          return alert('Quiz is finished');
      }

      qtn.innerHTML = questinEl.question;
      ans1.innerHTML = questinEl.a;
      ans2.innerHTML = questinEl.b;
      ans3.innerHTML = questinEl.c;
      ans4.innerHTML = questinEl.d;
      
      
}
loadQuiz();