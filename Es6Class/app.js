class Car{
    constructor(door,model,colous){
        this.door=door;
        this.model=model;
        this.colous=colous;    

    }

    start()
    {
           return `My Car has ${this.door} doors, model is ${this.model} and my car colour is ${this.colous}`; 
    }

}

var ocar=new Car(4,'Maruti Belono','White');

console.log(ocar);

console.log(ocar.start());