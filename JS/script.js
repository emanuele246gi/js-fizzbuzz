// Lista numeri
var i;

for(i = 1; i < 101; i ++){

    if (i % 3 == 0){

        document.getElementById("demo").innerHTML += i + ' ' + 'Fizz' + '</br>';

    }
    else if (i % 5 == 0){

        document.getElementById("demo").innerHTML += i + ' ' + 'Buzz' + '</br>';

    }
    else if (i % 3 == 0 && i % 5 == 0){

        document.getElementById("demo").innerHTML += i + ' ' + 'Fizz Buzz' + '</br>';

    }
    else {
        document.getElementById('demo').innerHTML += i + '</br>';
    }
    

}
