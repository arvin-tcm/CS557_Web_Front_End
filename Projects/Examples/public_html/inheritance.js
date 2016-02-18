/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function Person(name) {
    this.name = name;
    this.displayName = function() {
        console.log(this.name);
    };
}
function Student(name, id, gpa) {
    this.name = name;
    this.id = id;
    this.gpa = gpa;
    this.displayStudent = function() {
        console.log(this.name + this.id + this.gpa);
    };
}

Student.prototype = new Person();
Student.prototype.constructor = Student;







