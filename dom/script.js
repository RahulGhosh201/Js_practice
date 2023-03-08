console.log('Hello')
let message='GOODBYE to you all'
let title=document.getElementById('title')
console.log('before:',title.innerText)
title.innerText='GoodBye'
console.log('after:',title.innerText)
title.innerHTML=`${message}`
title.style.backgroundColor = 'red'