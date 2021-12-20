

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');


function changePhoto(){

    btn1.style.backgroundColor = "rgb(46, 89, 100)";
    btn1.addEventListener('click',()=>{
       document.getElementById('img').style.transform = 'translateX(0)';
       document.getElementById('img').style.transition = 'transform 0.4s ease';
    });
    btn2.addEventListener("click" ,() =>{
        btn1.style.backgroundColor = "";
        document.getElementById('img').style.transform = "translateX(63rem)";
        document.getElementById('img').style.transition = 'transform 0.4s ease';
    });

    btn3.addEventListener("click" ,() =>{
        btn1.style.backgroundColor = "";
        document.getElementById('img').style.transform = "translateX(126rem)";
        document.getElementById('img').style.transition = 'transform 0.4s ease';
    });

    btn4.addEventListener("click" ,() =>{
        btn1.style.backgroundColor = "";
        document.getElementById('img').style.transform = "translateX(189rem)";
        document.getElementById('img').style.transition = 'transform 0.4s ease';
    });

}
changePhoto();
