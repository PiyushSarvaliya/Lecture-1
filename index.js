let data = process.argv

let opr = data[2];
let a = data[3]
let b = data[4];

switch (opr) {
    case "add":
        console.log(`sum of a & b = ${Number(a) + Number(b)}`)
        break;

    case "sub":
        console.log(`substraction of a & b = ${a - b}`)
        break;

    case "multiply":
        console.log(`multiplication of a & b = ${a * b}`)
        break;

    case "division":
        console.log(`division of a & b = ${a / b}`)
        break;

    case "module":
        console.log(`module of a & b = ${a % b}`)
        break;

    default:
        break;
}