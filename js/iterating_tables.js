let number;
let multipliedNumber;
const array = [];
for (let i = 0; i < 10; i++) {
    number = i * 9;
    console.log("Multiplied " + i + " with 9 = " + number)
    for (let y = 0; y < 10; y++) {
        multipliedNumber = y * 9;
        array.push(multipliedNumber);

    }
}

console.log(array)


const array2 = [];
for (let z = 0; z < 100; z++) {
    let multipliedWith3 = z % 3 === 0;
    let multipliedWith5 = z % 5 === 0;
    if (multipliedWith3 && !multipliedWith5) {
        // console.log("Number " +z+ "is Multiplied with 3 Only")
        console.log("Fizz")
        array2.push("Fizz")
    } else if (!multipliedWith3 && multipliedWith5) {
        // console.log("Number " +z+ "is Multiplied with 5 Only")
        console.log("Buzz")
        array2.push("Buzz")
    }else if (multipliedWith3 && multipliedWith5) {
        // console.log("Number " +z+ "is Multiplied with both 3 and 5")
        console.log("FizzBuzz")
        array2.push("FizzBuzz")
    }
}
console.log(array2)

