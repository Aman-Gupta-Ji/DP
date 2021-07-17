let count=0;

//Recursion
/*const gridTraveler =(n,m) => { // T.C. = O(2^(n+m))   S.C. = O(n+m)
    if(n===1||m===1) return 1;
    if(n===0||m===0) return 0;
    count++;
    return gridTraveler(n,m-1)+gridTraveler(n-1,m);
}*/

//Memoization
/*const gridTraveler =(n,m,memo={}) => { // T.C. = O(n*m)   S.C. = O(n+m)
    const key = n+','+m;
    if(key in memo) return memo[key];
    if(n===1||m===1) return 1;
    if(n===0||m===0) return 0;
    memo[key]= gridTraveler(n,m-1,memo)+gridTraveler(n-1,m,memo);
    count++;
    return memo[key];
}*/

//Memoization / enhanced
/*const gridTraveler =(n,m,memo={}) => { // T.C. = O(n*m) S.C. = O(n+m)
    const key = ((n>m)?n:m)+','+((n<m)?n:m);// as gridTraveler(n,m) = gridTraveler(m,n);
    if(key in memo) return memo[key];
    if(n===1||m===1) return 1;
    if(n===0||m===0) return 0;
    memo[key]= gridTraveler(n,m-1,memo)+gridTraveler(n-1,m,memo);
    count++;
    return memo[key];
}*/

//Tabulation
const gridTraveler = (n,m) => { // T.C. = O(n*m)    S.C. = O(n*m)
    const table = Array(n+1)
                    .fill()
                    .map(()=> Array(m+1).fill(0));
    table[1][1]=1;
    // console.log(table);
    for(i=1;i<=n;i++) {
        for(j=1;j<=m;j++) {
            if(i+1<=n) table[i+1][j]+=table[i][j];
            if(j+1<=m) table[i][j+1]+=table[i][j];
            // table[i][j]=table[i-1][j]+table[i][j-1];
        }
    }
    return table[n][m];
}

console.log(gridTraveler(2,3)) //3
console.log(gridTraveler(4,3)) //10
console.log(gridTraveler(5,5)) //70
console.log(gridTraveler(10,10)) //48620
console.log(gridTraveler(18,18)) //2333606220
// console.log(count);
