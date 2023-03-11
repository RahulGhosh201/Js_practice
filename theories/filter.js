// // const filter=(numbers,greaterThan)=>
// // {
// // 	let result=[]
// // 	for(i=0;i<numbers.length;i++)
// // 	{
// // 		if(numbers[i]>greaterThan)
// // 		{
// // 			result[i]=numbers[i]
// // 		}
// // 	}
// // 	return result
// // }
// // console.log(filter([1,2,3,4,5,6],3))

// const filter=(numbers,greaterThan)=>
// {
// 	let result=[]
// 	for(const number of numbers)
// 	{
// 		if(number>greaterThan)
// 		{
// 			result.push(number)
// 		}
// 	}
// 	return result
// }
// console.log(filter([1,2,3,4,5,6],3))
// const nums=[1,2,3,4,5,6]
// console.log(nums.filter(num=>num>3))
const actors=[
	{name: 'johny' , networth:10000},
	{name: 'amber' , networth:10},
	{name: 'leonardo' , networth:100000000}
]
console.log(actors.filter(actor=>actor.networth>10))