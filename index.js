let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.counter-minus');
let counterPlusElem = document.querySelector('.counter-plus');

let count = 0;


counterPlusElem.addEventListener("click",function(){
    count++;
    updateDisplay();
}) ;

counterMinusElem.addEventListener("click",function(){
    count--;
    updateDisplay();
});

function updateDisplay(){
    counterDisplayElem.innerHTML = count;



          if (count < 0 ){
            counterDisplayElem.style.color = 'red'
          } else if (count > 0){
            counterDisplayElem.style.color = 'green'
          } else {
            counterDisplayElem.style.color = '#333333'
          }

};
