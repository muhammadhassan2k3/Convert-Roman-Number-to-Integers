let I = 1, V = 5, X = 10, L = 50,C = 100, D = 500, M = 1000;
let IV = 4, IX = 9, XL = 40, XC = 90, CD = 400, CM = 900;

let input = [] , sum = 0;
    
input = prompt("enter a number ");

for (let i = 0; i < input.length; i++) {

    if (input[i] === 'i' && input[i + 1] === 'v') {
        
        sum += IV;
        i++;
    } else if (input[i] === 'i' && input[i + 1] === 'x') {

        sum += IX;
        i++;
    } else if (input[i] === 'x' && input[i + 1] === 'l') {

        sum += XL;
        i++;
    } else if (input[i] === 'x' && input[i + 1] === 'c') {

        sum += XC;
        i++;
    } else if (input[i] === 'c' && input[i + 1] === 'd') {

        sum += CD;
        i++;
    } else if (input[i] === 'c' && input[i + 1] === 'm') {

        sum += CM;
        i++;
    } else if (input[i] === 'i') {

        sum += I;
    } else if (input[i] === 'v') {

        sum += V;
    }  else if (input[i] === 'x') {

        sum += X;
    } else if (input[i] === 'l') {

        sum += L;
    } else if (input[i] === 'c') {

        sum += C;
    } else if (input[i] === 'd') {

        sum += D;
    } else if (input[i] === 'm') {

        sum += M;
    }
}
console.log(sum);