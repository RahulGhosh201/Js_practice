const nums=[1,2,3,4]
// const result=nums.reduce(function(prev,curr){
// 	return prev+curr
// })
const actors=[
	{name: 'johny' , networth:10000},
	{name: 'amber' , networth:10},
	{name: 'leonardo' , networth:100000000}
]
const result=actors.reduce((prev,curr)=>prev+curr.networth,0)
console.log(result)
const mul=(a,b)=>{
    return a*b
}
const res=nums.reduce(mul)
// console.log(res)