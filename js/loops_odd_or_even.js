console.log("For Loop Starting")
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even")
    } else {
        console.log(i + " is odd")
    }
}

console.log("Do While Loop Starting")
let x = 0
do {
    let sum1 = 0;
    sum1 += Math.pow(x, 2);
    console.log("Sum for x " + x + " is " + sum1)
    x++;
} while (x <= 10)

console.log("While Loop Starting")
let y = 0;
while (y <= 10) {
    let sum2 = 0;
    sum2 += Math.pow(y, 2);
    console.log("Sum for x " + y + " is " + sum2)
    y++;
    if (y > 10) {
        break;
    }
}