class Person { // ①
   firstName = ""; // ②
   age = ""; // ②    
   jobTitle = "";
constructor(firstName, age, jobTitle) { // ③
       this.firstName = firstName;
       this.age = age;
       this.jobTitle = jobTitle;
   }
   name() { // ④
       return `Hello there, my name is ${this.firstName} and I am ${this.age} years old, and I am a ${this.jobTitle}.`;
   }
}

let someBody = new Person("Mario", "28", "doctor");

/*Create a class based on the Person class and add some other properties like salary, 
jobLocation and a function that will call the function that is inside the Person class and add “and I get (salary)
 every month, and I work in (jobLocation)”*/

class Worker extends Person { // ①
   salary; // ②
   jobLocation;
   constructor(firstName, age, jobTitle, salary, jobLocation) {
       super(firstName, age, jobTitle); // ③
        this.salary = salary;
        this.jobLocation = jobLocation;
   };

   whoAreYou() { // ④
       return  `${super.name()} I get ${this.salary} every month, and I work in ${this.jobLocation}`; // ⑤
   }
}

let worker1 = new Worker("Mario", "28", "doctor", "2.000", "CodeFactory");
console.log(worker1.whoAreYou());
