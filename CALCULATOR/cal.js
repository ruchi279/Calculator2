let display = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let buttonsArray = Array.from(buttons);
let string = '';

// buttonsArray.forEach(function(btn){

// console.log(btn);
// })
buttonsArray.forEach(btn => {
//       btn.addEventListener('click' , function(event){
//           console.log(event.target)
     btn.addEventListener('click' , (e) => {

        if(e.target.innerHTML == 'DEL'){
          string = string.substring(0, string.length-1);
             display.value = string
        }
        else if (e.target.innerHTML == 'AC'){
            string = '';
            display.value = string;
        }
         else if(e.target.innerHTML == '='){
            string = eval(string);
            // eval : convert the string into code.
            display.value = string;
         }
        else{
        string += e.target.innerHTML;
        display.value = string;
//           console.log(e.target.innerHTML);
        }
   });
});