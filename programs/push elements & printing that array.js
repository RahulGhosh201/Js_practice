const ans=[]//initializing an empty array
for(const num of numbers)
{
	ans.push(num)
}
for(const a of ans)
{
	console.log(a)
}

console.log(ans)

const double=(numbers)=>
{
	let result=[]
	for(const number of numbers){
		result.push(number*2)
	}
	return ans
}

consol.log(double(numbers[10,20,30,5,6]))