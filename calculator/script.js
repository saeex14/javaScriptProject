
const inputShow = document.getElementById('show');
const inputHis = document.getElementById('history');
const equal = document.getElementById('equal');
const plus = document.getElementById('plus');
const Ac = document.getElementById('Ac');
const refresh = document.getElementById('refresh');
const mines = document.getElementById('mines');

var totalequal = 0;

function addNum (number) {

    if(inputShow.value == 0)
        inputShow.value = number;
       else
        inputShow.value += number;
}
mines.addEventListener('click', () =>{
    inputHis.value += inputShow.value + '-';
    totalequal -= parseInt(inputShow.value);
    inputShow.value = 0;
});
refresh.addEventListener('click', () =>{
     inputShow.value = 0;
     inputHis.value = "";
});
Ac.addEventListener('click', () =>{
    inputShow.value = 0;
});
plus.addEventListener('click', () => {

    inputHis.value += inputShow.value + '+';
    totalequal += parseInt(inputShow.value);
    inputShow.value = 0;
});

equal.addEventListener('click', () => {
    if(inputShow.value == 0)
       inputShow.value = totalequal;
    else{
    
        inputShow.value = totalequal;
    }
})
