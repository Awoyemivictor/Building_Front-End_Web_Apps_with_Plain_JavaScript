let a = [1, 2, 3];
let b = [21, 22, 23];
a.push(...b)

// for (let i = 0; i < a.length; i++) {
//     console.log(i);
// }

// console.log(a.splice(i, 1))

// var myTranslation = {
//     "my house": "mein Haus",
//     "my boat": "mein Boot",
//     "my horse": "mein Pferd"
// }

var myTranslation = new Map([
    ["my house", "mein Haus"],
    ["my boat", "mein Boot"],
    ["my horse", "mein Pferd"]
])

for (const [key,value] of myTranslation) {
    // console.log(`The translation of ${key} is ${value}`);
}

// processing both keys and values
for (const [key, value] of myTranslation) {
    // console.log(`The translation of ${key} is ${value}`);
}

// processing only keys
for (const key of myTranslation.keys()) {
    // console.log(`The translation of ${key} is ${myTranslation.get(key)}`);
}

// processing only values
for (const value of myTranslation.values()) {
    // console.log(value);
}

myTranslation["my car"] = "mein Auto";
// Adding a new entry to a proper map
myTranslation.set("new car", "uinu")
// console.log(myTranslation)

// For deleting an entry from a traditional map
myTranslation.delete("my boat");
console.log(myTranslation)

// For cloning a traditional map m
var clone = JSON.parse(JSON.stringify(m));

p