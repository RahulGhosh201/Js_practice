const sumArray=(num)=>
{
    let sum=0
    for(const n of num)
    {
        sum=sum+n
    }
    return {sum}
}
let num=[10,20,3,04,50]
console.log(sumArray(num))