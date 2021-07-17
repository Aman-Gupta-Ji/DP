//Recursion
/*const fib = (n) =>{ // T.C. = O(2^n)  S.C. = O(n)
    if(n<=2) return 1;
    return fib(n-1)+fib(n-2);
}*/

//Memoization
/*const fib =(n,memo={})=> { // T.C. = O(n)   S.C. = O(n)
    if(n in memo) return memo[n];
    if(n<=2) return 1;
    memo[n]=fib(n-1,memo)+fib(n-2,memo);
    return memo[n];
}*/

//Tabulation
const fib = (n) => {    // T.C. = O(n)  S.C. = O(n)
    const table = Array(n+1).fill(0);
    table[1]=1;
    // for(let i=0 ;i<=n ;i++) {
    //     table[i+1]+=table[i];
    //     table[i+2]+=table[i];
    // }
    for(i=2;i<=n;i++)
        table[i]=table[i-1]+table[i-2];
    return table[n];
}

console.log(fib(6)); // 8
console.log(fib(10));// 55
console.log(fib(50));// 12586269025