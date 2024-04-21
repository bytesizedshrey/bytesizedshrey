const sayDate = function(str){
    console.log(str,Date.now());
}


let intervalID;
// clearInterval(intervalID)


document.querySelector("#start").addEventListener('click',function(){
   console.log('started')
   intervalID = setInterval(sayDate, 3000, 'hello');
})

document.querySelector("#stop").addEventListener('click',function(){
    clearInterval(intervalID)
    console.log('stopped')
})


