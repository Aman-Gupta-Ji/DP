// m = target.length
// n = wordBank.length
//Recursion
/*const canConstruct =(target, wordBank) => { // T.C. = O(n^m*m^2)  S.C. = O(m^2)
    if(target==='') return true;
    let suffix;
    for(let word of wordBank) {
        if(target.indexOf(word)===0) {
            suffix=target.slice(word.length);
            if(canConstruct(suffix,wordBank))
                return true;
        }
    }
    return false;
}*/

//Memoization
/*const canConstruct =(target, wordBank, memo={}) => { // T.C. = O(n*m^2) S.C = O(m^2)
    if(target in memo) return memo[target];
    if(target==='') return true;
    let suffix;
    for(let word of wordBank) {
        if(target.indexOf(word)===0) {
            suffix=target.slice(word.length);
            if(canConstruct(suffix,wordBank,memo))
                return true;
        }
    }
    memo[target]=false;
    return false;
}*/

//Tabulation
const canConstruct =(target, wordBank) => { // T.C. = O(n*m^2)   S.C. = O(m)
    const table= Array(target.length+1).fill(false);
    table[0]=true;
    for(i=0;i<=target.length;i++) {
        if(table[i]) {
            for(word of wordBank)
                if(!table[i+word.length]&&target.slice(i,i+word.length)===word) // target.slice(i).indexOf(word)===0
                    table[i+word.length]=true;
        }
    }
    // console.log(target);
    // console.log(table);
    return table[target.length];
}

console.log(canConstruct("abcdef",["ab","abc","cd","def","abcd"])); // true
console.log(canConstruct("skateboard",["bo","rd","ate","t","ska","sk","boar"])); // false
console.log(canConstruct("enterapotentopt",["a","p","ent","enter","ot","o","t"])); // true
console.log(canConstruct("amangupta",["am","ama","ta","gup","an"])); // true
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeeee",
    "eeeeee",
    "eeeeeeee",
    "eeeeeeeeee"])); // false
