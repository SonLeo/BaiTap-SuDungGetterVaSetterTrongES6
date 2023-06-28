class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    walk() {
        console.log(`${this._name} is walking.`);
    }
}

class Programer extends Person {
    constructor(name, programmingLanguage) {
        super(name);
        this.programmingLanguage = programmingLanguage;
    }

    getProgrammingLanguage() {
        return this.programmingLanguage;
    }

    setProgrammingLanguage(newProgramingLanguage) {
        this.programmingLanguage = newProgramingLanguage;
    }

    writeCode() {
        console.log(`${this._name} is writing code in ${this.programmingLanguage}.`);
    }
}

// Khai báo các đối tượng thuộc lớp Programmer và gọi các hàm của lớp Person và Programmer
const person = new Person('Son Trinh');
console.log(person.name);
person.name = 'Sơn Trịnh';
console.log(person.name);
person.walk();

const programer = new Programer('Thai Son', 'JavaScript');
console.log(programer.name);
programer.name = 'Thái Sơn';
console.log(programer.name);
programer.walk();
programer.writeCode();