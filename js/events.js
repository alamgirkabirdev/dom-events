function makeRed(){
    document.body.style.backgroundColor='red';
}

// handle blue button click by setting function name
const blueButton= document.getElementById('make-blue-button');
// just set the name of the function
blueButton.onclick= makeBlue;
function makeBlue(){
 document.body.style.backgroundColor= 'blue';
}
// handle event annonymous function
const greenButton = document.getElementById('make-green-button');
greenButton.onclick= function(){
  document.body.style.backgroundColor= ('green');
}