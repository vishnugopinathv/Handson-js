let newMap = new Map();
const char_count=(str)=>{
    let a=str.split("");
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
}
char_count("abcsdedsffs");