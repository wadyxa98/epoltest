var arr1 = [];
var n = prompt(`Введите количество элементов первого массива`);
for (var i=0; i<n; i++){
    var k = prompt(`Введите ` + i +`-ый элемент первого массива`);
    arr1.push(k);
};
var q = prompt(`Введите количество элементов второго массива`);
var arr2 = [];
for (var j=0; j<q; j++){
    var m = prompt(`Введите ` + j +`-ый элемент второго массива`);
    arr2.push(m);
};
var arr3 = [];
for (var i=0; i<arr1.length; i++){
    if(arr2.indexOf(arr1[i]) == -1)
        arr3[i] = `0`   
    else 
        arr3[i] = `1`
};
alert(`Первый массив: ` + arr1 + `\r\nВторой массив: ` + arr2 + `\r\nСформированная строка: ` + arr3);