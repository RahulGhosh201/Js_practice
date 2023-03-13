const promise1= new Promise((resolve,reject) => {
    setTimeout(()=>{
        isReady=[true,false][Math.floor(Math.random()*2)]
        isReady ? resolve('Soup is ready'):reject('No soup today')
    },2000)
})


const getDog = async () => {
    const url='https://dog.ceo/api/breeds/image/random'
    const response=await fetch(url)//await works same as of .then() OR .catch()
    const data=await response.json()
    console.log(data)
}

// getDog()

// const getSoup=async()=>{
//     try{
//         const soup=await promise1
//         console.log(soup)
//     }
//     catch(error){
//         console.log(error)
//     }
// }
// getSoup()


//RESOLVED - if waiter brings you soup, you tip the waiter & you pay for the soup
//REJECTED - if waiter does not bring you soup, you don't tip the waiter & leave a bad review
const getSoup=async()=>{
    const data={rating:0, tip:0, pay:0, review:0}
    try{
        const soup=await promise1
        console.log(soup)
        data.rating=5
        data.tip=.2
        data.pay=10
        return data
    }
    catch(error){
        console.log(error)
        data.rating=1
        data.tip=0
        data.pay=0
        data.review=1
        return data
    }
}
getSoup().then(value=>console.log(value))