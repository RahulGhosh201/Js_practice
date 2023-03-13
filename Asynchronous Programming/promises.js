//it's going to wait 2000ms and thenn print soup in console
const waitingForSoup=()=>console.log('soup')
console.log('Ordered soup')
setTimeout(waitingForSoup,2000)
console.log('still speaking')

const promise1= new Promise((resolve,reject) => {
    setTimeout(()=>{
        isReady=[true,false][Math.floor(Math.random()*2)]
        isReady ? resolve('Soup is ready'):reject('No soup today')
    },2000)
})
//resolve works when thw condition matches
//reject works when the condition does not match

// isReady ? console.log('Soup is ready'):console.log('No soup today')
// ...........OR............
// if(isReady)
// {
//     'Soup is ready'
// }else{
//     'No soup today'
// }
// console.log(promise1)
console.log(
    promise1
    .then(value=>console.log(value))
    .catch(value=>console.log(value))
    )
//.then() => when the promise resolves then we can call .then() to get the promise's resolve value
//.catch() when the promise rejects then we can call .catch() to get the promise's reject value
