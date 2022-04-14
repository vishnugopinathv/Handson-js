let newset= new Set();
const remove_duplicate=(str)=>{
    for(let i=0;i<str.length;i++){
        newset.add(str[i]);
    }
    let str2="";
    for(let val of newset.values()){
        str2+=val;
    }
    console.log(str2);
}
remove_duplicate("aabbcdfeeds");