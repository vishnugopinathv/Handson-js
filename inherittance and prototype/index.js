//inherittance and prototypes
//use method of parent in child object 
let parent={
    name:"jack",
    bYear:1986,
    lname:"samuel",
    initialise:function(name,bYear){
        this.name=name;
        this.bYear=bYear;
    },
    calcAge:function(){
        console.log(`age of ${this.name} is ${2022-this.bYear}`);
    }
}

let child=Object.create(parent);
child.initialise("john",2004);
child.calcAge();//used method inside parent for child


//prototype chaining

//to explain prototype chaining iam creating a new object by using child object as prototype

let mother =Object.create(child);

//due to inherittance the object mother can access method of parent which is the prototype of child

mother.initialise("mary",1988);
mother.calcAge();

console.log(mother.__proto__);//here the prototype of mother is child
console.log(mother.__proto__.__proto__);//here it will print prototype of child which is parent
console.log(mother.__proto__.__proto__.__proto__);//here it prints prototype of parent which is object prototype
console.log(mother.__proto__.__proto__.__proto__.__proto__);//here it prints null 

//method to calculate multiple array's sum

let arr={
    sum:function(array){
        return array.reduce((acc,cur)=>acc+=cur,0);
    }
}
let array1=[1,2,3,4,5];
let array2=[6,7,8,9,10];
console.log(arr.sum(array1));
console.log(arr.sum(array2));

//function to retrieve all the names of object's own and inherrited properties


function PropName(){
    for(let key in mother){
        console.log(key);
    }
}
PropName();//by using for in we can names of all names of properties including inheritted





