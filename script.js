// let pwd = 7777
// do {
//     pwd = +prompt("passoword")

// }while(pwd !== pwd)


// Задача-1
let pin;
let attempts = 0;
while (pin !== 666 && attempts < 3){
pin = +prompt("Enter the password");
attempts += 1;
}
if (pin !== 666) {
    alert("You have exceeded the number of attempts. Please try again later");
}


// Задача -2
let num = +prompt(" Write me any number.")
let i = 0;

while (i <= 9) {
    i++
    let res = number * i;
    console.log(`${number} * ${i} = ${res}`);

}


// Задача-2
let num1 
let num2 
let i = 0;

while (i <= 9) {
    num1 = prompt("Enter a number:")
    num2 = prompt("Enter a second number:")
    result = num1 * num2
    console.log(`${num1} * ${num2} = ${result}}`  );
    i++;
}



