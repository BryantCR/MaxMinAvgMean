
function basicOPerations(arr){


    var max = arr[0];
    var sum = 0;
    var min = arr[0];

    for(var i = 0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        return max;
    }

    for(var i = 0; i<arr.length; i++){
        if(arr[i] < min){
            max = arr[i];
        }
        return min;
    }

    for(var i = 0; i<arr.length; i++){
        sum = sum + arr[i]
    }
    return sum / arr.length;

    console.log();

}
arr = [1,-2,9,4]
basicOPerations(arr);
