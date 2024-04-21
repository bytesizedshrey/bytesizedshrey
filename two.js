const sayShreyash = function(){
    console.log('Shreyash');
}

const changeText = function(){
    document.querySelector('h1').innerHTML = 'Code With Coffee'
}

const consolePrint = setTimeout(sayShreyash,2000)
setTimeout(changeText,4000)

document.querySelector('#stop').addEventListener('click',function(){
    clearTimeout(consolePrint)
    console.log("stopped")
})