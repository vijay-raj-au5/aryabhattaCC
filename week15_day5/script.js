// Write a Javascript program that produces a star pattern likes this.
// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// * 

// var star = 5;
// var m,n;
// for (m=1; m < star; m++) {
//     for (n = 1; n <=m ; n++) {
//         document.write('*')
//     }
//     document.write('<br/>')
// }

// for (m=star; m >= 0; m--) {
//     for (n = 1; n <=m ; n++) {
//         document.write('*')
//     }
//     document.write('<br/>')
// }

var n = 5;
for (var i = 1; i < n; i++){
  console.log("*".repeat(i))
}
// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

for (var i=n; i>0; i--){
  console.log("*".repeat(i))
}






