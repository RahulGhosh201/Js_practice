console.log('Hello')
let message='GOODBYE to you all'
let title=document.getElementById('title')
console.log('before:',title.innerText)
title.innerText='GoodBye'
console.log('after:',title.innerText)
title.innerHTML=`${message}`
title.style.backgroundColor = 'red'
document.addEventListener('keydown', function(e){
    if(e.key=='q'){
        console.log("yor pressed Q")
        document.getElementById('punch').play()//in this case if we press Q then it will play the audio file
    }
    else{
        console.log("not Q")
    }
})