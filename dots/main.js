
document.querySelector(".btn").addEventListener("click", () => {
  //Your Code
  //Initional 
  var count = 0;
  var text = document.querySelector(".input").value;
  const resutl = document.querySelector(".result");
  
  //count number of point 
  for (let i = 0; i < text.length; i++) {
    if(!parseInt(getValueByKey(obj,text[i])))
        count += 0;
      else
      count  += parseInt(getValueByKey(obj,text[i]));
    }
  
    //show resutl 
  resutl.innerHTML = count;
});
//function for find value by key 
function getValueByKey(object, key) {
  var test = 'یب';
  if(key === test[0])
     return 2;
  for (var prop in object) {
      if (object.hasOwnProperty(prop)) {
          if (prop === key)
          return object[prop];
      }
  }
}