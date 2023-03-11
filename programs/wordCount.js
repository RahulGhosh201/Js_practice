const wordFrequency = (phrase) => {
	let frequency={}
	words=phrase.split(' ')
	for(const word of words)
	{
		console.log(word)
		if(word in frequency){
			frequency[word] +=1
		}
		else
		{
			frequency[word]=1
		}
	}
	console.log(words)
	return frequency
}
console.log(wordFrequency("yo yo honey singh"))
const userInput=prompt('Write your sentence')
console.log(wordFrequency(userInput))