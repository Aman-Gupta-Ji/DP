// m = target.length
// n = wordBank.length
//Recursion
/*const countConstruct =(target, wordBank) => { // T.C. = O(n^m*m^2)  S.C. = O(m^2)
    if(target==='') return 1;
    let suffix;
    let count=0;
    for(let word of wordBank) {
        if(target.indexOf(word)===0) {
            suffix=target.slice(word.length);
            count+=countConstruct(suffix,wordBank);
        }
    }
    return count;
}*/

//Memoization
/*const countConstruct =(target, wordBank, memo={}) => { // T.C. = O(n*m^2) S.C = O(m^2)
    if(target in memo) return memo[target];
    if(target==='') return 1;
    let suffix;
    let count=0;
    for(let word of wordBank) {
        if(target.indexOf(word)===0) {
            suffix=target.slice(word.length);
            count+=countConstruct(suffix,wordBank,memo);
        }
    }
    memo[target]=count;
    return count;
}*/

//Tabulation
const countConstruct =(target,wordBank) => { // T.C. = O(n*m^2) S.C. = O(m)
    const table=Array(target.length+1).fill(0);
    table[0]=1;
    for(i=0;i<=target.length;i++) {
        if(table[i]!=0) {
            for(word of wordBank) {
                if(target.slice(i,i+word.length)===word) { // target.slice(i).indexOf(word)===0
                    table[i+word.length]+=table[i];
                }
            }
        }
    }
    return table[target.length];
}

console.log(countConstruct("abcdef",["ab","abc","cd","def","abcd"])); // 1
console.log(countConstruct("skateboard",["bo","rd","ate","t","ska","sk","boar"])); // 0
console.log(countConstruct("enterapotentpot",["a","p","ent","enter","ot","o","t"])); // 4
console.log(countConstruct("purple",["purp","p","ur","le","purpl"])); // 2
console.log(countConstruct("amangupta",["am","ama","ta","gup","an","n","a"])); // 3
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeeee",
    "eeeeee",
    "eeeeeeee",
    "eeeeeeeeee"])); // 0
