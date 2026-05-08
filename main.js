// Variable Practice

// 1. Your name (string)
let myName = "daniel kamau";
console.log("My name is: " + myName);

// 2. Your age (number)
let myAge = 19;
console.log("My age is: " + myAge);

// 3. Whether you're a student (boolean)
let isStudent = true;
console.log("Am I a student? " + isStudent);

// 4. Your favorite colors (array)
let favoriteColors = ["pink", "purple", "black"];
console.log("My favorite colors are: " + favoriteColors);

// 5. Today's date (Date object)
let today = new Date(20-5-2026);
console.log("Today's date is: " + today);

// Basic math
let a = 10;
let b = 3;

console.log(a + b);   // Addition
console.log(a - b);   // Subtraction
console.log(a * b);   // Multiplication
console.log(a / b);   // Division
console.log(a % b);   // Modulus (remainder)
console.log(a ** b);  // Exponentiation

// Increment/Decrement
let count = 0;
count++;  // count is now 1
count--;  // count is now 0

let firstName = "Daniel";
let lastName = "Kamau";

// Concatenation
let fullName = firstName + " " + lastName;

// Template literals (preferred)
let greeting = `Hello, ${firstName}!`;
let message = `Your name has ${firstName.length} characters.`;

// String methods
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(firstName.charAt(0));
console.log(fullName.includes("Grace"));

// Comparison
console.log(5 > 3);    // true
console.log(5 < 3);    // false
console.log(5 === 5);  // true (strict equality)
console.log(5 == "5"); // true (loose equality - avoid!)
console.log(5 !== 3);  // true

// Logical
console.log(true && true);   // AND
console.log(true || false);  // OR
console.log(!true);          // NOT

let Age = 19;

// Age in days (approx, ignoring leap years)
let ageInDays = myAge * 365;
console.log("My age in days: " + ageInDays);

// Age in hours
let ageInHours = ageInDays * 24;
console.log("My age in hours: " + ageInHours);

// Year you'll turn 100
let currentYear = new Date().getFullYear();
let yearTurn100 = currentYear + (100 - myAge);
console.log("I will turn 100 in the year: " + yearTurn100);

// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

// Arrow function with body
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

// 1. Calculate area of rectangle
function calculateArea(width, height) {
    return width * height;
}
console.log("Area of rectangle: " + calculateArea(5, 10));

// 2. Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log("25°C in Fahrenheit: " + celsiusToFahrenheit(25));

// 3. Check if number is even
function isEven(number) {
    return number % 2 === 0;
}
console.log("Is 4 even? " + isEven(4));
console.log("Is 7 even? " + isEven(7));

// 4. Get initials from full name
function getInitials(GM) {
    let parts = fullName.split(" ");
    let initials = parts.map(part => part.charAt(0).toUpperCase()).join("");
    return initials;
}
console.log("Initials of daniel kamau: " + getInitials("daniel kamau"));

// 5. Reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log("Reverse of 'hello': " + reverseString("hello"));


function greet(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greet());             
console.log(greet("daniel"));       
console.log(greet("John", "Hi"));   


function calculateTip(bill, tipPercent = 15) {
    return bill * (tipPercent / 100);
}

console.log("Tip on $100 bill: $" + calculateTip(100));        // Default 15%
console.log("Tip on $100 bill at 20%: $" + calculateTip(100, 20));

function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log(getGrade(85)); // B
console.log(getGrade(55)); // F

function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        default: return "Invalid day";
    }
}

console.log(getDayName(3)); // Wednesday
console.log(getDayName(7)); // Invalid day

// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While loop
let number= 0;
while (count < 5) {
    console.log(count);
    count++;
}

// For...of loop (arrays)
const colors = ["red", "green", "blue"];
for (const color of colors) {
    console.log(color);
}

for (let i = 1; i <= 100; i++) {
  console.log(i);
}



for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

let rows = 5; 
for (let i = 1; i <= rows; i++) {
    console.log("*".repeat(i));
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}

function modulus(a, b) {
    return a % b;
}

function power(a, b) {
    return a ** b;
}

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        case "%":
            return modulus(num1, num2);
        case "**":
            return power(num1, num2);
        default:
            return "Invalid operator";
    }
}
console.log(calculate(10, "+", 5));   // 15
console.log(calculate(10, "-", 5));   // 5
console.log(calculate(10, "*", 5));   // 50
console.log(calculate(10, "/", 5));   // 2
console.log(calculate(10, "/", 0));   // Error: Cannot divide by zero
console.log(calculate(10, "%", 3));   // 1
console.log(calculate(2, "**", 4));   // 16

const doubled = numbers.map(num => num * 2);
console.log(doubled); // [4, -10, 16, 24, -6, 8]

const positives = numbers.filter(num => num >= 0);
console.log(positives); // [2, 8, 12, 4]

const firstGreaterThanTen = numbers.find(num => num > 10);
console.log(firstGreaterThanTen); // 12

const product = numbers.reduce((total, num) => total * num, 1);
console.log(product); // -5760

 // Creating objects
const person = {
    firstName: "daniel",
    lastName: "kamau",
    age: 19,
    isStudent: true,
    hobbies: ["driving", "footballing", "programming"],
    address: {
        city: "RUIRU",
        country: "Kenya"
    }
};

// Accessing properties
console.log(person.firstName);        
console.log(person["lastName"]);       
console.log(person.address.city);     

// Modifying properties
person.age = 31;
person.email = "dancunkama53@gmail.com";     
delete person.isStudent;    

const calculator = {
    add: function(a, b) {
        return a + b;
    },
    // Shorthand method syntax
    subtract(a, b) {
        return a - b;
    },
    // Arrow function
    multiply: (a, b) => a * b
};

console.log(calculator.add(5, 3));

const scores = {
    math: 95,
    english: 88,
    science: 92
};

// Get keys
console.log(Object.keys(scores));   // ["math", "english", "science"]

// Get values
console.log(Object.values(scores)); // [95, 88, 92]

// Get entries
console.log(Object.entries(scores)); // [["math", 95], ["english", 88], ...]

// Loop through
for (const [subject, score] of Object.entries(scores)) {
    console.log(`${subject}: ${score}`);
}

const students = [
    { name: "DAVE", age: 22, grade: 85, major: "CS" },
    { name: "SAM", age: 20, grade: 72, major: "Math" },
    { name: "KING", age: 23, grade: 90, major: "CS" },
    { name: "MWENDE", age: 21, grade: 88, major: "Physics" },
    { name: "EVA", age: 22, grade: 95, major: "CS" }
];

// 1. Get all student names
const names = students.map(student => student.name);

// 2. Get students with grade > 80
const highAchievers = students.filter(student => student.grade > 80);

// 3. Find the student named "Charlie"
const KING = students.find(student => student.name === "KING");

// 4. Calculate average grade
const avgGrade = students.reduce((total, student) => total + student.grade, 0) / students.length;

// 5. Get CS majors only
const csMajors = students.filter(student => student.major === "CS");

// 6. Sort by grade (highest first)
const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);

// 7. Check if any student has grade > 90
const hasTopStudent = students.some(student => student.grade > 90);

// 8. Check if all students are passing (grade >= 60)
const allPassing = students.every(student => student.grade >= 60);

const gradeTracker = {
    students: [],
    
    // Add a new student
    addStudent(name, grades) {
        this.students.push({ name, grades });
    },
    
    // Get a student by name
    getStudent(name) {
        return this.students.find(student => student.name === name) || null;
    },
    
    // Calculate a student's average
    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) return null;
        const grades = Object.values(student.grades);
        const sum = grades.reduce((total, g) => total + g, 0);
        return (sum / grades.length).toFixed(2);
    },
    
    // Get class average for a subject
    getSubjectAverage(subject) {
        const subjectGrades = this.students
            .map(student => student.grades[subject])
            .filter(grade => grade !== undefined);
        const sum = subjectGrades.reduce((total, g) => total + g, 0);
        return (sum / subjectGrades.length).toFixed(2);
    },
    
    // Get top performer
    getTopStudent() {
        let top = null;
        let highestAvg = 0;
        this.students.forEach(student => {
            const avg = parseFloat(this.getStudentAverage(student.name));
            if (avg > highestAvg) {
                highestAvg = avg;
                top = student;
            }
        });
        return top ? top.name : null;
    },
    
    // Get students needing help (average < 70)
    getStrugglingStudents() {
        return this.students.filter(student => 
            parseFloat(this.getStudentAverage(student.name)) < 70
        );
    },
    
    // Get letter grade
    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },
    
    // Generate report card
    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) return "Student not found.";
        const grades = student.grades;
        const avg = this.getStudentAverage(name);
        const letter = this.getLetterGrade(avg);
        
        let report = `Report Card for ${student.name}\n`;
        for (const subject in grades) {
            report += `${subject}: ${grades[subject]}\n`;
        }
        report += `Average: ${avg}\n`;
        report += `Letter Grade: ${letter}`;
        return report;
    }
};

// Test your implementation
gradeTracker.addStudent("DAVE", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("SAM ", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("KING", { math: 60, english: 65, science: 58 });

console.log(gradeTracker.getStudentAverage("DAVE"));      // 91.67
console.log(gradeTracker.getSubjectAverage("math"));       // 75.67
console.log(gradeTracker.getTopStudent());                 // DAVE
console.log(gradeTracker.getStrugglingStudents());         // [KING]
console.log(gradeTracker.generateReportCard("DAVE"));
