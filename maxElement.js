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
console.log(max(num))
