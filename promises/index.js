

//question 1- exapmle for a callback functions

const function1=(name)=>{
    console.log("this is a call back function from "+name);
}//this is the calll back function 

const function2=(name,callBack)=>{//function 2 is a higher order function 
    console.log('my name is '+name);
    callBack(name);//called when the Higher order function is executed
}

function2("vishnu",function1);

//question 2-write a callback function to print 1 to 7 like 1 in 1sec and 2 in 2 sec

function numbers(){
    setTimeout(() => {
        console.log(1);
        setTimeout(() => {
            console.log(2);
            setTimeout(() => {
                console.log(3);
                setTimeout(() => {
                    console.log(4);
                    setTimeout(() => {
                        console.log(5);
                        setTimeout(() => {
                            console.log(6);
                            setTimeout(() => {
                                console.log(7);
                            }, 7000);
                        }, 6000);
                    }, 5000);
                }, 4000);
            }, 3000);
        },2000);
    }, 1000);
}
numbers();

//if we make use of chain of callback functions which are dependent on its previous callback functions ,can lead to a callback hell the structure of callback hell looks like arrow/pyramid structure it makes it hard to find errors

//question 3- use a promise function to print 1 to 7 like 1 in 1 sec , 2 in 2 sec

const printNumbers=()=>{
    return new Promise((resolve,reject)=>{
        resolve();
    })
}

printNumbers().then(()=>{
    setTimeout(() => {
        console.log(1);
    }, 1000);
}).then(()=>{
    setTimeout(() => {
        console.log(2);
    }, 2000)
}).then(()=>{
    setTimeout(() => {
        console.log(3);
    }, 3000)
}).then(()=>{
    setTimeout(() => {
        console.log(4);
    }, 4000)
}).then(()=>{
    setTimeout(() => {
        console.log(5);
    }, 5000)
}).then(()=>{
    setTimeout(() => {
        console.log(6);
    }, 6000)
}).then(()=>{
    setTimeout(() => {
        console.log(7);
    }, 7000)
})

//question-4- Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 

const func=(a)=>{
    return new Promise((resolve,reject)=>{
        a==="yes" ? resolve() : reject();
    }
    )
}

func("yes").then(()=>{
    console.log("promise is resolved");
}).catch(()=>{
    console.log("promise is rejected");
})

//question 5-example for callback

const function3=(name)=>{
    console.log("this is a call back function from "+name);
}//this is the calll back function 

const function4=(name,callBack)=>{//function 2 is a higher order function 
    console.log('my name is '+name);
    callBack(name);//called when the Higher order function is executed
}

function4("vishnu",function3);

//question 6- example for call back hell function

function numbers(){
    setTimeout(() => {
        console.log(1);
        setTimeout(() => {
            console.log(2);
            setTimeout(() => {
                console.log(3);
                setTimeout(() => {
                    console.log(4);
                    setTimeout(() => {
                        console.log(5);
                        setTimeout(() => {
                            console.log(6);
                            setTimeout(() => {
                                console.log(7);
                            }, 7000);
                        }, 6000);
                    }, 5000);
                }, 4000);
            }, 3000);
        },2000);
    }, 1000);
}
numbers();

//if we make use of chain of callback functions which are dependent on its previous callback functions ,can lead to a callback hell the structure of callback hell looks like arrow/pyramid structure it makes it hard to find errors

//question 7- example for promise function 

const printNumbers1=()=>{
    return new Promise((resolve,reject)=>{
        resolve();
    })
}

printNumbers1().then(()=>{
    console.log("resolved");
})

//question-8-example for async/await

//they are used to handle promises more efficiently

async function tryingPromises(){
    console.log("inside the function");
    const response =await fetch("https://api.github.com/users");
    console.log("Before response");
    const users = await response.json();
    console.log("users resolved");
    return users;

}

console.log("before calling the function");
let data = tryingPromises();
console.log("after calling the function");
console.log(data);
data.then((res)=>{
    console.log(res);
});
console.log("End of code");


//question 9- example for promise.all

let promise1= new Promise((resolve,reject)=>{
    resolve("promise1");
})

let promise2= new Promise((resolve,reject)=>{
    resolve("promise2");
})

let promise3= new Promise((resolve,reject)=>{
    resolve("promise3");
})

Promise.all([
    promise1,promise2,promise3
]).then(()=>{
    console.log(message);//it will print an array of message from each promises ["promise1","promise2","promise3"]
})