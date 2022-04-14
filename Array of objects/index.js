let studentRecords=[
    {name:"john",id:123,marks:98},
    {name:"Baba",id:101,marks:23},
    {name:"yaga",id:200,marks:45},
    {name:"Wick",id:115,marks:75}
];

//question 1- retreving the names in capitals

let a=[
    studentRecords[0].name.toUpperCase(),
    studentRecords[1].name.toUpperCase(),
    studentRecords[2].name.toUpperCase(),
    studentRecords[3].name.toUpperCase()
];
console.log(a);//prints the array of names in caps\

//question-2-students details who scored more than 50

let b=[];

for(let i=0;i<studentRecords.length;i++){
    if(studentRecords[i].marks>50){
        b.push(studentRecords[i]);
    }
}
console.log(b);//prinnts the array of objects with marks greater than 50

//question-3-details of students with marks more than 50 and id greater than 120

let c=[];

for(let i=0;i<studentRecords.length;i++){
    if((studentRecords[i].marks>50)&&(studentRecords[i].id>120)){
        c.push(studentRecords[i]);
    }
}
console.log(c);//prints the student with mark>50,id>120

//question-4 - sum total of the marks of students

let d=[];
sum=0;
for(let i=0;i<studentRecords.length;i++){
    sum+=studentRecords[i].marks;
}
console.log(sum);//prints the sum of the marks of all students

//question-5- names of students who scored more than 50

let e=[];

for(let i=0;i<studentRecords.length;i++){
    if(studentRecords[i].marks>50){
        e.push(studentRecords[i].name);
    }
}

console.log(e);//prints the array with names of students who got marks >50

//question-6-sum of marks of students with id>120


let sum1=0;

for(let i=0;i<studentRecords.length;i++){
    if(studentRecords[i].id>120){
        sum1+=studentRecords[i].marks;
    }
}
console.log(sum1);//prints the sum of marks of students who have id>120

//question-7 - sum of marks of students who have marks>50 after giving 15 grace marks

let sum2=0;

for(let i=0;i<studentRecords.length;i++){
    if((studentRecords[i].marks<50)){
        studentRecords[i].marks+= 15;
    }
    if(studentRecords[i].marks>50){
        sum2+=studentRecords[i].marks;
    }
}
console.log(sum2);//prints the total marks of students who have marks>50 after giving 15 grace marks to those with marks<50

//question-8 create 6 objects and store as array of objects

function Student(name,Class,rollNo){
    this.name=name;
    this.Class=Class;
    this.rollNo=rollNo;
}

const student1= new Student("vishnu",10,15);
const student2= new Student("sachin",9,14);
const student3= new Student("sourav",11,16);
const student4= new Student("virat",12,17);
const student5= new Student("hardik",8,13);
const student6= new Student("krunal",9,14);

let arr=[];
arr.push(student1);
arr.push(student2);
arr.push(student3);
arr.push(student4);
arr.push(student5);
arr.push(student6);

console.log(arr);//prints the array of 6 created objects 




