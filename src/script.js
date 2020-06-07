
var userName = prompt("what's your name");
var userLast = prompt("last name");
var age = prompt("age");
alert( userName + userLast + age);
console.log(userName + userLast + age);

//arrar
var friends = ["chalie","aksd","hbeq"];

function printReverse(arraylist){
    var i = arraylist.length - 1;
    var j = 0;
    var out = new Array();
    for(i;i>=0;i--){
        out[j] = arraylist[i];
        j++;

    }
    console.log(out);

}
function isUniform(arr){
    var a = arr[0];
    arr.forEach(function(element){
        if(element!=first){
            return false;
        }
    });
    return true;

}
function max(arr){
    var curmax = arr[0];
    arr.forEach(function(element){
        if(curmax <= arr[element]){
            curmax = arr[element];
        }

    });
    return curmax;

}