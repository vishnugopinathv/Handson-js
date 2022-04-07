let str="abcadeecfb";
let a=str.split("");
let newMap = new Map();

for(let i=0;i<a.length;i++){
    let count=1;
    for(let j=i+1;j<a.length;j++){
        if(a[i]===a[j]){
            count++;
            a.splice(j,1);
            j--;
        }
    }
    newMap.set(a[i],count);
}
for(let [key,value] of newMap.entries()){
    console.log(key+"="+value);
}