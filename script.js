class Person {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setName(newName) {
        this.name = newName;
    }

    walk() {
        console.log(`${this.name} is walking.`);
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
        console.log(`${this.name} is writing code in ${this.programmingLanguage}.`);
    }
}

// Khai báo các đối tượng thuộc lớp Programmer và gọi các hàm của lớp Person và Programmer
const person = new Person('Son Trinh');
console.log(person.getName());
console.log(person.setName('Sơn Trịnh'));
person.walk();

const programer = new Programer('Son', 'JavaScript');
console.log(programer.getName());
console.log(programer.setName('Son Trinh'));
programer.walk();
programer.writeCode();