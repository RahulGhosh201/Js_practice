// function greeting(name)
// {
//     let greet=`hi ${name},Nice to meet you`
//     console.log(greet)
// }

// greeting('Rahul')
// function sum(a,b)
// {
//     return a+b
// }
// console.log(sum(1,2))
// num=sum(5,7)
// console.log(num)

// function calculateTotal(food,tip)
// {
//     tipPercentage=tip/100
//     tipAmount=food*tipPercentage
//     total=sum(food,tipAmount)
//     return total
// }
// x=calculateTotal(1000,5)
// console.log(`Total amount: ${x}`)


// const sumArray=(a,b)=>a+b
// console.log(sumArray(5,8))

// let groceries=['apple','pear','banana']

// groceries.push('guava')
// console.log(groceries)
// groceries.pop('guava')
// console.log(groceries)
// console.log(groceries.slice(1,2))


// const person={
// 	name:'Leonardo',
// 	shirt:'White'
// }
// console.log(person.name)  
//  console.log(person['name'])
// console.log(person.shirt)  
//  console.log(person['shirt'])
//  person.phone='123456'
//  console.log(person.phone)
//  console.log(person)

// const person2={
//     name:'rahul',
//     shirt:'black'
// }

// console.log(person2)

// const introducer=(name,shirt)=>
// {
//     const person={
//         name:name,
//         shirt:shirt
//     }
//     const intro=`Hi my name is ${person.name} & my shirt is ${person.nameshirt}`
//     return intro
// }

// console.log(introducer('rahul','black'))

// const introducer=(name,script)=>{
//     const person={
//         name:name,
//         shirt:shirt,
//         assists: 100000,
//         liabilities: 50000,
//         netWorth: function() {
//             return this.assets- this.liabilities
//         }
//         }

//     }

//     const intro=`Hi ${person.assists} netWorth: ${person.netWorth()}`
// return intro




// const person={
// 	name:'Leonardo',
// 	shirt:'White'
// }
// // console.log(person.name)
// const intro=`Hi my name is ${person.name}`
// return intro



// const fruits=['pear','banana','orange',];
// console.log(fruits[1]);
// for(let i=0;i<fruits.length;i++){
// 	console.log(fruits[i])
// }

// for(const fruit of fruits)
// {
//  console.log(fruit)
// }

// const numbers=[1,2,3,4,5,6,7,8]
// const ans=[]//initializing an empty array
// for(const num of numbers)
// {
// 	ans.push(num*2)
// }
// console.log(ans)

const double= (numbers) => {
    let result=[]
    for(const number of numbers)
    {
        result.push(number**2)
    }
    return result
}

// console.log(double([1,2,3,4,5,6]))

// const howMAnyLetters = () =>
// {
//     const phrase='Rahul ghosh'
//     for(const letters in phrase)
//     {
//         console.log(letters)
//     }
// }
// howMAnyLetters()

const howManyLetters=(phrase)=>
{
	return{result:phrase.length}
}
const phrase='I am Rahul Ghosh'
//console.log(howManyLetters(phrase))


// const sumArray=(num)=>
// {
//     let sum=0
//     for(const n of num)
//     {
//         sum=sum+n
//     }
//     return {sum}
// }
// let num=[10,20,3,04,50]
// console.log(sumArray(num))


const max=(num)=>
{
    let result=num[0]
    for(const n of num)
    {
        if(result<n)
        {
            result=n
        }

    }
    return {result}
}

let num=[10,20,3,04,50,1,5]
//console.log(max(num))



const freq=(phrase)=>
{
    let frequency={}
    for(const i of phrase)
    {
        if(i in frequency)
        {
            frequency[i]=frequency[i]+1
        }
        else
        {
            frequency[i]=1
        }
    }
    return frequency
}

console.log(freq('haha'))

