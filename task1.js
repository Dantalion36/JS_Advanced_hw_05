function CoffeMake() {

}
CoffeMake.prototype = {
    on: function(){
        return 'the maker is turned on'
    },
    off: function(){
        return 'the maker is turned off'
    }
}



function DripCoffeMaker(model){
    this.model = model;
}

DripCoffeMaker.prototype = Object.create(CoffeMake.prototype);
DripCoffeMaker.prototype.comstructor = DripCoffeMaker;

let dcm = new DripCoffeMaker('Philips HD7454/20');
console.log('This is the 1st task:');
console.log(dcm);
console.log('model:', dcm.model);



function PumpCoffeMaker(model, time){
    this.model = model;
    this.time = time;
}

PumpCoffeMaker.prototype = Object.create(CoffeMake.prototype);
DripCoffeMaker.prototype.comstructor = DripCoffeMaker;

let pcm = new PumpCoffeMaker('Ardesto YCM-E1600', '10 min');
console.log(pcm);
console.log('model:', pcm.model);
console.log('time:', pcm.time);



function CoffeMakerMachine(model, temp, water){
    this.model = model;
    this.temp = temp;
    this.water = water;
}

CoffeMakerMachine.prototype = Object.create(CoffeMake.prototype)
CoffeMakerMachine.prototype.currentWaterCapacity = function () {
    return `currently held: ${this.water} litre(s)`
}
CoffeMakerMachine.prototype.comstructor = CoffeMakerMachine;

let cmm = new CoffeMakerMachine('Saeco Royal Cappuccino', '67deg', 25);
console.log(cmm);
console.log('model:', cmm.model);
console.log('temprature:', cmm.temp);
console.log(cmm.currentWaterCapacity());