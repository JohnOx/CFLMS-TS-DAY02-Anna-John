class Person {
    constructor(firstName, age, jobTitle) {
        this.firstName = "";
        this.age = "";
        this.jobTitle = "";
        this.firstName = firstName;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    name() {
        return `Hello there, my name is ${this.firstName} and I am ${this.age} years old, and I am a ${this.jobTitle}.`;
    }
}
let someBody = new Person("Mario", "28", "doctor");
class Worker extends Person {
    constructor(firstName, age, jobTitle, salary, jobLocation) {
        super(firstName, age, jobTitle);
        this.salary = salary;
        this.jobLocation = jobLocation;
    }
    ;
    whoAreYou() {
        return `${super.name()} I get ${this.salary} every month, and I work in ${this.jobLocation}`;
    }
}
let worker1 = new Worker("Mario", "28", "doctor", "2.000", "CodeFactory");
console.log(worker1.whoAreYou());
