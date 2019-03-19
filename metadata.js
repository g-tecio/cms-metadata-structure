class Person {
    constructor(object) {
        this.attributes = JSON.parse(object);
    }
}
var example = JSON.stringify({
    name: "Marco",
    age: 23
});

console.log(example.toString());

var person1 = new Person(JSON.parse(example.toString()));

console.log(person);