function isPrimeWhile(num){
    if (num < 2){
        return false;
    }
    var count=2;
    while (count < num-1){
        if (num % count == 0){
            return false;
        }
        count++;
    }
    return true;
}

// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53,
// 59, 61, 67, 71, 73, 79, 83, 89, 97

function isPrimeFor(num){
    if (num < 2){
        return false;
    }
    for (var i = 2; i < num-1; i++){
        if (num % i == 0){
            return false;
        }
    } 
    return true;
}

for (var i = 0; i <= 100; i++){
    if (isPrimeWhile(i) == true){
        console.log(i, 'is prime');
    } else {
        // console.log(i+' is composite');
    }
}

for (var i = 0; i <= 100; i++){
    if (isPrimeFor(i) == false){
        console.log(i, 'is composite');
    } else {
        // console.log(i+' is prime');
    }
}