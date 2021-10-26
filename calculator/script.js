const btn = document.getElementById('btn');
const inputShow = document.getElementById('show');
const inputHis = document.getElementById('history');
const equal = document.getElementById('equal');
const plus = document.getElementById('plus');
var totalequal = 0;
console.log(btn,inputShow,inputHis);

btn.addEventListener("click", () => {
    
    console.log('clicked');
    if ( inputShow.value == 0) {
         inputShow.value = "";
    }
    inputShow.value += 2;
    
    console.log('increas');
});

plus.addEventListener('click', () => {

    inputHis.value += inputShow.value + '+';
    totalequal += inputShow.value;
    inputShow.value = 0;
});
equal.addEventListener('click', () => {
    inputShow.value = totalequal;
})
