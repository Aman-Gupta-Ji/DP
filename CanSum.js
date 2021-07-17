//m= target sum
//n= array length
//Recursion
/*const canSum =(targetsum, numbers) => { // T.C. = O(n^m)  S.C. = O(m)
    if(targetsum===0) return true;
    if(targetsum<0) return false;
    let remainder;
    for(let num of numbers) {
        //console.log(num);
        remainder=targetsum-num;
        if(canSum(remainder, numbers))
            return true;
    }
    return false;
}*/

//Memoization
/*const canSum =(targetsum, numbers, memo = {}) => { // T.C. = O(m*n) S.C. = O(m)
    if(targetsum in memo) return memo[targetsum];
    if(targetsum===0) return true;
    if(targetsum<0) return false;
    let remainder;
    for(let num of numbers) {
        //console.log(num);
        remainder=targetsum-num;
        if(canSum(remainder, numbers,memo)) {
            memo[targetsum]=true;
            return true;
        }
    }
    memo[targetsum]=false;
    return false;
}*/

//Tabulation
const canSum = (targetsum, numbers) => { // T.C. = O(m*n)   S.C. = O(m)
    const table = Array(targetsum+1).fill(false);
    table[0]=true;
    // console.log(table);
    /*for(i=0;i<=targetsum;i++) {
        for(let x of numbers)
            if(x+i<=targetsum) table[x+i]=table[i]||table[x+i];
    }*/
    for(let i=0;i<=table.length;i++) {
        if(table[i]=== true) {
            for(let num of numbers) {
                if(i+num<=targetsum)
                    table[i+num]=true;
            }
        }
    }
    return table[targetsum];
}


console.log(canSum(7,[2,3]));//true
console.log(canSum(7,[2,4]));//false
console.log(canSum(7,[2,5,3,7]));//true
console.log(canSum(8,[2,3,5]));//true
console.log(canSum(300,[7,14]));//false
