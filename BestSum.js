//m= target sum
//n= array length
//Recursion
/*const bestSum =(targetsum, numbers) => { // T.C. = O(n^m*m)  S.C. = O(m^2)
    if(targetsum===0) return [];
    if(targetsum<0) return null;
    let remainder;
    let ret;
    let best=null;
    for(let num of numbers) {
        //console.log(num);
        remainder=targetsum-num;
        ret=bestSum(remainder, numbers)
        if(ret!=null) {
            ret=[...ret,num];
            // if the combination is shortest than the current best or not yet any then update
            if(best===null||ret.length<best.length)
                best=ret;
        }
    }
    return best;
}*/

//Memoization
/*const bestSum =(targetsum, numbers,memo = {}) => { // T.C. = O(n*m^2)  S.C. = O(m^2)
    if(targetsum in memo) return memo[targetsum];
    if(targetsum===0) return [];
    if(targetsum<0) return null;
    let remainder;
    let ret;
    let best=null;
    for(let num of numbers) {
        //console.log(num);
        remainder=targetsum-num;
        ret=bestSum(remainder, numbers,memo)
        if(ret!=null) {
            ret=[...ret,num];
            // if the combination is shortest than the current best or not yet any then update
            if(best===null||ret.length<best.length)
                best=ret;
        }
    }
    memo[targetsum]= best;
    return best;
}*/

//Tabulation
const bestSum =(targetsum,numbers) => { // T.C. = O(n*m^2)   S.C. = O(m^2)
    const table=Array(targetsum+1).fill(null);
    table[0]=[];
    for(let i=0;i<=table.length;i++) {
        if(table[i]!=null) {
            for(let num of numbers) {
                if(i+num<=targetsum&&table[i+num]===null) // table[i+num]===null is same as table[i+num].length>table[i].length+1
                        table[i+num]=[num, ...table[i]];
            }
        }
    }
    return table[targetsum];
}


console.log(bestSum(7,[2,3]));//[ 3, 2, 2 ]
console.log(bestSum(7,[2,4]));//null
console.log(bestSum(7,[2,5,3,7]));//[ 7 ]
console.log(bestSum(8,[3,2,5]));//[ 5, 3 ]
console.log(bestSum(300,[7,14,51,1]));//[ 1, 1, 1, 51, 51, 51, 51, 51, 14, 14, 14 ]
console.log(bestSum(300,[7,14,57]))//null