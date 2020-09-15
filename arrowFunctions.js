
// 1
function fibunachi(number){
    ls = [1,1]
    if (number == 1){
        console.log(ls)
        return;
    }
    if (number == undefined){
        number = 10;
    }
    
    var sum = 0;
    var i = ls.length;
    
    var firstNumber = ls[i -1];
    var seconcdNumber = ls[i -2];

    sum = firstNumber + seconcdNumber
    while (sum <= number){
        ls.push(sum);
        i++;
        console.log(i)
        firstNumber = ls[i -1];
        seconcdNumber = ls[i -2];
        sum = firstNumber + seconcdNumber
    }
    console.log(ls)
    
}





// 2 
function getZogiList(arr){
    var ls = []
    arr.forEach((numberList) => {
        var newLsNumber = []
        numberList.forEach((number) => {
            if (number % 2 == 0){
                newLsNumber.push(number)
            }
        });
        if (newLsNumber.length > 0){
            ls.push(newLsNumber);
        }
        
    });
    return ls;
}



setInterval(fibunachi,1000,50000)
console.log("hey man-------------------------------")

var ff = getZogiList([[8,2,1],[3,2,1],[6,2,8]])
console.log(ff);