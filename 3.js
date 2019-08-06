/* 
===============
Number Triangle
===============
​
Instruction:
Buatlah sebuah proses untuk membuat deret angka yang membentuk segitiga seperti contoh berikut.
​
Contoh 1 (height = 5):
Output:
12345
2345
345
45
5
​
Contoh 2 (height = 3):
Output:
123
23
3
​
Contoh 3 (height = 1):
Output:
1
*/

var height = 5;
var count = 1;
var count2 = 1;
var count3 = 1;
var count4 = 1;

for (i = 1; i <= height; i++){
    print = '';
    for(j = i; j <= height; j++){
        print += j;
    }
    console.log(print);
}

while (count <= height){
    print = '';
    count2 = count;
    while (count2 <= height){
        print += count2;
        count2++;
    }
    count++;
    console.log(print);
}

while (count3 <= height){
    print = '';
    for(k = count3; k <= height; k++){
        print += k;
    }
    count3++;
    console.log(print);
}

for (i = 1; i <= height; i++){
    print = '';
    count4 = i;
    while (count4 <= height){
        print += count4;
        count4++;
    }
    console.log(print);
}