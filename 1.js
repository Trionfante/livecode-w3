
/* 
==============
Bilangan Prima
==============
​
Bilangan prima merupakan bilangan yang hanya habis dibagi oleh angka 1 dan angka itu sendiri.
Buat algoritma DAN pseudocode untuk mengecek apakah sebuah angka merupakan angka prima atau bukan.
 */
​
    /* 
    Tulis algoritma di sini
    ​1. Inisiasi Input.
    2. Bagi Input dengan angka 1, simpan sisa hasil baginya.
    3. Bagi Input dengan dirinya, simpan sisa hasil baginya.
    4. Bila sisa hasil bagi dari Step 2 & Step 3 adalah 0, maka Input adalah bilangan prima.
    5. Bila sisa hasil bagi dari Step 2 & Step 3 adalah bukan 0, maka Input adalah bukan bilangan prima.

    Tulis pseudocode di sini
    STORE input
    IF input MOD input EQUALS 0 && input MOD 1 equals 0 THEN
        PRINT 'input is prime'
        ELSE THEN
        PRINT 'input is not prime'
    */




    /*
    Attempt #2

    1. Initiate num
    2. Initiate count with value 2
    3. If num mod by count equals to 0, then num is composite
    4. Else, while count is less than num, do:
    5. If num mod by count equals not 0, then mod num by count+1
        until count is equal to num minus by 1.
    6. If check at step 3 is never true, then num is prime.


    STORE num
    STORE count EQUALS 2

    WHILE count LESS-THAN num
    DO
        IF num MOD count EQUALS 0
            THEN PRINT 'is not a prime'
        END IF
        count = count + 1
    END WHILE

    PRINT is a prime
    */

    // function isPrime(num){
    //     if (num < 2){
    //         return false;
    //     }
    //     var count=2;
    //     while (count < num-1){
    //         if (num % count == 0){
    //             return false;
    //         }
    //         count++;
    //     }
    //     return true;
    // }

// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53,
// 59, 61, 67, 71, 73, 79, 83, 89, 97

    // function isPrime(num){
    //     if (num < 2){
    //         return false;
    //     }
    //     for (var i = 2; i < num-1; i++){
    //         if (num % i == 0){
    //             return false;
    //         }
    //     } 
    //     return true;
    // }

    // for (var i = 0; i <= 100; i++){
    //     if (isPrime(i) == true){
    //         console.log(i, 'is prime');
    //     } else {
    //         // console.log(i+' is composite');
    //     }
    // }