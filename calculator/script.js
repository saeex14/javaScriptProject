
const inputShow = document.getElementById('show');
const inputHis = document.getElementById('history');
const equal = document.getElementById('equal');
const plus = document.getElementById('plus');
const Ac = document.getElementById('Ac');
const refresh = document.getElementById('refresh');
const mines = document.getElementById('mines');
const multi = document.getElementById('multi');
const divid = document.getElementById('divid');
const none = document.getElementById('none');
const pow = document.getElementById('pow');
const point = document.getElementById('point');

var totalequal = 0;
var per = 0;

function addNum (number) {

    if(inputShow.value == 0)
        inputShow.value = number;
       else
        inputShow.value += number;
}
point.addEventListener('click', () =>{
    if(inputShow.value == 0){
        inputHis.value = inputShow.value + '.';
    }
})
pow.addEventListener('click', () =>{
    per = inputShow.value;
    inputHis.value = inputShow.value + '^';
    if (totalequal == 0 )
        totalequal =  parseInt(inputShow.value);
    else
        totalequal = parseInt(inputShow.value);
    inputShow.value = 0;
})
none.addEventListener('click', () =>{ 
 // TODO:pow two number 
});
divid.addEventListener('click', () =>{
    inputHis.value = inputShow.value + '/';
    if (totalequal == 0 )
        totalequal =  parseInt(inputShow.value);
    else
        totalequal /= parseInt(inputShow.value);
    inputShow.value = 0;
});
multi.addEventListener('click', () =>{
    inputHis.value *= inputShow.value + '*';
    if (totalequal == 0 )
        totalequal =  parseInt(inputShow.value);
    else
        totalequal *= parseInt(inputShow.value);
    inputShow.value = 0;
});
mines.addEventListener('click', () =>{
    inputHis.value += inputShow.value + '-';
    if (totalequal == 0 )
        totalequal +=  parseInt(inputShow.value);
    else
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
