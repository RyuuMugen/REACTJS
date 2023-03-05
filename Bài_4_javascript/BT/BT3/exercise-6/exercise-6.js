function convertNumber(number) {
    let a = 0;
    let b, c = 1;
    while (number != 0) {
        b = number % 2;
        number = parseInt(number / 2);
        a = a + b * c;
        c = c * 10
    }
    console.log("Binary:", a);

}
convertNumber(47)