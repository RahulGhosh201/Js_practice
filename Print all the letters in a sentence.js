const Letters=()=>
{
	const phrase="Rahul Ghosh"
	for(const letter of phrase)
	{
		console.log(letter)
	}
}

Letters()

//to determine how many letters are present in a word 
for(const letter in phrase)
{
	console.log(Numer(letter)+1)
}
// ......OR...... 
let result=0;
for(const index in phrase)
{
	result=Numebr(index)+1
}
// .....OR........
const howManyLetters=(phrase)=>
{
	return{result:phrase.length}
}
const phrase='I am Rahul Ghosh'
console.log(howManyLetters(phrase))