#! /usr/bin/env node
class Person {
    name;
    age;
    constructor(personName, personAge) {
        this.name = personName;
        this.age = personAge;
    }
    getName() {
    }
}
class Student extends Person {
    rollNumber;
    courses = [];
    constructor(name, age, rollNum) {
        super(name, age);
        this.rollNumber = rollNum;
    }
    registerForCourses(course) {
        this.courses.push(course.name);
    }
    getListOfCourses() {
        console.log(this.name + " Courses: ");
        this.courses.forEach(element => {
            console.log(element);
        });
    }
}
class Instructor extends Person {
    salary;
    courses = [];
    constructor(name, age, income) {
        super(name, age);
        this.salary = income;
    }
    assignCourse(course) {
        this.courses.push(course.name);
    }
}
class Course {
    id;
    name;
    students = [];
    instructors = [];
    static allCourses = [];
    constructor(id, name) {
        this.id = id;
        this.name = name;
        Course.allCourses.push(name);
    }
    addStudent(std) {
        this.students.push(std);
    }
    setInstructor(inst) {
        this.instructors.push(inst);
    }
    getListOfStudents() {
        console.log(this.name + "Students Names: ");
        this.students.forEach(element => {
            console.log(element.name);
        });
    }
    getListOfInstructors() {
        console.log(this.name + " Instructor Name: ");
        this.instructors.forEach(element => {
            console.log(element.name);
        });
    }
    static displayAllCourses() {
        console.log("\nAvailable Courses: ");
        Course.allCourses.forEach(element => {
            console.log(element);
        });
    }
}
let c1 = new Course(1, "Software Engineering");
let c2 = new Course(2, "Civil Engineering");
let c3 = new Course(3, "Mechanical Engineering");
let c4 = new Course(4, "Electrical Engineering");
let c5 = new Course(5, "Automobile Engineering");
let std1 = new Student("Eshal Noman", 22, "E111");
let std2 = new Student("Haider Daniyal", 21, "E112");
let std3 = new Student("Sumaira Nadeem", 23, "E113");
let std4 = new Student("Abdul Samad", 21, "E114");
let std5 = new Student("Shaheer Yameen", 22, "E115");
let std6 = new Student("Manahel Khan", 23, "E116");
let std7 = new Student("Shan Gul", 24, "E117");
let std8 = new Student("Rameen Ali", 19, "E118");
let std9 = new Student("Shahzaib Afzal", 22, "E119");
let std10 = new Student("Abubakar Siddiq", 20, "E120");
c1.addStudent(std1);
std1.registerForCourses(c1);
std1.getListOfCourses();
c1.addStudent(std2);
std2.registerForCourses(c1);
std2.getListOfCourses();
c2.addStudent(std3);
std3.registerForCourses(c2);
std3.getListOfCourses();
c2.addStudent(std4);
std4.registerForCourses(c2);
std4.getListOfCourses();
c3.addStudent(std5);
std5.registerForCourses(c3);
std5.getListOfCourses();
c3.addStudent(std6);
std6.registerForCourses(c3);
std6.getListOfCourses();
c4.addStudent(std7);
std7.registerForCourses(c4);
std7.getListOfCourses();
c4.addStudent(std8);
std8.registerForCourses(c4);
std8.getListOfCourses();
c5.addStudent(std9);
std9.registerForCourses(c5);
std9.getListOfCourses();
c5.addStudent(std10);
std10.registerForCourses(c5);
std10.getListOfCourses();
Course.displayAllCourses();
let inst1 = new Instructor("Ali Abbas", 30, 80000);
let inst2 = new Instructor("Kamran Ahmed", 40, 120000);
let inst3 = new Instructor("Shadab Ali", 28, 90000);
let inst4 = new Instructor("Anas Aqeel", 32, 100000);
let inst5 = new Instructor("Tabinda Yousuf", 30, 70000);
c1.setInstructor(inst1);
inst1.assignCourse(c1);
c2.setInstructor(inst2);
inst2.assignCourse(c2);
c3.setInstructor(inst3);
inst3.assignCourse(c3);
c4.setInstructor(inst4);
inst4.assignCourse(c4);
c5.setInstructor(inst5);
inst5.assignCourse(c5);
c1.getListOfStudents();
c2.getListOfStudents();
c3.getListOfStudents();
c4.getListOfStudents();
c5.getListOfStudents();
c1.getListOfInstructors();
c2.getListOfInstructors();
c3.getListOfInstructors();
c4.getListOfInstructors();
c5.getListOfInstructors();
class Department {
    name;
    courses = [];
    static allDepartments = [];
    constructor(name) {
        this.name = name;
        Department.allDepartments.push(this.name);
    }
    addCourse(course) {
        this.courses.push(course.name);
    }
    getCourses() {
        this.courses.forEach(element => {
            console.log(element);
        });
    }
    static displayAllDepartments() {
        console.log("\nAll Departments: ");
        Department.allDepartments.forEach(element => {
            console.log(element);
        });
    }
}
let d1 = new Department("SE");
let d2 = new Department("CE");
let d3 = new Department("ME");
let d4 = new Department("EE");
let d5 = new Department("AE");
Department.displayAllDepartments();
d1.addCourse(c1);
d2.addCourse(c2);
d3.addCourse(c3);
d4.addCourse(c4);
d5.addCourse(c5);
export {};
