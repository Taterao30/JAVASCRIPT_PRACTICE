// Array Methods in JavaScript
// Single Class Example for QA Automation Engineers

class ArrayMethodsDemo {

    static run() {

        // ==========================================
        // 1. push()
        // Adds element at the END of array
        // ==========================================

        let arr1 = [10, 20, 30];
        arr1.push(40);
        console.log("push():", arr1);

        // Output:
        // [10,20,30,40]


        // ==========================================
        // 2. pop()
        // Removes LAST element from array
        // ==========================================

        let arr2 = [10, 20, 30];
        arr2.pop();
        console.log("pop():", arr2);

        // Output:
        // [10,20]


        // ==========================================
        // 3. unshift()
        // Adds element at BEGINNING
        // ==========================================

        let arr3 = [20, 30];
        arr3.unshift(10);
        console.log("unshift():", arr3);

        // Output:
        // [10,20,30]


        // ==========================================
        // 4. shift()
        // Removes FIRST element
        // ==========================================

        let arr4 = [10, 20, 30];
        arr4.shift();
        console.log("shift():", arr4);

        // Output:
        // [20,30]


        // ==========================================
        // 5. length
        // Returns total number of elements
        // ==========================================

        let arr5 = [10, 20, 30, 40];
        console.log("length:", arr5.length);

        // Output:
        // 4


        // ==========================================
        // 6. includes()
        // Checks whether value exists
        // Returns true or false
        // ==========================================

        let arr6 = [10, 20, 30];
        console.log("includes():", arr6.includes(20));

        // Output:
        // true


        // ==========================================
        // 7. indexOf()
        // Returns position of element
        // If not found returns -1
        // ==========================================

        let arr7 = [10, 20, 30];
        console.log("indexOf():", arr7.indexOf(20));

        // Output:
        // 1


        // ==========================================
        // 8. join()
        // Converts array into String
        // ==========================================

        let arr8 = ["Java", "Python", "JavaScript"];
        console.log("join():", arr8.join(","));

        // Output:
        // Java,Python,JavaScript


        // ==========================================
        // 9. reverse()
        // Reverses array elements
        // ==========================================

        let arr9 = [1, 2, 3, 4];
        arr9.reverse();
        console.log("reverse():", arr9);

        // Output:
        // [4,3,2,1]


        // ==========================================
        // 10. sort()
        // Sorts array
        // Use compare function for numbers
        // ==========================================

        let arr10 = [100, 20, 5, 50];

        arr10.sort((a, b) => a - b);

        console.log("sort ascending:", arr10);

        // Output:
        // [5,20,50,100]


        // ==========================================
        // 11. concat()
        // Combines multiple arrays
        // ==========================================

        let a = [1, 2];
        let b = [3, 4];

        let result1 = a.concat(b);

        console.log("concat():", result1);

        // Output:
        // [1,2,3,4]


        // ==========================================
        // 12. slice()
        // Returns selected portion
        // Original array unchanged
        // ==========================================

        let arr12 = [10, 20, 30, 40, 50];

        let result2 = arr12.slice(1, 4);

        console.log("slice():", result2);

        // Output:
        // [20,30,40]


        // ==========================================
        // 13. splice()
        // Used to Add/Remove elements
        // Original array modified
        // ==========================================

        let arr13 = [10, 20, 40];

        arr13.splice(2, 0, 30);

        console.log("splice():", arr13);

        // Output:
        // [10,20,30,40]


        // ==========================================
        // 14. forEach()
        // Iterates through every element
        // Does NOT return new array
        // ==========================================

        let arr14 = [10, 20, 30];

        arr14.forEach(num => {
            console.log("forEach():", num);
        });


        // ==========================================
        // 15. map()
        // Transforms every element
        // Returns NEW array
        // ==========================================

        let arr15 = [1, 2, 3];

        let result3 = arr15.map(num => num * 2);

        console.log("map():", result3);

        // Output:
        // [2,4,6]


        // ==========================================
        // 16. filter()
        // Returns matching records
        // Returns NEW array
        // ==========================================

        let arr16 = [10, 20, 30, 40, 50];

        let result4 = arr16.filter(num => num > 30);

        console.log("filter():", result4);

        // Output:
        // [40,50]


        // ==========================================
        // 17. find()
        // Returns FIRST matching element
        // ==========================================

        let arr17 = [10, 20, 30, 40];

        let result5 = arr17.find(num => num > 20);

        console.log("find():", result5);

        // Output:
        // 30


        // ==========================================
        // 18. some()
        // Checks if AT LEAST one element matches
        // Returns true/false
        // ==========================================

        let arr18 = [10, 20, 30];

        console.log(
            "some():",
            arr18.some(num => num > 25)
        );

        // Output:
        // true


        // ==========================================
        // 19. every()
        // Checks ALL elements satisfy condition
        // Returns true/false
        // ==========================================

        let arr19 = [10, 20, 30];

        console.log(
            "every():",
            arr19.every(num => num > 5)
        );

        // Output:
        // true


        // ==========================================
        // 20. reduce()
        // Converts array into single value
        // Mostly used for Sum
        // ==========================================

        let arr20 = [10, 20, 30];

        let total = arr20.reduce(
            (sum, num) => sum + num,
            0
        );

        console.log("reduce():", total);

        // Output:
        // 60


        // ==========================================
        // 21. Array.from()
        // Converts iterable into Array
        // ==========================================

        let str = "QA";

        let result6 = Array.from(str);

        console.log("Array.from():", result6);

        // Output:
        // ['Q','A']


        // ==========================================
        // 22. Array.isArray()
        // Checks variable is Array or not
        // ==========================================

        let arr22 = [1, 2, 3];

        console.log(
            "Array.isArray():",
            Array.isArray(arr22)
        );

        // Output:
        // true


        // ==========================================
        // 23. flat()
        // Converts nested array into single array
        // ==========================================

        let arr23 = [1, 2, [3, 4], [5, 6]];

        console.log(
            "flat():",
            arr23.flat()
        );

        // Output:
        // [1,2,3,4,5,6]


        // ==========================================
        // 24. flatMap()
        // map() + flat()
        // ==========================================

        let arr24 = [1, 2, 3];

        let result7 = arr24.flatMap(
            num => [num, num * 2]
        );

        console.log("flatMap():", result7);

        // Output:
        // [1,2,2,4,3,6]


        // ==========================================
        // QA AUTOMATION REAL-TIME EXAMPLE
        // ==========================================

        let response = {
            users: [
                { id: 1, name: "John", status: "Active" },
                { id: 2, name: "Mike", status: "Inactive" },
                { id: 3, name: "Sam", status: "Active" }
            ]
        };

        // Get all names using map()

        let names = response.users.map(
            user => user.name
        );

        console.log("User Names:", names);

        // Filter Active Users

        let activeUsers = response.users.filter(
            user => user.status === "Active"
        );

        console.log("Active Users:", activeUsers);

        // Find specific User

        let user = response.users.find(
            user => user.id === 2
        );

        console.log("Find User:", user);

        // Check any inactive user

        let hasInactiveUser = response.users.some(
            user => user.status === "Inactive"
        );

        console.log("Inactive User Present:", hasInactiveUser);

        // Check all users active

        let allActive = response.users.every(
            user => user.status === "Active"
        );

        console.log("All Users Active:", allActive);
    }
}

ArrayMethodsDemo.run();