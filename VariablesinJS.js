let age=25;
age=30;
console.log(age);

age = 35;

console.log(age);

/**
 * 
 * | Feature            | `var`          | `let`       | `const`     |
| ------------------ | -------------- | ----------- | ----------- |
| Can be reassigned? | ✅ Yes          | ✅ Yes       | ❌ No        |
| Can be redeclared? | ✅ Yes          | ❌ No        | ❌ No        |
| Scope              | Function Scope | Block Scope | Block Scope |
| Hoisted            | ✅ Yes          | ✅ Yes (TDZ) | ✅ Yes (TDZ) |
| Modern Usage       | ❌ Avoid        | ✅ Use       | ✅ Preferred |

 */