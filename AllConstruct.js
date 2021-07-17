// m = target.length
// n = wordBank.length
//Recursion
/*const allConstruct =(target, wordBank) => { // T.C. = O(n^m)  S.C. = O(m)
    if(target==='') return [[]];
    let suffix;
    let all=[];
    let temp;
    for(let word of wordBank) {
        if(target.indexOf(word)===0) {
            suffix=target.slice(word.length);
            temp=allConstruct(suffix,wordBank);
            temp=temp.map(way => [word, ...way]);
            all.push(...temp);
        }
    }
    return all;
}*/

//Memoization
/*const allConstruct =(target, wordBank, memo={}) => { // T.C. = O(n^m) S.C = O(m)
    if(target in memo) return memo[target];
    if(target==='') return [[]];
    let suffix;
    let all=[];
    let temp;
    for(let word of wordBank) {
        if(target.indexOf(word)===0) {
            suffix=target.slice(word.length);
            temp=allConstruct(suffix,wordBank,memo);
            temp=temp.map(way => [word, ...way]);
            all.push(...temp);
        }
    }
    memo[target]=all;
    return all;
}*/

//Tabulation
const allConstruct =(target,wordBank) => {  // T.C. = O(n^m)    S.C. = O(n^m)
    const table= Array(target.length+1)
                .fill()
                .map(() => []);
    table[0]=[[]];
    // console.log(table);
    let temp;
    for(i=0;i<=target.length;i++) {
        if(table[i].length!=0) {
            for(word of wordBank) {
                temp=[];
                if(target.slice(i,i+word.length)===word) {
                    temp=table[i].map(way => [...way,word]);
                    table[i+word.length].push(...temp);
                }
            }
        }
    }
    return table[target.length];
}

console.log(allConstruct("abcdef",["ab","abc","cd","def","abcd","ef","c"]));
/*[ [ 'ab', 'cd', 'ef' ],
  [ 'ab', 'c', 'def' ],
  [ 'abc', 'def' ],
  [ 'abcd', 'ef' ] ]
*/
console.log(allConstruct("skateboard",["bo","rd","ate","t","ska","sk","boar"])); // []
console.log(allConstruct("enterapotentpot",["a","p","ent","enter","ot","o","t"]));
/*[ [ 'enter', 'a', 'p', 'ot', 'ent', 'p', 'ot' ],
  [ 'enter', 'a', 'p', 'ot', 'ent', 'p', 'o', 't' ],
  [ 'enter', 'a', 'p', 'o', 't', 'ent', 'p', 'ot' ],
  [ 'enter', 'a', 'p', 'o', 't', 'ent', 'p', 'o', 't' ] ]
*/
console.log(allConstruct("purple",["purp","p","ur","le","purpl"])); // [ [ 'purp', 'le' ], [ 'p', 'ur', 'p', 'le' ] ]
console.log(allConstruct("amangupta",["am","ama","ta","gup","an","n","a"]));
/*[ [ 'am', 'an', 'gup', 'ta' ],
  [ 'am', 'a', 'n', 'gup', 'ta' ],
  [ 'ama', 'n', 'gup', 'ta' ] ]
*/
console.log(allConstruct("eeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeeee",
    "eeeeee",
    "eeeeeeee",
    "eeeeeeeeee"])); // []