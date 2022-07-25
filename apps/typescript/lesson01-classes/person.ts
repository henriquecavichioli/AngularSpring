export class Person {

    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public showAge(age: number) {
        console.log(`${this.name} tem ${age} anos`);
    }

    public toString() {
        return `Class Person, name ${this.name}`;
    }

}