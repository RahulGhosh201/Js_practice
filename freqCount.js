const freqCount=(phrase)=>
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

console.log(freqCount('haha'))