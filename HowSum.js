//m= target sum
//n= array length
//Recursion
/*const howSum =(targetsum, numbers) => { // T.C. = O(n^m*m)  S.C. = O(m)
    if(targetsum===0) return [];
    if(targetsum<0) return null;
    let remainder;
    let ret;
    for(let num of numbers) {
        //console.log(num);
        remainder=targetsum-num;
        ret=howSum(remainder, numbers)
        if(ret!=null)
            return [...ret,num];
    }
    return null;
}*/

//Memoization
/*const howSum =(targetsum, numbers,memo = {}) => { // T.C. = O(n*m^2)  S.C. = O(m^2)
    if(targetsum in memo) return memo[targetsum];
    if(targetsum===0) return [];
    if(targetsum<0) return null;
    let remainder;
    let ret;
    for(let num of numbers) {
        //console.log(num);
        remainder=targetsum-num;
        ret=howSum(remainder, numbers,memo)
        if(ret!=null) {
            memo[targetsum]=[...ret,num];
            return memo[targetsum];
        }
    }
    memo[targetsum]= null;
    return null;
}*/

//Tabulation
const howSum = (targetsum, numbers) => { // T.C. = O(n*m^2)   S.C. = O(m^2)
    const table = Array(targetsum+1).fill(null);
    table[0]=[];
    // console.log(table);
    for(let i=0;i<=targetsum;i++) {
        if(table[i]!=null) {
            for(let num of numbers) {
                if(i+num<=targetsum)
                    table[i+num]=[num, ...table[i]];
            }
        }
    }
    return table[targetsum];
}



console.log(howSum(7,[2,3]));//[ 3, 2, 2 ]
console.log(howSum(7,[2,4]));//null
console.log(howSum(7,[2,5,3,7]));//[ 3, 2, 2 ]
console.log(howSum(8,[3,2,5]));//[ 2, 3, 3 ]
console.log(howSum(300,[7,14]));//null