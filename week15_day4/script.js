function hammingDistance(string1,string2) {
    var count = 0;

    if( string1.length === string2.length ){
        for(var i = 0; i <= string1.length; i++){

            if(string1[i] !== string2[i]) {
                count++;
            }
        }

        return count;

    }
    else {
        return 'String length are not equal'
    }

}
// string =str1+str2 ='vijay' +'raj' ='vijayraj'
// number = num1+num2 = 10 + 20 =1020
// '10'+'20' = '1020' = 1020

 
// var string1 = '1'
// var num = 1 
// // but the value are same   
// if(string1 === num){
//     console.log(true)
// }  
// else{
//     console.log(false) 
// }            
// console.log(string1.length)
// console.log(hammingDistance('riber   ','rover ')) 

var array =[]
for(var i=1; i<=3;i++) {
    array.push(i)
}
console.log(array)
console.log(array.join(''));
console.log(array)