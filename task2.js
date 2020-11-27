class Worker {
    constructor(firstName, secondName, rate, days){
        this.firstName = firstName;
        this.secondName = secondName;
        this.rate = rate;
        this.days = days;
    }
    getSalary(){
        return this.rate * this.days;
    }
}

const worker1 = new Worker('Sora', 'Tokino', 50, 1176);
console.log('This is the 2dn task:');
console.log('name:', worker1.firstName);
console.log('surname:', worker1.secondName);
console.log('rate:', worker1.rate);
console.log('days', worker1.days);
console.log('Salary:', worker1.getSalary());

const worker2 = new Worker('Aki', 'Rosenthal', 40, 903)
console.log('name:', worker2.firstName);
console.log('surname:', worker2.secondName);
console.log('rate:', worker2.rate);
console.log('days', worker2.days);
console.log('Salary:', worker2.getSalary());

console.log('Salary sum:', worker1.getSalary() + worker2.getSalary()); 