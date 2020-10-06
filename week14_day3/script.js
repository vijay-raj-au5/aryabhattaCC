// var i;
// let j ;
// console.log(i)
// console.log(j)

// if(i > j) {
//     console.log(i % 5)
// }

// else {
//     console.log(j % 5)
// }

function isPalindrome(str) {
    for(let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }

    return true;


}

console.log(isPalindrome('malayalam'))
console.log(isPalindrome('kayak1'))





