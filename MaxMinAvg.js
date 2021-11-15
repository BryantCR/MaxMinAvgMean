

arr = [1,-2,9,4]

function Max(arr){
    var max = arr[0];
    for(var i = 0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        
    }
    return max;
}

function Min(arr){
    var min = arr[0];
    for(var i = 0; i<arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
        
    }
    return min;
}
    

function Average(arr){
    var sum = 0;
    for(var i = 0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    avg = sum / arr.length;
    return avg;
}

function maxMinAverage(arr) {

    var result = Max(arr);
    console.log("Max: "+ result);
    var result2 = Min(arr);
    console.log("Min: "+ result2);
    var result3 = Average(arr);
    console.log("Average: "+ result3);
    return 'The minimum is ' + result2 + ', the maximum is ' + result + ', and the average is ' + result3;
}

maxMinAverage(arr)