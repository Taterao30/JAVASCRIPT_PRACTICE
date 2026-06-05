class Calculator {
    add(a, b, c) {
        if (c !== undefined) {
            return a + b + c;
        }
        return a + b;
    }
}

let obj = new Calculator();

console.log(obj.add(10, 20));      // 30
console.log(obj.add(10, 20, 30));  // 60