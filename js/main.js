

// var elForm = document.querySelector(".header__form")
// var elInputVal = document.querySelector(".header__input")
// var elSpanMan = document.querySelector("data__span__man")
// var elSpanBicycle = document.querySelector(".data__span__bicycle")
// var elSpanCar = document.querySelector(".data__span__car")
// var elSpanPlane = document.querySelector(".data__span__plane")







// elForm.addEventListener("submit",function(event){
//     event.preventDefault();

//     var elInputVal = elInput.value;

//     var elSpanMan = 3.6;
//     var elSpanBicycle = 20.1;
//     var elSpanCar = 70;
//     var elSpanPlane = 800;


//     elSpanMan.textContent = (elInputVal / elSpanMan);
//     // elSpan.textContent=(`${elInputVal} / ${elSpanMan}`)


//     elSpanMan.textContent =(elInputVal / elSpanMan);
//     elSpanBicycle.textContent = (elInputVal / elSpanBicycle);
//     elSpanCar.textContent = (elInputVal / elSpanCar);
//     elSpanPlane.textContent = (elInputVal / elSpanPlane);
//  });



var elForm = document.querySelector(".header__form")
var elInput = document.querySelector(".header__input")
var elSpan = document.querySelector(".data__span__man")
var elSpan2 = document.querySelector(".data__span__bicycle")
var elSpan3 = document.querySelector(".data__span__car")
var elSpan4 = document.querySelector(".data__span__plane")




elForm.addEventListener("submit", function(event){
  event.preventDefault();
  
  var elInputVal = elInput.value;
  var Span = 3.6;
  var Span2 = 20;
  var Span3 = 70;
  var Span4 = 800;
  
  elSpan.textContent = Math.floor(elInputVal / Span);
  elSpan2.textContent = Math.floor (elInputVal / Span2);
  elSpan3.textContent = Math.floor (elInputVal / Span3);
  elSpan4.textContent = Math.floor (elInputVal / Span4);
  
});


